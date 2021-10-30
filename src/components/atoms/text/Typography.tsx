import React from "react";

import styled from "styled-components";

import theme from "src/styles/theme";

export interface Props {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const { font, color } = theme;

const DefaultParagraph = styled.p`
  font-family: ${font.family};
  font-size: ${font.size.base};
  font-weight: ${font.weight.normal};
  color: ${color.greyscale.greyscale900};
  overflow-wrap: break-word;
`;

const XSParagraph = styled(DefaultParagraph)`
  font-size: ${font.size.xs};
  line-height: ${font.lineHeight.leading4};
`;

const SMParagraph = styled(DefaultParagraph)`
  font-size: ${font.size.sm};
  line-height: ${font.lineHeight.leading5};
`;

const LGParagraph = styled(DefaultParagraph)`
  font-size: ${font.size.lg};
  line-height: ${font.lineHeight.leading6};
`;

const XLParagraph = styled(DefaultParagraph)`
  font-size: ${font.size.xl};
  line-height: ${font.lineHeight.leading7};
`;

const XL2Paragraph = styled(DefaultParagraph)`
  font-size: ${font.size.xl2};
  line-height: ${font.lineHeight.leading8};
`;

const XL3Paragraph = styled(DefaultParagraph)`
  font-size: ${font.size.xl3};
  line-height: ${font.lineHeight.leading9};
`;

const XL4Paragraph = styled(DefaultParagraph)`
  font-size: ${font.size.xl4};
  line-height: ${font.lineHeight.leading10};
`;

const XL5Paragraph = styled(DefaultParagraph)`
  font-size: ${font.size.xl5};
  line-height: ${font.lineHeight.leading11};
`;

const XL6Paragraph = styled(DefaultParagraph)`
  font-size: ${font.size.xl6};
  line-height: ${font.lineHeight.none};
`;

const XL7Paragraph = styled(DefaultParagraph)`
  font-size: ${font.size.xl7};
  line-height: ${font.lineHeight.none};
`;

const XL8Paragraph = styled(DefaultParagraph)`
  font-size: ${font.size.xl8};
  line-height: ${font.lineHeight.none};
`;

const XL9Paragraph = styled(DefaultParagraph)`
  font-size: ${font.size.xl9};
  line-height: ${font.lineHeight.none};
`;

const Paragraph = ({ children, className, onClick }: Props) => (
  <DefaultParagraph className={className} onClick={onClick}>
    {children}
  </DefaultParagraph>
);

Paragraph.XS = (props: Props) => <XSParagraph {...props} />;
Paragraph.SM = (props: Props) => <SMParagraph {...props} />;
Paragraph.LG = (props: Props) => <LGParagraph {...props} />;
Paragraph.XL = (props: Props) => <XLParagraph {...props} />;
Paragraph.XL2 = (props: Props) => <XL2Paragraph {...props} />;
Paragraph.XL3 = (props: Props) => <XL3Paragraph {...props} />;
Paragraph.XL4 = (props: Props) => <XL4Paragraph {...props} />;
Paragraph.XL5 = (props: Props) => <XL5Paragraph {...props} />;
Paragraph.XL6 = (props: Props) => <XL6Paragraph {...props} />;
Paragraph.XL7 = (props: Props) => <XL7Paragraph {...props} />;
Paragraph.XL8 = (props: Props) => <XL8Paragraph {...props} />;
Paragraph.XL9 = (props: Props) => <XL9Paragraph {...props} />;

export default Paragraph;
