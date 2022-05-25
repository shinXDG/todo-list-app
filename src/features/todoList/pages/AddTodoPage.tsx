import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Input, MyButton, Selectbox, TextArea } from 'shared/components'
import { getDateNow } from 'shared/utils/functionHelper'
import { createTodo, updateTodo } from '../RequestFake'
import { TTodoItem } from '../todolist'

type Props = {
  dataTodo?: TTodoItem
  getDataListTodo?: () => void
}

function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min
}

export const AddTodoPage: React.FC<Props> = ({ dataTodo, getDataListTodo }) => {
  const navigate = useNavigate()
  const dateNow = getDateNow()
  const [dataPush, setDataPush] = useState<TTodoItem>({
    id: randomInt(1, 1000),
    title: '',
    due_date: new Date(),
    piority: 'Normal',
    checked: false,
    description: '',
  })
  useEffect(() => {
    if (dataTodo) {
      setDataPush(dataTodo)
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
    if (dataPush.title) {
      createTodo(dataPush)
      navigate('../todo-list')
    }
  }

  const onUpdateTodo = () => {
    if (dataPush.title) {
      updateTodo(dataPush)
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
            value={dataPush.title}
            onChange={(e: any) =>
              setDataPush({ ...dataPush, title: e.target.value })
            }
          />
        </div>

        <div className="item-form">
          <div style={{ width: '100%' }}>
            <span>Description</span>
            <TextArea
              style={{ width: '100%' }}
              placeholder="Description task..."
              rows={4}
              value={dataPush.description}
              onChange={(e: any) =>
                setDataPush({ ...dataPush, description: e.target.value })
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
                value={dataPush.due_date?.toString()}
                min={dateNow}
                onChange={(e: any) => {
                  console.log('dateNow: ', dateNow)
                  setDataPush({
                    ...dataPush,
                    due_date: e.target.value,
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
                value={dataPush.piority}
                options={[
                  { value: 'Low', label: 'Low' },
                  { value: 'Normal', label: 'Normal' },
                  { value: 'High', label: 'High' },
                ]}
                onChange={(e: any) => {
                  console.log('e: ', e)
                  setDataPush({ ...dataPush, piority: e.target.value })
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
