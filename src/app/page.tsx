import Image from "next/image";
import Link from "next/link";
import { prisma } from "./db";
import TodoItem from "@/components/TodoItem";
import { redirect } from "next/navigation";

function getTodos() {
  return prisma.todo.findMany()
}

async function toggleTodo (id: string, complete: boolean)  {
  "use server"
  console.log("Id,complete:", id, complete)
  
  await prisma.todo.update({ where: { id }, data: { complete } })
 

} 

async function deleteTodo (id: string)  {
  "use server"
  
  
  await prisma.todo.delete({ where: { id } })
  redirect("/")
 

} 

export default async function Home() {
  const todos = await getTodos()
  // await prisma.todo.create({data:{title:'test',complete:false}})
  return (
    <>
    <header className="flex flex-row align-middle justify-between">
      <h1 className="text-4xl">Todo</h1>
      <Link className= "border border-slate-300 text-slate-300 px-3 py-2 rounded-sm hover:bg-slate-700 focus-within:bg-slate-700 outline-none " href="/new">New</Link>
    </header>
    <ul className="pl-4 pt-4">
        {todos.map((todo) => <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />)}
      </ul>
      </>
  );
}
