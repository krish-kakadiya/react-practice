import { useState,useEffect } from 'react';
import Navbar from './component/navbar/Navbar';
import CardGrid from './component/card/CardGrid';
import AuthForm from './component/loginSignUp/AuthForm';
import List from './component/Listmap/List';
import Form from './component/Form/Form';
import Pract from './classwork/Prac3';
import Demo1 from './classwork/Demo1';
import Demo2 from './classwork/Demo2';
import Message from './component/Message/Message';
import Counter from './classwork/Counter/Counter';
import Counter1 from './component/Counter/Counter1';
import Todo from './component/Todo/Todo';
import HooksDemo from './classwork/HooksDemo';
import FackStore from './classwork/apiPractice/FackStore';




function App() {

  const [tog,setTog] = useState(true);
  const [mount,setMount] = useState('unmount');
  const handleToggle = () =>{
    setTog((pre)=>!pre);
    if(mount=='unmount'){
      setMount('mount')
    }else{
      setMount('unmount')
    }
  }
  return (
    <>
    {/* <Navbar/>
    <CardGrid/>
    <AuthForm/>
    <List/>
    <Form/>
    <Pract/>
    <Demo1 name={'krish kakadiya'} age={'19'}/>
    <Demo2/>

    <Message/>
    <Counter/> */}
    {/* {tog && <Counter1/>}
    <button onClick={handleToggle}>{mount}</button> */}
    {/* <Todo/> */}
    {/* <HooksDemo/> */}
    <FackStore/>
    </>
  )
}

export default App;



function LifecycleExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component Mounted");

    return () => { 
      console.log("Component Unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("Count Updated:", count);
  }, [count]);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}



