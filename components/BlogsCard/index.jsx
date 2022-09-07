const BlogsCard = ({ item }) => {
	return (
		<div className='blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden'>
			<img src={item.images[0]} />
			<div className='content p-6'>
				<a
					href='blog-detail.html'
					className='title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out'>
					Design your apps in your own way
				</a>
				<p className='text-slate-400 mt-3'>
					The phrasal sequence of the is now so that many campaign and benefit
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
	)
}

export default BlogsCard
