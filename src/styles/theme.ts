import { css, keyframes } from "styled-components";

export const themeColor = {
  text: {
    title: "#111130",
    common: "#989ea4",
    dark: "#575a5e",
  },
  button: {
    primary: "#2b7dfd",
    highlight: "#1250f0",
  },
  background: {
    main: "#f7fafb",
  },
};

const fadeInDown = keyframes`
	from {
		opacity: 0;
		transform: translateY(-16px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
`;

const fadeInUp = keyframes`
	from {
  opacity: 0;
		transform: translateY(16px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
`;

const theme = {
  color: {
    white: "#FFFFFF",
    black10: "#f6f6f6",
    black90: " #0D0E0E",
    primary: { deep: "#5396FC", normal: " #8CC8FF", light: "#E9F4FF" },
    greyscale: {
      greyscale100: "#DCE4EC",
      greyscale300: "#B9C3CC",
      greyscale500: "#889199",
      greyscale700: "#5E6469",
      greyscale900: "#323639",
    },
    secondary: {
      deep: "#FF687A",
      normal: "#FF9298",
      light: "#FEE2E2",
    },
    point: {
      amber: "#FDBD64",
      lime: "#CAE3B2",
    },
    default: "#F9FAFB",
  },
  shadow: "0px 4px 14px rgba(0, 0, 0, 0.08)",
  radius: {
    none: "0px",
    sm: "2px",
    base: "4px",
    md: "6px",
    lg: "8px",
    xl: "12px",
    xl2: "16px",
    xl3: "24px",
    xl4: "32px",
    full: "50%",
  },
  screen: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    xl2: "1536px",
  },
  font: {
    size: {
      xs: "12px",
      sm: "14px",
      base: "16px",
      lg: "18px",
      xl: "20px",
      xl2: "24px",
      xl3: "30px",
      xl4: "36px",
      xl5: "48px",
      xl6: "60px",
      xl7: "72px",
      xl8: "96px",
      xl9: "128px",
    },
    lineHeight: {
      none: "0px",
      leading3: "12px",
      leading4: "16px",
      leading5: "20px",
      leading6: "24px",
      leading7: "28px",
      leading8: "32px",
      leading9: "36px",
      leading10: "40px",
      leading11: "56px",
    },
    family: '"Spoqa Han Sans Neo", "sans-serif"',
    weight: {
      thin: "100",
      extraLight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semiBold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },
  },
  size: {
    size0: "0px",
    sizePx: "1px",
    "size1/2": "2px",
    size1: "4px",
    "size1.5": "6px",
    size2: "8px",
    "size2.5": "10px",
    size3: "12px",
    "size3.5": "14px",
    size4: "16px",
    "size4.5": "18px",
    size5: "20px",
    "size5.5": "22px",
    size6: "24px",
    "size6.5": "26px",
    size7: "28px",
    "size7.5": "30px",
    size8: "32px",
    size9: "36px",
    size10: "40px",
    size11: "44px",
    size12: "48px",
    size14: "56px",
    size16: "64px",
    size18: "72px",
    size20: "80px",
    size22: "86px",
    size24: "96px",
    size26: "104px",
    size28: "112px",
    size30: "120px",
    size31: "124px",
    size32: "128px",
    size36: "144px",
    size40: "160px",
    size44: "176px",
    size48: "192px",
    size51: "204px",
    size52: "208px",
    size56: "216px",
    size60: "240px",
    size64: "256px",
    size66: "264px",
    size72: "288px",
    size80: "320px",
    sizeMax: "max-content",
    lg: "512px",
    xl2: "672px",
    xl3: "750px",
    sizeFull: "100%",
  },
  animation: {
    transition: {
      none: css`
        transition-property: none;
      `,
      all: css`
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
      `,
      default: css`
        transition-property: background-color, border-color, color, fill, stroke,
          opacity, box-shadow, transform, filter, backdrop-filter;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
      `,
      colors: css`
        transition-property: background-color, border-color, color, fill, stroke;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
      `,
      opacity: css`
        transition-property: opacity;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
      `,
      shadow: css`
        transition-property: box-shadow;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
      `,
      transform: css`
        transition-property: transform;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
      `,
      height: css`
        transition-property: height;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
      `,
    },
    timingFunction: {
      easeLinear: css`
        transition-timing-function: linear;
      `,
      easeIn: css`
        transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
      `,
      easeOut: css`
        transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
      `,
      easeInOut: css`
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      `,
    },
    duration: css`
      transition-duration: 300ms;
    `,
    duration400: css`
      transition-duration: 400ms;
    `,
    fadeInDown: css`
      animation: ${fadeInDown} 0.5s ease-out;
    `,
    fadeInUp: css`
      animation: ${fadeInUp} 0.5s ease-out;
    `,
  },
  opacityToHex: {
    opacity100: "FF",
    opacity90: "E6",
    opacity80: "CC",
    opacity70: "B3",
    opacity60: "99",
    opacity50: "80",
    opacity40: "66",
    opacity30: "4D",
    opacity20: "33",
    opacity10: "1A",
    opacity0: "00",
  },
};

export default theme;
