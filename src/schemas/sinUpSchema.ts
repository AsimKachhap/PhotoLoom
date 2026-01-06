import { z } from "zod";

export const name = z
  .string()
  .min(2, "Name must be atleast 2 Characters")
  .max(20, "Username cannot be longer than 20 characters.")
  .regex(/^[A-Za-z\s+$]/, "Name must contain only alphabets.")
  .trim();

export const email = z
  .string()
  .email("Please enter a valid email address")
  .min(5, "Email must be at least 5 characters")
  .max(100, "Email cannot be longer than 100 characters")
  .toLowerCase()
  .trim();

export const password = z
  .string()
  .min(8, "Password must be at least 8 characters")
  .max(50, "Password cannot be longer than 50 characters")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/[a-z]/, "Password must contain at least one lowercase letter")
  .regex(/[0-9]/, "Password must contain at least one number")
  .regex(
    /[^A-Za-z0-9]/,
    "Password must contain at least one special character"
  );

export const signUpSchema = z.object({
  name: name,
  email: email,
  password: password,
});
