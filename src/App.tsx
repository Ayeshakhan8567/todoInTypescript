import Input from "./components/Input"
import List from "./components/List.tsx"
import { useState } from "react"
import React from "react"

function App() {
  type Task = {
  text: string;
  completed: boolean;
};
const handleCheckBoxChange = (index: number) => {
  const newList = [...list];
  newList[index].completed = !newList[index].completed;
  setList(newList);
};
  const [search, setSearchValue] = useState<string>('');
  const [list, setList] = useState<Task[]>([])
  const [inputValue, setInputValue] = React.useState('')
  const [editIndex, setEditIndex] = React.useState<number | null>(null);
  const [display, setDisplay] = React.useState<boolean>(true);
  
  const filteredList = list.filter((task) =>
  task.text.toLowerCase().includes(search.toLowerCase())
);

  function savetask() {
  if (editIndex !== null) {
    const newList = [...list]
    newList[editIndex].text = inputValue;
    setList(newList)

    setEditIndex(null)
  } else {
    setList([...list, {
  text: inputValue,
  completed: false
}])
  }

  setInputValue('')
}

  function deletetask(index: number) {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  }

  function edittask(index: number) {
    setInputValue(list[index].text);
    setEditIndex(index);
  }
  function displayTasks() {
    if (display) {
      setDisplay(false);
    } else {
      setDisplay(true);
    }
  }

  return (
    <>
      <Input
        savetask={savetask}
        displayTasks={displayTasks}
        display={display}
        inputValue={inputValue}
        setInputValue={setInputValue}
        search={search}
        setSearchValue={setSearchValue}
      />

      <List
      
        list={filteredList}
        deletetask={deletetask}
        edittask={edittask}
        display={display}
        handleCheckboxChange={handleCheckBoxChange}
      />
    </>
  )

}
export default App