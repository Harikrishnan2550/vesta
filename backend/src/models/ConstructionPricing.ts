import mongoose, { Document, Schema } from 'mongoose';

export interface IConstructionPricing extends Document {
  key: string;
  budgetRate: string;
  standardRate: string;
  premiumRate: string;
  unit: string;
  createdAt: Date;
  updatedAt: Date;
}

const ConstructionPricingSchema: Schema = new Schema(
  {
    key: {
      type: String,
      required: true,
      unique: true,
      default: 'construction_packages',
    },
    budgetRate: {
      type: String,
      required: true,
      default: '₹1,999',
    },
    standardRate: {
      type: String,
      required: true,
      default: '₹2,199',
    },
    premiumRate: {
      type: String,
      required: true,
      default: '₹2,499',
    },
    unit: {
      type: String,
      default: '/ SQFT',
    },
  },
  {
    timestamps: true,
  }
);

export const ConstructionPricingModel = mongoose.model<IConstructionPricing>(
  'ConstructionPricing',
  ConstructionPricingSchema
);
