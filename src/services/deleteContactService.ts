export async function deleteContactService(contactId: string): Promise<void> {
  try {
    const response = await fetch(`/api/delete-contact`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: contactId }), // Alterado para enviar "id"
    });
    if (!response.ok) {
      throw new Error("Erro ao excluir contato");
    }
  } catch (error) {
    console.error("Erro ao excluir contato:", error);
    throw error;
  }
}
