import React, { useState } from "react";
import { Calendar, Badge } from "antd";
import CreateTodoModal from "./CreateTodoModal";

const Home = (props) => {
  const { todos, onAddTodo } = props;
  const [showCreateModal, setShowCreateModal] = useState(false);

  const getMonthTodos = (value) => {
    return todos.filter(
      (todo) =>
        todo.expiredDate.isSame(value, "year") &&
        todo.expiredDate.isSame(value, "month")
    );
  };

  const monthCellRender = (value) => {
    const monthTodos = getMonthTodos(value);
    return renderTodoItem(monthTodos);
  };

  const getDayTodos = (value) => {
    return todos.filter((todo) => todo.expiredDate.isSame(value, "day"));
  };

  const dateCellRender = (value) => {
    const dayTodos = getDayTodos(value);
    return renderTodoItem(dayTodos);
  };

  const renderTodoItem = (todos) => {
    return (
      <ul style={{ listStyle: "none" }}>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.completed ? (
              <Badge
                status="default"
                text={todo.title}
                style={{
                  textDecoration: "line-through",
                  color: "gray",
                }}
              />
            ) : (
              <Badge
                status="processing"
                text={todo.title}
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
              />
            )}
          </li>
        ))}
      </ul>
    );
  };

  const handleOpenTodoModal = (value) => {
    setShowCreateModal(true);
  };

  const handleCancel = (e) => {
    setShowCreateModal(false);
  };

  const handleAddTodo = (todo) => {
    onAddTodo(todo);
    setShowCreateModal(false);
  };
  return (
    <div>
      <CreateTodoModal
        visible={showCreateModal}
        onAddTodo={handleAddTodo}
        onCancel={handleCancel}
      />
      <div>
        <Calendar
          dateCellRender={dateCellRender}
          monthCellRender={monthCellRender}
        ></Calendar>
      </div>
    </div>
  );
};

export default Home;
