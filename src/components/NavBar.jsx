import { Menu } from 'lucide-react';
import { mockData } from '../data/mocking';
const NavigationBar = () => {
	return (
		<nav className='bg-indigo-900 text-white'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex items-center overflow-x-auto gap-6 py-3 no-scrollbar '>
					<button className='flex items-center gap-2 whitespace-nowrap'>
						<Menu className='w-5 h-5' />
						<span>All</span>
					</button>
					{mockData.navCategories.map((category, index) => (
						<a key={index} href='#' className='whitespace-nowrap hover:text-blue-300'>
							{category}
						</a>
					))}
				</div>
			</div>
		</nav>
	);
};

export default NavigationBar;