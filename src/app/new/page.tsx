import Link from "next/link";
import { prisma } from "../db";
import { redirect } from "next/navigation";

async function createTodos(data:FormData) {
    "use server"
    console.log("Hello ")
    const title = data.get("title")?.valueOf();
    if (typeof title !== 'string' || title?.length === 0) {
        throw new Error("Invalid String")
    }

    await prisma.todo.create({ data: { title, complete: false, } })
    
    redirect("/")
}


export default function New() {
  return (
    <>
      <header className="flex flex-row align-middle justify-between">
        <h1 className="text-4xl">New</h1>
        
          </header>
          
          <form action={createTodos} className="flex gap-2 flex-col">
              <input  type="text" className="outline-none mt-4 px-2 py-1 border border-slate-300 bg-transparent rounded-sm focus-within:border-slate-100" name="title"/>
              <div className="flex gap-2 justify-end">
                  <Link href="/" className="border border-slate-300 text-slate-300 px-3 py-2 rounded-sm hover:bg-slate-700 focus-within:bg-slate-700 outline-none">Cancel</Link>
                <button className="border border-slate-300 text-slate-300 px-3 py-2 rounded-sm hover:bg-slate-700 focus-within:bg-slate-700 outline-none" type="submit">Create</button>  
              </div>
          </form>
    </>
  );
}
