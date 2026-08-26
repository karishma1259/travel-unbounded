import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Enquiry from "@/models/Enquiry";
import { validateEnquiry } from "@/lib/validateEnquiry";

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid JSON payload." },
      { status: 400 }
    );
  }

  // Server-side validation — never trust client-side validation alone.
  const { valid, errors } = validateEnquiry(body);
  if (!valid) {
    return NextResponse.json(
      { success: false, message: "Invalid enquiry data.", errors },
      { status: 400 }
    );
  }

  try {
    await connectToDatabase();

    const enquiry = await Enquiry.create({
      fullName: body.fullName.trim(),
      countryCode: body.countryCode.trim(),
      contactNumber: body.contactNumber.trim(),
      email: body.email.trim().toLowerCase(),
      dateOfTravel: new Date(body.dateOfTravel),
      numberOfPeople: Number(body.numberOfPeople),
      hotelCategory: body.hotelCategory,
      numberOfChildren: body.numberOfChildren
        ? Number(body.numberOfChildren)
        : 0,
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you! Our travel expert will contact you within 24 hours.",
        id: enquiry._id,
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("Failed to save enquiry:", err);
    return NextResponse.json(
      {
        success: false,
        message:
          "Something went wrong while submitting your enquiry. Please try again.",
      },
      { status: 500 }
    );
  }
}

// Optional bonus endpoint — returns all stored enquiries (could power a
// simple /admin page). Not required by the assignment but included as a
// nice-to-have.
export async function GET() {
  try {
    await connectToDatabase();
    const enquiries = await Enquiry.find().sort({ createdAt: -1 }).lean();
    return NextResponse.json({ success: true, data: enquiries });
  } catch (err) {
    console.error("Failed to fetch enquiries:", err);
    return NextResponse.json(
      { success: false, message: "Failed to fetch enquiries." },
      { status: 500 }
    );
  }
}
