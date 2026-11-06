const API_URL = 'https://jsonplaceholder.typicode.com'

export async function fetchTodos() {
  const response = await fetch(`${API_URL}/todos`)
  if (!response.ok) throw new Error(`API responded ${response.status}`)
  return response.json()
}

export async function fetchTodo(id) {
  const response = await fetch(`${API_URL}/todos/${id}`)
  if (!response.ok) throw new Error(`API responded ${response.status}`)
  return response.json()
}

export async function fetchUser(id) {
  const response = await fetch(`${API_URL}/users/${id}`)
  if (!response.ok) throw new Error(`API responded ${response.status}`)
  return response.json()
}