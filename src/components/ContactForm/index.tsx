import React from "react";
import { css } from "@emotion/core";
import { Theme } from "../../styled";
import shared from "../../utils/styles/shared";
import { Button } from "../Button";

const baseStyles = (theme: Theme) => css`
  background-color: ${theme.color.primary.dark};
  padding-top: 80px;
  padding-bottom: 88px;

  h2,
  h4 {
    text-align: center;
  }

  h2 {
    font-size: 40px;
    line-height: 40px;
    margin-bottom: 10px;
  }

  h4 {
    font-size: 32px;
    line-height: 48px;
    color: ${theme.color.text.accent};
  }
`;

const submitButtonStyles = (theme: Theme) => css`
  background-color: ${theme.color.primary.light};
  border-color: ${theme.color.primary.light};
  color: ${theme.color.secondary.dark};
`;

const ContactForm = () => {
  return (
    <div css={(theme) => [shared.componentContainerStyles, baseStyles(theme)]}>
      <div css={shared.componentContentStyles}>
        <div>
          <h2>Contact</h2>
          <h4>Ask us about</h4>
          <div>something</div>
        </div>
        <div>
          <form>
            <label htmlFor="name">
              <input id="name" type="text" />
            </label>
            <label htmlFor="email">
              <input id="email" type="email" />
            </label>
            <label htmlFor="company_name">
              <input id="company_name" type="text" />
            </label>
            <label htmlFor="title">
              <input id="title" type="text" />
            </label>
            <label htmlFor="message">
              <textarea id="message" />
            </label>
            <Button css={submitButtonStyles}>Submit</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
