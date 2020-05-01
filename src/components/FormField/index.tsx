import React from "react";
import { css } from "@emotion/core";
import styled from "../../styled";

const Field = styled.div`
  display: flex;
  flex-flow: column-reverse;
  margin-bottom: 24px;
  position: relative;
  border-bottom: 1px solid #fff;

  label,
  input {
    transition: all 0.2s;
    touch-action: manipulation;
  }
`;

const Input = styled.input`
  border: 0;
  -webkit-appearance: none;
  border-radius: 0;
  padding: 0 0 17px 14px;
  color: white;
  cursor: text;
  font-size: 15px;
  line-height: 25px;
  background-color: transparent;

  &:focus {
    outline: 0;
  }

  &::placeholder {
    font-family: "Livvic SemiBold";
    letter-spacing: 0.05em;

    color: white;
    opacity: 60%;
  }

  /* &::-webkit-input-placeholder {
    opacity: ;
    transition: inherit;
  }

  &:focus::-webkit-input-placeholder {
    opacity: 1;
  } */
`;

const Label = styled.label`
  position: absolute;
  opacity: 0;
`;

const FormField: React.FC<{
  label: string;
  inputType: string;
  name: string;
  required?: boolean;
}> = ({ label, inputType, name, required }) => {
  const InputType =
    inputType === "textarea" ? Input.withComponent("textarea") : Input;
  return (
    <div>
      <Field>
        <InputType
          type={inputType}
          id={name}
          placeholder={label}
          required={required}
          css={css`
            ${inputType === "textarea" &&
              `
              height: 85px;
            `}
          `}
        />
        <Label htmlFor={name}>{label}</Label>
      </Field>
    </div>
  );
};

export default FormField;
