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
      console.log("Contato salvo com sucesso!");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      return;
    } else {
      console.log("Erro ao salvar contato!");
    }
  }

  return (
    <>
      <form className="w-100 d-flex flex-column gap-2" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Nome
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Insira seu nome"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            E-mail
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="example@example.com"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone" className="form-label">
            Telefone
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder="(99) 99999-9999"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message" className="form-label">
            Mensagem
          </label>
          <textarea
            className="form-control"
            id="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Insira sua mensagem ou observação"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Salvar
        </button>
        <a href="/" className="btn btn-light">Voltar</a>
      </form>
    </>
  );
}
