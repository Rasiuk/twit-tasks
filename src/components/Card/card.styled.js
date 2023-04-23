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
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  background-repeat: no-repeat;
  background-position: center top;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;
export const BackgroundImages = styled.div`
  background: url(${backgroundImage});
  width: 308px;
  height: 168px;
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
  align-items: center;
  display: flex;
  margin-bottom: 26px;
  &::after,
  ::before {
    display: inline-block;

    content: "";
    top: 50%;
    width: 142px;
    height: 8px;
    background: #ebd8ff;
  }
`;
export const InformationBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Subtitle = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
  margin-bottom: 16px;
`;
export const ButtonFollow = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  gap: 6px;

  width: 196px;
  height: 50px;
  cursor: pointer;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
`;
export const ButtonFollowing = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  gap: 6px;
  width: 196px;
  height: 50px;
  cursor: pointer;
  background: #5cd3a8;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
`;
