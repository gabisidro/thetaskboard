function ErrorState({ message, hint, onRetry }) {
    return (
      <div className="rounded border border-red-700 bg-red-50 p-6 text-center">
        <p className="font-medium text-red-700">{message}</p>
        {hint && <p className="mt-1 text-sm text-gray-500">{hint}</p>}  
        {onRetry && (
          <button
            type="button"
            onClick={() => onRetry()}
            className="mt-4 rounded bg-black px-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-700"
          >
            Try again
          </button>
        )}
      </div>
    )
  }
  
  export default ErrorState