import styled from "styled-components";

export const Button = styled.button`
  border-radius: 14px;
  background: ${(props) =>
    props.isBack ? "transparent" : "rgba(0, 0, 0, 0.8)"};

  width: 342px;
  height: 74px;
  margin-top: 130px;

  color: #fff;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;

  border: ${(props) => (props.isBack ? "1px solid #fff" : "none")};
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }

  img {
    transform: ${(props) => props.isBack && "rotate(180deg)"};
  }
`;
