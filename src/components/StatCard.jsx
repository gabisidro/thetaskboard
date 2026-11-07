function StatCard({ label, value }) {
    return (
      <div className="rounded border border-gray-200 p-4">
        <p className="font-display text-5xl">{value}</p>
        <p className="font-data text-sm text-gray-500">{label}</p>
      </div>
    )
  }
  
  export default StatCard