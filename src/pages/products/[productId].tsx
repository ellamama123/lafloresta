import { ParsedUrlQuery } from 'querystring';

import { GetStaticPaths, GetStaticPropsContext, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { AiOutlinePlus as Plus, AiOutlineMinus as Minus } from 'react-icons/ai';
import { useAlert } from 'react-alert';

import { extractTextFromHTML } from '../../shared/utils/string';
import ProductDetailsImage, {
  ProductDetailsImageItem,
} from '../../modules/Products/ProductDetailsImage';
import styles from '../../modules/Products/ProductDetails.module.scss';
import Accordion from '../../shared/components/Accordion';
import Button from '../../shared/components/Button';
import Text from '../../shared/components/Text';
import Tab from '../../shared/components/Tab';
import HorizontalLine from '../../shared/components/HorizontalLine';
import { Size } from '../../shared/types/size';
import { useAppDispatch } from '../../redux/hooks';
import * as cartActions from '../../redux/cart/actions';
import { formatVnd } from '../../shared/utils/currency';
import { getProductById } from '../../api/products';
import { ProductDTO } from '../../api/types';
// import { getDeliveryInfo, getReturnsInfo } from '../../api/posts';

interface ProductDetailsContext extends ParsedUrlQuery {
  productId: string;
  deliveryInfo: string;
  returnsInfo: string;
}

export async function getStaticProps(
  context: GetStaticPropsContext<ProductDetailsContext>
) {
  if (!context.params?.productId) throw new Error('No PID');

  const { productId } = context.params;

  if (isNaN(+productId)) throw new Error('Invalid PID');

  const productDetailsPromise = getProductById(+productId);
  // const deliveryInfoPromise = getDeliveryInfo();
  // const returnsInfoPromise = getReturnsInfo();

  const [productDetails] = await Promise.all([
    productDetailsPromise,
    // deliveryInfoPromise,
    // returnsInfoPromise,
  ]);

  return {
    props: {
      productDetails
    },
  };
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking', //indicates the type of fallback
  };
};

interface ProductDetailsProps {
  productDetails: ProductDTO;
  deliveryInfo: string;
  returnsInfo: string;
}

const ProductDetails: NextPage<ProductDetailsProps> = ({
  productDetails,
  deliveryInfo,
  returnsInfo,
}) => {
  const alert = useAlert();
  const router = useRouter();
  const { productId } = router.query;

  const [selectedSize, setSelectedSize] = useState<Size>(Size.S);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useAppDispatch();

  const addQuantity = () => {
    setQuantity((quantity) => quantity + 1);
  };

  const reduceQuantity = () => {
    if (quantity > 1) {
      setQuantity((quantity) => quantity - 1);
    }
  };

  const resetQuantity = () => {
    setQuantity(1);
  };

  const addItem = () => {
    dispatch(
      cartActions.addItem({
        id: productDetails.id,
        size: selectedSize,
        name: productDetails.name,
        quantity,
        price: +productDetails.price,
      })
    );

    alert.success('Đã thêm vào giỏ thành công');
    resetQuantity();
  };

  const images: ProductDetailsImageItem[] = productDetails.images.map(
    (image) => ({
      imgSrc: image.src,
      key: String(image.id),
      alt: image.alt,
    })
  );

  const accordionItems = [
    {
      title: 'Chi tiết',
      details: extractTextFromHTML(productDetails.description),
    },
    {
      title: 'Vận chuyển',
      details: deliveryInfo,
    },
    {
      title: 'Đổi trả',
      details: returnsInfo,
    },
  ];

  return (
    <>
      <Head>
        <title>Product: {productId} </title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles['product-details']}>
        <ProductDetailsImage images={images} />

        <div className={styles['product-details-information']}>
          <Text.H3>{productDetails.name}</Text.H3>

          <div className={styles['product-details-information-size']}>
            <Text.Body2
              classNames={[styles['product-details-information-size-label']]}
            >
              Size:
            </Text.Body2>
            <Tab
              classNames={[styles['product-details-information-size-label']]}
              items={[
                {
                  label: Size.S,
                  key: Size.S,
                },
                {
                  label: Size.M,
                  key: Size.M,
                },
                {
                  label: Size.L,
                  key: Size.L,
                },
              ]}
              isItemSelected={(item) => item.label === selectedSize}
              onTabSelect={(item) => setSelectedSize(item.label)}
            />
          </div>

          <Text.Body2
            classNames={[styles['product-details-information-size-label']]}
          >{`S < 60cm | M 60-120cm | L 60-120cm`}</Text.Body2>

          <HorizontalLine
            classNames={[styles['product-details-information-divider']]}
          />

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginTop: '1rem',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Button
                onClick={reduceQuantity}
                disabled={quantity === 1}
                mode="text"
              >
                <Minus />
              </Button>

              <Text.Body1>{quantity}</Text.Body1>

              <Button onClick={addQuantity} mode="text">
                <Plus />
              </Button>
            </div>

            <Text.Body1>{formatVnd(+productDetails.price)}</Text.Body1>
          </div>

          <div className={styles['product-details-item-button-wrapper']}>
            <Button
              onClick={addItem}
              classNames={[styles['product-details-item-button']]}
            >
              <Text.Body1
                classNames={[styles['product-details-item-button-text']]}
              >
                THÊM VÀO GIỎ
              </Text.Body1>
            </Button>
          </div>

          {accordionItems.map(({ title, details }) => (
            <Accordion
              classNames={[styles['product-details-information-accordion']]}
              key={title}
              title={title}
              details={details}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default ProductDetails;


