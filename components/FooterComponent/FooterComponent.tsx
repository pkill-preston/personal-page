import React from 'react'

const FooterComponent = () => {
  const year = new Date().getFullYear();
  return (
		<div className='flex w-full justify-center items-center bg-card py-6 px-4'>
			<div className='max-w-[72rem] px-4 flex md:flex-row flex-col items-center gap-2 md:justify-between justify-center w-full'>
				<div className='flex items-end gap-2'>
					<p className='text-lg leading-none'>©</p>
					<p>{year} Heron Lorena. All rights reserved.</p>
				</div>
				<div className='flex gap-4'>
					<a
						className='hover:text-[#7FBBFF]'
						href='https://github.com/pkill-preston'
					>
						Github
					</a>
					<a
						className='hover:text-[#7FBBFF]'
						href='https://www.linkedin.com/in/heron-lorena/'
					>
						Linkedin
					</a>
				</div>
			</div>
		</div>
	);
}

export default FooterComponent