

import EmailSender from "@/components/EmailSender/EmailSender";
import { AtIcon, GithubLogoIcon, MapPinIcon, PhoneIcon } from "@phosphor-icons/react/dist/ssr";

const ContactSection = () => {

	return (
		<div className='flex justify-start flex-col items-center py-6 px-4 gap-6 min-h-[calc(80vh-72px)]'>
			<p className='text-4xl'>Let&lsquo;s Connect</p>
			<div className='flex w-[100%] md:w-[40%]'>
				<p className='text-center'>
					I’m actively seeking opportunities as a developer. If my work fits
					your team, feel free to reach out.
				</p>
			</div>
			<div className='h-[100%] md:flex md:flex-row flex-col flex gap-6 md:gap-0 w-full justify-between'>
				<div className='flex flex-col h-auto w-full md:w-[42%] lg:w-[40%]  justify-between gap-4'>
					<div className='flex justify-between'>
						<p className='text-xl'>Contact Information</p>
						<div className='flex gap-4'>
							<div className='border-1 border-md rounded-md flex justify-center items-center p-2 card-new transition-all duration-300 cursor-pointer'>
								<a href='https://www.linkedin.com/in/heron-lorena/'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='32'
										height='32'
										viewBox='0 0 24 24'
										fill='none'
										stroke='currentColor'
										strokeWidth='1'
										strokeLinecap='round'
										strokeLinejoin='round'
										className='lucide lucide-linkedin-icon lucide-linkedin'
									>
										<path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' />
										<rect width='4' height='12' x='2' y='9' />
										<circle cx='4' cy='4' r='2' />
									</svg>
								</a>
							</div>
							<div className='border-1 border-md rounded-md flex justify-center items-center p-2 card-new transition-all duration-300 cursor-pointer'>
								<a href='https://github.com/pkill-preston'>
									<GithubLogoIcon size={32} />
								</a>
							</div>
						</div>
					</div>
					<div className='flex flex-col gap-6'>
						<div className='bg-card p-4 flex gap-4 items-center border rounded-lg card-new transition-all duration-300'>
							<div className='border p-2 rounded-md'>
								<AtIcon size={24} />
							</div>
							<p>heron.lorena@protonmail.com</p>
						</div>
						<div className='bg-card p-4 flex gap-4 items-center border rounded-lg card-new transition-all duration-300'>
							<div className='border p-2 rounded-md'>
								<MapPinIcon size={24} />
							</div>
							<p>+55 (12) 99664-7366</p>
						</div>
						<div className='bg-card p-4 flex gap-4 items-center border rounded-lg card-new transition-all duration-300'>
							<div className='border p-2 rounded-md'>
								<PhoneIcon size={24} />
							</div>
							<p>Brazil, Sao Paulo</p>
						</div>
					</div>
				</div>
				<div className='flex w-full md:w-[55%] border rounded-lg p-4'>
					<EmailSender />
				</div>
			</div>
		</div>
	);
};

export default ContactSection;
