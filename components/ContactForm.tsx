import prisma from "@/lib/db";
import { Contact } from "@prisma/client";
import { revalidatePath } from "next/cache";

type Props = { contact?: Contact | null };

export default function ContactForm({ contact }: Props) {
  async function addContact(formData: FormData) {
    "use server";
    await prisma.contact.create({
      data: {
        name: formData.get("name") as string,
        phone: formData.get("phone") as string,
        city: formData.get("city") as string
      }
    });
    revalidatePath("/");
  }

  async function updateContact(formData: FormData) {
    "use server";
    await prisma.contact.update({
      where: { id: contact?.id },
      data: {
        name: formData.get("name") as string,
        phone: formData.get("phone") as string,
        city: formData.get("city") as string
      }
    });
    revalidatePath(`/${contact?.id}/view`);
  }

  return (
    <form
      className="flex flex-col gap-2"
      action={contact ? updateContact : addContact}>
      <input
        type="text"
        name="name"
        placeholder="Contact Name"
        className="p-2 border border-black"
        defaultValue={contact?.name}
      />
      <input
        type="text"
        name="phone"
        placeholder="Contact Phone Number"
        className="p-2 border border-black"
        defaultValue={contact?.phone}
      />
      <input
        type="text"
        name="city"
        placeholder="Enter City"
        className="p-2 border border-black"
        defaultValue={contact?.city}
      />
      <button type="submit" className="bg-blue-500 text-white rounded-md p-1">
        {contact ? "Update Contact" : "Add Contact"}
      </button>
    </form>
  );
}
