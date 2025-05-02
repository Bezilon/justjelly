'use client'

import { register } from "@/app/lib/actions/user";

type NewUserFormProps = {
  firstUser: boolean;
}

const NewUserForm = ({firstUser}:NewUserFormProps) => {
  return <div>
    <h1 className="text-4xl font-bold">Welcome to JustJelly!</h1>
    <p className="text-lg mb-4">{ firstUser ? "Please create an admin user to get started:" : "Please enter your username and password to register" }</p>
    <form action={register} method="POST" data-form-type="register" className="flex flex-col gap-4">
      <input type="text" name="email" id="email" data-form-type="email" placeholder="Email" required className="bg-[rgba(64,210,255,0.25)] rounded p-2"/>
      <input type="password" name="password" id="password" data-form-type="password,new" placeholder="Password" required className="bg-[rgba(64,210,255,0.25)] rounded p-2"/>
      <input type="password" name="confirm-password" id="confirm-password" data-form-type="password,confirmation" placeholder="Confirm Password" required className="bg-[rgba(64,210,255,0.25)] rounded p-2"/>
      <button type="submit" className="text-m font-bold bg-[rgb(26,110,136)] p-2 rounded-lg">Create Admin User</button>
    </form>
  </div>
}

export default NewUserForm;