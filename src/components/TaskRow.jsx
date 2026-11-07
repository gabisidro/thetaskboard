import { Link } from 'react-router-dom'
import StatusBadge from './StatusBadge.jsx'

function TaskRow({ id, title, completed, userId }) {
  return (
    <li className="flex flex-col gap-2 border-b border-gray-200 py-4 md:flex-row md:items-center md:justify-between">
      <Link to={`/tasks/${id}`} className="font-medium hover:text-blue-700">
        {title}
      </Link>
      <div className="flex items-center gap-3">
        <span className="font-data text-sm text-gray-500">User {userId}</span>
        <StatusBadge completed={completed} />
      </div>
    </li>
  )
}

export default TaskRow