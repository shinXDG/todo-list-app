import { AddTodoPage } from 'features/todoList/pages/AddTodoPage'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Container } from 'shared/container/Container'
import { HomePage } from '../features/home'
import { TodolistPage } from '../features/todoList'
import publicRouter from './PublicRouter'

export default function AppNavigator() {
  const MainContainer = () => {
    return (
      <Container>
        {/* {publicRouter.map((item) => (
          <Route path={item.path} element={item.element} />
        ))} */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/todo-list" element={<TodolistPage />} />
          <Route path="/add-todo" element={<AddTodoPage />} />
        </Routes>
      </Container>
    )
  }

  return (
    // <Routes>
    //   <Route path="/" element={<HomePage />} />
    //   <Route path="/todo-list" element={<TodolistPage />} />
    //   <Route path="/add-todo" element={<AddTodoPage />} />

    //   {/* <MainContainer /> */}
    // </Routes>
    // <MainContainer />
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
      }}
    >
      <Container>
        {/* {publicRouter.map((item) => (
          <Route path={item.path} element={item.element} />
        ))} */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/todo-list" element={<TodolistPage />} />
          <Route path="/add-todo" element={<AddTodoPage />} />
        </Routes>
      </Container>
    </div>
  )
}
