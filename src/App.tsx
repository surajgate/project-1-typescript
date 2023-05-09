import {useState} from 'react'
// import List, { PeopleType } from "./List";
import data from './data';
import List from './List';




function App() {

   const [boolean, setBoolean] = useState<boolean>(true);
   const [peoples, setPeoples] = useState<any>(data);
  return (
    <main>
      <section className="container">
        <h3>{peoples.length} birthdays today</h3>
        {(boolean)?<List/>: ""}
        <button onClick={ () => {setBoolean(false); setPeoples([]) } }>Clear All</button>
      </section>
    </main>
  );

}


export default App;
