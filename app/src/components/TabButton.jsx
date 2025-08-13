import React from 'react'

function TabButton(Active ,selectTab, Children) {
    const ButtonClasses= active?'text-white border-b border-purple-500 ':'text-[#aabfb3]'
  return (
  

    <button onClick={selectTab}>
    <p> className={`mr-3  font-semibold  hover:text-white ${ButtonClasses}`}
    
        {Children}
      </p>
    </button>
  )
}

export default TabButton