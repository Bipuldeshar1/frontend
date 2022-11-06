import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './component/login';
import Signin from './component/register';
import Admin from './pages/admin'
import Create from './component/addposts';
import MyPosts from './component/myposts';
import ListEmployeeComponent from './component/maincontent';
import Update from './component/Update';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/login" element={<Login/>} />
  <Route path="/signin" element={<Signin/>} />
  <Route path="/admin" element={<Admin/>} />
  <Route path="/addposts" element={<Create/>} />
  <Route path="/myposts" element={<MyPosts/>} />
  <Route path="/search" element={<ListEmployeeComponent/>} />
  <Route path="/update/:id" element={<Update/>} />
 
 
  </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
