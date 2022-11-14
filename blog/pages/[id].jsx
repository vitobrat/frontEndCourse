import Head from 'next/head';
import { Router, useRouter } from 'next/router'
import React from 'next/head'

const BlogItem = ({data}) => {
  const router = useRouter();
  return (
    <div>
      <Head>
      <title>Blog page</title>
      </Head>
      <img src={data.url}/>
    </div>
  )
}

export default BlogItem
export async function getStaticProps(context){
  const TODOArticle = await fetch(`https://jsonplaceholder.typicode.com/photos/${context.params.id}`).then(res => res.json());
  return{
    props : {
      data : TODOArticle,
    },
  }
}

export async function getStaticPaths(context){
  return{
    paths : [{params : { id : "1" }}],
    fallback : "blocking",
  }
}