import React, { useState } from "react";
import { ButtonComponent, MyCheckbox } from "shared/components";
import { AddTodoPage } from "../pages/AddTodoPage";
import { deleteTodo } from "../RequestFake";
import { TTodoItem, TTodoList } from "../todolist";

type TodoItemProps = {
  dataTodoItem: TTodoItem;
  indexItem: number;
  listTodo: Array<any>;
  setListTodo: React.Dispatch<React.SetStateAction<TTodoList>>;
  getDataListTodo: () => void;
};

export const TodoItem: React.FC<TodoItemProps> = ({
  dataTodoItem,
  indexItem,
  listTodo,
  setListTodo,
  getDataListTodo,
}) => {
  const [visibleDetail, setVisibleDetail] = useState<boolean>(false);
  return (
    <div style={{ width: "100%" }}>
      <div className="warp-item-todo">
        <div className="title-todo">
          <MyCheckbox
            checked={dataTodoItem.checked}
            onChange={(event: any) => {
              let new_array = [...listTodo];
              let new_item = { ...new_array[indexItem] };
              new_item.checked = event.target.checked;
              new_array[indexItem] = new_item;
              setListTodo(new_array);
            }}
          />
          <div>{dataTodoItem.title}</div>
        </div>
        <div className="action-todo">
          <ButtonComponent
            title="Detail"
            style={{ backgroundColor: "#36cfc9", borderColor: "#36cfc9" }}
            onClickButton={() => setVisibleDetail(!visibleDetail)}
          />

          <ButtonComponent
            title="Remove"
            style={{ backgroundColor: "#f5222d", borderColor: "#f5222d" }}
            onClickButton={() => {
              deleteTodo(dataTodoItem.id);
              getDataListTodo();
            }}
          />
        </div>
      </div>

      {visibleDetail && (
        <div className="content-todo">
          <AddTodoPage
            dataTodo={dataTodoItem}
            getDataListTodo={getDataListTodo}
          />
        </div>
      )}
    </div>
  );
};
