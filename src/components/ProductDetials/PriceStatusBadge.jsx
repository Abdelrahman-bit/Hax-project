const PriceStatusBadge = ({ status }) => {
	const getStatusColor = (status) => {
		switch (status.toLowerCase()) {
			case "good":
				return "text-green-600 bg-green-50";
			case "not good":
				return "text-red-600 bg-red-50";
			default:
				return "text-gray-600 bg-gray-50";
		}
	};

	return <span className={`text-sm font-medium px-3 py-1 rounded ${getStatusColor(status)}`}>{status}</span>;
};
export default PriceStatusBadge;