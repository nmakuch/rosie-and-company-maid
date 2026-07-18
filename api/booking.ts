import type {
    VercelRequest,
    VercelResponse,
} from "@vercel/node";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
    request: VercelRequest,
    response: VercelResponse
) {
    if (request.method !== "POST") {
        return response.status(405).json({
            message: "Method not allowed.",
        });
    }

    try {
        const booking = request.body;

        const addOnsHtml =
            booking.addOns?.length > 0
                ? `
            <ul>
                ${booking.addOns
                    .map(
                        (addOn: string) =>
                            `<li>${addOn}</li>`
                    )
                    .join("")}
            </ul>
        `
                : "<p>None selected</p>";

        const { data, error } = await resend.emails.send({
            from: "Rosie & Company <onboarding@resend.dev>",
            to: "makuch.nick@gmail.com",
            subject: "New cleaning request",
            html: `
        <h1>Booking request received</h1>

        <p><b>Name:</b> ${booking.fullName}</p>
        <p><b>Email:</b> ${booking.email}</p>
        <p><b>Address:</b> ${booking.address}</p>
        <p><b>Postal code:</b> ${booking.postalCode}</p>
        <p><b>Date:</b> ${booking.date}</p>
        <p><b>Time:</b> ${booking.time}</p>
        <p><b>Cleaning type:</b> ${booking.cleaningType}</p>
        <p><b>Cleaning option:</b> ${booking.cleaningOption}</p>

        <p><b>Add-ons:</b></p>
        ${addOnsHtml}

        <p><b>Subtotal:</b> $${booking.subtotal.toFixed(2)}</p>
        <p><b>Tax:</b> $${booking.tax.toFixed(2)}</p>
        <p><b>Total:</b> $${booking.totalPrice.toFixed(2)}</p>
    `,
        });

        if (error) {
            console.error("Resend error:", error);

            return response.status(500).json({
                message: error.message,
            });
        }

        return response.status(200).json({
            message: "Booking submitted successfully.",
            emailId: data?.id,
        });
    } catch (error) {
        console.error("Booking API error:", error);

        return response.status(500).json({
            message: "Unable to submit booking.",
        });
    }
}