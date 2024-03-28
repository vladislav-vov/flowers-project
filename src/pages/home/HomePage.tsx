import { useState, useEffect, useRef } from 'react';

import Header from '../../components/header/Header';
import Icon from '../../components/icon/Icon';
import MoveableComponent from '../../components/moveable/MoveableComponent';

import './homePage.scss';

import promoBgBase from '../../assets/img/promo-layer.png';
import promoBgFront from '../../assets/img/promo-layer-front.png';

function HomePage() {
	const [isHeaderFixed, setIsHeaderFixed] = useState(false);
	const promoSectionRef = useRef<HTMLDivElement | null>(null);
	const promoTitleRef = useRef<HTMLDivElement | null>(null);

	const handleScroll = () => {
		if (promoSectionRef.current && promoTitleRef.current) {
			const promoHeight =
				promoSectionRef.current.offsetHeight -
				parseFloat(getComputedStyle(promoTitleRef.current).top);
			const scrollY = window.scrollY;

			if (window.scrollY > 0 && window.innerWidth < 992) {
				promoTitleRef.current.style.zIndex = '5';
			} else promoTitleRef.current.style.zIndex = '1';

			setIsHeaderFixed(promoHeight <= scrollY);
			calculateLogoSize(promoHeight, scrollY);
		}
	};

	const calculateLogoSize = (promoHeight: number, scrollY: number) => {
		const initialWidth = '16vw';
		if (window.innerWidth >= 992) {
			document.documentElement.style.setProperty(
				'--promo-title-size',
				initialWidth
			);
			return;
		}
		if (promoHeight <= scrollY) {
			document.documentElement.style.setProperty('--promo-title-size', '20px');
			return;
		}
		const newWidth = `calc(${initialWidth} - (${scrollY} / ${promoHeight}) * (${initialWidth} - 20px))`;
		document.documentElement.style.setProperty('--promo-title-size', newWidth);
	};

	useEffect(() => {
		handleScroll();
		window.addEventListener('scroll', handleScroll);
		window.addEventListener('resize', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', handleScroll);
		};
	}, [promoTitleRef.current]);

	return (
		<div
			className="promo"
			ref={promoSectionRef}>
			<Header
				className={[
					'header--transparent',
					`${isHeaderFixed ? 'header--fixed' : ''}`,
				]}
				displayDifferentContent={true}
				showLogo={false}
			/>
			<div className="promo__layer-wrapper">
				<div
					className="promo__layer promo__layer-base"
					style={{
						backgroundImage: `url(${promoBgBase})`,
					}}></div>
				<div
					className="promo__layer promo__layer-front"
					style={{
						backgroundImage: `url(${promoBgFront})`,
					}}></div>
			</div>
			<div className="promo__container">
				<MoveableComponent
					destinationSelector=".promo"
					breakpoint={992}>
					<div
						ref={promoTitleRef}
						className="promo__title promo__title-back">
						LOVER
					</div>
					<div className="promo__title">FLOWER</div>
				</MoveableComponent>
				<div className="promo__content">
					<p className="promo__text">
						Создаём для тех, кто ценит свежесть и изящество цветка
					</p>
					<button className="promo__btn">смотреть каталог</button>
				</div>
				<div className="contacts-panel">
					<ul className="contacts-panel__social social">
						<li>
							<a href="#">
								<Icon
									name="instagram"
									width={25}
									height={25}
								/>
							</a>
						</li>
						<li>
							<a href="#">
								<Icon
									name="whatsup"
									width={25}
									height={25}
								/>
							</a>
						</li>
						<li>
							<a href="#">
								<Icon
									name="viber"
									width={25}
									height={25}
								/>
							</a>
						</li>
					</ul>
					<div className="contacts-panel__actions">
						<a
							href="#"
							className="contacts-panel__text-accent link">
							+375 (29) 113-69-69
						</a>
						<button className="contacts-panel__btn">
							<Icon
								name="phone"
								width={14}
								height={16}
							/>
							заказать звонок
						</button>

						<MoveableComponent
							destinationSelector=".header__actions"
							breakpoint={992}
							flag={isHeaderFixed}>
							<button
								type="button"
								className="cart-btn">
								<Icon
									name="cart"
									width={24}
									height={25}
								/>
								<span className="cart-btn__count">5</span>
							</button>
						</MoveableComponent>
					</div>
				</div>
				<MoveableComponent
					destinationSelector=".promo__layer-wrapper"
					breakpoint={992}>
					<div className="promo__signature">
						<Icon name="promo-signature" />
					</div>
				</MoveableComponent>
			</div>
		</div>
	);
}

export default HomePage;
