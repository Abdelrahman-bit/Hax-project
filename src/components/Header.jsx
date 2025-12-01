import { Menu } from 'lucide-react';
import React, { useState } from 'react';
const Header = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className='bg-white shadow-sm'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex items-center justify-between h-16'>
					<div className='flex items-center gap-8'>
						<img src='/logo.png' alt='Comprice Logo' className='h-8 w-auto' />
						<nav className='hidden md:flex items-center gap-6'>
							<a href='#' className='text-gray-700 hover:text-blue-600'>
								Home
							</a>
							<a href='#' className='text-gray-700 hover:text-blue-600'>
								New Offers
							</a>
							<a href='#' className='text-gray-700 hover:text-blue-600'>
								Biggest Sales
							</a>
						</nav>
					</div>

					<div className='flex items-center gap-4'>
						<button className='hidden md:block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700'>
							Login
						</button>
						<button className='hidden md:block px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50'>
							Sign up
						</button>
						<button className='md:hidden p-2' onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
							<Menu className='w-6 h-6' />
						</button>
					</div>
				</div>

				{mobileMenuOpen && (
					<div className='md:hidden pb-4 space-y-2'>
						<a href='#' className='block py-2 text-gray-700'>
							Home
						</a>
						<a href='#' className='block py-2 text-gray-700'>
							New Offers
						</a>
						<a href='#' className='block py-2 text-gray-700'>
							Biggest Sales
						</a>
						<div className='pt-2 space-y-2'>
							<button className='w-full px-6 py-2 bg-blue-600 text-white rounded-lg'>Login</button>
							<button className='w-full px-6 py-2 border border-gray-300 rounded-lg'>Sign up</button>
						</div>
					</div>
				)}
			</div>
		</header>
	);
};

export default Header;