import React from "react";
import { css } from "@emotion/core";
import styled, { Theme } from "../../styled";
import shared from "../../utils/styles/shared";
import { Button } from "../Button";
import { ReactComponent as IconCog } from "~/assets/images/icon-cog.svg";
import { ReactComponent as IconPerson } from "~/assets/images/icon-person.svg";
import { ReactComponent as IconChart } from "~/assets/images/icon-chart.svg";
import FormField from "../FormField";

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
          <div
            css={css`
              margin-top: 48px;
              margin-bottom: 56px;
              > div {
                height: 72px;
                display: grid;
                grid-template-columns: 72px 1fr;
                grid-column-gap: 23px;
                align-items: center;

                &:not(:last-of-type) {
                  margin-bottom: 8px;
                }

                svg {
                  height: 100%;
                }
                h3 {
                  font-size: 17px;
                  line-height: 28px;
                }
              }
            `}
          >
            <div>
              <IconPerson />
              <h3>The quality of our talent network</h3>
            </div>
            <div>
              <IconCog />
              <h3>Usage & implementation of our software</h3>
            </div>
            <div>
              <IconChart />
              <h3>How we help drive innovation</h3>
            </div>
          </div>
        </div>
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <FormField label="Name" name="name" inputType="text" />
            <FormField label="Email" name="email" inputType="email" />
            <FormField
              label="Company Name"
              name="company_name"
              inputType="text"
            />
            <FormField label="Title" name="title" inputType="text" />
            <FormField label="Message" name="message" inputType="text" />
            <Button css={submitButtonStyles}>Submit</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
