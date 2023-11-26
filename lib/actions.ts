"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import prisma from "./db";

export async function deleteContactById(id: string, inViewRoute = false) {
  await prisma.contact.delete({ where: { id } });
  if (inViewRoute) {
    redirect("/");
  } else {
    revalidatePath("/");
  }
}
