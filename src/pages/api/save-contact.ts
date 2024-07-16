// pages/api/contacts.ts

import type { NextApiRequest, NextApiResponse } from "next";
import { database } from "../../services/firebase";
import { ref, push } from "firebase/database";

export default async function saveContact(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
      res.status(400).json({ message: "Preencha todos os campos" });
      return;
    }

    try {
      const newContactRef = ref(database, "contacts");
      await push(newContactRef, {
        name,
        email,
        phone,
        message,
      });

      res.status(201).json({ message: "Contato salvo com sucesso!" });
    } catch (error) {
      console.error("Erro ao salvar contato:", error);
      res.status(500).json({ message: "Erro ao salvar contato", error });
    }
  } else {
    res.status(405).json({ message: "Método não permitido" });
  }
}
