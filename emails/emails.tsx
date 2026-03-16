import * as React from "react";
import { Html, Body, Text, Heading } from "@react-email/components";

interface ContactEmailProps {
  sender: string;
  subject: string;
  message: string;
}

export default function ContactEmail({
  sender,
  subject,
  message,
}: ContactEmailProps) {
  return (
    <Html>
      <Body>
        <Heading>New Portfolio Contact</Heading>

        <Text>
          <strong>Sender:</strong> {sender}
        </Text>

        <Text>
          <strong>Subject:</strong> {subject}
        </Text>

        <Text>{message}</Text>
      </Body>
    </Html>
  );
}