import Link from "next/link";

export default function NavigationBar() {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" href="/">
          Phone Book
        </Link>
        <div>
          <Link href="/adicionar-contato" className="btn btn-success">
            Adicionar contato
          </Link>
          <Link href="/about" className="btn btn-secondary ms-2">
            Sobre
          </Link>
        </div>
      </div>
    </nav>
  );
}
