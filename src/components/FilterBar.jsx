function FilterBar({ search, onSearchChange, status, onStatusChange, user, onUserChange }) {
  const userIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="my-4 grid gap-2 md:grid-cols-4"
    >
      <div className="md:col-span-2">
        <label htmlFor="search" className="block text-xs font-medium text-gray-500">
          Search tasks
        </label>
        <input
          id="search"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search by title"
          className="w-full rounded border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-700"
        />
      </div>
      <div>
        <label htmlFor="status" className="block text-xs font-medium text-gray-500">
          Status
        </label>
        <select
          id="status"
          value={status}
          onChange={(e) => onStatusChange(e.target.value)}
          className="w-full rounded border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-700"
        >
          <option value="all">All</option>
          <option value="open">Open</option>
          <option value="done">Done</option>
        </select>
      </div>
      <div>
        <label htmlFor="user" className="block text-xs font-medium text-gray-500">
          User
        </label>
        <select
          id="user"
          value={user}
          onChange={(e) => onUserChange(e.target.value)}
          className="w-full rounded border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-700"
        >
          <option value="all">All</option>
          {userIds.map((id) => (
            <option key={id} value={id}>User {id}</option>
          ))}
        </select>
      </div>
    </form>
  )
}

export default FilterBar
