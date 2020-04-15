import React from "react";
import { css } from "@emotion/core";
import { ReactComponent as Logo } from "~/assets/images/logo.svg";
import { ReactComponent as TwitterIcon } from "~/assets/images/icon-twitter.svg";
import { ReactComponent as FBIcon } from "~/assets/images/icon-facebook.svg";
import { ReactComponent as PinterestIcon } from "~/assets/images/icon-pinterest.svg";
import { Theme } from "~/styled";

const Footer = () => (
  <footer
    css={(theme: Theme) => css`
      padding: 66px 24px 64px;
      background: ${theme.color.secondary.darkest};
      text-align: center;
    `}
  >
    <div
      css={css`
        display: grid;
        grid-gap: 24px;
        justify-content: center;
        align-items: center;

        address,
        small {
          font-size: 15px;
          line-height: 25px;
          font-style: normal;
          opacity: 0.6;
          margin-bottom: 16px;
        }

        ul,
        li {
          margin: 0;
          padding: 0;
        }
        ul {
          list-style: none;
          display: flex;
          justify-content: center;

          li {
            font-size: 15px;
            line-height: 25px;
            &:not(:last-child) {
              margin-right: 24px;
            }
          }
        }
      `}
    >
      <div>
        <Logo
          css={css`
            height: 24px;
            margin-bottom: 24px;
          `}
        />
        <div>
          <ul>
            <li>home</li>
            <li>about</li>
          </ul>
        </div>
      </div>
      <div>
        <address>
          987 Hillcrest Lane
          <br />
          Irvine, CA
          <br />
          California 92714
          <br />
          Call Us : 949-833-7432
        </address>
      </div>
      <div>
        <div
          css={css`
            display: grid;
            grid-template-columns: repeat(3, 24px);
            grid-column-gap: 16px;
            justify-content: center;
            margin-bottom: 16px;
            svg {
              display: block;
            }
          `}
        >
          <FBIcon />
          <PinterestIcon />
          <TwitterIcon />
        </div>
        <small>Copyright 2020. All Rights Reserved</small>
      </div>
    </div>
  </footer>
);

export default Footer;
