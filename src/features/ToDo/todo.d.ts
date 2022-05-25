export type TTodoList = TTodoItem[]

export type TTodoItem = {
  id: number
  title: string
  due_date: number
  piority: 'Low' | 'Normal' | 'High'
  checked: boolean
  description: string
}
