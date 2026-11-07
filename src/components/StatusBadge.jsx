function StatusBadge({ completed }) {
  return completed ? (
    <span className="rounded-full border border-green-700 bg-green-50 px-3 py-1 font-data text-xs font-medium text-green-700">
      Done
    </span>
  ) : (
    <span className="rounded-full border border-black px-3 py-1 font-data text-xs font-medium">
      Open
    </span>
  )
}

export default StatusBadge