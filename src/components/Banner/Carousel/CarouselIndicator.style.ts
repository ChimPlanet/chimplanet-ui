import { styled } from "@/libs";

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 30px;
  bottom: 18px;
  z-index: 1;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const Button = styled.span`
  display: inline-block;
  width: 36px;
  height: 36px;
  text-align: center;
  background-color: #191919;
  line-height: 36px;
  border-radius: 100px;
  & svg {
    margin: auto;
    height: 100%;
  }
`;

export const Indicator = styled.div`
  background-color: #191919;
  text-align: center;

  width: 80px;
  height: 36px;
  line-height: 36px;
  font-size: 16px;
  border-radius: 100px;
`;
