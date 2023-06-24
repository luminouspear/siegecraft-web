export default function getIndicatorColor(index, currentImageIndex, isEven=false) {
	if (index === currentImageIndex) {
		if (isEven === 0) {
			return "bg-white";
		} else {
			return "bg-black";
		}
	} else {
		if (isEven === 0) {
			return "bg-slate-600";
		} else {
			return "bg-gray-400 ";
		}
	}
	return "bg-white";
}
