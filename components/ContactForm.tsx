export default function ContactForm() {
  return (
    <form className="flex flex-col gap-2">
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
