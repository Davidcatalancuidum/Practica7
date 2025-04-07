import { useEffect, useRef, useState } from 'react';
import './App.css';
import List from './components/List';
import Form from './components/Form';
import {Sub} from './types';
import {getAllSubs} from './services/getAllSubs'

interface AppState{
  subs: Array<Sub>
  newSubsNumber: number
  SubsNumber: number
}


function App() {

  const [subs, setSubs] = useState<AppState["subs"]>([])
  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0)
  const divRef = useRef<HTMLDivElement>(null)
  const [SubsNumber, setSubsNumber] = useState<AppState["SubsNumber"]>(0)

  useEffect(() =>{
    getAllSubs().then(allSubs =>{
      setSubs(allSubs);
      setSubsNumber(allSubs.length)
      setNewSubsNumber(allSubs.length);
    });
  },[])

  const handleNewSub = (newSub: Sub): void => {
    setSubs(subs=> [...subs, newSub])
    setNewSubsNumber(n => n + 1 )
  }

  const handleDeleteSub = (nickToDelete: string): void => {
    setSubs(subs => subs.filter(sub => sub.nick !== nickToDelete));
  };

  return (
    <div className="App" ref={divRef}>
      <h1>midu subs</h1>
      <List subs={subs} onDeleteSub={handleDeleteSub}/>
      New subs: {newSubsNumber}
      <Form onNewSub={handleNewSub}/>
    </div>
  );
}

export default App;
