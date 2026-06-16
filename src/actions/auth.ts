"use server";

import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { createSession, destroySession } from "@/lib/session";

export async function registerAction(data: FormData) {
  try {
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const password = data.get("password") as string;

    if (!name || !email || !password) {
      return { success: false, error: "Please fill in all fields." };
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return { success: false, error: "Email is already registered." };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    await createSession(user.id);
    return { success: true };
  } catch (error: any) {
    return { success: false, error: "Failed to create an account." };
  }
}

export async function loginAction(data: FormData) {
  try {
    const email = data.get("email") as string;
    const password = data.get("password") as string;

    if (!email || !password) {
      return { success: false, error: "Please enter your email and password." };
    }

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return { success: false, error: "Invalid email or password." };
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return { success: false, error: "Invalid email or password." };
    }

    await createSession(user.id);
    return { success: true };
  } catch (error: any) {
    return { success: false, error: "Failed to login." };
  }
}

export async function logoutAction() {
  await destroySession();
  return { success: true };
}
