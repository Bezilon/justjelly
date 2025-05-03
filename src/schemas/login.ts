import { z } from "zod";

const LoginSchema = z.object({
  email: z.string().min(1, 'Username is required').email('Invalid email address'),
  password: z.string().min(1, 'Password is required').min(8, 'Password must be at least 8 characters long'),
});

export default LoginSchema