import Link from "next/link";



export default function NavigationBar() {
  return (
    <nav className="navbar navbar-light bg-light">
    <div className="container">
      <Link className="navbar-brand" href="/">
        Phone Book
      </Link>
      <Link href="/adicionar-contato" className="btn btn-success">
        Adicionar contato
      </Link>
    </div>
  </nav>
  );
}