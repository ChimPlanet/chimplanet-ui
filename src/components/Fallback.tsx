import { styled } from "@chimplanet/ui/libs";

export function Fallback() {
  return (
    <Container>
      <Content>데이터를 불러오는 것에 실패하였습니다.</Content>
    </Container>
  );
}

export default Fallback;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Content = styled.span`
  display: inline-block;
  margin: auto;
`;
