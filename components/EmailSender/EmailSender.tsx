"use client";

import {useState} from "react";
import {useTranslations} from "next-intl";

import {Input} from "../ui/input";
import {Textarea} from "../ui/textarea";
import {Label} from "../ui/label";
import {Button} from "../ui/button";

export default function ContactForm() {
	const t = useTranslations("ContactForm");

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
		return <p className='text-lg text-center py-8'>{t("success")}</p>;
	}

	return (
		<form
			onSubmit={handleSubmit}
			className='flex flex-col gap-5 w-full'
		>
			<div className='flex flex-col gap-1.5'>
				<Label>{t("emailLabel")}</Label>
				<Input
					name='email'
					type='email'
					placeholder={t("emailPlaceholder")}
					required
				/>
			</div>

			<div className='flex flex-col gap-1.5'>
				<Label>{t("subjectLabel")}</Label>
				<Input
					name='subject'
					placeholder={t("subjectPlaceholder")}
					required
				/>
			</div>

			<div className='flex flex-col gap-1.5'>
				<Label>{t("messageLabel")}</Label>
				<Textarea
					name='message'
					placeholder={t("messagePlaceholder")}
					required
					className='min-h-[120px]'
				/>
			</div>

			<Button type='submit' className='w-full'>
				{loading ? t("sending") : t("submit")}
			</Button>
		</form>
	);
}
