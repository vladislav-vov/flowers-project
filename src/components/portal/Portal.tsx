import { ReactNode, useState, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';

interface IPortalProps {
	children: ReactNode;
	wrapperId?: string;
}

function createWrapperAndAppendToBody(wrapperId: string) {
	const wrapperElement = document.createElement('div');
	wrapperElement.setAttribute('id', wrapperId);

	document.body.append(wrapperElement);

	return wrapperElement;
}

function Portal({ children, wrapperId = 'portal-wrapper' }: IPortalProps) {
	const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(
		null
	);

	useLayoutEffect(() => {
		let elem = document.getElementById(wrapperId);
		let created = false;

		if (!elem) {
			elem = createWrapperAndAppendToBody(wrapperId);
			created = true;
		}

		setWrapperElement(elem);

		return () => {
			if (created) {
				elem?.remove();
			}
		};
	}, [wrapperId]);

	if (wrapperElement === null) return null;

	return createPortal(children, wrapperElement);
}

export default Portal;
