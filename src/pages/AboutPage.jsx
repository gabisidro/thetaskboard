import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <section className="max-w-prose">
      <h1 className="font-display text-5xl">About</h1>
      <p className="mt-4">
        TheTaskBoard is a minimalist task manager. It loads tasks from the
        JSONPlaceholder API and lets you search, filter and review them.
      </p>
      <Link to="/" className="mt-6 inline-block text-blue-700">See the tasks →</Link>
    </section>
  )
}

export default AboutPage