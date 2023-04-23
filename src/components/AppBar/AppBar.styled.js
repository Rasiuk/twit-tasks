import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const Header = styled.header`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #ebd8ff;
  padding-top: 8px;
  padding-bottom: 8px;
  margin-bottom: 16px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
`;
export const ListNavigation = styled.ul`
  display: flex;
  justify-content: space-around;
`;
export const Navigation = styled.nav`
  display: flex;
`;
export const ListItem = styled.li`
  list-style: none;
  display: flex;
`;
export const Link = styled(NavLink)`
  background: #ebd8ff;
  color: black;
  display: flex;
  text-decoration: none;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 196px;
  height: 50px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
`;
