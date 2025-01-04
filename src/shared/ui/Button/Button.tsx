import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import { ButtonHTMLAttributes } from 'react';

type ButtonTheme = 'clear';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ButtonTheme;
}

export const Button = (props: ButtonProps) => {
  const { className, children, theme, ...otherProps } = props;

  return (
    <button className={classNames(cls.Button, {}, [className, cls[theme]])} {...otherProps}>
      {children}
    </button>
  );
};
