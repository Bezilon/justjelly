'use client'

import { useState } from "react";

type NewUserFormProps = {
  firstUser: boolean;
}

const NewUserForm = ({firstUser}:NewUserFormProps) => {
  const [ user, setUser ] = useState({ username: '', password: '', confirmPassword: '' });

  return <div>
    <h1 className="text-4xl font-bold">Welcome to JustJelly!</h1>
    <p className="text-lg mb-4">{ firstUser ? "Please create an admin user to get started:" : "Please enter your username and password to register" }</p>
    <form action="/register" method="POST" className="flex flex-col gap-4">
      <input type="text" name="username" placeholder="Username" required className="bg-[rgba(64,210,255,0.25)] rounded p-2"/>
      <input type="password" name="password" placeholder="Password" required className="bg-[rgba(64,210,255,0.25)] rounded p-2"/>
      <input type="password" name="confirm-password" placeholder="Confirm Password" required className="bg-[rgba(64,210,255,0.25)] rounded p-2"/>
      <button type="submit" className="text-m font-bold bg-[rgb(26,110,136)] p-2 rounded-lg">Create Admin User</button>
    </form>
  </div>
}

export default NewUserForm;