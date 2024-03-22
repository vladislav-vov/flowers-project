import { useState } from 'react';

import Icon from '../icon/Icon';
import Menu from '../menu/Menu';
import Search from '../search/Search';

import './header.scss';

function Header() {
	const [isInputVisible, setInputVisible] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className="header">
			<Menu
				isOpen={isMenuOpen}
				handleClick={setIsMenuOpen}
			/>
			<div className="header__container">
				<button
					type="button"
					className="header__menu-btn"
					onClick={() => {
						setIsMenuOpen(true);
					}}>
					<span></span>
				</button>
				<a
					href="#"
					className="header__logo-mobile">
					Lover <br /> flower
				</a>
				<nav className="header__nav">
					<a
						href="#"
						className="header__logo">
						<Icon
							name="logo"
							width={34}
							height={75}
							fill="#fff"
						/>
					</a>
					<ul className="header__row">
						<li className="header__item">
							<span className="header__sub-link nav-link">Каталог</span>
							<ul className="sub-menu">
								<li className="sub-menu__item">
									<a
										href="#"
										className="nav-link">
										Популярное
									</a>
								</li>
								<li className="sub-menu__item">
									<a
										href="#"
										className="nav-link">
										Популярное
									</a>
								</li>
								<li className="sub-menu__item">
									<a
										href="#"
										className="nav-link">
										Популярное
									</a>
								</li>
								<li className="sub-menu__item">
									<a
										href="#"
										className="nav-link">
										Популярное
									</a>
								</li>
							</ul>
						</li>
						<li className="header__item">
							<a
								href="#"
								className="nav-link">
								Доставка и оплата
							</a>
						</li>
						<li className="header__item">
							<a
								href="#"
								className="nav-link">
								О нас
							</a>
						</li>
						<li className="header__item">
							<a
								href="#"
								className="nav-link">
								Контакты
							</a>
						</li>
						<li className="header__item">
							<a
								href="#"
								className="nav-link">
								FAQ
							</a>
						</li>
						<li className="header__item header__search">
							<Search
								isVisible={isInputVisible}
								handleClick={setInputVisible}
							/>
						</li>
					</ul>
				</nav>
				<div className="header__actions">
					{!isInputVisible && (
						<a
							href="#"
							className="header__phone">
							<Icon
								name="phone"
								width={14}
								height={16}
							/>
							<span>+375 (29) 113-69-69</span>
						</a>
					)}
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
				</div>
			</div>
		</header>
	);
}

export default Header;
