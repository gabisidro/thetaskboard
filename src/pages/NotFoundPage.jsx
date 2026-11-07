import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section className="py-12 text-center">
      <p className="font-display text-8xl">404</p>
      <h1 className="text-xl font-semibold">This page doesn't exist</h1>
      <Link to="/" className="mt-4 inline-block text-blue-700">Back to tasks</Link>
    </section>
  )
}

export default NotFoundPage