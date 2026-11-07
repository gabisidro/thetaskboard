import { useQuery } from '@tanstack/react-query'
import { fetchUser } from '../api/todos.js'

function AssignedUser({ userId }) {
  const { data: user, isLoading, isError } = useQuery({
    queryKey: ['user', userId],
    queryFn: () => fetchUser(userId),
  })

  if (isLoading) return <p className="text-sm text-gray-500">Loading assignee...</p>
  if (isError) return <p className="text-sm text-red-700">Assignee unavailable</p>

  return (
    <p className="mt-4">
      Assigned to <span className="font-medium">{user.name}</span>
    </p>
  )
}

export default AssignedUser