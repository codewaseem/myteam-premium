import React from "react";
import { injectIntl, InjectedIntlProps } from "gatsby-plugin-intl";
import { css } from "@emotion/core";
import { Layout } from "~/components/Layout";
import { SEO } from "~/components/SEO";
import styled from "../styled";
import shared from "../utils/styles/shared";
import { ReactComponent as BgPatternOne } from "~/assets/images/bg-pattern-about-1-mobile-nav-1.svg";
import { ReactComponent as BgPatternTwo } from "~/assets/images/bg-pattern-about-2-contact-1.svg";
import { ReactComponent as BgPatternThree } from "~/assets/images/bg-pattern-home-4-about-3.svg";
import { ReactComponent as BgPatternFour } from "~/assets/images/bg-pattern-about-4.svg";
import { above } from "../utils/styles";
import Directors from "../components/Directors";
import vergeLogo from "~/assets/images/logo-the-verge.png";
import jakartaLogo from "~/assets/images/logo-jakarta-post.png";
import guardianLogo from "~/assets/images/logo-the-guardian.png";
import techRadarLogo from "~/assets/images/logo-tech-radar.png";
import gadgetsLogo from "~/assets/images/logo-gadgets-now.png";
import ContactUs from "../components/ContactUs";

const AboutUs = styled.div`
  ${shared.componentContainerStyles}
  text-align: center;
  color: ${({ theme }) => theme.color.text.light};
  background: ${({ theme }) => theme.color.primary.dark};
  position: relative;
  overflow: hidden;
  padding-top: 80px;
  padding-bottom: 108px;

  > div {
    ${shared.componentContentStyles}

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
      padding-top: 112px;
      padding-bottom: 112px;
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
      padding-top: 120px;
      padding-bottom: 120px;
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

const bgPatternTwoStyles = css`
  height: 200px;
  width: 200px;
  display: block;
  position: absolute;
  left: -100px;
  top: -100px;
  ${above(
    "md",
    css`
      top: 0;
    `
  )}
`;

const bgPatternThreeStyles = css`
  height: 100px;
  position: absolute;
  right: 0;
  bottom: 0;
`;

const bgPatternFourStyles = css`
  position: absolute;
  height: 200px;
  width: 200px;
  top: -100px;
  left: -100px;

  ${above(
    "md",
    css`
      left: 0;
    `
  )}

  ${above(
    "xxl",
    css`
      top: 0;
    `
  )}
`;

const MeetDirectors = styled.div`
  ${shared.componentContainerStyles};
  position: relative;
  overflow: hidden;
  background-color: ${({ theme }) => theme.color.secondary.dark};
  padding-top: 88px;
  padding-bottom: 116px;

  > div {
    ${shared.componentContentStyles}
  }
  h2 {
    font-size: 32px;
    line-height: 32px;
    margin-bottom: 48px;
    text-align: center;
  }
  ${above(
    "md",
    css`
      padding-top: 100px;
      padding-bottom: 128px;
    `
  )}
  ${above(
    "xxl",
    css`
      padding-top: 140px;
      padding-bottom: 168px;
      h2 {
        font-size: 48px;
        line-height: 48px;
      }
    `
  )}
`;

const OurClients = styled.div`
  ${shared.componentContainerStyles}
  background: ${({ theme }) => theme.color.secondary.darker};
  position: relative;
  overflow:hidden;
  text-align:center;
  padding-top:88px;
  padding-bottom:88px;


  > div {
    ${shared.componentContentStyles};

    h2 {
      font-size: 32px;
      line-height: 32px;
      margin-bottom: 64px;
    }

    div {
      display: grid;
      grid-gap: 56px 49px;
      margin: none;
      width: 146px;
      margin:auto;
      justify-items:center;
      > * {
        max-height: 40px;
        margin:0;
      }
    }
  }

  ${above(
    "md",
    css`
      padding-top: 100px;
      padding-bottom: 100px;
      > div {
        h2 {
          margin-bottom: 48px;
        }

        > div {
          grid-auto-flow: column;
          width: 100%;
          align-items: center;
          > * {
            max-height: 28px;
          }
        }
      }
    `
  )}

    ${above(
      "xxl",
      css`
        padding-top: 140px;
        padding-bottom: 140px;
        > div {
          h2 {
            margin-bottom: 64px;
          }
          > div {
            grid-auto-flow: column;
            width: 100%;
            grid-column-gap: 80px;
            align-items: center;
            > * {
              max-height: 40px;
            }
          }
        }
      `
    )}
`;

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
      <MeetDirectors>
        <div>
          <BgPatternTwo css={bgPatternTwoStyles} />
          <BgPatternThree css={bgPatternThreeStyles} />
          <h2>Meet the directors</h2>
          <Directors />
        </div>
      </MeetDirectors>
      <OurClients>
        <div>
          <h2>Some of our clients</h2>
          <div>
            <img src={vergeLogo} alt="" />
            <img src={jakartaLogo} alt="" />
            <img src={guardianLogo} alt="" />
            <img src={techRadarLogo} alt="" />
            <img src={gadgetsLogo} alt="" />
          </div>
        </div>
        <BgPatternFour css={bgPatternFourStyles} />
      </OurClients>
      <ContactUs />
    </Layout>
  );
};

export default injectIntl(AboutPage);
