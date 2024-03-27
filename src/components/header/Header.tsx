import { useState } from 'react';
import classNames from 'classnames';

import Icon from '../icon/Icon';
import Menu from '../menu/Menu';
import Search from '../search/Search';
import Portal from '../portal/Portal';

import './header.scss';

interface IHeaderProps {
	className?: string[] | string;
	displayDifferentContent?: boolean;
	showLogo?: boolean;
}

function MainHeader({
	className,
	displayDifferentContent = false,
	showLogo = true,
}: IHeaderProps) {
	const [isInputVisible, setInputVisible] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className={classNames('header', className)}>
			<Portal>
				<Menu
					isOpen={isMenuOpen}
					handleClick={setIsMenuOpen}
				/>
			</Portal>
			<div className="header__container">
				<button
					type="button"
					className="header__menu-btn"
					onClick={() => {
						setIsMenuOpen(true);
					}}>
					<span></span>
				</button>
				{showLogo && (
					<a
						href="#"
						className="header__logo-mobile">
						Lover <br /> flower
					</a>
				)}

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
					{!isInputVisible && !displayDifferentContent && (
						<>
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
						</>
					)}

					{displayDifferentContent && (
						<ul
							className={classNames('header__contacts', {
								'header__contacts-hidden': isInputVisible,
							})}>
							<li className="header__contacts-item">
								<a
									href="#"
									className="header__contacts-text--accent">
									zakaz@loverflower.by
								</a>
								<p className="header__contacts-text--light">
									Доставка 24/7 по договоренности с оператором
								</p>
							</li>
							<li className="header__contacts-item">
								<span className="header__contacts-text--accent">
									ул. Тимирязева 67
								</span>
								<p className="header__contacts-text--light">
									10:00 до 21:00 <br /> без выходных
								</p>
							</li>
						</ul>
					)}
				</div>
			</div>
		</header>
	);
}

export default MainHeader;
