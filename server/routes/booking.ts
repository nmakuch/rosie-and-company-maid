import { Router } from "express";
import { Resend } from "resend";

type BookingRequest = {
    fullName: string;
    email: string;
    address: string;
    postalCode: string;
    date: string;
    time: string;
    cleaningType: "hourly" | "package";
    cleaningOption: string;
    addOns?: string[];
};

const router = Router();

const resendApiKey = process.env.RESEND_API_KEY;
const businessEmail = process.env.BUSINESS_EMAIL;
const fromEmail = process.env.RESEND_FROM_EMAIL;

if (!resendApiKey) {
    throw new Error("RESEND_API_KEY is missing.");
}

if (!businessEmail) {
    throw new Error("BUSINESS_EMAIL is missing.");
}

if (!fromEmail) {
    throw new Error("RESEND_FROM_EMAIL is missing.");
}

const resend = new Resend(resendApiKey);

router.post("/", async (request, response) => {
    const booking = request.body as Partial<BookingRequest>;

    const {
        fullName,
        email,
        address,
        postalCode,
        date,
        time,
        cleaningType,
        cleaningOption,
    } = booking;

    const addOns = Array.isArray(booking.addOns)
        ? booking.addOns
        : [];

    if (
        !fullName ||
        !email ||
        !address ||
        !postalCode ||
        !date ||
        !time ||
        !cleaningType ||
        !cleaningOption
    ) {
        return response.status(400).json({
            success: false,
            message: "Required booking information is missing.",
        });
    }

    try {
        const customerEmail = await resend.emails.send({
            from: fromEmail,
            to: [email],
            subject: "We received your Rosie & Company booking request",
            html: `
                <h1>Thanks for your booking request, ${fullName}!</h1>

                <p>
                    We received your cleaning request and will contact
                    you shortly to confirm availability.
                </p>

                <h2>Booking details</h2>

                <p><strong>Date:</strong> ${date}</p>
                <p><strong>Time:</strong> ${time}</p>
                <p>
                    <strong>Address:</strong>
                    ${address}, ${postalCode}
                </p>
                <p>
                    <strong>Cleaning option:</strong>
                    ${cleaningOption}
                </p>
                <p>
                    <strong>Add-ons:</strong>
                    ${addOns.length > 0 ? addOns.join(", ") : "None"}
                </p>
            `,
        });

        if (customerEmail.error) {
            console.error(
                "Customer email error:",
                customerEmail.error
            );

            return response.status(502).json({
                success: false,
                message: "The customer email could not be sent.",
            });
        }

        const businessNotification = await resend.emails.send({
            from: fromEmail,
            to: [businessEmail],
            replyTo: email,
            subject: `New booking request from ${fullName}`,
            html: `
                <h1>New booking request</h1>

                <h2>Customer</h2>

                <p><strong>Name:</strong> ${fullName}</p>
                <p><strong>Email:</strong> ${email}</p>

                <h2>Address</h2>

                <p>${address}</p>
                <p>${postalCode}</p>

                <h2>Appointment</h2>

                <p><strong>Date:</strong> ${date}</p>
                <p><strong>Time:</strong> ${time}</p>

                <h2>Service</h2>

                <p>
                    <strong>Plan type:</strong>
                    ${cleaningType}
                </p>
                <p>
                    <strong>Cleaning option:</strong>
                    ${cleaningOption}
                </p>
                <p>
                    <strong>Add-ons:</strong>
                    ${addOns.length > 0 ? addOns.join(", ") : "None"}
                </p>
            `,
        });

        if (businessNotification.error) {
            console.error(
                "Business email error:",
                businessNotification.error
            );

            return response.status(502).json({
                success: false,
                message: "The business notification could not be sent.",
            });
        }

        return response.status(200).json({
            success: true,
            message: "Booking submitted successfully.",
        });
    } catch (error) {
        console.error("Booking submission error:", error);

        return response.status(500).json({
            success: false,
            message: "Unable to submit the booking.",
        });
    }
});

export default router;