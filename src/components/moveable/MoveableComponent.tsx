import { ReactNode, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

interface IMoveableComponentProps {
	destinationSelector: string;
	breakpoint: number;
	children: ReactNode;
	flag?: boolean;
}

const MoveableComponent = ({
	destinationSelector,
	breakpoint,
	children,
	flag,
}: IMoveableComponentProps) => {
	const [destination, setDestionation] = useState<Element | null>(null);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	const setDestinationElement = () => {
		const elem = document.querySelector(destinationSelector);

		if (elem) {
			setDestionation(elem);
		}
	};

	const adjustDestination = () => {
		if (windowWidth < breakpoint || flag) {
			setDestinationElement();
		} else if (destination !== null || !flag) {
			setDestionation(null);
		}
	};

	useEffect(() => {
		adjustDestination();

		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	useEffect(() => {
		adjustDestination();
	}, [windowWidth, breakpoint, flag]);

	return destination === null ? (
		<>{children}</>
	) : (
		ReactDOM.createPortal(children, destination)
	);
};

export default MoveableComponent;
