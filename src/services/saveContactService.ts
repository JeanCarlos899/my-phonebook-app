export async function saveContactService(
  name: string,
  email: string,
  phone: string,
  message: string
) {
  try {
    const res = await fetch("/api/save-contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, phone, message }),
    });

    if (res.ok) {
      return true;
    } else {
      console.error("Erro ao salvar contato:", res.statusText);
      return false;
    }
  } catch (error) {
    console.error("Erro ao salvar contato:", error);
    return false;
  }
}
