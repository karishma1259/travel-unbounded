export const HOTEL_CATEGORIES = ["Standard", "Deluxe", "Luxury"];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Basic phone check: 7-15 digits, optional spaces/dashes.
const PHONE_REGEX = /^[0-9]{7,15}$/;

/**
 * Validates an enquiry payload.
 * Returns an object: { valid: boolean, errors: { field: message } }
 */
export function validateEnquiry(data) {
  const errors = {};

  if (!data.fullName || !data.fullName.trim()) {
    errors.fullName = "Full name is required.";
  }

  if (!data.countryCode || !data.countryCode.trim()) {
    errors.countryCode = "Country code is required.";
  }

  const digitsOnly = (data.contactNumber || "").replace(/[\s-]/g, "");
  if (!digitsOnly) {
    errors.contactNumber = "Contact number is required.";
  } else if (!PHONE_REGEX.test(digitsOnly)) {
    errors.contactNumber = "Enter a valid contact number.";
  }

  if (!data.email || !data.email.trim()) {
    errors.email = "Email is required.";
  } else if (!EMAIL_REGEX.test(data.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!data.dateOfTravel) {
    errors.dateOfTravel = "Date of travel is required.";
  } else {
    const travelDate = new Date(data.dateOfTravel);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (Number.isNaN(travelDate.getTime())) {
      errors.dateOfTravel = "Enter a valid date.";
    } else if (travelDate < today) {
      errors.dateOfTravel = "Date of travel must be in the future.";
    }
  }

  const numberOfPeople = Number(data.numberOfPeople);
  if (!data.numberOfPeople || Number.isNaN(numberOfPeople)) {
    errors.numberOfPeople = "Number of people is required.";
  } else if (numberOfPeople < 1) {
    errors.numberOfPeople = "At least 1 person is required.";
  }

  if (!data.hotelCategory || !HOTEL_CATEGORIES.includes(data.hotelCategory)) {
    errors.hotelCategory = "Select a valid hotel category.";
  }

  const numberOfChildren =
    data.numberOfChildren === "" || data.numberOfChildren === undefined
      ? 0
      : Number(data.numberOfChildren);
  if (Number.isNaN(numberOfChildren) || numberOfChildren < 0) {
    errors.numberOfChildren = "Number of children cannot be negative.";
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
