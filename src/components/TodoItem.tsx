"use client"



type TodoItemProps = {
    id: string
    title: string
    complete: boolean
  toggleTodo: (id: string, complete: boolean) => void
    deleteTodo: (id:string) => void
}


const TodoItem = ({id,title,complete,toggleTodo,deleteTodo}:TodoItemProps) => {
  return (
    <li className="flex flex-row items-center justify-between my-2">
      <div className="flex flex-row gap-4 items-center">
          <input  defaultChecked={complete} type="checkbox" id={id} onChange={(e) => toggleTodo(id,e.target.checked)} className="cursor-pointer m-0 peer h-6 w-6" />
          <label htmlFor={id} className="cursor-pointer peer-checked:line-through text-3xl m-0 peer-checked:text-slate-400">{title }</label>
      </div>
      <button className="border border-slate-300 text-slate-300 px-3 py-2 rounded-sm hover:bg-slate-700 focus-within:bg-slate-700 outline-none " onClick={() => deleteTodo(id)}>
        Delete
      </button>
          
    </li>
  )
}

export default TodoItem