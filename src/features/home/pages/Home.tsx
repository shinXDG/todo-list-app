import { LIST_TODO } from 'features/ToDo/mock'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'shared/components'
import '../style.css'
export const Home: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="container-home">
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        Welcome to app TodoList
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          onClickButton={() => {
            localStorage.setItem('list_todo', JSON.stringify(LIST_TODO))
            navigate('todo-list')
          }}
          title="Let's go"
        />
      </div>
    </div>
  )
}
