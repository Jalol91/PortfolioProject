import Head from 'next/head';
import bg from 'public/assets/images/portfolio/bg-inner.jpg';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import portfolioData from 'data/portfolio.data';
import Link from 'next/link';
const PortfolioPage = () => {
	const router = useRouter();
	const [loading, setLoading] = useState(true);
	const [portfolio, setPortfolio] = useState({});

	const getDate = async (id) => {
		const res = portfolioData.find((item) => item.id == id);
		console.log('res', id, res);
		setPortfolio(res);
		setLoading(false);
	};
	useEffect(() => {
		if (router.isReady) {
			getDate(router.query.portfolio_id);
		}
	}, [router.isReady]);

	if (loading && !portfolio) {
		return null;
	}
	return (
		<>
			<div>
				<section
					style={{
						backgroundImage: `url(${bg.src})`,
					}}
					className='relative table w-full py-32 lg:py-40  bg-no-repeat bg-center'
				>
					<div className='absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black' />
					<div className='container'>
						<div className='grid grid-cols-1 pb-8 text-center mt-10'>
							<h3 className='mb-3 text-3xl leading-normal font-medium text-white'>
								{portfolio.category}
							</h3>
							<ul className='list-none'>
								<li className='inline font-semibold text-white/60 mr-2'>
									<span className='text-white'>Client :</span>{' '}
									{portfolio.client}
								</li>
								<li className='inline font-semibold text-white/60'>
									<span className='text-white'>Date :</span> {portfolio.date}
								</li>
							</ul>
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
								<Link href={'/portfolios'}>
									<a>Portfolio</a>
								</Link>
							</li>
							<li
								className='inline breadcrumb-item uppercase text-[13px] font-bold duration-500 ease-in-out text-white'
								aria-current='page'
							>
								Detail
							</li>
						</ul>
					</div>
				</section>
				{/*end section*/}
				<div className='relative'>
					<div className='shape absolute right-0 sm:-bottom-px -bottom-[2px] left-0 overflow-hidden z-1 text-white dark:text-slate-900'>
						<svg
							className='w-full h-auto'
							viewBox='0 0 2880 48'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z'
								fill='currentColor'
							/>
						</svg>
					</div>
				</div>
				{/* End Hero */}
				{/* Start Section*/}
				<section className='relative md:py-24 py-16'>
					<div className='container'>
						<div className='grid md:grid-cols-12 grid-cols-1 gap-[30px]'>
							<div className='lg:col-span-5 md:col-span-6'>
								<div className='grid grid-cols-1 gap-[30px]'>
									{portfolio.images?.map((item, index) => (
										<img key={index} src={item} className='rounded-md' alt='' />
									))}
								</div>
								{/*end grid*/}
							</div>
							{/*end col*/}
							<div className='lg:col-span-7 md:col-span-6'>
								<div className='sticky top-20'>
									<div className='grid lg:grid-cols-12 grid-cols-1 gap-[30px]'>
										<div className='lg:col-span-12'>
											<div className='work-details'>
												<h4 className='text-xl font-semibold mb-3 border-b border-gray-100 dark:border-gray-700 pb-3'>
													Project Name :
												</h4>
												<p className='text-slate-400'>
													Lorem ipsum dolor sit amet consectetur adipisicing
													elit. Suscipit totam atque dignissimos porro,
													exercitationem, neque alias ea aliquid quibusdam
													voluptates impedit maxime aut asperiores consequatur
													iste. Corporis fuga ducimus dignissimos. Lorem ipsum
													dolor sit amet, consectetur adipisicing elit. Adipisci
													non dolorem consequatur vitae hic.
												</p>
												<p className='text-slate-400 mt-2'>
													Suscipit totam atque dignissimos porro,
													exercitationem, neque alias ea aliquid quibusdam
													voluptates impedit maxime aut asperiores consequatur
													iste. Corporis fuga ducimus dignissimos.
												</p>
											</div>
										</div>
										{/*end col*/}
										<div className='lg:col-span-7'>
											<div className='bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 p-6 rounded-md'>
												<h5 className='text-lg font-semibold border-b border-gray-100 dark:border-gray-700 pb-3 mb-3'>
													Project Info :
												</h5>
												<dl className='grid grid-cols-12 mb-0'>
													<dt className='md:col-span-4 col-span-5 mt-2'>
														Client :
													</dt>
													<dd className='md:col-span-8 col-span-7 mt-2 text-slate-400'>
														Calvin Carlo
													</dd>
													<dt className='md:col-span-4 col-span-5 mt-2'>
														Category :
													</dt>
													<dd className='md:col-span-8 col-span-7 mt-2 text-slate-400'>
														Web Design
													</dd>
													<dt className='md:col-span-4 col-span-5 mt-2'>
														Date :
													</dt>
													<dd className='md:col-span-8 col-span-7 mt-2 text-slate-400'>
														23rd Sep, 2021
													</dd>
													<dt className='md:col-span-4 col-span-5 mt-2'>
														Website :
													</dt>
													<dd className='md:col-span-8 col-span-7 mt-2 text-slate-400'>
														www.yourdomain.com
													</dd>
													<dt className='md:col-span-4 col-span-5 mt-2'>
														Location :
													</dt>
													<dd className='md:col-span-8 col-span-7 mt-2 text-slate-400'>
														3/2/64 Mongus Street, UK
													</dd>
												</dl>
											</div>
										</div>
										{/*end col*/}
									</div>
									{/*end grid*/}
								</div>
							</div>
							{/*end col*/}
						</div>
						{/*end grid*/}
					</div>
					{/*end container*/}
					<div className='container md:mt-24 mt-16'>
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
						{/*end grid*/}
					</div>
					{/*end container*/}
				</section>
			</div>
		</>
	);
};
export default PortfolioPage;
