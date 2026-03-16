import {Resend} from "resend";
import {NextResponse} from "next/server";
import EmailTemplate from "@/components/EmailSender/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
	const {sender, subject, message} = await req.json();
	const emailTemplate = (
		<EmailTemplate sender={sender} subject={subject} message={message} />
	);

	try {
		await resend.emails.send({
			from: "Portfolio <onboarding@resend.dev>",
			to: "heron.lorena@protonmail.com",
			replyTo: sender,
			subject: `[Portfolio] - ${subject}`,
			react: emailTemplate
		});

		return NextResponse.json({success: true});
	} catch (error) {
		console.error("CONTACT API ERROR:", error);
		return NextResponse.json({error}, {status: 500});
	}
}
