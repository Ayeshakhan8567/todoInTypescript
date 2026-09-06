import PriorityList from './PriorityList';

type Task = {
  text: string;
  completed: boolean;
};

type ListProps = {
  list: Task[];
  deletetask: (index: number) => void;
  edittask: (index: number) => void;
  display: boolean;
  handleCheckboxChange: (index: number) => void;
  priority: boolean;
  setPriority: React.Dispatch<React.SetStateAction<boolean>>;
  priorityValue: 'High' | 'Medium' | 'Low';
  setPriorityValue: React.Dispatch<React.SetStateAction<'High' | 'Medium' | 'Low'>>;
};

const List = ({
  list,
  deletetask,
  edittask,
  display,
  handleCheckboxChange,
  priority,
  setPriority,
  priorityValue,
  setPriorityValue
}: ListProps) => {
  return (
    <>
      {display && (
        <ol className="list-decimal list-inside">
          {list.map((task, index) => (
            <li
              className="flex gap-15 justify-between items-center border border-gray-300 rounded-md p-2 mb-2"
              key={index}
            >

              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleCheckboxChange(index)}
              />

              <div
                className={`flex justify-center items-center ${
                  task.completed ? 'line-through text-gray-500' : ''
                }`}
              >
                {task.text}
              </div>

              <div className="flex gap-2 relative">

                <button
                  className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                  onClick={() => deletetask(index)}
                >
                  Delete
                </button>

                <button
                  className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
                  onClick={() => edittask(index)}
                >
                  Edit
                </button>

                <button
   className={`p-2 rounded-md text-white ${
  priorityValue === "High"
    ? "bg-red-500"
    : priorityValue === "Medium"
    ? "bg-blue-300"
    : priorityValue === "Low"
    ? "bg-green-500"
    : "bg-gray-400"
}`}
                  onClick={() => setPriority(!priority)}
                >
                  {priorityValue}
                </button>

                {priority && (
                  <div className="absolute bottom-full right-0 mb-2">
                    <PriorityList setPriorityValue={setPriorityValue} />
                  </div>
                )}

              </div>

            </li>
          ))}
        </ol>
      )}
    </>
  );
};

export default List;