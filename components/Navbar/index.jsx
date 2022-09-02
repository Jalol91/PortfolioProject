import Link from 'next/link'
const Navbar = () => {
	const navbarLinks = [
		{
			title: 'Home',
			url: '/',
		},
		{
			title: 'Portfolio',
			url: '/portfolios',
		},
		{
			title: 'Blogs',
			url: '/blogs',
		},
		{
			title: 'Contacts',
			url: '/contacts',
		},
	]
	return (
		<nav id='topnav' className='defaultscroll is-sticky'>
			<div className='container'>
				{/* Logo container*/}
				<Link href={'/'}>
					<a className='logo pl-0'>
						<img
							src='assets/images/logo-dark.png'
							className='inline-block dark:hidden'
							alt=''
						/>
						<img
							src='assets/images/logo-light.png'
							className='hidden dark:inline-block'
							alt=''
						/>
					</a>
				</Link>
				{/* End Logo container*/}
				<div className='menu-extras'>
					<div className='menu-item'>
						{/* Mobile menu toggle*/}
						<a className='navbar-toggle' id='isToggle' onclick='toggleMenu()'>
							<div className='lines'>
								<span />
								<span />
								<span />
							</div>
						</a>
						{/* End mobile menu toggle*/}
					</div>
				</div>
				<div id='navigation'>
					{/* Navigation Menu*/}
					<ul className='navigation-menu'>
						{navbarLinks.map((item, index) => (
							<li key={index}>
								<Link href={item.url}>
									<a className='sub-menu-item'>{item.title}</a>
								</Link>
							</li>
						))}
					</ul>
					{/*end navigation menu*/}
				</div>
				{/*end navigation*/}
			</div>
			{/*end container*/}
		</nav>
	)
}

export default Navbar
