import { node } from 'prop-types';
import styled from 'styled-components';

export default function SidebarGroup({ children, title }) {
  return (
    <Container>
      {title}
      {children}
    </Container>
  );
}

SidebarGroup.propTypes = {
  children: node.isRequired,
};

const Container = styled.div``;
