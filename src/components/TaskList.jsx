import TaskRow from './TaskRow.jsx'

function TaskList({ todos }) {
  return (
    <ul className="border-t border-black">
      {todos.map((todo) => (
        <TaskRow
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
          userId={todo.userId}
        />
      ))}
    </ul>
  )
}

export default TaskList