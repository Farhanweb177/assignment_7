"use client"
import React, { useEffect, useState } from 'react';

interface Side {
    userId : number,
    id : number,
    tittle : string,
    body : string,
}

const  ClientSide =  () => {

    const [data, setdata] = useState<Side[]>([]);

    useEffect(()=>{
    async function client (){
        const person = await fetch("https://jsonplaceholder.typicode.com/posts");
        const solutin : Side[] = await person.json();
        console.log(solutin)
        setdata(solutin)
    }
    client();
    },[])

   
  return (
    <div>
        {
            data.map((posts,index)=>(

                <div key={index} className='border border-black gap-[100px] bg-sky-400'>
                    <p>userId : W {posts.userId}</p>
                    <p>id : {posts.id}</p>
                    <p>tittle : {`${posts.tittle}`}</p>
                    <p>body : {posts.body}</p>
                </div>
            ))
        }
      
    </div>
  )
}

export default ClientSide
