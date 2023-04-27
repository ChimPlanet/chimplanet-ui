import { styled } from "@/libs";

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 20px;
  z-index: 1;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Button = styled.span`
  display: inline-block;
  width: 35px;
  height: 35px;
  text-align: center;
  background-color: #191919;
  line-height: 35px;
  border-radius: 100px;
  & svg {
    margin: auto;
  }
`;

export const Indicator = styled.div`
  background-color: #191919;
  text-align: center;

  width: 80px;
  padding: 10px 20px;
  border-radius: 100px;
`;
