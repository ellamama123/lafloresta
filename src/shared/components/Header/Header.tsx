import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { cartItemQuantitySelector } from '../../../redux/cart/selectors';
import { useAppSelector } from '../../../redux/hooks';
import assets from '../../assets';
import {
  ENABLE_ABOUT_US,
  ENABLE_BLOGS,
  ENABLE_COLLECTIONS,
  ENABLE_PRODUCTS,
} from '../../flags/features';
import Button from '../Button';
import Logo from '../Logo';
import Text from '../Text';
import styles from './Header.module.scss';

interface HeaderNavItem {
  display: string;
  url: string;
  isEnabled: boolean;
}

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  const headerNavItems: HeaderNavItem[] = [
    {
      display: 'Sản phẩm',
      url: '/products',
      isEnabled: ENABLE_PRODUCTS,
    },
    {
      display: 'Bộ sưu tập',
      url: '/collections',
      isEnabled: ENABLE_COLLECTIONS,
    },
    {
      display: 'Về chúng tôi',
      url: '/about-us',
      isEnabled: ENABLE_ABOUT_US,
    },
    {
      display: 'Blogs',
      url: '/blogs',
      isEnabled: ENABLE_BLOGS,
    },
  ];

  const router = useRouter();
  const cartItemsQuantity = useAppSelector(cartItemQuantitySelector);
  const [currentRoute, setCurrentRoute] = useState('');

  const navigateToCart = () => {
    router.push('/cart');
  };

  useEffect(() => {
    setCurrentRoute(router.pathname);
  }, [router.pathname]);

  return (
    <header className={styles['header']}>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>

      <div className={styles['header-items']}>
        <nav className={styles['header-items-nav']}>
          <ul className={styles['header-items-nav-list']}>
            {headerNavItems.map(({ display, url, isEnabled }) =>
              isEnabled ? (
                <li className={styles['header-items-nav-list-item']} key={url}>
                  <Link href={url}>
                    <a>
                      <Text.Body2
                        classNames={[
                          currentRoute.includes(url)
                            ? styles['header-items-nav-list-item-selected']
                            : '',
                        ]}
                      >
                        {display}
                      </Text.Body2>
                    </a>
                  </Link>
                </li>
              ) : null
            )}
          </ul>
        </nav>

        <ul className={styles['header-items-links']}>
          <li className={styles['header-items-links-item-contact']}>
            <assets.Phone />
            <Text.Body2
              classNames={[styles['header-items-links-item-contact-number']]}
            >
              097 422 08 97
            </Text.Body2>
          </li>
          {/* <li className={styles['header-items-links-item']}>
            <assets.Search />
          </li> */}
          <li className={styles['header-items-links-item']}>
            <Button
              classNames={[styles['header-items-links-item-button']]}
              mode="text"
              onClick={navigateToCart}
            >
              <assets.Badge count={cartItemsQuantity}>
                <assets.CartIcon />
              </assets.Badge>
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
