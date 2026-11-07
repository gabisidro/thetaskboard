import { useQuery } from '@tanstack/react-query'
import { fetchTodos } from '../api/todos.js'
import LoadingState from '../components/LoadingState.jsx'
import ErrorState from '../components/ErrorState.jsx'
import StatCard from '../components/StatCard.jsx'

function StatsPage() {
  const { data: todos, isLoading, isError, refetch } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
  })

  if (isLoading) return <LoadingState message="Loading stats..." />
  if (isError) return <ErrorState message="Couldn't load stats." onRetry={refetch} />

  const total = todos.length
  const done = todos.filter((todo) => todo.completed).length
  const open = total - done
  const percentDone = Math.round((done / total) * 100)

  return (
    <section>
      <h1 className="font-display text-5xl">Overview</h1>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        <StatCard label="Total" value={total} />
        <StatCard label="Done" value={done} />
        <StatCard label="Open" value={open} />
      </div>
      <section className="mt-6">
        <h2 className="font-semibold">Completion</h2>
        <p className="font-display text-5xl text-green-700">{percentDone}%</p>
        <p className="font-data text-sm text-gray-500">
          {done} of {total} tasks done
        </p>
      </section>
    </section>
  )
}

export default StatsPage