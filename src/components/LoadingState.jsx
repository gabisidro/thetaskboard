function LoadingState({ message }) {
    return (
      <div className="space-y-3">
        {[1, 2, 3].map((n) => (
          <div key={n} className="h-12 animate-pulse rounded bg-gray-100" />
        ))}
        <p className="text-sm text-gray-500">{message}</p>
      </div>
    )
  }
  
  export default LoadingState