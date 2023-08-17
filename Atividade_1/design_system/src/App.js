import React from 'react';
import styles from './App.module.css';
import logo from './serasa-logo-full.svg';
const Color = {
  'dark-low': 'rgba(0,0,0,0.44)',
  'dark-medium': 'rgba(0,0,0,0.60)',
  'dark-high': 'rgba(0,0,0,0.80)',
  magenta: '#E63888',
  'light-solid': '#FFFFFF',
  'light-high': 'rgba(255,255,255,0.8)',
};

const HeadingDesktop = {
  display: {
    fontFamily: 'Roboto',
    fontSize: '48px',
    lineHeight: '52px',
    weight: '700',
    letterSpacing: '-1.2',
  },
  'heading-l': {
    fontFamily: 'Roboto',
    fontSize: '40px',
    lineHeight: '44px',
    weight: '700',
    letterSpacing: '-1',
  },
  'heading-m': {
    fontFamily: 'Roboto',
    fontSize: '32px',
    lineHeight: '36px',
    weight: '700',
    letterSpacing: '-0.8',
  },
  'heading-s': {
    fontFamily: 'Roboto',
    fontSize: '24px',
    lineHeight: '28px',
    weight: '700',
    letterSpacing: '-0.6',
  },
  'heading-xs': {
    fontFamily: 'Roboto',
    fontSize: '20px',
    lineHeight: '24px',
    weight: '700',
  },
  subheading: {
    fontFamily: 'Roboto',
    fontSize: '16px',
    lineHeight: '20px',
    weight: '700',
  },
  'body-m-regular': {
    fontFamily: 'Roboto',
    fontSize: '16px',
    lineHeight: '24px',
    weight: '400',
  },
  'body-m-bold': {
    fontFamily: 'Roboto',
    fontSize: '16px',
    lineHeight: '24px',
    weight: '700',
  },
};
const HeadingMobile = {
  display: {
    fontFamily: 'Roboto',
    fontSize: '40px',
    lineHeight: '44px',
    weight: '700',
    letterSpacing: '-1.2',
  },
  'heading-l': {
    fontFamily: 'Roboto',
    fontSize: '32px',
    lineHeight: '36px',
    weight: '700',
    letterSpacing: '-1',
  },
  'heading-m': {
    fontFamily: 'Roboto',
    fontSize: '24px',
    lineHeight: '28px',
    weight: '700',
    letterSpacing: '-0.8',
  },
  'heading-s': {
    fontFamily: 'Roboto',
    fontSize: '20px',
    lineHeight: '24px',
    weight: '700',
    letterSpacing: '-0.6',
  },
  'heading-xs': {
    fontFamily: 'Roboto',
    fontSize: '18px',
    lineHeight: '22px',
    weight: '700',
  },
  subheading: {
    fontFamily: 'Roboto',
    fontSize: '16px',
    lineHeight: '20px',
    weight: '700',
  },
  'body-m-regular': {
    fontFamily: 'Roboto',
    fontSize: '16px',
    lineHeight: '24px',
    weight: '400',
  },
  'body-m-bold': {
    fontFamily: 'Roboto',
    fontSize: '16px',
    lineHeight: '24px',
    weight: '700',
  },
};

const App = ({
  value,
  color = 'dark-high',
  heading = 'display',
  screenSize = 'desktop',
}) => {
  return (
    <div className={styles.main}>
      <header className={styles.header}>
        <img src={logo} alt="logo" />
      </header>
      <span
        className={styles.span}
        style={{
          color: Color[color],
          ...(screenSize === 'desktop'
            ? HeadingDesktop[heading]
            : HeadingMobile[heading]),
        }}
      >
        {value}
      </span>
    </div>
  );
};

export default App;
