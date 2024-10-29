import axios from "axios";
import { memo, useCallback, useEffect, useRef, useState } from "react";

export default function ServerTodo() {
  const [todo, setTodo] = useState([]);
  const inputRef = useRef(null);

  const fetchData = useCallback(() => {
    axios.get("http://localhost:4000").then((res) => {
      setTodo(res.data);
      console.log(res.data);
    });
  }, []);

  const addTodo = useCallback(() => {
    axios
      .post("http://localhost:4000", inputRef.current.value)
      .then(() => fetchData());
  }, []);

  const updateTodo = useCallback((id, newContent) => {
    axios
      .put("http://localhost:4000", { id, newContent })
      .then(() => fetchData());
  }, []);

  const deleteTodo = useCallback((id) => {
    axios
      .delete("http://localhost:4000", { data: { id } })
      .then(() => fetchData());
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>To Do List</h1>
      <div id="todo-input">
        <input type="text" placeholder="할 일을 입력하세요" ref={inputRef} />
        <button onClick={addTodo}>추가하기</button>
      </div>
      <ul id="todo-list">
        {todo.map((el) => (
          <List
            key={el.id}
            // 원시 데이터로 전송??
            {...el}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </>
  );
}
// id, content 원시 데이터로 Props
const List = memo(({ id, content, updateTodo, deleteTodo }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <li>
      {content}
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          updateTodo(id, inputValue);
        }}
      >
        수정
      </button>
      <button
        onClick={() => {
          deleteTodo(id);
        }}
      >
        X
      </button>
    </li>
  );
});
