import type { NextApiRequest, NextApiResponse } from "next";
import { database } from "../../services/firebase";
import { remove, ref } from "firebase/database";

export default async function deleteContact(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "DELETE") {
    const { id } = req.body; 

    if (!id) {
      res.status(400).json({ message: "ID do contato não fornecido" });
      return;
    }

    try {
      const contactRef = ref(database, `contacts/${id}`);
      await remove(contactRef);

      res.status(200).json({ message: "Contato deletado com sucesso!" });
    } catch (error) {
      console.error("Erro ao deletar contato:", error);
      res.status(500).json({ message: "Erro ao deletar contato", error });
    }
  } else {
    res.status(405).json({ message: "Método não permitido" });
  }
}
