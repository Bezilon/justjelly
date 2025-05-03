import { z } from "zod";

const RegisterSchema = z.object({
  email: z.string().min(1, 'Username is required').email('Invalid email address'),
  password: z.string().min(1, 'Password is required').min(8, 'Password must be at least 8 characters long'),
  confirmPassword: z.string().min(1, 'Password is required').min(8, 'Password must be at least 8 characters long'),  
}).refine((data) => data.password === data.confirmPassword, {
  path: ['confirmPassword'],
  message: 'Password do not match',
});

export default RegisterSchema