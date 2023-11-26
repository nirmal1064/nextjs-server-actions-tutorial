import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export default function ContactForm() {
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

  return (
    <form className="flex flex-col gap-2" action={addContact}>
      <input
        type="text"
        name="name"
        placeholder="Contact Name"
        className="p-2 border border-black"
      />
      <input
        type="text"
        name="phone"
        placeholder="Contact Phone Number"
        className="p-2 border border-black"
      />
      <input
        type="text"
        name="city"
        placeholder="Enter City"
        className="p-2 border border-black"
      />
      <button type="submit" className="bg-blue-500 text-white rounded-md p-1">
        Add Contact
      </button>
    </form>
  );
}
