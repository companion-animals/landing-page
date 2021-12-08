import { useEffect, useRef, useState } from "react";

import styled from "styled-components";

import { Medium24, Regular20 } from "src/components/text/Typographies";

interface IProps {
  className?: string;
  title: string;
  content: string;
  open?: boolean;
}

const Container = styled.div``;

const BorderChip = styled.div<{ isOpen?: boolean }>`
  width: 300px;
  padding: 15px 0px;
  border: 2px solid #79cea7;
  background-color: ${({ isOpen }) => (isOpen ? "#79cea7;" : "#fafafa")};
  border-radius: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media screen and (max-width: 900px) {
    width: 280px;
  }
`;

const Text = styled(Medium24)<{ isOpen?: boolean }>`
  color: ${({ isOpen }) => (isOpen ? "#FFFFFF" : "#79cea7;")};

  @media screen and (max-width: 900px) {
    font-size: 20px;
  }
`;

const ContentContainer = styled.div<{ height: string }>`
  width: 100%;
  overflow: hidden;
  height: ${({ height }) => height};
  transition-property: height;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  margin-top: 15px;
  margin-bottom: ${({ height }) => (height !== "0px" ? "15px" : "0px")};
`;

const Wrapper = styled.div``;

const RegularText = styled(Regular20)`
  white-space: pre-line;

  @media screen and (max-width: 900px) {
    font-size: 16px;
  }
`;

const usePrevState = (state: string) => {
  const ref = useRef(state);

  useEffect(() => {
    ref.current = state;
  }, [state]);

  return ref.current;
};

const ChipAccordion = ({ className, title, open, content }: IProps) => {
  const [height, setHeight] = useState(open ? "auto" : "0px");
  const innerRef = useRef<HTMLDivElement>(null);
  const prevHeight = usePrevState(height);
  const isOpen = height !== "0px";

  const onCollapse = () => {
    setHeight(`${innerRef?.current?.scrollHeight}px`);
  };

  const updateAfterTransition = () => {
    if (isOpen) {
      setHeight("auto");
    }
  };

  useEffect(() => {
    if (prevHeight === "auto" && height !== "auto") {
      setHeight("0px");
    }
  }, [prevHeight, height]);

  return (
    <Container className={className}>
      <BorderChip onClick={onCollapse} isOpen={isOpen}>
        <Text isOpen={isOpen}>{title}</Text>
      </BorderChip>
      <ContentContainer
        ref={innerRef}
        onTransitionEnd={updateAfterTransition}
        height={height}
      >
        <Wrapper>
          <RegularText>{content}</RegularText>
        </Wrapper>
      </ContentContainer>
    </Container>
  );
};

export default ChipAccordion;
