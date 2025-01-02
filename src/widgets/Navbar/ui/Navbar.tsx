import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { AppLink } from 'shared/ui/AppLink/AppLink';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink to={'/'} className={cls.mainLink} theme='secondary'>
          Главная
        </AppLink>
        <AppLink to={'/about'} theme='secondary'>
          О сайте
        </AppLink>
      </div>
    </div>
  );
};
