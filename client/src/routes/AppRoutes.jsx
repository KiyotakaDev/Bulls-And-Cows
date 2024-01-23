import { Routes, Route, Navigate } from 'react-router-dom'
import GamePage from '../pages/GamePage'
import { RoomPage } from '../pages/RoomPage'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/'>
        <Route index element={<RoomPage />} />
        <Route path='/game' element={<GamePage />} />

        <Route path='*' element={<Navigate to="/" />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes