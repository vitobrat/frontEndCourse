import Head from 'next/head';
import { useRouter } from 'next/router'
import React from 'react'
import css from "./blog.module.css"

const BlogPage = props => {
  const router = useRouter();
  return (
    <>
    <Head>
      <title>{props.title}</title>
    </Head>
    <div className={css.wrapper}>
      <h1>
        {props.title}
      </h1>
      <div className={css.tags}>
          {props.tags.map(tag => (
            <span>{tag}</span>
          ))} 
        </div>
      <article className={css.article} dangerouslySetInnerHTML={{__html: props.data}}></article>
    </div>
    </>
  )
}

export default BlogPage

export async function getStaticProps(context){
  const pageId = context.params.id;
  const page = await fetch(`https://leti.kzteams.ru/api/blog/${pageId}`).then(res => res.json());
  return{
    props : page,
  }
}
export async function getStaticPaths(){
  const pageLength = await fetch("https://leti.kzteams.ru/api/blog/length").then(res => res.json());
  const res = Array.from(pageLength).map((el, i) => {
    return { params: { id : String(i)}};
  });
  return {
    paths : res,
    fallback : false,
  };
}

