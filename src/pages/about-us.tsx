import { NextPage } from 'next';
import Head from 'next/head';

import assets from '../shared/assets';
import InfoSection from '../shared/components/InfoSection';
import PageHeader from '../shared/components/PageHeader';
import styles from '../modules/AboutUs/AboutUs.module.scss';
import ShowcaseCarousel from '../modules/AboutUs/ShowcaseCarousel';

const AboutUs: NextPage = () => {
  return (
    <>
      <Head>
        <title>La Floresta</title>
        <meta name="description" content="Refined Photography Studio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <PageHeader title="Về Chúng Tôi" />

        <div className={styles['about-us-info']}>
          <InfoSection
            title="Lịch sử"
            imageSrc={assets.Showroom}
            paragraphs={[
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.',
            ]}
            ctaDisplay="Tìm hiểu thêm"
            classNames={[styles['about-us-info-item']]}
            reverse
          />
          <InfoSection
            title="Thương hiệu"
            imageSrc={assets.Showroom}
            paragraphs={[
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.',
            ]}
            ctaDisplay="Tìm hiểu thêm"
            classNames={[styles['about-us-info-item']]}
          />
          <InfoSection
            title="Dự án tiêu biểu"
            imageSrc={assets.Showroom}
            paragraphs={[
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.',
            ]}
            ctaDisplay="Tìm hiểu thêm"
            reverse
          />
        </div>
        <ShowcaseCarousel />
      </section>
    </>
  );
};

export default AboutUs;
