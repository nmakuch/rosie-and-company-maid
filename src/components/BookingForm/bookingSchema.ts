import { z } from "zod";

export const timeValues = [
    "8:00am - 10:00am",
    "10:00am - 12:00pm",
    "12:00pm - 2:00pm",
    "2:00pm - 4:00pm",
] as const;

export const bookingSchema = z.object({
    fullName: z.string().min(1, "A name is required"),
    email: z.string().email("Enter a valid email address"),
    address: z.string().min(1, "Address is required"),
    postalCode: z.string().min(6, "Enter a valid postal code"),
    date: z.string().min(1, "Enter a valid date"),
    time: z.enum(timeValues, {
        error: "Select your preferred time",
    }),
    cleaningType: z.enum(["hourly", "package"], {
        error: "Select a cleaning type",
    }),
    cleaningOption: z.string().min(1, "Select a cleaning option"),
    addOns: z.array(z.string()).default([])
});

export type BookingFormData = z.input<typeof bookingSchema>;