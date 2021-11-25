import { useRouter } from "next/router";

import styled from "styled-components";

import { Bold28, Bold16 } from "src/components/atoms/text/Typographies";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: auto;
  height: 100vh;
  justify-content: center;
  background: #7bd0a7;
`;

const Park = styled.div`
  width: 80%;
  max-width: 300px;
  background: url("/images/park.png") no-repeat;
  background-size: contain;
`;

const StyledAnchor = styled.a`
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  width: 60%;
  text-align: center;
  margin-bottom: 48px;
  background: #fff;
  padding: 16px 32px;
  border-radius: 8px;
  text-decoration: none;
  color: #7bd0a7;
  max-width: 300px;
  z-index: 10;
`;

const Character = styled.img`
  width: 50%;
  max-width: 140px;
  animation: jump 2s ease infinite;

  @keyframes jump {
    0% {
      transform: translateY(30px);
    }
    10% {
      transform: translateY(3px);
    }
    65% {
      transform: translateY(0);
    }

    90% {
      transform: translateY(27px);
    }
    100% {
      transform: translateY(30px);
    }
  }
`;

const Title = styled(Bold28)`
  width: 80%;
  max-width: 300px;
  text-align: center;
  color: #fff;
  margin-bottom: 12px;
`;
const Contact = () => {
  const router = useRouter();
  const { contact, name } = router.query;
  return (
    <Container>
      <Title>{name}</Title>
      <StyledAnchor href={`tel:${contact}`}>
        <Bold16>{contact}</Bold16>
      </StyledAnchor>
      <Character src="/images/bunny.png" />

      {/* <Lottie options={defaultOptions} width={300} height={300} /> */}
    </Container>
  );
};

export default Contact;
