function EmptyState({ message, actionLabel, onAction }) {
    return (
      <div className="rounded border border-dashed border-gray-200 p-6 text-center">
        <p className="text-gray-500">{message}</p>
        {onAction && (
          <button
            type="button"
            onClick={onAction}
            className="mt-4 rounded border border-black px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-700"
          >
            {actionLabel}
          </button>
        )}
      </div>
    )
  }
  
  export default EmptyState