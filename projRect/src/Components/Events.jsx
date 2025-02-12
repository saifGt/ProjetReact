
import list from '../data/events.json'
import Event from '../Components/Event'

export default function Events(){
    return(
        <>
        <ul>
           {list.map((e,i)=>(
            <Event event={e}></Event>
    ) )}
        </ul>
        </>
    )

}