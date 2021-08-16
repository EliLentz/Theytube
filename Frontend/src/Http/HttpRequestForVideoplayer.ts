import axios from 'axios';

import { CatalogElement } from '../Models/CatalogElement';

/**
 * Get async response from server for @Videoplayer
 */
export async function GetPromiseOfCatalogElement(keyword : string) : Promise<CatalogElement>{
  const SERVER_PATH = `http://127.0.0.1:3600/api/getcatalog/Element/${keyword}`;
    
  return await axios.get(SERVER_PATH).then((resp) => {
      return resp.data;
    });
}