import { Route,BrowserRouter as Router, Routes } from 'react-router-dom'
import Login from '../pages/login'

export function MainRoutes() {

  return (
    <>
      <Router>
        <Routes>
        <Route  path="/" element={<Login/>}/>
        </Routes>
      </Router>
    </>
  )
}

