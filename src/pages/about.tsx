import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";
import InfoCard from "@/components/InfoCard";
import styles from "@/styles/Home.module.scss";


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
          <h1 className="text-center mb-3 mt-4">Sobre</h1>
          <InfoCard 
            title="Sobre o Aplicativo" 
            description="Este site foi desenvolvido com a proposta de aprender melhor a utilizar o Next.js. 
            Então, o ele não tem serventia alguma, apenas foi feito para aprendizado. Optei
            por fazer uma espécie de CRUD simples para pegar a sintaxe do Next.js e acabei utilizando
            o Firebase como banco de dados devido a sua facilidade de uso para pequenos projetos." 
          />
          <InfoCard 
            title="Funcionalidades" 
            description="Adicionar novos contatos, Excluir contatos que não são mais necessários, Pesquisar contatos pelo nome" 
          />
          <InfoCard 
            title="Sobre o Desenvolvedor" 
            description="Este aplicativo foi desenvolvido por Jean Carlos." 
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
