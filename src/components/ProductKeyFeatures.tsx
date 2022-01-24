import React from 'react';
import clsx from 'clsx';
import styles from './ProductKeyFeatures.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '1.2	Key Features',
    image: '/img/sensor-node-sn-sf-001.jpg',
    description: (
      <ul>
        <li>Small &amp; Discrete: blends into your home.</li>
        <li>Secure.</li>
        <li>Affordable.</li>
        <li>Highly accurate.</li>
        <li>Easy to set up.</li>
        <li>Wi-Fi / Sigfox LPWAN - best-in-class RF performance.</li>
        <li>Android / iOS app.</li>
        <li>Web portal.</li>
        <li>Fully integrated analytics reporting.</li>
        <li>Made in New Zealand.</li>
      </ul>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <>
      <div className={clsx('col col--5')}>
        <div className={styles.productKeyFeatureImage}>
          <img className={styles.featureSvg} alt={title} src={image} />
        </div>
        <div className="text--center padding-horiz--md">
          Figure 1: Sensor Node SN-SF-001
        </div>
      </div>
      <div className={clsx('col col--7')}>
        <div className="text--left padding-horiz--md">
          <h2>{title}</h2>
          {description}
        </div>
      </div>
    </>
  );
}

export default function ProductKeyFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}