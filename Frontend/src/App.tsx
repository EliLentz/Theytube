import {useState} from 'react';
import {Route} from "react-router-dom";

import { GetPromiseOfCatalog } from './Http/HttpRequestForCatalog';
import { CatalogElement } from './Models/CatalogElement';
import Header from './Components/Header';
import Catalog from './Components/Catalog';
import VideoPlayer from "./Components/VideoPlayer";
import Footer from './Components/Footer';
import './App.css';

function App() {

  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');

  const [catalogPromise] = useState<Promise<CatalogElement[]>>(GetPromiseOfCatalog(query));
  const [catalogState, setCatalogState] = useState<CatalogElement[]>();

  catalogPromise?.then(data => {
    setCatalogState(data);
  });

  return (
    
      <div className = "App">
      <Header/>
      <div className = "App-routes">
        <Route exact path = "/">{Catalog(catalogState as CatalogElement[])}</Route>
        <Route exact path = '/videoplayer/:id' render = {({match}) => (<VideoPlayer id = {match.params.id.toString()}
        catalog = {catalogState as CatalogElement[]}/>)}/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
