import type { BookingFormData } from "./bookingSchema";
import { BOOKING_STEPS } from "./bookingSteps";

type BookingField = keyof BookingFormData;

type BookingStepFields = Partial<
    Record<number, BookingField | BookingField[]>
>;

export const bookingStepFields: BookingStepFields = {
    [BOOKING_STEPS.NAME]: "fullName",
    [BOOKING_STEPS.EMAIL]: "email",
    [BOOKING_STEPS.ADDRESS]: ["address", "postalCode"],
    [BOOKING_STEPS.DATE]: "date",
    [BOOKING_STEPS.TIME]: "time",
    [BOOKING_STEPS.CLEANING_TYPE]: "cleaningType",
    [BOOKING_STEPS.CLEANING_OPTION]: "cleaningOption",
    [BOOKING_STEPS.ADD_ONS]: "addOns",
};