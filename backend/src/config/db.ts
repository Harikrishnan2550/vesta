import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectDB = async (): Promise<boolean> => {
  const uri = process.env.MONGODB_URI;

  if (!uri || uri.trim() === '' || uri.includes('<username>')) {
    console.warn(
      '⚠️ [Database] MONGODB_URI not set or contains placeholders. Operating with dynamic in-memory store for seamless local testing.'
    );
    return false;
  }

  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log(`✅ [Database] MongoDB Atlas Connected: ${conn.connection.host}`);
    return true;
  } catch (error: any) {
    console.warn(
      `⚠️ [Database] MongoDB Atlas connection failed (${error.message}). Falling back to local in-memory store.`
    );
    return false;
  }
};
