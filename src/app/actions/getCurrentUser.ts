import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import prisma from "@/helpers/prismadb";

export async function getSession() {
  return await getServerSession(authOptions);
}

export default async function getCurrentUser() {
  try {
    const session = await getSession();

    console.log("session", session);
    if (!session?.user?.email) {
      return null;
    }

    const currentUser = await prisma?.user.findUnique({
      where: {
        email: session?.user?.email,
      },
    });

    if (!currentUser) {
      return null;
    }

    return currentUser;
  } catch (error) {
    console.log(error);
  }
}
