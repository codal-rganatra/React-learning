import React, { useState } from 'react'

type todotype = {
    task: string;
}

const TodoList = () => {
    const [todo, settodo] = useState<todotype[]>([{task:"Complete React"}]);
  return (
    <div>
        {todo.map(td => (
            <p>{td.task}</p>
        ))}
    </div>
  )
}

export default TodoList