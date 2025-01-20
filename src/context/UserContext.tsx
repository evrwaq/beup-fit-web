'use client'

import React, { createContext, useContext, useState } from 'react'

interface UserContextProps {
  userName: string
  userPhoto: string | null
  setUserName: (name: string) => void
  setUserPhoto: (photo: string) => void
}

const UserContext = createContext<UserContextProps | undefined>(undefined)

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [userName, setUserName] = useState('')
  const [userPhoto, setUserPhoto] = useState<string | null>(null)

  return (
    <UserContext.Provider
      value={{ userName, setUserName, userPhoto, setUserPhoto }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}
