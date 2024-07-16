import type { NextApiRequest, NextApiResponse } from "next";
import { database } from "../../services/firebase";
import { ref, get } from "firebase/database";
import { Contact } from "@/interfaces/interfaces";

export default async function getContacts(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const contactsRef = ref(database, "contacts");
      const snapshot = await get(contactsRef);

      if (snapshot.exists()) {
        const data = snapshot.val();
        const contacts: Contact[] = Object.keys(data).map((key) => ({
          id: key,
          name: data[key].name,
          email: data[key].email,
          phone: data[key].phone,
          message: data[key].message,
        }));

        res.status(200).json(contacts);
      } else {
        res.status(404).json({ message: "Nenhum contato encontrado" });
      }
    } catch (error) {
      console.error("Erro ao buscar contatos:", error);
      res.status(500).json({ message: "Erro ao buscar contatos", error });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Método ${req.method} não permitido` });
  }
}
