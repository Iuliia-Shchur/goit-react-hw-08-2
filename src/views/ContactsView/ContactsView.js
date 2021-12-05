import ContactForm from "../../Components/ContactForm/ContactForm";
import ContactList from "../../Components/ContactList/ContactList";
import Filter from "../../Components/Filter/Filter";

export function ContactsView() {
  return (
    <>
      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
}
