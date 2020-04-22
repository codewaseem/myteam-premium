import React from "react";
import styled from "../../styled";

const Field = styled.div`
  display: flex;
  flex-flow: column-reverse;
  height: 42px;
  margin-bottom: 24px;
  position: relative;

  label,
  input {
    transition: all 0.2s;
    touch-action: manipulation;
  }
`;

const Input = styled.input`
  border: 0;
  border-bottom: 1px solid #fff;
  font-family: "Livvic SemiBold";
  -webkit-appearance: none;
  border-radius: 0;
  padding: 0;
  cursor: text;
  background-color: transparent;

  &:focus {
    outline: 0;
  }

  &:placeholder-shown + label {
    cursor: text;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &::-webkit-input-placeholder {
    opacity: 0;
    transition: inherit;
  }

  &:focus::-webkit-input-placeholder {
    opacity: 1;
  }

  &:not(:placeholder-shown) + label,
  &:focus + label {
    transform: translate(0, 0) scale(1);
    cursor: pointer;
  }
`;

const Label = styled.label`
  position: absolute;
  top: 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 15px;
  opacity: 60%;
  line-height: 25px;
`;

const FormField: React.FC<{
  label: string;
  inputType: string;
  name: string;
}> = ({ label, inputType, name }) => (
  <div>
    <Field>
      <Input type={inputType} id={name} />
      <Label htmlFor={name}>{label}</Label>
    </Field>
  </div>
);

export default FormField;
