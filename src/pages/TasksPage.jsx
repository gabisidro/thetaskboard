import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchTodos } from '../api/todos.js'
import LoadingState from '../components/LoadingState.jsx'
import ErrorState from '../components/ErrorState.jsx'
import EmptyState from '../components/EmptyState.jsx'
import TaskList from '../components/TaskList.jsx'
import FilterBar from '../components/FilterBar.jsx'

function TasksPage() {
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState('all')
  const [user, setUser] = useState('all')

  const { data: todos, isLoading, isError, refetch } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
  })

  if (isLoading) return <LoadingState message="Loading tasks..." />

  if (isError) {
    return (
      <ErrorState
        message="Something went wrong loading tasks."
        hint="Check your connection, then try again."
        onRetry={refetch}
      />
    )
  }

  const visibleTodos = todos.filter((todo) => {
    const matchesSearch = todo.title.toLowerCase().includes(search.toLowerCase())
    const matchesStatus =
      status === 'all' || (status === 'done' ? todo.completed : !todo.completed)
    const matchesUser = user === 'all' || todo.userId === Number(user)
    return matchesSearch && matchesStatus && matchesUser
  })

  function clearFilters() {
    setSearch('')
    setStatus('all')
    setUser('all')
  }

  return (
    <section>
      <h1 className="font-display text-5xl">Tasks</h1>

      <FilterBar
        search={search}
        onSearchChange={setSearch}
        status={status}
        onStatusChange={setStatus}
        user={user}
        onUserChange={setUser}
      />

      <p className="font-data text-sm text-gray-500">
        Showing {visibleTodos.length} of {todos.length} tasks
      </p>

      {visibleTodos.length === 0 ? (
        <EmptyState
          message="No tasks match your filters."
          actionLabel="Clear filters"
          onAction={clearFilters}
        />
      ) : (
        <TaskList todos={visibleTodos} />
      )}
    </section>
  )
}

export default TasksPage