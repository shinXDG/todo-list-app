import React from 'react'
import styled from 'styled-components'

type Props = {
  placeholder?: string
  rows?: number
  value?: string
  defaultValue?: string
  disabled?: boolean
  style?: React.CSSProperties
  onChange?: any
}

export const TextAreaStyled = styled.textarea`
  line-height: 26px;
  padding: 5px;
  outline-width: 0px;
  border-radius: 4px;
  border: 1px #d9d9d9 solid;
  font-size: 14px;
  box-sizing: border-box;
  color: #000000d9;
  :active,
  :focus {
    border-color: #1890ff;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }
`

export const TextArea: React.FC<Props> = ({
  placeholder,
  rows,
  value,
  defaultValue,
  disabled,
  style,
  onChange,
}) => {
  return (
    <TextAreaStyled
      placeholder={placeholder}
      onChange={onChange}
      rows={rows}
      value={value}
      disabled={disabled}
      defaultValue={defaultValue}
      style={style}
    />
  )
}
