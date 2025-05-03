'use client'

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import FormSchema from "@/schemas/register"
import { z } from "zod";

type Props = {
  firstUser: boolean;
}

const RegisterForm = ({firstUser}:Props) => {
  const router = useRouter();

  const { register, handleSubmit, formState: { errors } } = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {    
    const response = await fetch('/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    if (response.ok) {
      router.push(`/log-in?new-user=${values.email}`);
    } else {
      console.error("Registartion failed:", response.statusText);
    }
  };

  return <form data-form-type="register" className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
    <h1 className="text-4xl font-bold">Welcome to JustJelly!</h1>
    <p className="text-lg mb-4">{ firstUser ? "Please create an admin user to get started:" : "Please enter your username and password to register" }</p>
    <input {...register('email')} placeholder="Email" required className="bg-[rgba(64,210,255,0.25)] rounded p-2" data-form-type="email"/>
    <input {...register('password')} type="password" placeholder="Password" required className="bg-[rgba(64,210,255,0.25)] rounded p-2" data-form-type="password"/>
    <input {...register('confirmPassword')} type="password" placeholder="Confirm Password" required className="bg-[rgba(64,210,255,0.25)] rounded p-2" data-form-type="password,confirm"/>
    <input type="submit" value="Create Admin User" className="text-m font-bold bg-[rgb(26,110,136)] p-2 rounded-lg cursor-pointer"/>
  </form>
}

export default RegisterForm;