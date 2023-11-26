"use client";
import { deleteContactById } from "@/lib/actions";
import { usePathname } from "next/navigation";

type Props = { id: string };

export default function DeleteButton({ id }: Props) {
  const pathName = usePathname();

  return (
    <button
      className="bg-red-600 px-1 py-0.5 rounded-md text-white"
      onClick={() => deleteContactById(id, pathName === "/" ? false : true)}>
      Delete
    </button>
  );
}
