import { AddTodoPage } from 'features/ToDo/pages/AddTodo'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Container } from 'shared/container/Container'
import { Home } from '../features/home'
import { ToDoList } from '../features/ToDo'

export function AppNavigator() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
      }}
    >
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo-list" element={<ToDoList />} />
          <Route path="/add-todo" element={<AddTodoPage />} />
        </Routes>
      </Container>
    </div>
  )
}
