import styled from 'styled-components';

export default function Sidebar({ children, logo }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
