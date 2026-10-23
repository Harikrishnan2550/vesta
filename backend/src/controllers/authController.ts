import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { StoreService } from '../services/storeService';
import { AuthenticatedRequest } from '../middleware/authMiddleware';

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({
        success: false,
        message: 'Email and password are required.',
      });
      return;
    }

    const admin = await StoreService.findAdminByEmail(email);

    if (!admin) {
      res.status(401).json({
        success: false,
        message: 'Invalid email or password credentials.',
      });
      return;
    }

    const isMatch = await bcrypt.compare(password, admin.passwordHash);

    if (!isMatch) {
      res.status(401).json({
        success: false,
        message: 'Invalid email or password credentials.',
      });
      return;
    }

    // Update last login
    const adminId = (admin as any)._id?.toString() || (admin as any).id;
    await StoreService.updateAdminLastLogin(adminId);

    const jwtSecret = process.env.JWT_SECRET || 'vesta_future_super_secure_jwt_secret_key_2026';
    const token = jwt.sign(
      {
        id: adminId,
        email: admin.email,
        name: admin.name,
        role: admin.role,
      },
      jwtSecret,
      { expiresIn: '7d' }
    );

    res.status(200).json({
      success: true,
      message: 'Login successful.',
      token,
      admin: {
        id: adminId,
        email: admin.email,
        name: admin.name,
        role: admin.role,
      },
    });
  } catch (error: any) {
    console.error('Login error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error during login.',
    });
  }
};

export const getMe = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    if (!req.user) {
      res.status(401).json({ success: false, message: 'Unauthorized' });
      return;
    }

    const admin = await StoreService.findAdminByEmail(req.user.email);
    if (!admin) {
      res.status(404).json({ success: false, message: 'Admin user not found.' });
      return;
    }

    res.status(200).json({
      success: true,
      admin: {
        id: (admin as any)._id || (admin as any).id,
        email: admin.email,
        name: admin.name,
        role: admin.role,
        lastLogin: admin.lastLogin,
      },
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: 'Server error retrieving admin.' });
  }
};
