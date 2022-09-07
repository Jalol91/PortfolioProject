import Breadcrumb from 'components/Breadcrumb'
import bg from 'public/assets/images/portfolio/bg-inner.jpg'
const Blogs = () => {
	return (
		<div>
			<Breadcrumb bgImage={bg.src} title={'My Certificates'} />
			<div>
				<section className="relative table w-full py-32 lg:py-36 bg-[url('../../assets/images/blog/bg.html')] bg-center bg-no-repeat">
					<div className='absolute inset-0 bg-black opacity-80' />
					<div className='container'>
						<div className='grid grid-cols-1 pb-8 text-center mt-10'>
							<h3 className='md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white'>
								Blogs &amp; News
							</h3>
						</div>
						{/*end grid*/}
					</div>
					{/*end container*/}
					<div className='absolute text-center z-10 bottom-5 right-0 left-0 mx-3'>
						<ul className='breadcrumb tracking-[0.5px] breadcrumb-light mb-0 inline-block'>
							<li className='inline breadcrumb-item uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white'>
								<a href='index.html'>Techwind</a>
							</li>
							<li
								className='inline breadcrumb-item uppercase text-[13px] font-bold duration-500 ease-in-out text-white'
								aria-current='page'>
								Blogs
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
						<div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]'>
							<div className='blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden'>
								<img src='assets/images/blog/01.jpg' alt='' />
								<div className='content p-6'>
									<a
										href='blog-detail.html'
										className='title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out'>
										Design your apps in your own way
									</a>
									<p className='text-slate-400 mt-3'>
										The phrasal sequence of the is now so that many campaign and
										benefit
									</p>
									<div className='mt-4'>
										<a
											href='blog-detail.html'
											className='btn btn-link font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out'>
											Read More <i className='uil uil-arrow-right' />
										</a>
									</div>
								</div>
							</div>
							{/*blog end*/}
							<div className='blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden'>
								<img src='assets/images/blog/02.jpg' alt='' />
								<div className='content p-6'>
									<a
										href='blog-detail.html'
										className='title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out'>
										How apps is changing the IT world
									</a>
									<p className='text-slate-400 mt-3'>
										The phrasal sequence of the is now so that many campaign and
										benefit
									</p>
									<div className='mt-4'>
										<a
											href='blog-detail.html'
											className='btn btn-link font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out'>
											Read More <i className='uil uil-arrow-right' />
										</a>
									</div>
								</div>
							</div>
							{/*blog end*/}
							<div className='blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden'>
								<img src='assets/images/blog/03.jpg' alt='' />
								<div className='content p-6'>
									<a
										href='blog-detail.html'
										className='title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out'>
										Smartest Applications for Business
									</a>
									<p className='text-slate-400 mt-3'>
										The phrasal sequence of the is now so that many campaign and
										benefit
									</p>
									<div className='mt-4'>
										<a
											href='blog-detail.html'
											className='btn btn-link font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out'>
											Read More <i className='uil uil-arrow-right' />
										</a>
									</div>
								</div>
							</div>
							{/*blog end*/}
							<div className='blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden'>
								<img src='assets/images/blog/04.jpg' alt='' />
								<div className='content p-6'>
									<a
										href='blog-detail.html'
										className='title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out'>
										Mobile Marketing, Its Synthes and 2021 Offer Prognosis
									</a>
									<p className='text-slate-400 mt-3'>
										The phrasal sequence of the is now so that many campaign and
										benefit
									</p>
									<div className='mt-4'>
										<a
											href='blog-detail.html'
											className='btn btn-link font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out'>
											Read More <i className='uil uil-arrow-right' />
										</a>
									</div>
								</div>
							</div>
							{/*blog end*/}
							<div className='blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden'>
								<img src='assets/images/blog/05.jpg' alt='' />
								<div className='content p-6'>
									<a
										href='blog-detail.html'
										className='title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out'>
										Stop Worrying About Deadlines! We Got You Covered
									</a>
									<p className='text-slate-400 mt-3'>
										The phrasal sequence of the is now so that many campaign and
										benefit
									</p>
									<div className='mt-4'>
										<a
											href='blog-detail.html'
											className='btn btn-link font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out'>
											Read More <i className='uil uil-arrow-right' />
										</a>
									</div>
								</div>
							</div>
							{/*blog end*/}
							<div className='blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden'>
								<img src='assets/images/blog/06.jpg' alt='' />
								<div className='content p-6'>
									<a
										href='blog-detail.html'
										className='title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out'>
										Change Your Strategy: Find a Business Consultant
									</a>
									<p className='text-slate-400 mt-3'>
										The phrasal sequence of the is now so that many campaign and
										benefit
									</p>
									<div className='mt-4'>
										<a
											href='blog-detail.html'
											className='btn btn-link font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out'>
											Read More <i className='uil uil-arrow-right' />
										</a>
									</div>
								</div>
							</div>
							{/*blog end*/}
							<div className='blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden'>
								<img src='assets/images/blog/07.jpg' alt='' />
								<div className='content p-6'>
									<a
										href='blog-detail.html'
										className='title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out'>
										Everything About Financial Modeling
									</a>
									<p className='text-slate-400 mt-3'>
										The phrasal sequence of the is now so that many campaign and
										benefit
									</p>
									<div className='mt-4'>
										<a
											href='blog-detail.html'
											className='btn btn-link font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out'>
											Read More <i className='uil uil-arrow-right' />
										</a>
									</div>
								</div>
							</div>
							{/*blog end*/}
							<div className='blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden'>
								<img src='assets/images/blog/08.jpg' alt='' />
								<div className='content p-6'>
									<a
										href='blog-detail.html'
										className='title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out'>
										On the other hand we provide denounce
									</a>
									<p className='text-slate-400 mt-3'>
										The phrasal sequence of the is now so that many campaign and
										benefit
									</p>
									<div className='mt-4'>
										<a
											href='blog-detail.html'
											className='btn btn-link font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out'>
											Read More <i className='uil uil-arrow-right' />
										</a>
									</div>
								</div>
							</div>
							{/*blog end*/}
						</div>
						{/*end grid*/}
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
						{/*end grid*/}
					</div>
					{/*end container*/}
					<div className='container md:mt-24 mt-16'>
						<div className='md:flex justify-center'>
							<div className='lg:w-2/3 text-center'>
								<h3 className='md:text-3xl text-2xl md:leading-normal leading-normal font-semibold mb-6'>
									Subscribe our weekly subscription
								</h3>
								<p className='text-slate-400 max-w-xl mx-auto'>
									Add some text to explain benefits of subscripton on your
									services. We'll send you the best of our blog just once a
									weekly.
								</p>
								<div className='mt-8'>
									<div className='text-center subcribe-form'>
										<form className='relative mx-auto max-w-xl'>
											<input
												type='email'
												id='subemail'
												name='name'
												className='pt-4 pr-40 pb-4 pl-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white/70 dark:bg-slate-900/70 border border-gray-100 dark:border-gray-700'
												placeholder='Enter your email id..'
											/>
											<button
												type='submit'
												className='btn absolute top-[2px] right-[3px] h-[46px] bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full'>
												Subcribe Now
											</button>
										</form>
										{/*end form*/}
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*end container*/}
				</section>
			</div>
		</div>
	)
}

export default Blogs
