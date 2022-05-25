import { TTodoList } from '../todo'

export const LIST_TODO: TTodoList = [
  {
    id: 1,
    title: 'Do homework',
    due_date: Date.now(),
    piority: 'Normal',
    checked: true,
    description: '',
  },
  {
    id: 2,
    title: 'Learning English',
    due_date: Date.now(),
    piority: 'Low',
    checked: false,
    description: '',
  },
  {
    id: 3,
    title: 'Learning NextJS',
    due_date: Date.now(),
    piority: 'Normal',
    checked: true,
    description: '',
  },
  {
    id: 4,
    title: 'Learning ReactJS',
    due_date: Date.now(),
    piority: 'High',
    description: '',
    checked: false,
  },
]
