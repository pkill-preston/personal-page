"use client";

import {useState} from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

export default function ContactForm() {
	const [loading, setLoading] = useState(false);
	const [sent, setSent] = useState(false);

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		const form = new FormData(e.currentTarget);

		setLoading(true);

		await fetch("/api/contact", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				sender: form.get("email"),
				subject: form.get("subject"),
				message: form.get("message")
			})
		});

		setLoading(false);
		setSent(true);
	}

	if (sent) {
		return <p className='text-lg'>Message sent successfully.</p>;
	}

	return (
		<form
			onSubmit={handleSubmit}
			className='flex flex-col justify-between gap-6 w-full'
		>
			<div className="flex flex-col gap-2">
				<Label>Email</Label>
				<Input
					name='email'
					type='email'
					placeholder='Your email'
					required
					className='border p-2 rounded-lg'
				/>
			</div>
			<div className="flex flex-col gap-2">
				<Label>Subject</Label>
				<Input
					name='subject'
					placeholder='Subject'
					required
					className='border p-2 rounded-lg'
				/>
			</div>
			<div className="flex flex-col gap-2">
				<Label>Message</Label>
				<Textarea
					name='message'
					placeholder='Message'
					required
					className='border p-2 rounded-lg h-full'
				/>
			</div>

			<Button type='submit' className='text-white p-2 rounded-lg'>
				{loading ? "Sending..." : "Send Message"}
			</Button>
		</form>
	);
}
