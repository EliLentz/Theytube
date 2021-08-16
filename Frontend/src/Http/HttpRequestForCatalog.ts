import axios from 'axios';

import { CatalogElement } from '../Models/CatalogElement';

/**
 * Get async response from server for @Catalog or @FilteredCatalog
 */
export async function GetPromiseOfCatalog(query : string | null) : Promise<CatalogElement[]>{

  if(!query)
    query = '';

  const SERVER_PATH = `http://127.0.0.1:3600/api/getcatalog/${query}`;
    
  return await axios.get(SERVER_PATH).then((resp) => {
      return resp.data;
    });
}