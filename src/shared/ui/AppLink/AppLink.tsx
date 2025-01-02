import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';
import { Link, LinkProps } from 'react-router-dom';

type AppLinkThemes = 'primary' | 'secondary';

interface AppLinkProps extends LinkProps {
  theme?: AppLinkThemes;
}

export const AppLink = (props: AppLinkProps) => {
  const {
    className,
    to,
    children,
    theme = 'primary',
    ...otherProps
  } = props;
  
  return (
    <Link
      to={to}
      className={classNames(cls.AppLink, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
