import { CatalogElement } from '../Models/CatalogElement';
import { CatalogImagesAPIURL } from '../Constants';

import "./Catalog.css";

export function GoToVideo(item : CatalogElement){
    window.location.href = `/videoplayer/${item.keyword}`;
}

function Catalog(props : CatalogElement[]){

    /**
     * 
     */
    const MAX_Result = 20;

    if(props === undefined){
        return (<div/>);
    }
    else{
        return (
            <dl>
                {props.slice(0, MAX_Result).reverse().map((item: CatalogElement) => (
                    <dt key = {item.keyword}>
                        <button className = 'catalog-button' onClick = {() => GoToVideo(item)}>
                            <img src = {`${CatalogImagesAPIURL + item.keyword}.jpg`} className = 'catalog-image'/>
                            <span className = 'catalog-element-info'>
                                <h1>{item.title}</h1>
                                <text>{item.description}</text>
                            </span>
                        </button>
                    </dt>
                ))}
            </dl>
                
        );
    }
}

export default Catalog;