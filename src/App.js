import './App.css';
import { Badge,Col} from 'reactstrap';
import Book from './components/BookComponent';
import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';


function App() {
  return (
<BrowserRouter>
    <div className="App">
      <div className="container mt-5">
            <div className="row">
              <Col>
              <h1><Badge color="info" style={{color: "black"}}> Best Selling Books</Badge></h1>
              </Col>
            </div>
          </div>
          <div className="container mt-5 ">
            <div className="row">
              <Route>
                   <Book/>
              </Route>
            </div>
          </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
