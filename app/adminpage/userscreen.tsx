'use client'; 

import logo from "./images/new_logo.png";
import Image from '@/node_modules/next/image';
import Link from '@/node_modules/next/link';
import { FormEvent, useEffect } from 'react';
import useRouter from '@/node_modules/next/router';
//import useRouter from '@/node_modules/next/navigator';
import axios from 'axios';
import React from "react";
import { unstable_cache } from "next/cache";
//import MainScreen from '../mainpage/userscreen';



export default function UserScreen() {

  const router = useRouter;
  const [std_json_res, set_std_json_res] = React.useState([{"Id": "value","myusername": "value","mypassword": "value","myemail": "value"}]); //React.useState(null);
  //var std_json_res;

  function autoload()
  {
    axios({
     method: "POST",
     url: "http://127.0.0.1:3005/listuser",
     headers: {
      "Content-Type": "application/json"
     }
   })
   .then(res => {
    set_std_json_res(res.data);
    return res.data;
    })
    .catch(err => {
   });
 }

  useEffect(() => {
    autoload();
  }, []);

  return (
        <div className="flex flex-col w-full h-[100vh] bg-black">                 
         <div className="flex h-full w-full flex-row items-center justify-center bg-black">
          <div className="flex h-[95vh] w-full bg-black flex-col justify-start items-center rounded-xl">
            <div className="flex flex-row w-full h-[5vh] border-0 border-solid border-black items-center justify-center bg-amber-600">
             <div className="text-3xl">Admin Page</div>
            </div>
            <div className="flex flex-col w-full h-[5vh] border-0 border-solid border-purple-400 items-center justify-start"> 
             <div className="flex flex-row w-9/10 h-full border-0 border-solid border-black">
              <div className="flex flex-row w-1/4 h-full border-1 border-solid border-black bg-amber-400 justify-center">USER ID</div>
              <div className="flex flex-row w-1/4 h-full border-1 border-solid border-black bg-amber-400 justify-center">USERNAME</div>
              <div className="flex flex-row w-1/4 h-full border-1 border-solid border-black bg-amber-400 justify-center">PASSWORD</div>
              <div className="flex flex-row w-1/4 h-full border-1 border-solid border-black bg-amber-400 justify-center">EMAIL</div>
             </div>
            </div>
            {/* <div className="flex flex-col w-full h-[5vh] bg-white justify-start items-center mb-10"> 
             <div className="flex flex-row w-9/10 h-full bg-black">
             </div>
            </div> */}
            <div className="flex flex-col w-9/10 h-full border-1 border-solid border-purple items-center justify-start overflow-y-auto"> 
            {/* <div className="flex flex-col w-9/10 h-full border-1 border-solid border-yellow items-center justify-center">  */}
             {/* <table className="border-1 border-solid border-purple w-full h-full">
             <tr className="border-1 border-solid border-black w-full">
                  <td className="border-1 border-solid border-black w-1/4"><div>1</div></td>
                  <td className="border-1 border-solid border-black w-1/4"><div>1</div></td>
                  <td className="border-1 border-solid border-black w-1/4"><div>1</div></td>
                  <td className="border-1 border-solid border-black w-1/4"><div>1</div></td>
             </tr> */}
             {
              std_json_res.map((post) => (
                // <tr className="border-1 border-solid border-black w-full">
                //   <td className="border-1 border-solid border-black w-1/4"><div>{post.Id}</div></td>
                //   <td className="border-1 border-solid border-black w-1/4"><div>{post.myusername}</div></td>
                //   <td className="border-1 border-solid border-black w-1/4"><div>{post.mypassword}</div></td>
                //   <td className="border-1 border-solid border-black w-1/4"><div>{post.myemail}</div></td>
                // </tr>
              
                  // <tr className="border-1 border-solid border-black w-full">
                  //   <td className="border-1 border-solid border-black w-1/4"><div>{post.Id}</div></td>
                  //   <td className="border-1 border-solid border-black w-1/4"><div>{post.myusername}</div></td>
                  //   <td className="border-1 border-solid border-black w-1/4"><div>{post.mypassword}</div></td>
                  //   <td className="border-1 border-solid border-black w-1/4"><div>{post.myemail}</div></td>
                  // </tr>

                  <div className="flex flex-row w-full bg-amber-100">
                   <div className="border-1 border-solid border-black w-1/4 pl-2">{post.Id}</div>
                   <div className="border-1 border-solid border-black w-1/4 pl-2">{post.myusername}</div>
                   <div className="border-1 border-solid border-black w-1/4 pl-2">{post.mypassword}</div>
                   <div className="border-1 border-solid border-black w-1/4 pl-2">{post.myemail}</div>
                  </div>
                
               ) 
              )
             }
             {/* </table> */}
            {/* </div> */}
            </div>
          </div>
         </div>
        </div>
    );
}
