import React, { useEffect } from 'react'

const TaskPage = () => {
    useEffect(() => {
      Hello()
    }, [])
    
    const Hello = () =>{
        console.log('asd')
    }
  return (
    <div>TaskPage</div>
  )
}
export default TaskPage