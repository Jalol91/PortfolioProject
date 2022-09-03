import Link from 'next/link';
import { useRouter } from 'next/router';

const Breadcrumb = ({ bgImage, title }) => {
	const router = useRouter();
	const path = router.asPath.slice(1).split('/');
	return (
		<section
			style={{
				backgroundImage: `url(${bgImage})`,
			}}
			className='relative table w-full py-32 lg:py-40  bg-no-repeat bg-center'
		>
			<div className='absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black' />
			<div className='container'>
				<div className='grid grid-cols-1 pb-8 text-center mt-10'>
					<h3 className='mb-3 text-3xl leading-normal font-medium text-white'>
						{title}
					</h3>
				</div>
				{/*end grid*/}
			</div>
			{/*end container*/}
			<div className='absolute text-center z-10 bottom-5 right-0 left-0 mx-3'>
				<ul className='breadcrumb tracking-[0.5px] breadcrumb-light mb-0 inline-block'>
					<li className='inline breadcrumb-item uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white'>
						<Link href={'/'}>
							<a>Techwind</a>
						</Link>
					</li>
					<li className='inline breadcrumb-item uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white'>
						<Link href={`/${path[0]}`}>
							<a>{path[0]}</a>
						</Link>
					</li>
					{path.length > 1 ? (
						<li
							className='inline breadcrumb-item uppercase text-[13px] font-bold duration-500 ease-in-out text-white'
							aria-current='page'
						>
							Detail
						</li>
					) : null}
				</ul>
			</div>
		</section>
	);
};

export default Breadcrumb;
