import { useState } from 'react';
import Navbar from './component/navbar/Navbar';
import CardGrid from './component/card/CardGrid';
import AuthForm from './component/loginSignUp/AuthForm';
import List from './component/Listmap/List';
import Form from './component/Form/Form';
import Pract from './classwork/Prac3';
import Demo1 from './classwork/Demo1';
import Demo2 from './classwork/Demo2';
import Message from './component/Message/Message';
import Counter from './component/Counter/Counter';


function App() {

  return (
    <>
    <Navbar/>
    <CardGrid/>
    <AuthForm/>
    <List/>
    <Form/>
    <Pract/>
    <Demo1 name={'krish kakadiya'} age={'19'}/>
    <Demo2/>

    <Message/>
    <Counter/>
    
    </>
  )
}

export default App
