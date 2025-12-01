import { mockData } from "@/data/mocking";

const Footer = () => {
	return (
		<footer className='bg-gray-50 mt-12'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
				<div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
					<div>
						<img src='/logo.png' alt='Comprice Logo' className='h-8 w-auto mb-4' />
						<p className='text-gray-600 text-sm'>
							Compare prices from all your favorite stores and find the best deal instantly.
						</p>
						<p className='text-gray-500 text-sm mt-4'>© 2025 Copyrights</p>
					</div>

					<div>
						<h3 className='font-bold mb-4'>Top Categories</h3>
						<ul className='space-y-2 text-sm text-gray-600'>
							<li>
								<a href='#' className='hover:text-blue-600'>
									Electronics
								</a>
							</li>
							<li>
								<a href='#' className='hover:text-blue-600'>
									Clothes
								</a>
							</li>
							<li>
								<a href='#' className='hover:text-blue-600'>
									Home & Kitchen
								</a>
							</li>
							<li>
								<a href='#' className='hover:text-blue-600'>
									Health & Beauty
								</a>
							</li>
							<li>
								<a href='#' className='hover:text-blue-600'>
									Games
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h3 className='font-bold mb-4'>Top Searches</h3>
						<div className='flex flex-wrap gap-2'>
							{mockData.quickLinks.map((link, index) => (
								<span key={index} className='px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm'>
									{link}
								</span>
							))}
						</div>
					</div>

					<div>
						<h3 className='font-bold mb-4'>Subscribe Newsletter</h3>
						<div className='flex gap-2'>
							<input
								type='email'
								placeholder='Enter You Email'
								className='flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm'
							/>
							<button className='px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700'>GO</button>
						</div>
					</div>
				</div>

				<div className='mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600'>
					<div className='flex gap-4'>
						<a href='#' className='hover:text-blue-600'>
							Terms
						</a>
						<a href='#' className='hover:text-blue-600'>
							Conditions
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
