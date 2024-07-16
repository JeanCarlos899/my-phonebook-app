import React, { FormEvent, useState } from "react";
import { saveContactService } from "../../services/saveContactService";

export default function RegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!name || !email || !phone || !message) {
      alert("Preencha todos os campos!");
      return;
    }

    const success = await saveContactService(name, email, phone, message);

    if (success) {
      alert("Contato salvo com sucesso!");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } else {
      alert("Erro ao salvar contato!");
    }
  }

  return (
    <form className="w-100" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control mb-2"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Nome"
      />
      <input
        type="email"
        className="form-control mb-2"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="E-mail"
      />
      <input
        type="tel"
        className="form-control mb-2"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
        placeholder="Telefone"
      />
      <textarea
        className="form-control mb-2"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        placeholder="Mensagem"
      ></textarea>
      <button type="submit" className="btn btn-primary w-100">
        Salvar
      </button>
    </form>
  );
}
