import React from 'react';

import {
  cartItemsSelector,
  cartTotalPriceSelector,
} from '../../../redux/cart/selectors';
import { useAppSelector } from '../../../redux/hooks';
import HorizontalLine from '../../../shared/components/HorizontalLine';
import Text from '../../../shared/components/Text';
import { c } from '../../../shared/utils/classNameParser';
import { formatVnd } from '../../../shared/utils/currency';
import CartPreviewItem from '../CartPreviewItem';
import FieldItem from '../FieldItem';
import styles from './Preview.module.scss';

interface PreviewProps {
  classNames: string[];
}

const Preview: React.FC<PreviewProps> = ({ classNames = [] }) => {
  const cartItems = useAppSelector(cartItemsSelector);
  const totalPrice = useAppSelector(cartTotalPriceSelector);

  return (
    <article className={c([styles['preview'], ...classNames])}>
      {cartItems.map((item) => (
        <CartPreviewItem key={`${item.id}${item.size}`} item={item} />
      ))}
      <HorizontalLine />
      <FieldItem
        classNames={[styles['preview-result-item']]}
        texts={['Giá tạm tính', `${formatVnd(totalPrice)}`]}
        TextComponent={Text.Body2}
      />
      <Text.Body2 classNames={[styles['preview-result-item']]}>
        Phí vận chuyển
      </Text.Body2>
      <Text.Body2 classNames={[styles['preview-result-warning']]}>
        * Phí vận chuyển sẽ được nhân viên thông báo cụ thể sau khi quý khách
        đặt hàng thành công
      </Text.Body2>
      <HorizontalLine />
      <FieldItem
        classNames={[styles['preview-result-item']]}
        texts={['Tổng tiền', `${formatVnd(totalPrice)}`]}
        TextComponent={Text.Body1}
      />
    </article>
  );
};

export default Preview;
