"use client"
import Image from "next/image";

export default function Home() {
  //On server side we're getting the values
  // console.log("the id is: ", ); 
  // console.log("the secret is: ", process.env.SECRET); 
  return (
    <div>
      {/* For client this will not show only to sever side -> Hey this is Home. The id is {process.env.ID} and the secret is {process.env.SECRET} */}
      Hey this is Home. The id is {process.env.NEXT_PUBLIC_ID}, the secret is {process.env.NEXT_PUBLIC_SECRET} and the key is {process.env.NEXT_PUBLIC_KEY}
    </div>
  );
}
