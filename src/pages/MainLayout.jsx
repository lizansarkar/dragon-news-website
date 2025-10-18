import React from 'react'
import { Navigate } from 'react-router-dom'

export default function MainLayout() {
  return (
    <div>
      <Navigate to="/category/1"></Navigate>
    </div>
  )
}
