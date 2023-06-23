import { useState, useEffect, useRef } from "react";

export function useCycleIndex(
	arrayLength,
	interval = 9000,
	shouldCycle = true
) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const intervalIdRef = useRef(null);

	useEffect(() => {
		const cycleIndex = () => {
			setCurrentIndex((prevIndex) => {
				return (prevIndex + 1) % arrayLength;
			});
		};

		if (shouldCycle) {
			intervalIdRef.current = setInterval(cycleIndex, interval);
		}

		return () => {
			clearInterval(intervalIdRef.current);
		};
	}, [shouldCycle, arrayLength, interval]);

	return currentIndex;
}
