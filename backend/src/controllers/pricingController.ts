import { Request, Response } from 'express';
import { StoreService } from '../services/storeService';

const formatRateValue = (val: any): string | undefined => {
  if (val === undefined || val === null) return undefined;
  let str = String(val).trim();
  if (!str) return undefined;

  // If user entered only numbers e.g. 1999 or 2199
  const cleanNumber = str.replace(/[^\d]/g, '');
  if (cleanNumber && !str.includes('₹') && !str.includes('Rs')) {
    // Format with Indian comma convention: e.g. 1,999
    const num = parseInt(cleanNumber, 10);
    return `₹${num.toLocaleString('en-IN')}`;
  }

  // If user included ₹ but plain number e.g. ₹1999
  if (str.startsWith('₹') && cleanNumber) {
    const num = parseInt(cleanNumber, 10);
    return `₹${num.toLocaleString('en-IN')}`;
  }

  return str;
};

// Public GET /api/pricing
export const getConstructionPricing = async (req: Request, res: Response): Promise<void> => {
  try {
    const pricing = await StoreService.getConstructionPricing();
    res.status(200).json({
      success: true,
      data: pricing,
    });
  } catch (error: any) {
    console.error('Error fetching construction pricing:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch construction pricing.',
    });
  }
};

// Protected PUT /api/pricing (Admin Only)
export const updateConstructionPricing = async (req: Request, res: Response): Promise<void> => {
  try {
    const { budgetRate, standardRate, premiumRate, unit } = req.body;

    const updates: any = {};
    if (budgetRate !== undefined) updates.budgetRate = formatRateValue(budgetRate);
    if (standardRate !== undefined) updates.standardRate = formatRateValue(standardRate);
    if (premiumRate !== undefined) updates.premiumRate = formatRateValue(premiumRate);
    if (unit !== undefined && unit.trim()) updates.unit = unit.trim();

    if (Object.keys(updates).length === 0) {
      res.status(400).json({
        success: false,
        message: 'No valid pricing fields provided to update.',
      });
      return;
    }

    const updated = await StoreService.updateConstructionPricing(updates);

    res.status(200).json({
      success: true,
      message: 'Construction package rates updated successfully.',
      data: updated,
    });
  } catch (error: any) {
    console.error('Error updating construction pricing:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update construction pricing.',
    });
  }
};
