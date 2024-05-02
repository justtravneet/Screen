import React  ,{useState} from 'react'

function Accordions  (props)  {
    const [isopen , setIsopen] = useState(false);
  return (
    <div className='collapsible'>
        
        <button onClick={() => setIsopen(!isopen)} className=' toggle flex justify-between w-full border-b-2  border-black p-2'>
            <span>{props.question}</span>
            <span> + </span>
        </button>
       {isopen && <div className='Content   p-2 rounded-lg transition-[1s]'>
            {props.answer}
        </div>} 
    </div>
  )
}

export default Accordions