import { Request, Response } from 'express';

export const handleContactInquiry = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, phone, division, message } = req.body;

    if (!name || !message) {
      res.status(400).json({
        success: false,
        message: 'Name and message are required fields.',
      });
      return;
    }

    // Log the inquiry
    console.log('📩 [New Inquiry Received]:', {
      timestamp: new Date().toISOString(),
      name,
      email,
      phone,
      division: division || 'General Group Inquiry',
      message,
    });

    res.status(200).json({
      success: true,
      message: 'Thank you for reaching out to Vesta Future. Your inquiry has been received.',
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to process contact inquiry.',
    });
  }
};
