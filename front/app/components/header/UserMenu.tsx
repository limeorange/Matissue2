"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";

import { User } from "@/app/types";

import UserModal from "./UserModal";
import { useRecoilValue } from "recoil";
import darkModeAtom from "@/app/store/darkModeAtom";

/** 유저 메뉴 컴포넌트  */
const UserMenu = ({ currentUser }: { currentUser: User }) => {
  const [isUserModal, setIsUserModal] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const isDarkMode = useRecoilValue(darkModeAtom);

  const router = useRouter();

  useEffect(() => {
    if (currentUser?.user_id === "admin") {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, [currentUser]);

  return (
    <UserMenuContainer>
      {currentUser ? (
        <>
          <IconButton
            onClick={() => {
              router.push("/my-page/scrap");
            }}
          >
            <Image
              src="/images/header/scrapIcon.png"
              width={28}
              height={28}
              alt="write_icon"
            />
            스크랩
          </IconButton>
          <IconButton
            onClick={() => {
              router.push("/add-recipe");
            }}
          >
            <Image
              src={"/images/header/writeIcon.png"}
              width={28}
              height={28}
              alt="write_icon"
            />
            글쓰기
          </IconButton>
          <ProfileButton
            onMouseOver={() => {
              setIsUserModal(true);
            }}
            onMouseOut={() => {
              setIsUserModal(false);
            }}
            onClick={() => {
              setIsUserModal(!isUserModal);
            }}
          >
            <UserModal
              isUserModal={isUserModal}
              setIsUserModal={setIsUserModal}
              isAdmin={isAdmin}
            />
            <Image
              src={currentUser ? currentUser.img : "/images/profileIcon.png"}
              width={36}
              height={36}
              style={{ objectFit: "cover", backgroundColor: "#fff9ea" }}
              alt="profile_icon"
              className="rounded-[100px]"
            />
          </ProfileButton>
        </>
      ) : (
        <>
          <LoginButton
            isDarkMode={isDarkMode}
            onClick={() => {
              router.push("/auth/login");
            }}
          >
            로그인
          </LoginButton>
          <SignupButton
            isDarkMode={isDarkMode}
            onClick={() => {
              router.push("/auth/signup");
            }}
          >
            회원가입
          </SignupButton>
        </>
      )}
    </UserMenuContainer>
  );
};

const backgroundColor = (props) =>
  props.isDarkMode ? props.theme.lightYellow : props.theme.yellow;

const UserMenuContainer = styled.div`
  display: flex;
  position: relative;
  gap: 1.6rem;
  font-size: 16px;
  font-weight: 500;
  color: #4f3d21;
  align-items: center;
`;

const ProfileButton = styled.div`
  display: none;
  padding: 0.6rem 0.2rem;
  cursor: pointer;
  width: 4rem;
  height: 4.8rem;

  &:hover {
    img {
      box-shadow: 0px 0px 1px 4px rgb(230, 230, 230);
    }
    transform: scale(1.1);

    transition: all 0.3s;
  }

  @media (min-width: 1024px) {
    display: flex;
  }
`;

const LoginButton = styled.button<{ isDarkMode: boolean }>`
  display: none;
  padding: 0.8rem 1.6rem;
  border-radius: 10rem;
  &:hover {
    background-color: ${(props) =>
      props.isDarkMode ? props.theme.lightNavy : props.theme.lightGrey};
  }
  color: ${(props) =>
    props.isDarkMode ? props.theme.lightYellow : props.theme.brown};

  @media (min-width: 1024px) {
    display: flex;
  }
`;

const SignupButton = styled.button<{ isDarkMode: boolean }>`
  display: none;
  padding: 0.8rem 1.6rem;
  border-radius: 10rem;
  background-color: ${(props) =>
    props.isDarkMode ? props.theme.lightYellow : props.theme.yellow};
  color: ${(props) =>
    props.isDarkMode ? props.theme.deepNavy : props.theme.brown};
  &:hover {
    background-color: ${(props) =>
      props.isDarkMode ? props.theme.yellow : props.theme.deepYellow};
  }

  transition: background-color 0.3s;

  @media (min-width: 1024px) {
    display: flex;
  }
`;

const IconButton = styled.div`
  font-size: 16px;
  margin-left: -1rem;
  display: none;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem 1.6rem;
  border-radius: 10rem;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    background-color: rgb(230, 230, 230);
  }

  transition: all 0.3s;

  @media (min-width: 1024px) {
    display: flex;
  }
`;

export default UserMenu;
