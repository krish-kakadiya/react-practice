import { useState } from 'react';
import Navbar from './component/navbar/Navbar';
import CardGrid from './component/card/CardGrid';
import AuthForm from './component/loginSignUp/AuthForm';
import List from './component/Listmap/List';
import Form from './component/Form/Form';

function App() {

  return (
    <>
    <Navbar/>
    
    <CardGrid/>
    
    <AuthForm/>

    <List/>
    <Form/>


    </>
  )
}

export default App
