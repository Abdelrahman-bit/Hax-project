const Breadcrumb = ({ items }) => {
	return (
		<nav className='flex items-center gap-2 text-sm text-gray-600 mb-6 overflow-x-auto'>
			{items.map((item, index) => (
				<div key={index}>
					<a
						href='#'
						className={`whitespace-nowrap hover:text-blue-600 ${
							index === items.length - 1 ? "text-gray-900 font-medium" : ""
						}`}
					>
						{item}
					</a>
					{index < items.length - 1 && <span className='text-gray-400'>›</span>}
				</div>
			))}
		</nav>
	);
};

export default Breadcrumb;
