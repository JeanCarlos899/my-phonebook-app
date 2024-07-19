import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import NavigationBar from "@/components/NavigationBar";

export default function About() {
  return (
    <>
      <Head>
        <title>Sobre</title>
        <meta name="description" content="Saiba mais sobre o nosso aplicativo de agenda telefônica" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <NavigationBar />
      </header>
      <main className={`${styles.main} container d-flex justify-content-center vh-100 vw-100`}>
        <div className="d-flex flex-column mt-3 col-8">
          <h1>Sobre</h1>
          <p>
            Este site foi desenvolvido com a proposta de aprender melhor a utilizar o Next.js. 
            Então, o ele não tem serventia alguma, apenas foi feito para aprendizado. Optei
            por fazer uma espécie de CRUD simples para pegar a sintaxe do Next.js e acabei utilizando
            o Firebase como banco de dados devido a sua facilidade de uso para pequenos projetos.
          </p>
          <h2>Funcionalidades</h2>
          <ul>
            <li>Adicionar novos contatos</li>
            <li>Excluir contatos que não são mais necessários</li>
            <li>Pesquisar contatos pelo nome</li>
          </ul>
          <h2>Sobre o Desenvolvedor</h2>
          <p>
            Este aplicativo foi desenvolvido por Jean Carlos.
          </p>
        </div>
      </main>
      <footer className="container-fluid d-flex justify-content-center align-items-center position-fixed bottom-0">
        <p className="text-center">Developed by Jean Carlos</p>
      </footer>
    </>
  );
}
