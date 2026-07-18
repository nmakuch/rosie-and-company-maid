import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
    request: VercelRequest,
    response: VercelResponse
) {
    if (request.method !== "POST") {
        return response.status(405).json({
            message: "Method not allowed",
        });
    }

    try {
        const booking = request.body;

        await resend.emails.send({
            from: "Rosie & Company <bookings@yourdomain.com>",
            to: booking.email,
            subject: "Your cleaning appointment request",
            html: `
                <h1>Booking request received</h1>
                <p>Hi ${booking.fullName},</p>
                <p>We received your cleaning appointment request.</p>
            `,
        });

        return response.status(200).json({
            message: "Booking submitted successfully",
        });
    } catch (error) {
        console.error(error);

        return response.status(500).json({
            message: "Unable to submit booking",
        });
    }
}