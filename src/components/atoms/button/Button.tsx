import { ButtonHTMLAttributes } from "react";

import styled from "styled-components";

export type Props = ButtonHTMLAttributes<HTMLButtonElement>;

const StyledButton = styled.button``;

const Button = (props: Props) => <StyledButton {...props} />;

export default Button;
