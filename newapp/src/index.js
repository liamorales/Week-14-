import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import List from './components/Movie container/list';
import 'bootstrap/dist/css/bootstrap.min.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
const newApp = () => {
  return (
    <div className='container-fluid'>
      <h1>movieList</h1>
      <nav className='navbar sticky-top navbar-light bg-dark'>
           <h1 className='navbar-brand text-light'>movieList</h1>
      </nav>
      <List />
    </div>
  );
 
};




