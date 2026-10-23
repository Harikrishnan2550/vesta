import mongoose, { Document, Schema } from 'mongoose';

export interface IAdminUser extends Document {
  email: string;
  passwordHash: string;
  name: string;
  role: string;
  lastLogin?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const AdminUserSchema: Schema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    passwordHash: { type: String, required: true },
    name: { type: String, default: 'Vesta Administrator' },
    role: { type: String, default: 'admin' },
    lastLogin: { type: Date },
  },
  {
    timestamps: true,
  }
);

export const AdminUserModel = mongoose.model<IAdminUser>(
  'AdminUser',
  AdminUserSchema
);
