import styles from "@/styles/Home.module.scss";
import { Contact } from "../interfaces/interfaces";
import { deleteContactService } from "@/services/deleteContactService";

interface ContactCardProps {
  contact: Contact;
  onDelete: (id: string) => void;
}

const ContactCard: React.FC<ContactCardProps> = ({ contact, onDelete }) => {
  const handleDelete = async () => {
    try {
      await deleteContactService(contact.id);
      onDelete(contact.id);
    } catch (error) {
      console.error("Erro ao deletar contato:", error);
    }
  };

  return (
    <div className={`${styles.card} card bg-light border-0 mb-2`}>
      <div className="card-body">
        <div className="d-flex align-items-center">
          <h5 className="card-title mb-0">{contact.name}</h5>
          <button
            className="badge text-bg-danger ms-auto"
            onClick={(event) => {
              event.preventDefault();
              handleDelete();
            }}
          >
            Deletar
          </button>
        </div>
        <div className="data">
          <p className="card-text mb-0">{contact.email}</p>
          <p className="card-text mb-0">{contact.phone}</p>
          <p className="card-text mb-0">{contact.message}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
