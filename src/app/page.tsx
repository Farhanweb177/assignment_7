
import Link from "next/link";

export default function Home() {
  return (
  <div className="bg-fuchsia-600">

    <h1 className="text-center text-yellow-400 text-3xl mt-3 bg-neutral-400">Click and Cheak the Server Side And Client Side</h1>
    

       
    <Link href={"/client"} className="text-5xl flex justify-center text-blue-700 mt-72 bg-slate-400 w-[300px] ml-[550px] hover:cursor-pointer">Client Side </Link>
    <br /><br />
    <Link href={"/server"} className="text-5xl flex justify-center text-blue-700 bg-slate-400 w-[300px] ml-[550px] hover:cursor-pointer">Server Side</Link>
    

  </div>
  );
}
