import ContactCard from "@/components/ContactCard";
import ContactForm from "@/components/ContactForm";
import prisma from "@/lib/db";

type Props = { params: { id: string } };

async function getContactById(id: string) {
  return await prisma.contact.findUnique({ where: { id } });
}

export default async function EditContact({ params }: Props) {
  const contact = await getContactById(params.id);

  return (
    <main className="flex flex-col min-h-screen justify-center items-center bg-gray-50">
      <ContactForm contact={contact} />
      <h1 className="font-semibold">Single Contact</h1>
      {contact ? (
        <ContactCard key={contact.id} contact={contact} />
      ) : (
        <p>Contact Does Not Exist</p>
      )}
    </main>
  );
}
