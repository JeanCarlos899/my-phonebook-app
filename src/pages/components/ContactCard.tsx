import styles from "@/styles/Home.module.scss";
import { useEffect, useState } from "react";
import { Contact } from "../../interfaces/interfaces";
import { getContactsService } from "../../services/getContactsService";

export default function ContactCard() {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const contactsData = await getContactsService();
        setContacts(contactsData);
      } catch (error) {
        console.error("Erro ao buscar contatos:", error);
      }
    };

    fetchContacts();
  }, []);

  return (
    <div>
      {contacts.map((contact) => (
        <div
          key={contact.id}
          className={`${styles.card} card bg-light border-0 mb-3`}
        >
          <div className="card-body">
            <div className="title">
              <h5 className="card-title">{contact.name}</h5>
            </div>
            <div className="data">
              <p className="card-text mb-0">{contact.email}</p>
              <p className="card-text mb-0">{contact.phone}</p>
              <p className="card-text mb-0">{contact.message}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
