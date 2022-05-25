import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ButtonComponent,
  InputComponent,
  SelectboxComponent,
  TextAreaComponent,
} from "shared/components";
import { LIST_TODO } from "features/todoList/mock";
import "../style.css";
export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container-home">
      <div style={{ display: "flex", justifyContent: "center" }}>
        Welcome to app TodoList
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ButtonComponent
          onClickButton={() => {
            localStorage.setItem("list_todo", JSON.stringify(LIST_TODO));
            navigate("todo-list");
          }}
          title="Let's go"
        />
      </div>
    </div>
  );
};
