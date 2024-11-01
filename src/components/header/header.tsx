import classNames from 'classnames';
import { Link, NavLink } from '@remix-run/react';
import { ROUTES } from '~/router/config';
import styles from './header.module.scss';
import Group1Png from '../../assets/group 1.png';
import ButtonImagePng from '../../assets/button image.png';

export interface HeaderProps {
    className?: string;
}

export const Header = ({ className }: HeaderProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Link to="/" className={styles.logo}>
                <img src={Group1Png} alt="" className={styles.img1} />
            </Link>
            <div className={styles.menu}>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        classNames(styles.menuButton, { [styles.active]: isActive })
                    }
                >
                    Open for work
                </NavLink>
                <NavLink
                    to={ROUTES.about.to()}
                    className={({ isActive }) =>
                        classNames(styles.menuButton, { [styles.active]: isActive })
                    }
                >
                    <button className={classNames(styles.button1, styles.button1)}>
                        <img
                            className={classNames(styles.img2, styles.img2)}
                            src={ButtonImagePng}
                            alt='buttons'
                        />
                        Start a Project
                    </button>
                </NavLink>
            </div>
        </div>
    );
};
