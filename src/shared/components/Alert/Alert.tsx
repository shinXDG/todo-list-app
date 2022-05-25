import './style.css'
import React, { useEffect } from 'react'
import { useState } from 'react'
type Props = {
  children: React.ReactElement
  type: string
  message: string
  showAlert?: boolean
}
const Alert: React.FC<Props> = ({ children, type, message, showAlert }) => {
  const [isShow, setIsShow] = useState(true)

  useEffect(() => {
    if (showAlert) setIsShow(showAlert)
  }, [showAlert])

  useEffect(() => {
    if (isShow) {
      setIsShow(false)
    }
  }, [isShow])
  const renderElAlert = function () {
    return React.cloneElement(children)
  }

  const handleClose = (e: any) => {
    e.preventDefault()
    setIsShow(false)
  }

  return (
    <div className={type}>
      <span className="closebtn" onClick={handleClose}>
        &times;
      </span>
      {children ? renderElAlert() : message}
    </div>
  )
}

export default Alert
