import { Component } from "react";

export default class ClassComponent extends Component{
   // state = {
     //   etat1:"test",
     //   etat2:"test2",
      //  name:"jhon",
      //  age:24
   // }
    constructor(props){
        super(props)
        console.log(this)
        this.state={
            etat3:props.name,
            etat4:5
        }

    }
    render(){
        return <div>
            <h1>Hello {this.props.name} from class Component</h1>
            <p>hello </p>
            <p>afficher etat : {this.state.etat1}</p>
            <p>afficher etat : {this.state.etat3}</p>

            </div>
    }
}