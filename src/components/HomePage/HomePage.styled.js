import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;

  color: #000;
`;
export const List = styled.ul``;
export const ListItem = styled.li`
  list-style: none;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;
export const SubTitle = styled.h2`
  margin-bottom: 16px;
`;
export const Title = styled.h3`
  margin-bottom: 32px;
  font-size: 24px;
`;
