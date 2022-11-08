import React, {useEffect, useState} from "react";
import { Button } from "../components/Button/Button";
import  { List } from "../components/List/List"

export default function IndexPage(){
  const [content, setContent] = useState(null);
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
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos").then(res => res.json()).then(obj => setContent(obj));
  },[]);
  
  return(
    <div>
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