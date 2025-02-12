import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Events from './Components/Events'
import './App.css'
import Counter from '../ExercicePropState/Counter'
import ListManger from '../ExercicePropState/listManger'
import ColorBox from '../ExercicePropState/ColorBox'
import NotesManager from '../ExercicePropState/NoteManger'
import TodoList from '../ExercicePropState/TodoList'
import TodoListClass from '../ExercicePropState/TodoListClass'

function App() {
//   const [count, setCount] = useState(0)
//   let somme = (a , b)=> a+b;
//   console.log(somme(2,5))

//   const tab= [1,2,3,4,5]
//   const newtab= tab.map((e)=>e*2)
//   console.log(newtab);

//   const words = ['spray','elite','exuberant','dfghjkldfghj,kghn;']
//   const res = words.filter((e)=>e.length>6);
//   console.log(res)
  
//   const findLongestWord=(x)=>{
//     let newTab = x.map(e=>{
//       return {"mot":e,"longeur":e.length}
//     })

// return newTab.reduce((acc,curr)=>{
//     return acc.longeur>curr.longeur? acc:curr
// })
//   }
//   console.log(findLongestWord(words));

//   var initialValue = 0;
//   const sommeTab= tab.reduce((acc,curr)=>acc+curr);
//   console.log(sommeTab)

//   var p = {
//     name:"jhon",
//     lastname:"Don",
//     email:"jhon@gmail.com",
//     age:25
//   }
//   p={...p,class:"4twin2"}
//   console.log(p)

//   const tabb = [
//     {name:"sss",age:20},
//     {name:"llll",age:21},
//     {name:"hhh",age:22}
//   ]

//   const name = "4twin2"
//   const etudiant = {
//     nom:"saif",
//     age:23
//   }
//   const tabi = [1,2,3,4]
  const [counter,setCounter]=useState(0);
  const [{Color,backgrouned},setColor] = useState({Color:'black',backgrouned:'red'})

  useEffect(()=>{
    alert("useEffect")
    return ()=>{console.log('return')}
  },
  [counter]
)
  const listItems=["angular","react","node"]
  const initialColor = "#FF5733";
    const colorOptions = ["#FF5733", "#33FF57", "#3357FF", "#FFFF33", "#FF33FF"];
    const initialNotes = [15, 18, 12]; // Notes initiales
    const initialTasks = [
      { name: "Faire les courses", priority: "Haute", completed: false },
      { name: "Préparer le dîner", priority: "Moyenne", completed: true },
      { name: "Lire un livre", priority: "Basse", completed: false },
  ];

  const TodoList =[{nom:"list1",priorite:"haute",etat:false},
    {nom:"list2",priorite:"moyenne",etat:true}
  ]
  return (
    <>
   {/* <FunctionComponent name="saif"></FunctionComponent>
    <ClassComponent name="saif"></ClassComponent>
    <Methods></Methods>
    <Mouting></Mouting> */}
     {/* <Update></Update> 
    <Unmouting></Unmouting>
      <h1>hello {name}</h1>
      <p>letudiant :{etudiant.nom + etudiant.age}</p>
    <ul>{tabi.map((e)=>{
      return <li>{e}</li>
    })}</ul> */}
    {/* <h1>{counter}</h1>
    <button onClick={()=>setCounter(counter+1)}>Increment</button>
    <h1>le color {Color} backgrouned{backgrouned}</h1>
    <input type="text" onChange={e=>setColor(c=>({...c,Color:e.target.value}))}/>
    </> */}
    {/* <Counter step={1}></Counter>
    <ListManger l={listItems} placeHold={"ecrire..."}></ListManger> */}
    {/* <h1>Application React</h1>
    <ColorBox initialColor={initialColor} colorOptions={colorOptions}></ColorBox> */}
    {/* <NotesManager initialNotes={initialNotes}></NotesManager> 
    <TodoList initialTasks={initialTasks}></TodoList> */}
    {/* <TodoListClass todoParPametre={TodoList} ></TodoListClass> */}
    <Events></Events>
    </>
  )
}

export default App
