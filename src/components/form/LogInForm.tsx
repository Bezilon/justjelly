'use client'

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import FormSchema from "@/schemas/login"
import { z } from "zod";
import { login } from "@/actions/user.actions";

import { toast } from "react-toastify";

type Props = {
  newUser: string | null | undefined;
}

const LoginForm = ({newUser}:Props) => {
  const router = useRouter();

  const { register, handleSubmit/*, formState: { errors }*/ } = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {    
    const res = await login(data)

    if (res.success) {
      router.push("/")
    } else {
      toast(res.message, { type: "error" });
    }
  };

  return <form data-form-type="login" className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
    <h1>Log In</h1>
    { newUser ? <b>Thank you for registering, now you can log in with &quot;{newUser}&quot; and your password</b> : null }
    <input {...register('email')} placeholder="Email" required className="bg-[rgba(64,210,255,0.25)] rounded p-2" data-form-type="email"/>
    <input {...register('password')} type="password" placeholder="Password" required className="bg-[rgba(64,210,255,0.25)] rounded p-2" data-form-type="password"/>
    <input type="submit" value="Log In" className="text-m font-bold bg-[rgb(26,110,136)] p-2 rounded-lg cursor-pointer"/>
  </form>
}

export default LoginForm;