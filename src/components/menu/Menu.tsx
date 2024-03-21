import { useState } from 'react';
import classNames from 'classnames';

import Search from '../search/Search';
import Icon from '../icon/Icon';

import './menu.scss';

interface IMenuProps {
	isOpen: boolean;
	handleClick: (state: boolean) => void;
}

function Menu({ isOpen, handleClick }: IMenuProps) {
	const [isInputVisible, setInputVisible] = useState(false);

	return (
		<div
			className={classNames('menu', {
				'menu--open': isOpen,
			})}>
			<div className="menu__body">
				<button
					type="button"
					className="menu__close">
					<Icon
						name="close"
						width={14}
						height={14}
						onClick={() => handleClick(false)}
					/>
				</button>
				<a
					href="#"
					className="logo mb-10">
					<span>L</span>
					<span>F</span>
				</a>
				<Search
					isVisible={isInputVisible}
					handleClick={setInputVisible}
					className="mb-10"
				/>
				<ul className="menu__list mb-20">
					<li>
						<a
							href="#"
							className="nav-link">
							Каталог
						</a>
					</li>
					<li>
						<a
							href="#"
							className="nav-link">
							Доставка и оплата
						</a>
					</li>
					<li>
						<a
							href="#"
							className="nav-link">
							О нас
						</a>
					</li>
					<li>
						<a
							href="#"
							className="nav-link">
							Контакты
						</a>
					</li>
					<li>
						<a
							href="#"
							className="nav-link">
							FAQ
						</a>
					</li>
					<li>
						<a
							href="#"
							className="nav-link">
							для корпоративных клиентов
						</a>
					</li>
				</ul>
				<ul className="menu__contacts mb-10">
					<li>
						<a
							href="#"
							className="menu__text--accent">
							zakaz@loverflower.by
						</a>
						<p className="menu__text">
							Доставка 24/7 по договоренности с оператором
						</p>
					</li>
					<li>
						<span className="menu__text--accent">ул. Тимирязева 67</span>
						<p className="menu__text">
							10:00 до 21:00 <br /> без выходных
						</p>
					</li>
				</ul>
				<p className="menu__policy mb-10">
					Политика конфиденциальности <br /> Обработка персональных данных
				</p>
				<a
					href="#"
					className="nav-link nav-link--underline mb-20">
					<span>+375 (29) 113-69-69</span>
				</a>
				<ul className="social social--row">
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
			</div>
		</div>
	);
}

export default Menu;
