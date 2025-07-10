import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UserService } from './services/User.service';
import toast, { Toaster } from 'react-hot-toast';
import UserCard from './components/Cards/User.card';
import { Button, Col, Row } from 'react-bootstrap';
import AddUserModal from './components/Modal/AddUser.modal';
import ViewIndex from './view/View.index';

function App() {

  

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <div>
        <ViewIndex />
      </div>
    </>
  );
}

export default App
