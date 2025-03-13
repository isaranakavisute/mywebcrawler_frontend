'use client'; 

import logo from "./images/new_logo.png";
import Image from '@/node_modules/next/image';
import Link from '@/node_modules/next/link';
import { FormEvent } from 'react';
import useRouter from '@/node_modules/next/router';
import axios from 'axios';
import React from "react";



export default function UserScreen() {

  const router = useRouter;
  const [web_title, set_web_title] = React.useState("");
  const [article_title, set_article_title] = React.useState("");
  const [article_content_part_1, set_article_content_part_1] = React.useState("");
  const [article_content_part_2, set_article_content_part_2] = React.useState("");
  const [article_image, set_article_image] = React.useState(null);
  
  async function handleOnChange()
  {

  }
  
  async function handleSubmit() 
  {
    //set_web_title("xxx");
    //set_article_title("xxx");
    //set_article_content_part_1("xxx");
    //set_article_content_part_2("xxx");
    //set_article_image("xxx");

    //const formData = new FormData(event.currentTarget);
    //const url = formData.get('url');
    
    axios({
      method: "POST",
      url: "http://127.0.0.1:3005/webcrawler",
      headers: {
        "Content-Type": "application/json"
      },
      data: {
        url: 'https://www.thairath.co.th/news/politic/28422'
        //url: url
      },
    })
    .then(res => {
      //console.log(res);
      //alert(res.data.data.info.web_title);
      //alert(res.data[0]);
      set_web_title(res.data.data.info.web_title);
      set_article_title(res.data.data.info.article_title);
      set_article_content_part_1(res.data.data.info.article_content_part_1);
      set_article_content_part_2(res.data.data.info.article_content_part_2);
      set_article_image(res.data.data.info.article_image);
    })
    .catch(err => {
      alert(err);
    });
    



  }

  return (
       
       //<form onSubmit={handleSubmit}>
        <div className="flex flex-col">                 
         <div className="flex h-[100vh] w-full flex-col items-center justify-start bg-black">
          <div className="flex h-[10vh] w-full flex-row items-center justify-start bg-white pl-5">
           <div className="flex flex-row h-full w-[30vh] items-center justify-start bg-white text-2xl">Please enter URL</div>
           <div className="flex flex-row h-full w-full items-center justify-start bg-yellow-200 text-2xl border border-solid border-blue mr-5"><input type="text" name="url" className="h-full w-full text-4xl" value="https://www.thairath.co.th/news/politic/28422" onChange={handleOnChange} /></div>
           <div className="flex flex-row h-full w-[20vh] items-center justify-center bg-white text-2xl"><input type="button" value="OK" className="bg-amber-700 p-2 rounded-xl h-1/2 w-1/2" onClick={handleSubmit} /></div>
          </div>
          <div className="flex h-[90vh] w-full flex-row items-start justify-center bg-white">
            <table className="w-full border border-solid border-black">
              <tbody>
              <tr className="w-full">
               <td className="w-1/4 border border-solid border-black pl-2" align="left">Web Title</td>
               <td className="w-1/4 border border-solid border-black pl-2" align="left"><div id="web_title">{web_title}</div></td>
              </tr>
              <tr className="w-full">
               <td className="w-1/4 border border-solid border-black pl-2" align="left">Article Title</td>
               <td className="w-1/4 border border-solid border-black pl-2" align="left"><div id="artitle_title">{article_title}</div></td>
              </tr>
              <tr className="w-full">
               <td className="w-1/4 border border-solid border-black pl-2" align="left">Article Content Part 1</td>
               <td className="w-1/4 border border-solid border-black pl-2" align="left"><div id="article_content_part1">{article_content_part_1}</div></td>
              </tr>
              <tr className="w-full">
               <td className="w-1/4 border border-solid border-black pl-2" align="left">Article Content Part 2</td>
               <td className="w-1/4 border border-solid border-black pl-2" align="left"><div id="article_content_part2">{article_content_part_2}</div></td>
              </tr>
              <tr className="w-full">
               <td className="w-1/4 border border-solid border-black pl-2" align="left">Article Image</td>
               <td className="w-1/4 border border-solid border-black pl-2" align="left">
                 <div id="article_image1">{article_image}</div>
                 <div id="article_image2"><img src={article_image} width="400px" height="400px" /></div>
               </td>
              </tr>
              </tbody>
            </table>
          </div>
         </div>
        </div>
       //</form>
      
       
    )
}
