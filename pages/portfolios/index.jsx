const Portfolios = () => {
	return (
		<>
			{/* <section className="relative table w-full py-32 lg:py-40 bg-[url('../../assets/images/portfolio/bg-inner.html')] bg-no-repeat bg-center">
				<div className='absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black' />
				<div className='container'>
					<div className='grid grid-cols-1 pb-8 text-center mt-10'>
						<h3 className='mb-3 text-3xl leading-normal font-medium text-white'>
							Portfolio &amp; Works
						</h3>
						<p className='text-slate-300 text-lg max-w-xl mx-auto'>
							Showcase of Our Awesome Works in Three Columns
						</p>
					</div>
			 
				</div>
			 
				<div className='absolute text-center z-10 bottom-5 right-0 left-0 mx-3'>
					<ul className='breadcrumb tracking-[0.5px] breadcrumb-light mb-0 inline-block'>
						<li className='inline breadcrumb-item uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white'>
							<a href='index.html'>Techwind</a>
						</li>
						<li className='inline breadcrumb-item uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white'>
							<a href='#'>Portfolio</a>
						</li>
						<li
							className='inline breadcrumb-item uppercase text-[13px] font-bold duration-500 ease-in-out text-white'
							aria-current='page'>
							Creative
						</li>
					</ul>
				</div>
			</section> */}
			{/*end section*/}
			<div className='relative'>
				<div className='shape absolute right-0 sm:-bottom-px -bottom-[2px] left-0 overflow-hidden z-1 text-white dark:text-slate-900'>
					<svg
						className='w-full h-auto'
						viewBox='0 0 2880 48'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
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
					<div className='grid grid-cols-1 items-center gap-[30px]'>
						<div className='filters-group-wrap text-center'>
							<div className='filters-group'>
								<ul className='mb-0 list-none container-creative filter-options'>
									<li
										className='inline-block font-medium text-base mx-1.5 mb-3 text-slate-400 cursor-pointer relative transition duration-500 active'
										data-group='all'>
										All
									</li>
									<li
										className='inline-block font-medium text-base mx-1.5 mb-3 text-slate-400 cursor-pointer relative transition duration-500'
										data-group='branding'>
										Branding
									</li>
									<li
										className='inline-block font-medium text-base mx-1.5 mb-3 text-slate-400 cursor-pointer relative transition duration-500'
										data-group='designing'>
										Designing
									</li>
									<li
										className='inline-block font-medium text-base mx-1.5 mb-3 text-slate-400 cursor-pointer relative transition duration-500'
										data-group='photography'>
										Photography
									</li>
									<li
										className='inline-block font-medium text-base mx-1.5 mb-3 text-slate-400 cursor-pointer relative transition duration-500'
										data-group='development'>
										Development
									</li>
								</ul>
							</div>
						</div>
					</div>
					{/*grid*/}
					<div id='grid' className='md:flex w-full justify-center mx-auto mt-4'>
						<div
							className='lg:w-1/3 md:w-1/3 p-4 picture-item'
							data-groups='["branding"]'>
							<div className='group relative block overflow-hidden rounded-md transition-all duration-700 ease-in-out'>
								<div className='relative bg-indigo-600 overflow-hidden rounded-md'>
									<a
										href='assets/images/portfolio/1.jpg'
										className='lightbox transition-all duration-700 ease-in-out group-hover:p-[10px]'
										title>
										<img
											src='assets/images/portfolio/1.jpg'
											className='rounded-md'
											alt=''
										/>
									</a>
								</div>
								<div className='content transition-all duration-700 ease-in-out'>
									<div className='bg-white dark:bg-slate-900 p-3 rounded-md absolute z-10 bottom-5 left-5 transition-all duration-700 ease-in-out scale-0 group-hover:scale-100'>
										<a
											href='portfolio-detail-three.html'
											className='h6 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out'>
											Mockup Collection
										</a>
										<p className='text-slate-400 mb-0'>Abstract</p>
									</div>
								</div>
							</div>
						</div>
						<div
							className='lg:w-1/3 md:w-1/3 p-4 picture-item'
							data-groups='["designing"]'>
							<div className='group relative block overflow-hidden rounded-md transition-all duration-700 ease-in-out'>
								<div className='relative bg-indigo-600 overflow-hidden rounded-md'>
									<a
										href='assets/images/portfolio/2.jpg'
										className='lightbox transition-all duration-700 ease-in-out group-hover:p-[10px]'
										title>
										<img
											src='assets/images/portfolio/2.jpg'
											className='rounded-md'
											alt=''
										/>
									</a>
								</div>
								<div className='content transition-all duration-700 ease-in-out'>
									<div className='bg-white dark:bg-slate-900 p-3 rounded-md absolute z-10 bottom-5 left-5 transition-all duration-700 ease-in-out scale-0 group-hover:scale-100'>
										<a
											href='portfolio-detail-three.html'
											className='h6 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out'>
											Mockup Collection
										</a>
										<p className='text-slate-400 mb-0'>Abstract</p>
									</div>
								</div>
							</div>
						</div>
						<div
							className='lg:w-1/3 md:w-1/3 p-4 picture-item'
							data-groups='["photography"]'>
							<div className='group relative block overflow-hidden rounded-md transition-all duration-700 ease-in-out'>
								<div className='relative bg-indigo-600 overflow-hidden rounded-md'>
									<a
										href='assets/images/portfolio/3.jpg'
										className='lightbox transition-all duration-700 ease-in-out group-hover:p-[10px]'
										title>
										<img
											src='assets/images/portfolio/3.jpg'
											className='rounded-md'
											alt=''
										/>
									</a>
								</div>
								<div className='content transition-all duration-700 ease-in-out'>
									<div className='bg-white dark:bg-slate-900 p-3 rounded-md absolute z-10 bottom-5 left-5 transition-all duration-700 ease-in-out scale-0 group-hover:scale-100'>
										<a
											href='portfolio-detail-three.html'
											className='h6 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out'>
											Mockup Collection
										</a>
										<p className='text-slate-400 mb-0'>Abstract</p>
									</div>
								</div>
							</div>
						</div>
						<div
							className='lg:w-1/3 md:w-1/3 p-4 picture-item'
							data-groups='["development"]'>
							<div className='group relative block overflow-hidden rounded-md transition-all duration-700 ease-in-out'>
								<div className='relative bg-indigo-600 overflow-hidden rounded-md'>
									<a
										href='assets/images/portfolio/4.jpg'
										className='lightbox transition-all duration-700 ease-in-out group-hover:p-[10px]'
										title>
										<img
											src='assets/images/portfolio/4.jpg'
											className='rounded-md'
											alt=''
										/>
									</a>
								</div>
								<div className='content transition-all duration-700 ease-in-out'>
									<div className='bg-white dark:bg-slate-900 p-3 rounded-md absolute z-10 bottom-5 left-5 transition-all duration-700 ease-in-out scale-0 group-hover:scale-100'>
										<a
											href='portfolio-detail-three.html'
											className='h6 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out'>
											Mockup Collection
										</a>
										<p className='text-slate-400 mb-0'>Abstract</p>
									</div>
								</div>
							</div>
						</div>
						<div
							className='lg:w-1/3 md:w-1/3 p-4 picture-item'
							data-groups='["branding"]'>
							<div className='group relative block overflow-hidden rounded-md transition-all duration-700 ease-in-out'>
								<div className='relative bg-indigo-600 overflow-hidden rounded-md'>
									<a
										href='assets/images/portfolio/5.jpg'
										className='lightbox transition-all duration-700 ease-in-out group-hover:p-[10px]'
										title>
										<img
											src='assets/images/portfolio/5.jpg'
											className='rounded-md'
											alt=''
										/>
									</a>
								</div>
								<div className='content transition-all duration-700 ease-in-out'>
									<div className='bg-white dark:bg-slate-900 p-3 rounded-md absolute z-10 bottom-5 left-5 transition-all duration-700 ease-in-out scale-0 group-hover:scale-100'>
										<a
											href='portfolio-detail-three.html'
											className='h6 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out'>
											Mockup Collection
										</a>
										<p className='text-slate-400 mb-0'>Abstract</p>
									</div>
								</div>
							</div>
						</div>
						<div
							className='lg:w-1/3 md:w-1/3 p-4 picture-item'
							data-groups='["branding"]'>
							<div className='group relative block overflow-hidden rounded-md transition-all duration-700 ease-in-out'>
								<div className='relative bg-indigo-600 overflow-hidden rounded-md'>
									<a
										href='assets/images/portfolio/6.jpg'
										className='lightbox transition-all duration-700 ease-in-out group-hover:p-[10px]'
										title>
										<img
											src='assets/images/portfolio/6.jpg'
											className='rounded-md'
											alt=''
										/>
									</a>
								</div>
								<div className='content transition-all duration-700 ease-in-out'>
									<div className='bg-white dark:bg-slate-900 p-3 rounded-md absolute z-10 bottom-5 left-5 transition-all duration-700 ease-in-out scale-0 group-hover:scale-100'>
										<a
											href='portfolio-detail-three.html'
											className='h6 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out'>
											Mockup Collection
										</a>
										<p className='text-slate-400 mb-0'>Abstract</p>
									</div>
								</div>
							</div>
						</div>
						<div
							className='lg:w-1/3 md:w-1/3 p-4 picture-item'
							data-groups='["designing"]'>
							<div className='group relative block overflow-hidden rounded-md transition-all duration-700 ease-in-out'>
								<div className='relative bg-indigo-600 overflow-hidden rounded-md'>
									<a
										href='assets/images/portfolio/7.jpg'
										className='lightbox transition-all duration-700 ease-in-out group-hover:p-[10px]'
										title>
										<img
											src='assets/images/portfolio/7.jpg'
											className='rounded-md'
											alt=''
										/>
									</a>
								</div>
								<div className='content transition-all duration-700 ease-in-out'>
									<div className='bg-white dark:bg-slate-900 p-3 rounded-md absolute z-10 bottom-5 left-5 transition-all duration-700 ease-in-out scale-0 group-hover:scale-100'>
										<a
											href='portfolio-detail-three.html'
											className='h6 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out'>
											Mockup Collection
										</a>
										<p className='text-slate-400 mb-0'>Abstract</p>
									</div>
								</div>
							</div>
						</div>
						<div
							className='lg:w-1/3 md:w-1/3 p-4 picture-item'
							data-groups='["development"]'>
							<div className='group relative block overflow-hidden rounded-md transition-all duration-700 ease-in-out'>
								<div className='relative bg-indigo-600 overflow-hidden rounded-md'>
									<a
										href='assets/images/portfolio/8.jpg'
										className='lightbox transition-all duration-700 ease-in-out group-hover:p-[10px]'
										title>
										<img
											src='assets/images/portfolio/8.jpg'
											className='rounded-md'
											alt=''
										/>
									</a>
								</div>
								<div className='content transition-all duration-700 ease-in-out'>
									<div className='bg-white dark:bg-slate-900 p-3 rounded-md absolute z-10 bottom-5 left-5 transition-all duration-700 ease-in-out scale-0 group-hover:scale-100'>
										<a
											href='portfolio-detail-three.html'
											className='h6 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out'>
											Mockup Collection
										</a>
										<p className='text-slate-400 mb-0'>Abstract</p>
									</div>
								</div>
							</div>
						</div>
						<div
							className='lg:w-1/3 md:w-1/3 p-4 picture-item'
							data-groups='["photography"]'>
							<div className='group relative block overflow-hidden rounded-md transition-all duration-700 ease-in-out'>
								<div className='relative bg-indigo-600 overflow-hidden rounded-md'>
									<a
										href='assets/images/portfolio/23.jpg'
										className='lightbox transition-all duration-700 ease-in-out group-hover:p-[10px]'
										title>
										<img
											src='assets/images/portfolio/23.jpg'
											className='rounded-md'
											alt=''
										/>
									</a>
								</div>
								<div className='content transition-all duration-700 ease-in-out'>
									<div className='bg-white dark:bg-slate-900 p-3 rounded-md absolute z-10 bottom-5 left-5 transition-all duration-700 ease-in-out scale-0 group-hover:scale-100'>
										<a
											href='portfolio-detail-three.html'
											className='h6 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out'>
											Mockup Collection
										</a>
										<p className='text-slate-400 mb-0'>Abstract</p>
									</div>
								</div>
							</div>
						</div>
						<div
							className='lg:w-1/3 md:w-1/3 p-4 picture-item'
							data-groups='["photography"]'>
							<div className='group relative block overflow-hidden rounded-md transition-all duration-700 ease-in-out'>
								<div className='relative bg-indigo-600 overflow-hidden rounded-md'>
									<a
										href='assets/images/portfolio/20.jpg'
										className='lightbox transition-all duration-700 ease-in-out group-hover:p-[10px]'
										title>
										<img
											src='assets/images/portfolio/20.jpg'
											className='rounded-md'
											alt=''
										/>
									</a>
								</div>
								<div className='content transition-all duration-700 ease-in-out'>
									<div className='bg-white dark:bg-slate-900 p-3 rounded-md absolute z-10 bottom-5 left-5 transition-all duration-700 ease-in-out scale-0 group-hover:scale-100'>
										<a
											href='portfolio-detail-three.html'
											className='h6 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out'>
											Mockup Collection
										</a>
										<p className='text-slate-400 mb-0'>Abstract</p>
									</div>
								</div>
							</div>
						</div>
						<div
							className='lg:w-1/3 md:w-1/3 p-4 picture-item'
							data-groups='["branding"]'>
							<div className='group relative block overflow-hidden rounded-md transition-all duration-700 ease-in-out'>
								<div className='relative bg-indigo-600 overflow-hidden rounded-md'>
									<a
										href='assets/images/portfolio/21.jpg'
										className='lightbox transition-all duration-700 ease-in-out group-hover:p-[10px]'
										title>
										<img
											src='assets/images/portfolio/21.jpg'
											className='rounded-md'
											alt=''
										/>
									</a>
								</div>
								<div className='content transition-all duration-700 ease-in-out'>
									<div className='bg-white dark:bg-slate-900 p-3 rounded-md absolute z-10 bottom-5 left-5 transition-all duration-700 ease-in-out scale-0 group-hover:scale-100'>
										<a
											href='portfolio-detail-three.html'
											className='h6 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out'>
											Mockup Collection
										</a>
										<p className='text-slate-400 mb-0'>Abstract</p>
									</div>
								</div>
							</div>
						</div>
						<div
							className='lg:w-1/3 md:w-1/3 p-4 picture-item'
							data-groups='["branding"]'>
							<div className='group relative block overflow-hidden rounded-md transition-all duration-700 ease-in-out'>
								<div className='relative bg-indigo-600 overflow-hidden rounded-md'>
									<a
										href='assets/images/portfolio/22.jpg'
										className='lightbox transition-all duration-700 ease-in-out group-hover:p-[10px]'
										title>
										<img
											src='assets/images/portfolio/22.jpg'
											className='rounded-md'
											alt=''
										/>
									</a>
								</div>
								<div className='content transition-all duration-700 ease-in-out'>
									<div className='bg-white dark:bg-slate-900 p-3 rounded-md absolute z-10 bottom-5 left-5 transition-all duration-700 ease-in-out scale-0 group-hover:scale-100'>
										<a
											href='portfolio-detail-three.html'
											className='h6 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out'>
											Mockup Collection
										</a>
										<p className='text-slate-400 mb-0'>Abstract</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='grid md:grid-cols-12 grid-cols-1 mt-8'>
						<div className='md:col-span-12 text-center'>
							<nav aria-label='Page navigation example'>
								<ul className='inline-flex items-center -space-x-px'>
									<li>
										<a
											href='#'
											className='w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-l-lg hover:text-white border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600'>
											<i className='uil uil-angle-left text-[20px]' />
										</a>
									</li>
									<li>
										<a
											href='#'
											className='w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600'>
											1
										</a>
									</li>
									<li>
										<a
											href='#'
											className='w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600'>
											2
										</a>
									</li>
									<li>
										<a
											href='#'
											aria-current='page'
											className='z-10 w-[40px] h-[40px] inline-flex justify-center items-center text-white bg-indigo-600 border border-indigo-600'>
											3
										</a>
									</li>
									<li>
										<a
											href='#'
											className='w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600'>
											4
										</a>
									</li>
									<li>
										<a
											href='#'
											className='w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600'>
											5
										</a>
									</li>
									<li>
										<a
											href='#'
											className='w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-r-lg hover:text-white border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600'>
											<i className='uil uil-angle-right text-[20px]' />
										</a>
									</li>
								</ul>
							</nav>
						</div>
					</div>
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
								className='btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full'>
								<i className='uil uil-phone' /> Contact us
							</a>
						</div>
					</div>
					{/*end grid*/}
				</div>
				{/*end container*/}
			</section>
		</>
	)
}

export default Portfolios
