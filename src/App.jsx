import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import TasksPage from './pages/TasksPage.jsx'
import TaskDetailPage from './pages/TaskDetailPage.jsx'
import StatsPage from './pages/StatsPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

function App() {
  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 py-8">
        <Routes>
          <Route path="/" element={<TasksPage />} />
          <Route path="/tasks/:id" element={<TaskDetailPage />} />
          <Route path="/stats" element={<StatsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App