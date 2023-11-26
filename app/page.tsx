import ContactCard from "@/components/ContactCard";
import prisma from "@/lib/db";
import { Contact } from "@prisma/client";
import ContactForm from "../components/ContactForm";

async function getContacts(): Promise<Contact[]> {
  return await prisma.contact.findMany({});
}

export default async function Home() {
  const contacts = await getContacts();

  return (
    <main className="flex flex-col min-h-screen justify-center items-center bg-gray-50">
      <ContactForm />
      <h1 className="font-semibold">Contacts List</h1>
      <div className="flex gap-1 flex-wrap">
        {contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </div>
    </main>
  );
}
