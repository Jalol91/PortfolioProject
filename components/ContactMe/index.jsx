import { useRouter } from 'next/router';

const ContactMe = () => {
	const router = useRouter();

	if (router.asPath === '/contacts') return null;
	return (
		<div className='container md:mt-24 mt-16 mb-16'>
			<div className='grid grid-cols-1 text-center'>
				<span className='text-slate-400 mb-4'>
					Available for freelance projects
				</span>
				<h3 className='md:text-3xl text-2xl md:leading-normal leading-normal font-semibold'>
					Do you have designing project? <br />
					Let's talk.
				</h3>
				<div className='mt-6'>
					<a
						href='contact-one.html'
						className='btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full'
					>
						<i className='uil uil-phone' /> Contact us
					</a>
				</div>
			</div>
		</div>
	);
};

export default ContactMe;
