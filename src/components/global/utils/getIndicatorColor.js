export default function getIndicatorColor(index, currentImageIndex, isEven=true) {
	if (index === currentImageIndex) {
		if (isEven) {
			return "bg-white opacity-90";
		} else {
			return "bg-black opacity-90";
		}
	} else {
		if (isEven) {
			return "bg-slate-600 opacity-80";
		} else {
			return "bg-gray-400 opacity-80";
		}
	}
	return "bg-white";
}
