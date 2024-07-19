import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import ContactCard from "./components/ContactCard";
import { Contact } from "@/interfaces/interfaces";
import { getContactsService } from "@/services/getContactsService";
import NavigationBar from "./components/NavigationBar";

export default function Home() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const fetchContacts = async () => {
    try {
      const contactsData = await getContactsService();
      setContacts(contactsData);
    } catch (error) {
      console.error("Erro ao buscar contatos:", error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleDeleteContact = (id: string) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name && contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Head>
        <title>Phone Book</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <NavigationBar />
      </header>
      <main
        className={`${styles.main} container d-flex justify-content-center vh-100 vw-100`}
      >
        <div className="d-flex flex-column mt-3 col-8">
          <div className="mb-3">
            <input
              className="form-control"
              placeholder="Buscar"
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          {filteredContacts.map((contact) => (
            <ContactCard
              key={contact.id}
              contact={contact}
              onDelete={handleDeleteContact}
            />
          ))}
        </div>
      </main>
      <footer className="container-fluid d-flex justify-content-center align-items-center position-fixed bottom-0">
        <p className="text-center">Developed by Jean Carlos</p>
      </footer>
    </>
  );
}
