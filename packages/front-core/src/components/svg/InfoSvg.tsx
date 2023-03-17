import { Colors } from '@theme/commonPalette';
import React from 'react';

const InfoSvg = () => {
  return (
    <svg
      width="45"
      height="44"
      viewBox="0 0 45 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 22C0 9.84974 9.84974 0 22 0H23C35.1503 0 45 9.84974 45 22V22C45 34.1503 35.1503 44 23 44H22C9.84973 44 0 34.1503 0 22V22Z"
        fill={Colors.carotte}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34 11H16V17V33H29C31.7614 33 34 30.7614 34 28V11ZM14 11V16H13C10.7909 16 9 17.7909 9 20V29C9 32.3137 11.6863 35 15 35H29C32.866 35 36 31.866 36 28V11C36 9.89543 35.1046 9 34 9H16C14.8954 9 14 9.89543 14 11ZM11 29C11 30.8638 12.2748 32.4299 14 32.874V18H13C11.8954 18 11 18.8954 11 20V29ZM24.75 13C22.9862 13 21.5 14.3919 21.5 16.1774C21.5 17.9629 22.9862 19.3548 24.75 19.3548C26.5138 19.3548 28 17.9629 28 16.1774C28 14.3919 26.5138 13 24.75 13ZM23.5 16.1774C23.5 15.5578 24.0285 15 24.75 15C25.4715 15 26 15.5578 26 16.1774C26 16.797 25.4715 17.3548 24.75 17.3548C24.0285 17.3548 23.5 16.797 23.5 16.1774ZM22.5 22.2581C22.5 22.0393 22.6927 21.8065 23 21.8065H26V26.5968C26 27.4252 26.6716 28.0968 27.5 28.0968C27.8073 28.0968 28 28.3296 28 28.5484C28 28.7672 27.8073 29 27.5 29H22.5C22.1927 29 22 28.7672 22 28.5484C22 28.3296 22.1927 28.0968 22.5 28.0968C23.3284 28.0968 24 27.4252 24 26.5968V24.7097C24 24.1192 23.7335 23.657 23.4725 23.3383C23.2159 23.025 22.9029 22.7757 22.6776 22.6028C22.561 22.5134 22.5 22.3879 22.5 22.2581ZM23 19.8065C21.6504 19.8065 20.5 20.8734 20.5 22.2581C20.5 23.0508 20.8838 23.7475 21.4604 24.1898C21.6733 24.3531 21.8259 24.4843 21.9252 24.6056C21.9777 24.6697 21.995 24.7064 22 24.72V26.1463C20.8781 26.3714 20 27.3387 20 28.5484C20 29.933 21.1504 31 22.5 31H27.5C28.8496 31 30 29.933 30 28.5484C30 27.3387 29.1219 26.3714 28 26.1463V21.2903C28 20.4401 27.2973 19.8065 26.5 19.8065H23ZM22.0018 24.726C22.0017 24.726 22.0013 24.7249 22.001 24.7228C22.0017 24.725 22.0018 24.726 22.0018 24.726Z"
        fill="#FAFAFA"
      />
    </svg>
  );
};

export default InfoSvg;
