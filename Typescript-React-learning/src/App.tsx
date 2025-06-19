import React from 'react'
import User from './components/User'
import User2 from './components/user2'
import Button from './components/Button'
import UserInfo from './UserInfo'
import Admininfo from './Admininfo'
import type {Info, AdminInforList} from './types.ts'
import Counter from './components/COunter.tsx'
import UserProfile from './components/UserProfile.tsx'
import TodoList from './components/TodoList.tsx'
import FocusInput from './components/FocusInput.tsx'
import ContactForm from './components/ContactForm.tsx'

const App = () => {
  // function click(){
  //   alert("CLicked me");
  // }

  const user: Info = {
    id:2,
    name:"Sample",
    email:"sample@test.com"
  }

  const admininfo: AdminInforList = {
    id: 34,
    name: "Admin",
    email:"admin@test.com",
    adminid: 256
  }
  return (
    <div>
      {/* <User name ='alex' age = {20} isStudent = {true} />
      <User2>
        <p>Hello World</p>
      </User2> */}
      {/* <Button label='Click Me' onCLick={() => {alert("I am clicked"); return 1;}} disabled={false}/> */}
      {/* <UserInfo user = {user} />
      <Admininfo admininfo ={admininfo} />
      <Counter/>
      <UserProfile/>
      <TodoList/> */}
      {/* <FocusInput /> */}
      <ContactForm />
    </div>
  )
}

export default App