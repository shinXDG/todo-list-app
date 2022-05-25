import React from 'react'
import styled from 'styled-components'
type Props = {
  isLoading?: boolean
  title?: string
  typeButton?: any
  onClickButton: any
  style?: React.CSSProperties
}

const StyleButton = styled.button`
  padding: 6px 10px;
  display: flex;
  align-items: center;
  background-color: #1890ff;
  border: 1px solid #1890ff;
  color: white;
  border-radius: 4px;
  font-weight: 500;
  outline-style: solid;
  outline-width: 0px;
  justify-content: center;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`

export const MyButton: React.FC<Props> = ({
  isLoading,
  title,
  typeButton = 'button',
  style,
  onClickButton,
}) => {
  return (
    <StyleButton
      type={typeButton}
      onClick={() => {
        onClickButton && onClickButton()
      }}
      style={style}
    >
      <span style={{ marginLeft: '6px' }}>{title || 'Add'}</span>
    </StyleButton>
  )
}
