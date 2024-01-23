import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import GamePage from '../pages/GamePage'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/'>
        <Route index element={<GamePage />} />

        <Route path='*' element={<Navigate to="/" />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes