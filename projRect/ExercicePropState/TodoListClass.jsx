import { useState } from "react"


export default function TodoListClass(props){
    const[Todo,setTodo]=useState(props.todoParPametre)
    const [nom, setnom]=useState('')
    const [priorite,setpriorite]=useState('haute')
    const [searchTache,setsearchTache]=useState('')
    const handelAdd =()=>{
        if(nom){
            setTodo([...Todo,{nom:nom,priorite:priorite,etat:false}])
            setTodo('')
        }
    }
    const filterTodo = Todo.filter(Todo=>Todo.nom.ToLowerCase())
    console.log(filterTodo)
    const MarkAsDone = (index) => {
        const newItems = Todo.map((itm, i) => {
            if (i === index) {
                return { ...itm, etat: true }; 
            }
            return itm;
        });
    
        setTodo(newItems); 
    };

    
    return (
        <>
        <h1>List Des Taches</h1>
        <input type="text" onChange={(e)=>setsearchTache(e.target.value)} placeholder="chercher une tache..." value={searchTache} />
        <ul>

            {Todo.map((item,index)=>(
                <li style={{TextDecoder: Todo.etat ? 'line-through':'none'}} key={index}>
                    {item.nom} -
                    {item.priorite}
                    <button onClick={()=>MarkAsDone(index)}>Done</button>


                </li>
            ))}
        </ul>
        <select value={priorite}>
            <option value="haute">haute</option>
            <option value="moyenne">moyenne</option>
            <option value="base">base</option>



        </select>
        <button onClick={handelAdd}>Ajouter</button>
            <p>nbr de tache terminer : {Todo.length}
               -  nbr des tache non :{Todo.filter(t=>t.etat===true).length}
            </p>

        </>
    )
}