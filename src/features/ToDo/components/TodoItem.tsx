import React, { useState } from 'react'
import { Button, Checkbox } from 'shared/components'
import { AddTodoPage } from '../pages/AddTodo'
import { deleteTodo } from '../RequestFake'
import { TTodoItem, TTodoList } from '../todo'

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

  const onClickCheckbox = (checked: boolean) => {
    const dataSource: Array<TTodoItem> = [
      ...JSON.parse(localStorage.getItem('list_todo') || ''),
    ]
    const indexTodo = dataSource?.findIndex(
      (item: any) => item.id === dataTodoItem.id
    )
    if (indexTodo !== -1) {
      dataSource[indexTodo] = { ...dataSource[indexTodo], checked }
      localStorage.setItem('list_todo', JSON.stringify(dataSource))
    }
    getDataListTodo()
  }
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
              onClickCheckbox(event.target.checked)
            }}
          />
          <div>{dataTodoItem.title}</div>
        </div>
        <div className="action-todo">
          <Button
            title="Detail"
            style={{
              backgroundColor: '#13c2c2',
              borderColor: '#13c2c2',
              marginRight: '12px',
            }}
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
