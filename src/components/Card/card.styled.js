import styled from "styled-components";
import backgroundImage from "../../images/backgroundImage.png";
export const ListCard = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 380px;
  height: 460px;
  background: url(${backgroundImage}),
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  background-repeat: no-repeat;
  background-position: center top;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;
export const Avatar = styled.img`
  border: 8px solid #ebd8ff;
  border-radius: 50%;
  &::after,
  &::before {
    position: absolute;
    display: block;
    content: "";
    top: 0;
    width: 200px;
    height: 100px;
  }
`;
export const BoxAvatar = styled.div`
  margin-top: 160px;
  align-items: center;
  display: flex;
  &::after,
  ::before {
    display: inline-block;

    justify-content: center;
    content: "";
    top: 0;
    width: 142px;
    height: 8px;
    background: #ebd8ff;
  }
`;
