import { Contact } from "@/interfaces/interfaces";

export async function getContactsService(): Promise<Contact[]> {
  try {
    const response = await fetch("/api/get-contacts");
    if (!response.ok) {
      throw new Error("Erro ao obter contatos");
    }
    const contacts = await response.json();
    return contacts;
  } catch (error) {
    console.error("Erro ao buscar contatos:", error);
    return [];
  }
}
