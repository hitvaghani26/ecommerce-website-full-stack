

import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const AdminHeader = () => {
  const [showmenu, setShowmenu] = useState(false)



  return (
    <>
      <div className='header relative'>
        <div className='flex flex-col md:flex-row justify-between items-center py-2 font-Montserrat px-4' >
          <div>
            Admin
          </div>
          <div className='links block'>
            <ul className='flex flex-col md:flex-row items-center'>
              <li className='mx-4 '>

                <NavLink
                  to="/admin/showproduct"
                  className={({ isActive }) =>
                    isActive ? 'border-b-2 border-orange-500' : ''
                  }
                >
                  Show all prodcut
                </NavLink>
              </li>
              <li className='mx-4'>
                <NavLink
                  to="/admin/addproduct"
                  className={({ isActive }) =>
                    isActive ? 'border-b-2 border-orange-500' : ''
                  }
                >
                  Add Prodcut
                </NavLink>

              </li>
            
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminHeader