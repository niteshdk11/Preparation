import React from 'react'
import { AdminHeader } from '../../components/AdminHeader'
const layout = ({children}) => {
  return (
    <div>
        <AdminHeader/>
        {children}
        </div>
  )
}

export default layout