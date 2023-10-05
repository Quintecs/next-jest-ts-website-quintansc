import { Button } from "@mui/material";
import Link from "next/link";
import styled from "styled-components";

const Headers = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #252527;
`

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 60px;
  height: 60px;
`;

const MyName = styled.span`
  font-size: 20px;
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 250px;
  height: 100px;
`;

const Menu = styled.nav`
  display: flex;
  width: 600px;
  justify-content: space-evenly;
  align-items: center;
  margin-right: 50px;
  a {
    text-decoration: none;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;

const SelectedLinkMenu = styled(Link)`
  display: flex;
  height: 100px;
  width: 100%;
  justify-content: center;
  align-items: center;
  color: ${props => `${props.color !== '#999ED7' ? 'white': props.color}`};
  border-bottom: ${props => `1px solid ${props.color}`};
` 

const ButtonMenuMobile = styled.button`
  width: auto;
  height: auto;
  padding: 0;
  background-color: transparent;
  border: 0;
  @media (min-width: 600px) {
    display: none;
  }
`;

const ButtonHeader = styled(Button)`
  min-width: 276px;
  height: 48px;
  background-color: #999ed7;
  color: #18181a;
  font-size: 13px;
  font-weight: 600;
  &:hover {
    background-color: #999ed7;
    color: #18181a;
  }
`;

export {
  Headers,
  ProfileImage,
  MyName,
  UserContainer,
  Menu,
  ButtonMenuMobile,
  ButtonHeader,
  SelectedLinkMenu
};
