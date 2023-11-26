import { Contact } from "@prisma/client";
import Link from "next/link";
import DeleteButton from "./DeleteButton";

type Props = { contact: Contact };

export default function ContactCard({ contact }: Props) {
  return (
    <div className="w-[250px] bg-white shadow-md p-2">
      <p>
        Name: <span className="font-semibold">{contact.name}</span>
      </p>
      <p>
        Phone: <span className="font-semibold">{contact.phone}</span>
      </p>
      <p>
        City: <span className="font-semibold">{contact.city}</span>
      </p>
      <div className="flex gap-2">
        <Link href={`/${contact.id}/view`}>
          <button className="bg-sky-600 px-1 py-0.5 rounded-md text-white">
            View
          </button>
        </Link>
        <DeleteButton id={contact.id} />
      </div>
    </div>
  );
}
