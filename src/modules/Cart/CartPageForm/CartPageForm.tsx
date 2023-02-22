import { Field, Form, Formik } from 'formik';
import React from 'react';
import * as yup from 'yup';
import { ThreeDots } from 'react-loader-spinner';
import { useAlert } from 'react-alert';

import { Order, PaymentOptions } from '../../../api/types';
import Button from '../../../shared/components/Button';
import Radio from '../../../shared/components/Form/Radio';
import TextInput from '../../../shared/components/Form/TextInput';
import Text from '../../../shared/components/Text';
import { c } from '../../../shared/utils/classNameParser';
import styles from './CartPageForm.module.scss';
import { createOrder } from '../../../api/orders';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { cartItemsSelector } from '../../../redux/cart/selectors';
import { resetCart } from '../../../redux/cart/actions';

interface CheckoutFormValues {
  address: string;
  email: string;
  name: string;
  paymentOption: PaymentOptions;
  phoneNumber: string;
}

interface CartPageFormProps {
  classNames?: string[];
}

const CartPageForm: React.FC<CartPageFormProps> = ({ classNames = [] }) => {
  const cartItems = useAppSelector(cartItemsSelector);
  const dispatch = useAppDispatch();
  const alert = useAlert();

  const schema = (() => {
    // Match Vietnam's phone number. Source: https://www.regextester.com/106725
    const phoneRegExp = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;

    const schema = yup.object().shape({
      email: yup.string().email('Email không hợp lệ'),
      name: yup.string().required('Bạn cần điền tên để tiếp tục'),
      phoneNumber: yup
        .string()
        .matches(phoneRegExp, 'Số điện thoại không hợp lệ')
        .required('Bạn cần điền sđt để tiếp tục'),
      address: yup.string().required('Bạn cần điền địa chỉ để tiếp tục'),
      paymentOption: yup.string().required('Bạn cần chọn cách thanh toán'),
    });
    return schema;
  })();

  const onCheckout = (values: CheckoutFormValues) => {
    const order: Order = {
      payment_method: values.paymentOption,
      billing: {
        first_name: values.name,
        address_1: values.address,
        country: 'Vietnam',
        phone: values.phoneNumber,
      },
      shipping: {
        first_name: values.name,
        address_1: values.address,
        country: 'Vietnam',
      },
      line_items: cartItems.map((item) => ({
        product_id: item.id,
        quantity: item.quantity,
      })),
    };

    return createOrder(order);
  };

  return (
    <div className={c([styles['cart-page-form'], ...classNames])}>
      <Formik
        initialValues={
          {
            email: '',
            name: '',
            phoneNumber: '',
            address: '',
            paymentOption: PaymentOptions.CASH,
          } as CheckoutFormValues
        }
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
          onCheckout(values)
            .then(() => {
              dispatch(() => {
                resetCart();
              });
              alert.success('Đã đặt hàng thành công');
              setSubmitting(false);
            })
            .catch(() => {
              alert.error('Đặt hàng thất bại');
              setSubmitting(false);
            });
        }}
      >
        {({
          values,
          touched,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Text.Body1 classNames={[styles['cart-page-form-heading']]}>
              Thông tin người nhận
            </Text.Body1>
            <Field
              type="text"
              label="Họ tên*"
              name="name"
              placeholder="Họ và tên"
              as={TextInput}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            <Field
              type="text"
              label="Số điện thoại*"
              name="phoneNumber"
              placeholder="Số điện thoại"
              as={TextInput}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phoneNumber}
            />
            <Field
              type="email"
              label="Email"
              name="email"
              placeholder="Email..."
              as={TextInput}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />

            <Field
              type="text"
              label="Địa chỉ*"
              name="address"
              placeholder="Quận Đống Đa"
              as={TextInput}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.address}
            />

            <div className={styles['cart-page-form-line']}></div>

            <Text.Body1 classNames={[styles['cart-page-form-heading']]}>
              Phương thức thanh toán
            </Text.Body1>
            <Field
              type="radio"
              name="paymentOption"
              label="Tiền mặt"
              value={PaymentOptions.CASH}
              onChange={handleChange}
              onBlur={handleBlur}
              classNames={[styles['checkout-form-section-radio-field']]}
              as={Radio}
            />

            <Field
              type="radio"
              label="Chuyển khoản"
              name="paymentOption"
              classNames={[styles['checkout-form-section-radio-field']]}
              value={PaymentOptions.BANK_TRANSFER}
              onChange={handleChange}
              onBlur={handleBlur}
              as={Radio}
            />

            <div className={styles['cart-page-form-btn-wrapper']}>
              <Button
                disabled={
                  isSubmitting ||
                  Object.keys(errors).length > 0 ||
                  Object.keys(touched).length === 0
                }
              >
                {isSubmitting ? (
                  <ThreeDots
                    height="40"
                    width="40"
                    radius="9"
                    color="#4fa94d"
                    ariaLabel="three-dots-loading"
                    visible={true}
                  />
                ) : (
                  'Đặt hàng'
                )}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CartPageForm;
