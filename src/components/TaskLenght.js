import React from 'react'
import { useSelector } from 'react-redux'

function TaskLenght() {
  const tasks = useSelector((state) => (state.todo))
  const undonedTasks = tasks.filter((t) => t.done === false)
  return (
    <div>
      <strong> Tâches à faire : {undonedTasks.length} </strong>
    </div>
  )
}

export default TaskLenght