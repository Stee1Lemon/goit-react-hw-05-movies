import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 760px;
  margin: 0 auto;
  padding: 0 16px;
  border: 1px solid black
`;

export const Header = styled.header`
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 3px solid black;

  > nav {
    display: flex;
  }
`;

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: #b3b162;
  }
`;