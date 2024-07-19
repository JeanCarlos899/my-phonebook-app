


export default function NavigationBar() {
  return (
    <nav className="navbar navbar-light bg-light">
    <div className="container">
      <a className="navbar-brand" href="/">
        Phone Book
      </a>
      <a href="/adicionar-contato" className="btn btn-success">
        Adicionar contato
      </a>
    </div>
  </nav>
  );
}