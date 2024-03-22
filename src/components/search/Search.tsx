import { useEffect, useRef } from 'react';
import classNames from 'classnames';

import Icon from '../icon/Icon';

import './search.scss';

interface ISearchProps {
	isVisible: boolean;
	className?: string;
	handleClick: (state: boolean) => void;
}

function Search({ isVisible, handleClick, className }: ISearchProps) {
	const inputRef = useRef<HTMLInputElement | null>(null);

	// useEffect(() => inputRef.current?.focus(), []);

	return (
		<form
			className={classNames('search', className, {
				'search--open': isVisible,
			})}>
			<button
				type="submit"
				className="search__btn"
				disabled={!isVisible}>
				<Icon
					name="search"
					width={14}
					height={14}
					fill="#fff"
					className="search__icon"
				/>
			</button>
			<div className="search__field">
				{!isVisible && (
					<span
						className="search__text"
						onClick={() => {
							inputRef.current?.focus();
							handleClick(true);
						}}>
						Поиск
					</span>
				)}

				<input
					ref={inputRef}
					type="text"
					className={classNames('search__input', {
						'search__input--open': isVisible,
					})}
					placeholder="Введите свой запрос"
				/>
				{isVisible && (
					<Icon
						name="close"
						width={14}
						height={14}
						className="search__close"
						onClick={() => handleClick(false)}
					/>
				)}
			</div>
		</form>
	);
}

export default Search;
