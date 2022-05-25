export type TTodoList = Array<TTodoItem | []>

export type TTodoItem = {
  id: number
  title: string
  due_date?: string | number | Dates
  piority: 'Low' | 'Normal' | 'High'
  checked: boolean
  description: string
}
