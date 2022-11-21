import React from 'react'
import { Layout } from "../components/Layout/Layout";
import { Nav } from '../components/Header/Nav/Nav';
import css from "./index.module.css"
import { Button } from '../components/UI/Button/Button';
import { cardsMock } from '../constants/mock';
import { Card } from '../components/Cards/Cards';


const IndexPage = () => {
  return (
    <Layout title="Main">
      <header>
        <Nav />
      </header>
      <main className={css.main}>
        <div className={css.main__title}>
          <h1 className={css.main__logo}>My Blog</h1>
          <Button>Let's read</Button>
        </div>
        <section className={css.cards}>
          {cardsMock.map(c => (
            <Card key={c.id} {...c}/>
          ))}
        </section>
      </main>
    </Layout>
  )
}

export default IndexPage;
