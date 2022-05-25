import React from 'react'
import styled from 'styled-components'

type InputProps = {
  name?: any
  placeholder?: string
  value?: string
  defaultValue?: string
  disabled?: boolean
  style?: React.CSSProperties
  onChange?: any //(value: string) => void
}
export const InputStyled = styled.input`
  line-height: 26px;
  padding: 5px;
  outline-width: 0px;
  border-radius: 4px;
  border: 1px #d9d9d9 solid;
  font-size: 14px;
  color: #000000d9;

  :active,
  :focus {
    border-color: #1890ff;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }
`

export const Input: React.FC<InputProps> = ({
  name,
  placeholder = '',
  value,
  defaultValue,
  disabled,
  style,
  onChange,
}) => {
  return (
    <InputStyled
      style={style}
      placeholder={placeholder}
      disabled={disabled}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      name={name}
    />
  )
}
