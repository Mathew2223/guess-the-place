import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import GameStart from './GameStart.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Login from './Login'
import ErrorPage from './ErrorPage'
import App from './App'
import AuthProvider from './AuthContext'
import ProtectedRoute from './ProtectedRoute'

const render = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/guess-the-place"
      element={<AuthProvider><App /></AuthProvider>}
      errorElement={<ErrorPage />}
    >
      <Route path='login' Component={Login} />
      <Route Component={ProtectedRoute}>
        <Route index Component={GameStart} />
      </Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={render} />
  </StrictMode>,
)
