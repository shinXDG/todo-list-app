import React, { useState } from 'react'
import { Button, Checkbox } from 'shared/components'
import { AddTodoPage } from '../pages/AddTodoPage'
import { deleteTodo } from '../RequestFake'
import { TTodoItem, TTodoList } from '../todolist'

type TodoItemProps = {
  dataTodoItem: TTodoItem
  indexItem: number
  listTodo: Array<any>
  setListTodo: React.Dispatch<React.SetStateAction<TTodoList>>
  getDataListTodo: () => void
}

export const TodoItem: React.FC<TodoItemProps> = ({
  dataTodoItem,
  indexItem,
  listTodo,
  setListTodo,
  getDataListTodo,
}) => {
  const [visibleDetail, setVisibleDetail] = useState<boolean>(false)
  return (
    <div
      className="todo-block"
      style={visibleDetail ? { borderColor: '#85a5ff' } : {}}
    >
      <div
        className="warp-item-todo"
        style={visibleDetail ? { borderColor: '#85a5ff' } : {}}
      >
        <div className="title-todo">
          <Checkbox
            checked={dataTodoItem.checked}
            onChange={(event: any) => {
              let new_array = [...listTodo]
              let new_item = { ...new_array[indexItem] }
              new_item.checked = event.target.checked
              new_array[indexItem] = new_item
              setListTodo(new_array)
            }}
          />
          <div>{dataTodoItem.title}</div>
        </div>
        <div className="action-todo">
          <Button
            title="Detail"
            style={{ backgroundColor: '#13c2c2', borderColor: '#13c2c2' }}
            onClickButton={() => setVisibleDetail(!visibleDetail)}
          />

          <Button
            title="Remove"
            style={{ backgroundColor: '#f5222d', borderColor: '#f5222d' }}
            onClickButton={() => {
              deleteTodo(dataTodoItem.id)
              getDataListTodo()
            }}
          />
        </div>
      </div>

      {visibleDetail && (
        <div className="content-todo">
          <AddTodoPage
            dataTodo={dataTodoItem}
            getDataListTodo={getDataListTodo}
          />
        </div>
      )}
    </div>
  )
}
