import React from 'react'
import type { AdminInforList } from './types.ts'


const Admininfo = ({admininfo}: {admininfo:AdminInforList}) => {
  return (
    <div>
        <h2>Name: {admininfo.name}</h2>
        <h2>ID: {admininfo.id}</h2>
        <h2>Email: {admininfo.email}</h2>
        <h2>Admin id: {admininfo.adminid}</h2>
    </div>
  )
}

export default Admininfo