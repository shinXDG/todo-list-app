import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Input, MyButton, Selectbox, TextArea } from 'shared/components'
import { getDateNow } from 'shared/utils/functionHelper'
import { createTodo, updateTodo } from '../RequestFake'
import { TTodoItem } from '../todo'
import { omit } from 'lodash'
type Props = {
  dataTodo?: TTodoItem
  getDataListTodo?: () => void
}

export const AddTodoPage: React.FC<Props> = ({ dataTodo, getDataListTodo }) => {
  const navigate = useNavigate()
  const dateNow = getDateNow()
  const [toDo, setToDo] = useState<Omit<TTodoItem, 'id'>>({
    title: '',
    due_date: Date.now(),
    piority: 'Normal',
    checked: false,
    description: '',
  })
  useEffect(() => {
    if (dataTodo) {
      setToDo(omit(dataTodo, ['id']))
    }
  }, [dataTodo])

  const onFinish = () => {
    if (dataTodo) {
      onUpdateTodo()
    } else {
      onCreateTodo()
    }
  }

  const onCreateTodo = () => {
    if (toDo.title) {
      createTodo(toDo)
      navigate('../toDo-list')
    }
  }

  const onUpdateTodo = () => {
    if (toDo.title) {
      updateTodo(dataTodo?.id as number, toDo)
      getDataListTodo && getDataListTodo()
    }
  }
  return (
    <div className="container-add">
      <div className="title-todolist">New Task</div>
      <div style={{ marginTop: '20px' }}>
        <div className="item-form">
          <Input
            placeholder="Add new task"
            style={{ width: '100%' }}
            value={toDo.title}
            onChange={(e: any) => setToDo({ ...toDo, title: e.target.value })}
          />
        </div>

        <div className="item-form">
          <div style={{ width: '100%' }}>
            <span>Description</span>
            <TextArea
              style={{ width: '100%' }}
              placeholder="Description task..."
              rows={4}
              value={toDo.description}
              onChange={(e: any) =>
                setToDo({ ...toDo, description: e.target.value })
              }
            />
          </div>
        </div>

        <div className="item-form">
          <div
            style={{
              width: '50%',
              display: 'flex',
              justifyContent: 'flex-start',
            }}
          >
            <div
              style={{
                width: '80%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <span>Due date</span>
              <input
                style={{ padding: '5px', border: '1px #d9d9d9 solid' }}
                type="date"
                value={getDateNow(toDo.due_date)}
                min={dateNow}
                onChange={(e: any) => {
                  setToDo({
                    ...toDo,
                    due_date: Date.parse(e.target.value),
                  })
                }}
              />
            </div>
          </div>
          <div
            style={{
              width: '50%',
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <div
              style={{ width: '80%', display: 'flex', flexDirection: 'column' }}
            >
              <span>Piority</span>
              <Selectbox
                style={{ width: '100%' }}
                value={toDo.piority}
                options={[
                  { value: 'Low', label: 'Low' },
                  { value: 'Normal', label: 'Normal' },
                  { value: 'High', label: 'High' },
                ]}
                onChange={(e: any) => {
                  setToDo({ ...toDo, piority: e.target.value })
                }}
              />
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: '20px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <MyButton
            title={dataTodo ? 'Update' : 'Add'}
            onClickButton={onFinish}
            style={{
              width: '20%',
              backgroundColor: '#389e0d',
              borderColor: '#389e0d',
              minWidth: '100px',
            }}
          />
        </div>
      </div>
    </div>
  )
}
