import React from "react";
import { Card, Tag, Checkbox } from "antd";
import { FieldTimeOutlined } from "@ant-design/icons";
import moment from "moment";

const TodoListItem = (props) => {
  const { todo, onCompleteChange } = props;

  return (
    <Card
      title={
        <span style={{ display: "flex" }}>
          <Checkbox
            onChange={() => {
              onCompleteChange(todo.id, !todo.completed);
            }}
            checked={todo.completed}
          />
          <span
            style={{
              whiteSpace: "pre-wrap",
              textDecoration: todo.completed ? "line-through" : "none",
              marginLeft: "6px",
            }}
          >
            {todo.title}
          </span>
        </span>
      }
      extra={
        <Tag color={todo.completed ? "blue" : "orange"}>
          {todo.completed ? "完成" : "未完成"}
        </Tag>
      }
    >
      <div>
        <div
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
            marginBottom: "20px",
            wordWrap: "break-word",
          }}
        >
          {todo.description}
        </div>
        <div style={{ color: "#AEAEAE" }}>
          <FieldTimeOutlined style={{ marginRight: "3px" }} />
          {moment(todo.expiredDate).format("YYYY-MM-DD hh:mm")}
        </div>
      </div>
    </Card>
  );
};

export default TodoListItem;
