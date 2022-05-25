import { TTodoItem } from './todo'

export const findAll = (searchKey: string) => {
  let dataSource: Array<any> = JSON.parse(
    localStorage.getItem('list_todo') || ''
  )
  const res =
    dataSource?.filter((item: TTodoItem) =>
      item.title.toLocaleLowerCase().includes(searchKey.toLocaleLowerCase())
    ) || []
  return res
}

export const findOne = (id: number) => {
  return JSON.parse(localStorage.getItem('list_todo') || '') || []
}

export const createTodo = (param: Omit<TTodoItem, 'id'>) => {
  const payload: TTodoItem = { ...param, id: Date.now() }
  const dataSource: Array<TTodoItem> = [
    ...JSON.parse(localStorage.getItem('list_todo') || ''),
    payload,
  ]
  localStorage.setItem('list_todo', JSON.stringify(dataSource))
}

export const updateTodo = (id: number, payload: Omit<TTodoItem, 'id'>) => {
  const dataSource: Array<TTodoItem> = [
    ...JSON.parse(localStorage.getItem('list_todo') || ''),
  ]
  const indexTodo = dataSource?.findIndex((item: any) => item.id === id)
  if (indexTodo !== -1) {
    dataSource[indexTodo] = { ...payload, id }
    localStorage.setItem('list_todo', JSON.stringify(dataSource))
  }
}

export const deleteTodo = (id: number) => {
  let dataSource: Array<TTodoItem> = [
    ...JSON.parse(localStorage.getItem('list_todo') || ''),
  ]
  let indexTodo = dataSource?.findIndex((item: any) => item.id === id)
  if (indexTodo !== -1) {
    dataSource.splice(indexTodo, 1)
    localStorage.setItem('list_todo', JSON.stringify(dataSource))
  }
  return dataSource
}
