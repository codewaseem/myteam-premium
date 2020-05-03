import React from "react";
import { injectIntl, InjectedIntlProps } from "gatsby-plugin-intl";
import { css } from "@emotion/core";
import { Layout } from "~/components/Layout";
import { SEO } from "~/components/SEO";
import styled from "../styled";
import shared from "../utils/styles/shared";
import { ReactComponent as BgPatternOne } from "~/assets/images/bg-pattern-about-1-mobile-nav-1.svg";
import { above } from "../utils/styles";

const AboutUs = styled.div`
  ${shared.componentContainerStyles}
  text-align: center;
  color: ${({ theme }) => theme.color.text.light};
  background: ${({ theme }) => theme.color.primary.dark};
  position: relative;
  overflow: hidden;

  > div {
    ${shared.componentContentStyles}
    margin-top: 80px;
    margin-bottom: 108px;

    h1 {
      font-size: 40px;
      line-height: 40px;
    }
    p {
      font-size: 15px;
      line-height: 28px;
      margin: 0;
      margin-top: 16px;
    }
  }

  ${above(
    "md",
    css`
      > div {
        h1 {
          font-size: 64px;
          line-height: 56px;
        }

        p {
          max-width: 457px;
          margin: 24px auto 0;
        }
      }
    `
  )}

  ${above(
    "xxl",
    css`
      > div {
        display: grid;
        grid-template-columns: 350px 730px;
        grid-column-gap: 30px;
        text-align: left;

        h1 {
          line-height: 100px;
        }
        p {
          font-size: 18px;
          max-width: unset;
          margin: 44px 0 0;
        }
      }
    `
  )}
`;

const bgPatternOneStyles = css`
  display: block;
  width: 200px;
  height: 200px;
  position: absolute;
  right: -100px;
  bottom: -100px;

  ${above(
    "md",
    css`
      bottom: 0;
    `
  )}
`;

const MeetDirectors = styled.div``;
const OurClients = styled.div``;

const AboutPage: React.FC<InjectedIntlProps> = () => {
  return (
    <Layout>
      <SEO title="About Us" />
      <AboutUs>
        <div>
          <h1>About</h1>
          <p>
            We help companies build dynamic teams made up of top global talent.
            Using our network of passionate professionals we drive innovation
            and deliver incredible outcomes. Talented, diverse teams shape the
            best products and experiences. We’ll bring those teams to you.
          </p>
        </div>
        <BgPatternOne css={bgPatternOneStyles} />
      </AboutUs>
      <MeetDirectors />
      <OurClients />
    </Layout>
  );
};

export default injectIntl(AboutPage);
