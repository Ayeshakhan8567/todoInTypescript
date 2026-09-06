import React from 'react'

type InputProps = {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  savetask: () => void;
  displayTasks: () => void;
  display: boolean;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  search: string;
};

const Input = ({inputValue, setInputValue, savetask, displayTasks,display,setSearchValue,search}: InputProps) => {
  return (
    <> 
    <input 
      className="border border-gray-600 rounded-md p-2 w-full"
      type="text" 
      placeholder="Add task" 
      value={inputValue}
      onChange={(e) => {
  setInputValue(e.target.value);

}}
    />
<input 
      className="border border-gray-600 rounded-md p-2 w-full"
      type="text" 
      placeholder="Search tasks" 
      value={search}
      onChange={(e) => {
  setSearchValue(e.target.value);
}}
    />


    <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600  " onClick={savetask}>
      Add
    </button>
     <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600  " onClick={displayTasks}>
      {display ? "Hide" : "Show"}
    </button>
      
  
      



    </>
  )
}
export default Input