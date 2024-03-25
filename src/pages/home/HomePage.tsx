import { useState, useEffect, useRef } from 'react';

import PageHeader from '../../components/header/PageHeader';
import Icon from '../../components/icon/Icon';
import MoveableComponent from '../../components/moveable/MoveableComponent';

import './homePage.scss';

import promoBgBase from '../../resources/img/promo-layer.png';
import promoBgFront from '../../resources/img/promo-layer-front.png';

function HomePage() {
	const [isHeaderFixed, setIsHeaderFixed] = useState(false);
	const promoSectionRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const handleScroll = () => {
			if (promoSectionRef.current) {
				const promoSectionBottom = promoSectionRef.current.offsetHeight;
				const windowHeight = window.scrollY;
				setIsHeaderFixed(promoSectionBottom <= windowHeight);
			}
		};

		handleScroll();

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div
			className="promo"
			ref={promoSectionRef}>
			<PageHeader className={`${isHeaderFixed ? 'header--fixed' : ''}`} />
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
				<div className="promo__title promo__title-back">LOVER</div>
				<div className="promo__title">FLOWER</div>
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
			</div>
		</div>
	);
}

export default HomePage;
