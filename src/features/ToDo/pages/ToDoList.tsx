import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Input } from 'shared/components'
import Alert from 'shared/components/Alert/Alert'
import { TodoItem } from '../components/TodoItem'
import { findAll } from '../RequestFake'
import '../style/style.css'
import { TTodoList } from '../todo'

export const ToDoList = () => {
  const navigate = useNavigate()
  const [searchKey, setSearchKey] = useState<string>('')
  const [listTodo, setListTodo] = useState<TTodoList>(findAll(searchKey))

  useEffect(() => {
    setTimeout(() => {
      getDataListTodo()
    }, 500)
  }, [searchKey])

  const getDataListTodo = () => {
    let dataSource = findAll(searchKey)
    setListTodo(dataSource)
  }

  return (
    <div className="warp-todo-list">
      <span className="title-todolist">To Do List</span>
      <div className="body-todolist">
        <div className="header-todolist">
          <div style={{ display: 'flex', width: '86%' }}>
            <Input
              placeholder="Search..."
              style={{ width: '70%' }}
              onChange={(e: any) => {
                setSearchKey(e.target.value)
              }}
            />
            {/* <Button title="Search" onClickButton={getDataListTodo} /> */}
          </div>

          <Button
            title="Add task"
            onClickButton={() => {
              navigate('../add-todo')
            }}
          />
        </div>
      </div>
      <div style={{ marginTop: '20px', width: '100%' }}>
        {listTodo?.map((item: any, index: number) => (
          <TodoItem
            indexItem={index}
            key={index}
            dataTodoItem={item}
            listTodo={listTodo}
            setListTodo={setListTodo}
            getDataListTodo={getDataListTodo}
          />
        ))}
        {listTodo.length > 0 && (
          <div
            className="warp-bulk-action"
            // style={listTodo.length > 0 ? { display: 'none' } : {}}
          >
            <div className="bulk-action">
              <span>Bulk action:</span>
              <div className="action-todo">
                <Button
                  title="Done"
                  style={{
                    backgroundColor: '#13c2c2',
                    borderColor: '#13c2c2',
                    marginRight: '10px',
                  }}
                  onClickButton={() => {}}
                />

                <Button
                  title="Remove"
                  style={{ backgroundColor: '#f5222d', borderColor: '#f5222d' }}
                  onClickButton={() => {
                    // deleteTodo(dataTodoItem.id)
                    getDataListTodo()
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
