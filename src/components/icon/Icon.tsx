import { ComponentProps } from 'react';

import sprite from '../../resources/img/sprite.svg';

interface IIconProps extends ComponentProps<'svg'> {
	name: string;
}

const Icon = ({ name, ...props }: IIconProps) => (
	<svg {...props}>
		<use href={`${sprite}#${name}`} />
	</svg>
);

export default Icon;
