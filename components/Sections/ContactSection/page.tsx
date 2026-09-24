import EmailSender from "@/components/EmailSender/EmailSender";
import {
	AtIcon,
	GithubLogoIcon,
	LinkedinLogoIcon,
	MapPinIcon,
	PhoneIcon
} from "@phosphor-icons/react/dist/ssr";
import {getTranslations} from "next-intl/server";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

export default async function ContactSection({locale}: {locale: string}) {

    const t = await getTranslations({locale: locale, namespace: "contact"});

	return (
		<div className='flex flex-col items-center gap-8'>
			<SectionTitle className='anim-fade-up is-visible'>{t("title")}</SectionTitle>

			<p className='text-center text-muted-foreground max-w-lg anim-fade-up is-visible'
				style={{"--delay": "100ms"} as React.CSSProperties}
			>
				{t("intro")}
			</p>

			<div className='flex flex-col md:flex-row gap-8 w-full'>
				<div className='flex flex-col w-full md:w-[42%] gap-5 anim-slide-right is-visible'
					style={{"--delay": "200ms"} as React.CSSProperties}
				>
					<div className='flex justify-between items-center'>
						<p className='text-xl font-semibold'>{t("infoTitle")}</p>
						<div className='flex gap-3'>
							<a
								href='https://www.linkedin.com/in/heron-lorena/'
								target='_blank'
								rel='noopener noreferrer'
								className='card flex justify-center items-center p-2 hover:-translate-y-0.5 btn-press'
							>
								<LinkedinLogoIcon size={28} />
							</a>
							<a
								href='https://github.com/pkill-preston'
								target='_blank'
								rel='noopener noreferrer'
								className='card flex justify-center items-center p-2 hover:-translate-y-0.5 btn-press'
							>
								<GithubLogoIcon size={28} />
							</a>
						</div>
					</div>

					<div className='flex flex-col gap-3 stagger-grid is-visible'>
						<div className='card p-4 flex gap-4 items-center'>
							<div className='border rounded-md p-2'>
								<AtIcon size={20} />
							</div>
							<p className='text-sm'>{t("email")}</p>
						</div>
						<div className='card p-4 flex gap-4 items-center'>
							<div className='border rounded-md p-2'>
								<PhoneIcon size={20} />
							</div>
							<p className='text-sm'>{t("phone")}</p>
						</div>
						<div className='card p-4 flex gap-4 items-center'>
							<div className='border rounded-md p-2'>
								<MapPinIcon size={20} />
							</div>
							<p className='text-sm'>{t("location")}</p>
						</div>
					</div>
				</div>

				<div className='card p-4 w-full md:w-[55%] anim-fade-up is-visible'
					style={{"--delay": "300ms"} as React.CSSProperties}
				>
					<EmailSender />
				</div>
			</div>
		</div>
	);
}
