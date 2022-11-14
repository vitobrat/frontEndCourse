import React, {useEffect, useState} from "react";
import { Button } from "../components/Button/Button";
import  { List } from "../components/List/List"
import Image from "next/image";
import Link from "next/link";
import Head  from "next/head";

export default function IndexPage( {data} ){
  const [content, setContent] = useState(data);
  const [valuePicture, setValuePicture] = useState("");
  const [valueTitle, setValueTitle] = useState("");
  const [page, setPage] = useState(0);

  function handleClick(e){
    e.preventDefault();
    if (!valuePicture || !valueTitle) return;
    console.log(valueTitle);
    setContent(lastState => [{title : valueTitle, url : valuePicture}, ...(lastState || [])]);
    setValuePicture("");
    setValueTitle("");
  }
  
  
  return(
    <div>
      <Head>
      <title>Blog</title>
      </Head>
      <Image src="/icon.png" width={100} height={100}/>
      <form onSubmit={handleClick}>
        <input type="text" value = {valuePicture} onChange = {e => setValuePicture(e.target.value)}/>
        <p><input type="text" value = {valueTitle} onChange = {e => setValueTitle(e.target.value)}/></p>
        <p><Button type="submit">add Picture</Button></p>
        <Button type="button" onClick={() => setPage(p => p-1>=0? p-1 : p)}>previos-{page}</Button>
        <Button type="button" onClick={() => setPage(p => p+1)}>next-{page}</Button>
      </form>
      {content && <List content={content?.slice(page, page+1)}/>}
    </div>
  );
}

export async function getStaticProps(context){
  const obj = await fetch("https://jsonplaceholder.typicode.com/photos").then(res => res.json());
  return{
    props : {
      data : obj,
    },
  }
}