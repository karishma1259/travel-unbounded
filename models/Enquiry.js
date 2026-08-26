import mongoose from "mongoose";

const EnquirySchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    countryCode: {
      type: String,
      required: true,
      trim: true,
    },
    contactNumber: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    dateOfTravel: {
      type: Date,
      required: true,
    },
    numberOfPeople: {
      type: Number,
      required: true,
      min: 1,
    },
    hotelCategory: {
      type: String,
      required: true,
      enum: ["Standard", "Deluxe", "Luxury"],
    },
    numberOfChildren: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  {
    timestamps: { createdAt: "createdAt", updatedAt: false },
  }
);

export default mongoose.models.Enquiry ||
  mongoose.model("Enquiry", EnquirySchema);
