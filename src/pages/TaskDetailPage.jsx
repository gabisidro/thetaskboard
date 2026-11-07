import { useParams, Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchTodo } from '../api/todos.js'
import LoadingState from '../components/LoadingState.jsx'
import ErrorState from '../components/ErrorState.jsx'
import StatusBadge from '../components/StatusBadge.jsx'
import AssignedUser from '../components/AssignedUser.jsx'

function TaskDetailPage() {
  const { id } = useParams()

  const { data: todo, isLoading, isError } = useQuery({
    queryKey: ['todo', id],
    queryFn: () => fetchTodo(id),
  })

  if (isLoading) return <LoadingState message="Loading task..." />
  if (isError) return <ErrorState message={`We couldn't load task #${id}. It may not exist.`} />

  return (
    <article>
      <Link to="/" className="text-sm text-blue-700">← Back to tasks</Link>
      <h1 className="mt-4 font-display text-4xl md:text-5xl">{todo.title}</h1>
      <StatusBadge completed={todo.completed} />
      <AssignedUser userId={todo.userId} />
      <p className="font-data text-sm text-gray-500">Task number {todo.id}</p>
      <p className="font-data text-sm text-gray-500">User ID {todo.userId}</p>  
    </article>
  )
}

export default TaskDetailPage