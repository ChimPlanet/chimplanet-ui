import Spinner from "@chimplanet/ui/assets/images/loading-middle.gif";
import { styled } from "@chimplanet/ui/libs";

export const Loading = () => (
  <Container>
    <img src={Spinner} alt="로딩중" />
  </Container>
);

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto auto;

  min-height: inherit;
  width: 100%;
  height: 100%;
  & > img {
    width: 5%;
  }
`;

export default Loading;
