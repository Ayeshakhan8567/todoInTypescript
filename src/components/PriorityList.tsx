import React from 'react'

type PriorityListProps = {
setPriorityValue: React.Dispatch<React.SetStateAction<'High' | 'Medium' | 'Low'>>;
}

const PriorityList = ({setPriorityValue }: PriorityListProps) => {
  return (
    <>
    <div  className="fixed bottom-5 right-5 bg-white shadow-lg border rounded-md">
    <button className="block w-full p-3 hover:bg-gray-100" onClick={() => setPriorityValue('High')}>
      High
    </button>

    <button className="block w-full p-3 hover:bg-gray-100" onClick={() => setPriorityValue('Medium')}>
      Medium
    </button>

    <button className="block w-full p-3 hover:bg-gray-100" onClick={() => setPriorityValue('Low')}>
      Low
    </button>
  </div>
    </>
  )
}

export default PriorityList