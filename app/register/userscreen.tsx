'use client'; 

import logo from "./images/new_logo.png";
import Image from '@/node_modules/next/image';
import Link from '@/node_modules/next/link';
import { FormEvent } from 'react';
import useRouter from '@/node_modules/next/router';
//import useRouter from '@/node_modules/next/navigator';
import axios from 'axios';
//import MainScreen from '../mainpage/userscreen';



export default function UserScreen() {

  const router = useRouter;
 
  async function handleOnSubmit(event: FormEvent<HTMLFormElement>) 
  {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get('username');
    const password = formData.get('password');
    const email = formData.get("email");

    axios({
     method: "POST",
     url: "http://127.0.0.1:3005/register",
     headers: {
      "Content-Type": "application/json"
     },
     data: {
      username: username,
      password: password,
      email: email
    },
   })
   .then(res => {
    var std_json_res = res.data;
    alert(std_json_res.register.result);
    console.log(std_json_res.register.result);
    if (std_json_res.register.result=="pass")
     {
      alert('user registered');
     }
    })
    .catch(err => {
   });
 }

  return (
       <form onSubmit={handleOnSubmit}>
        <div className="flex flex-col">                 
         <div className="flex h-[100vh] w-full flex-row items-center justify-center bg-black">
          <div className="flex h-full w-1/2 bg-white flex-col justify-start rounded-xl">
            <div className="flex flex-row w-full h-[5vh] border-0 border-solid border-black items-center justify-center mb-15 mt-10">
             <div className="text-3xl">Please register your account</div>
            </div>
            <div className="flex flex-row w-full h-[5vh] border-0 border-solid border-black items-center justify-start mb-10">
             <div className="text-3xl h-full w-1/4 border-0 border-solid border-black flex flex-col justify-center ml-5">USERNAME</div>
             <div className="h-full w-3/4 border-0 border-solid border-black flex flex-row justify-start items-center"><input type="text" name="username" className="h-full w-full border border-solid border-yellow text-2xl cursor-wait mr-5"  /></div>
            </div>
            <div className="flex flex-row w-full h-[5vh] border-0 border-solid border-black items-center justify-start mb-10">
             <div className="text-3xl h-full w-1/4 border-0 border-solid border-black flex flex-col justify-center ml-5">PASSWORD</div>
             <div className="h-full w-3/4 border-0 border-solid border-black flex flex-row justify-start items-center"><input type="text" name="password" className="h-full w-full border border-solid border-yellow text-2xl cursor-wait mr-5"  /></div>
            </div>
            <div className="flex flex-row w-full h-[5vh] border-0 border-solid border-black items-center justify-start mb-10">
             <div className="text-3xl h-full w-1/4 border-0 border-solid border-black flex flex-col justify-center ml-5">EMAIL</div>
             <div className="h-full w-3/4 border-0 border-solid border-black flex flex-row justify-start items-center"><input type="text" name="email" className="h-full w-full border border-solid border-yellow text-2xl cursor-wait mr-5"  /></div>
            </div>
            <div className="flex flex-row w-full h-[5vh] border-0 border-solid border-black items-center justify-center mb-0">
              <input type="submit" className="pl-2 pr-2 pt-2 pb-2 mr-5 bg-amber-200 h-full w-[20vh] rounded-lg" value="Register" />
              <input type="reset" className="pl-2 pr-2 pt-2 pb-2 bg-amber-200 h-full w-[20vh] rounded-lg" value="Cancel" />
            </div>
          </div>
         </div>
        </div>
       </form>
       
    );

}
