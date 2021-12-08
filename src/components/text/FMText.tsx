import React from "react";

import styled from "styled-components";

type FontType =
  | "HEAVY"
  | "EXTRA_BOLD"
  | "BOLD"
  | "SEMI_BOLD"
  | "MEDIUM"
  | "REGULAR"
  | "LIGHT"
  | "ULTRA_LIGHT"
  | "THIN";

export interface TextProps {
  children?: React.ReactNode;
  fontType?: FontType;
  className?: string;
}

const fontTypeToFont = {
  HEAVY: 900,
  EXTRA_BOLD: 800,
  BOLD: 700,
  SEMI_BOLD: 600,
  MEDIUM: 500,
  REGULAR: 400,
  LIGHT: 300,
  ULTRA_LIGHT: 200,
  THIN: 100,
};

const Text = styled.p<{ fontType: FontType }>`
  font-weight: ${({ fontType }) => fontTypeToFont[fontType]};
  letter-spacing: -0.5px;
  color: #232626;
`;

const FMText = ({ fontType = "REGULAR", ...props }: TextProps) => (
  <Text fontType={fontType} {...props} />
);

export default FMText;
