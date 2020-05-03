import React from "react";
import { css } from "@emotion/core";
import styled from "@theme/styled";
import { above } from "~/utils/styles";
import AdenPic from "~/assets/images/avatar-aden.jpg";
import NikithaPic from "~/assets/images/avatar-nikita.jpg";
import ChristianPic from "~/assets/images/avatar-christian.jpg";
import CruzPic from "~/assets/images/avatar-cruz.jpg";
import DrakePic from "~/assets/images/avatar-drake.jpg";
import GriffinPic from "~/assets/images/avatar-griffin.jpg";
import { ReactComponent as Plus } from "~/assets/images/icon-cross.svg";

const DirectorList = styled.div`
  display: grid;
  --card-width: 1fr;
  --column-gap: 11px;
  --row-gap: 52px;
  grid-template-columns: repeat(auto-fit, minmax(281px, var(--card-width)));
  grid-gap: var(--row-gap) var(--column-gap);

  ${above(
    "md",
    css`
      --row-gap: 76px;
    `
  )}

  ${above(
    "xxl",
    css`
      --card-width: 350px;
      --column-gap: 30px;
    `
  )};
`;

const DirectorCard = styled.div`
  background: ${({ theme }) => theme.color.secondary.darker};
  padding: 32px 24px 56px;
  text-align: center;
`;

const DirectorProfile = styled.div`
  position: relative;
`;
const DirectorImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid #c4fffe;
  margin: 0;
`;
const DirectorName = styled.h3`
  font-size: 18px;
  line-height: 28px;
  color: ${({ theme }) => theme.color.secondary.accent};
  font-weight: 700;
  margin: 12px 0 0;
`;
const DirectorTitle = styled.p`
  font-family: "Levvic Medium Italic";
  margin: 0;
  font-weight: 500;
`;

const ToggleInfo = styled.button`
  border: 0;
  background: ${({ theme }) => theme.color.primary.accent};
  text-align: center;
  padding: 20px;
  border-radius: 50%;
  position: absolute;
  bottom: -50%;
  left: 50%;
  transform: translateX(-50%);

  > svg {
    display: block;
    height: 16px;
    width: 16px;
  }
`;

const DirectorInfo = styled.div``;
const DirectorBio = styled.p``;
const DirectorSocialIcons = styled.div``;

const DirectorsData = [
  {
    name: "Nikita Marks",
    title: "Founder & CEO",
    image: NikithaPic,
  },
  {
    name: "Cristian Duncan",
    title: "Co-founder & COO",
    image: ChristianPic,
  },
  {
    name: "Cruz Hamer",
    title: "Co-founder & CTO",
    image: CruzPic,
  },
  {
    name: "Drake Heaton",
    title: "Business Development Lead",
    image: DrakePic,
  },
  {
    name: "Griffin Wise",
    title: "Lead Marketing",
    image: GriffinPic,
  },
  {
    name: "Aden Allan",
    title: "Head of Talent",
    image: AdenPic,
  },
];

export default function Directors() {
  return (
    <DirectorList>
      {DirectorsData.map((director) => (
        <DirectorCard key={director.name}>
          <DirectorProfile>
            <DirectorImage src={director.image} />
            <DirectorName>{director.name}</DirectorName>
            <DirectorTitle>{director.title}</DirectorTitle>
            <ToggleInfo>
              <Plus />
            </ToggleInfo>
          </DirectorProfile>
        </DirectorCard>
      ))}
    </DirectorList>
  );
}

/* <DirectorInfo>
          <DirectorName>Nikita Marks</DirectorName>
          <DirectorBio>a</DirectorBio>
          <DirectorSocialIcons>a</DirectorSocialIcons>
        </DirectorInfo> */
