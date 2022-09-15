import NextLink from "next/link";

import styled from "styled-components";
import tw from "twin.macro";

import XEIcon from "src/components/icon/XEIcon";
import images from "src/images";

interface Props {
  title: string;
}

const Container = styled.header`
  width: 100%;
  background-color: #ffffff;
  padding: 26px 32px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 640px) {
    padding: 16px 16px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1080px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const BackIcon = styled(XEIcon).attrs({ type: "xi-angle-left" })`
  position: absolute;
  left: 0;
  cursor: pointer;
`;

const Title = styled.h3`
  ${tw`
		font-bold
		text-lg
	`}
`;

const HeaderWithTitle = (
  { title }: Props, // TODO: go to back or home when press back icon
) => (
  <Container>
    <Wrapper>
      <NextLink href="/">
        <BackIcon />
      </NextLink>
      <Title>{title}</Title>
    </Wrapper>
  </Container>
);

export default HeaderWithTitle;
