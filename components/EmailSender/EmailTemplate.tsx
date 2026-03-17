import {
	Html,
	Body,
	Container,
	Heading,
	Text,
	Section
} from "@react-email/components";

type ContactEmailProps = {
	sender: string;
	subject: string;
	message: string;
};

export default function ContactEmail({
	sender,
	subject,
	message
}: ContactEmailProps) {
	return (
		<Html>
			<Body style={{backgroundColor: "#f6f9fc", padding: "20px"}}>
				<Container
					style={{
						backgroundColor: "#ffffff",
						padding: "24px",
						borderRadius: "8px",
						fontFamily: "Arial, sans-serif"
					}}
				>
					<Heading style={{fontSize: "20px"}}>New Portfolio Contact</Heading>

					<Section>
						<Text>
							<strong>From:</strong> {sender}
						</Text>
					</Section>

					<Section style={{marginTop: "16px"}}>
						<Text style={{whiteSpace: "pre-line"}}>{message}</Text>
					</Section>
				</Container>
			</Body>
		</Html>
	);
}
