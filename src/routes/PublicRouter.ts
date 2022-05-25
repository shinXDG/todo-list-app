import { HomePage } from "features/home";
import { TodolistPage } from "features/todoList";

interface RouterProps {
  path: string;
  element: React.FC | any;
}

const publicRouter: Array<RouterProps> = [
  {
    path: "/",
    element: HomePage,
  },
  {
    path: "/todo-list",
    element: TodolistPage,
  },
];
export default publicRouter;
