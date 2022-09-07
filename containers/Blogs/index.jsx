import TitleMain from '../../components/TitleMain'
import data from 'data/certificate.data'
import BlogsCard from 'components/BlogsCard'
const Blogs = () => {
	return (
		<div className='container md:mt-24 mt-16'>
			<TitleMain
				top='Blogs'
				title='Latest News'
				text="Obviously I'm a Web Designer. Experienced with all stages of the
					development cycle for dynamic web projects."
			/>

			{/*end grid*/}
			<div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]'>
				{data.map((item, index) => (
					<BlogsCard key={index} item={item} />
				))}
			</div>
			{/*end grid*/}
		</div>
	)
}

export default Blogs
