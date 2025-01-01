import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDoList, setToDoList] = useState([]); // 입력되는 to-do를 받을 빈 배열 state
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();

    if (toDo === "") {
      return;
    }

    setToDoList((currentToDoList) => [toDo, ...currentToDoList]); // 함수를 이용한 값 변경
    setToDo(""); // to-do 추가된 후 input 비우고 싶어서 / 직접적인 값 변경
  }

  console.log(toDoList);

  return (
    <div>
      <h1>My To Dos ({toDoList.length})</h1>
      <form onSubmit={onSubmit}>
        <input value={toDo} type="text" placeholder="Write your to do..." onChange={onChange}></input>
        <button type="submit">Add To Do</button>
      </form>
    </div>
  );
}

export default App;

// ⭐️ 절대 직접적으로 state를 수정하지 않음 -> 항상 state 수정하는 함수를 이용
// .jsx 파일에 자바스크립트 넣고 싶다면 중괄호 필요 (ex. {toDoList.length})
