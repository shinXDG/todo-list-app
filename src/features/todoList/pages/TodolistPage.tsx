import { useEffect, useState } from "react";
import "../style/style.css";
import { TodoItem } from "../components/TodoItem";
import { TTodoItem, TTodoList } from "../todolist";
import { ButtonComponent, InputComponent } from "shared/components";
import { useNavigate } from "react-router-dom";
import { findAll } from "../RequestFake";

export const TodolistPage = () => {
  const navigate = useNavigate();
  const [searchKey, setSearchKey] = useState<string>("");
  const [listTodo, setListTodo] = useState<TTodoList>(findAll(searchKey));

  useEffect(() => {
    setTimeout(() => {
      getDataListTodo();
    }, 500);
  }, [searchKey]);

  const getDataListTodo = () => {
    let dataSource = findAll(searchKey);
    setListTodo(dataSource);
  };

  return (
    <div className="warp-todo-list">
      <span className="title-todolist">To Do List</span>
      <div className="body-todolist">
        <div className="header-todolist">
          <div style={{ display: "flex", width: "86%" }}>
            <InputComponent
              placeholder="Search..."
              style={{ width: "70%" }}
              onChange={(e: any) => {
                setSearchKey(e.target.value);
              }}
            />
            {/* <ButtonComponent title="Search" onClickButton={getDataListTodo} /> */}
          </div>

          <ButtonComponent
            title="Add task"
            onClickButton={() => {
              navigate("../add-todo");
            }}
          />
        </div>
      </div>
      <div style={{ marginTop: "20px", width: "100%" }}>
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
        {/* <div className="bulk-action">bulk action</div> */}
      </div>
    </div>
  );
};
