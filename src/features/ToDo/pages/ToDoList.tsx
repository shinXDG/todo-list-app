import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Input } from 'shared/components'
import { TodoItem } from '../components/TodoItem'
import { deleteManyTodo, findAll } from '../RequestFake'
import '../style/style.css'
import { TTodoItem, TTodoList } from '../todo'

export const ToDoList = () => {
  const navigate = useNavigate()
  const [searchKey, setSearchKey] = useState<string>('')
  const [listTodo, setListTodo] = useState<TTodoList>(findAll(searchKey))
  const [selectedKey, setSelectedKey] = useState<number>(-1)
  useEffect(() => {
    setTimeout(() => {
      getDataListTodo()
    }, 500)
  }, [searchKey])

  useEffect(() => {
    const foundIndex = listTodo.findIndex((item: TTodoItem) => item.checked)
    if (foundIndex !== -1) {
      setSelectedKey(foundIndex)
    } else {
      setSelectedKey(-1)
    }
  }, [listTodo])
  const getDataListTodo = () => {
    let dataSource = findAll(searchKey)
    setListTodo(dataSource)
  }

  return (
    <div className="warp-todo-list">
      <span className="title-todolist">To Do List</span>
      <div className="body-todolist">
        <div className="header-todolist">
          <div style={{ display: 'flex', width: '60%' }}>
            <Input
              placeholder="Search..."
              style={{ width: '100%' }}
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
            className={
              selectedKey !== -1
                ? 'warp-bulk-action'
                : 'hidden-wrap-bulk-action'
            }
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
                    const array_delete =
                      listTodo
                        ?.filter((itemFilter: TTodoItem) => itemFilter.checked)
                        .map((item: TTodoItem) => {
                          return item.id
                        }) || []
                    deleteManyTodo(array_delete)
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
