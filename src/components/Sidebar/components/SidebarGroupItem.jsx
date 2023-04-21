import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { useMemo } from 'react';

import { ADMIN_WRAPPER_PATH } from '@/constants/route';

export default function SidebarGroupItem({ icon, children, to, openTab }) {
  const { pathname } = useLocation();

  const currentPath = useMemo(
    () => pathname.substring(ADMIN_WRAPPER_PATH.length + 2),
    [pathname],
  );

  return (
    <Wrapper
      className="group-item"
      to={to}
      target={!openTab ? '_self' : '_blank'}
      data-selected={currentPath === to}
    >
      <WrapperIcon>{icon}</WrapperIcon> 
        {children}
    </Wrapper>
  );
}

const WrapperIcon = styled.span`
  vertical-align: middle;
  margin-right: 18px;
`;

const Wrapper = styled(Link)`
  display: flex;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  cursor: pointer;
  &[data-selected='true'] {
    background-color: #00bd2f;
    color: #fff;
    fill: #fff;
  }
`;

