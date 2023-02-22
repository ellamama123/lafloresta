import React, { useEffect, useState } from 'react';

import assets from '../../assets';
import { IconProps } from '../../assets/icons/types';
import Logo from '../Logo';
import Text from '../Text';
import styles from './Footer.module.scss';

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  const footerContactItems: FooterContactItemProps[] = [
    {
      Icon: assets.Phone,
      displayText: '092 333 86 68',
      copyText: '0923338668',
    },
    {
      Icon: assets.Instagram,
      displayText: '59 Văn Miếu - Đống Đa - Hà Nội',
      copyText: '59 Văn Miếu - Đống Đa - Hà Nội',
    },
    {
      Icon: assets.Mail,
      displayText: 'info@lafloresta.co',
      copyText: 'info@lafloresta.co',
    },
  ];

  return (
    <footer className={styles['footer']}>
      <Logo mode="secondary" />
      <ul className={styles['footer-contact']}>
        {footerContactItems.map((item) => (
          <FooterContactItem key={item.displayText} {...item} />
        ))}
      </ul>
    </footer>
  );
};

interface FooterContactItemProps {
  Icon: React.FC<IconProps>;
  displayText: string;
  url?: string;
  copyText?: string;
}
const FooterContactItem: React.FC<FooterContactItemProps> = ({
  Icon,
  displayText,
  copyText,
  url,
}) => {
  const [currentDisplayText, setCurrentDisplayText] = useState('');
  useEffect(() => {
    setCurrentDisplayText(displayText);
  }, [displayText]);

  const COPIED_MESSAGE_TO_DISPLAY_TEXT_DURATION = 700;
  const WrapperNode: React.ElementType = url ? 'a' : 'button';
  const wrapperProps = {
    href: url,
    target: url ? '_blank' : undefined,
    onClick: !url
      ? () => {
          const textToCopy = copyText ?? displayText;
          navigator.clipboard.writeText(textToCopy).then(() => {
            setCurrentDisplayText('Đã copy thành công!');
            setTimeout(() => {
              setCurrentDisplayText(displayText);
            }, COPIED_MESSAGE_TO_DISPLAY_TEXT_DURATION);
          });
        }
      : undefined,
  };

  return (
    <li>
      <WrapperNode
        className={styles['footer-contact-item']}
        key={displayText}
        {...wrapperProps}
      >
        <Icon mode="secondary" />
        <Text.Body2 classNames={[styles['footer-contact-item-text']]}>
          {currentDisplayText}
        </Text.Body2>
      </WrapperNode>
    </li>
  );
};

export default Footer;
