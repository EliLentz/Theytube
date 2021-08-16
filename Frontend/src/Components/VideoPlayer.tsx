import React from "react";
import ReactPlayer from "react-player";

import { CatalogImagesAPIURL, VideoByAPIURL } from "../Constants";
import { GetPromiseOfCatalogElement } from "../Http/HttpRequestForVideoplayer";
import {GoToVideo } from "./Catalog";
import { CatalogElement } from "../Models/CatalogElement";
import "./VideoPlayer.css";

/**
 * @type videoInfoPromise - promise of current catalog element, videoInfo - parsed promise of videoInfoPromise to regular catalogElement
 */
type CatalogElementState = {
    videoInfoPromise : Promise<CatalogElement>,
    videoInfo?: CatalogElement
}

/**
 * @type id - keyword, catalog - the global catalog
 */
type CatalogElementProps = {
    id : string,
    catalog : CatalogElement[]
}

/**
 * Videoplayer class, that gets a promise of catalog element
 */
class Videoplayer extends React.Component<CatalogElementProps, CatalogElementState>{
    constructor(props : CatalogElementProps){
        super(props);
        this.state = {
            videoInfoPromise : GetPromiseOfCatalogElement(this.props.id)
        }

        this.state.videoInfoPromise.then(data => 
            this.setState({
                videoInfo: data
            }))
    }

    /**
     * 
     * @returns catalog view with maximum 20 elements and without current prop element
     */
    CatalogView = () => {

        /**
         * Max elements on the page's catalog
         */
        const MAX_Result = 20;

        return (this.props.catalog?.slice(0, MAX_Result).reverse().map((item : CatalogElement) => {
            //checks if current video inside the catalog. If true, function doesn't show it
            if(item.keyword !== this.props.id){
                return(
                <dt key = {item.keyword}>
                    <button className = 'videoplayer-catalog-button' onClick = {() => GoToVideo(item)}>
                        <img src = {`${CatalogImagesAPIURL + item.keyword}.jpg`} className = "videoplayer-catalog-image"/>
                        <h3 className = "videoplayer-catalog-info">{item.title}</h3>
                    </button>
                </dt>
                );
            }
        }));
    }

    render(){
        return (
            <div className = "videoplayer-div-main">
                <div>
                    <ReactPlayer url = {`${VideoByAPIURL + this.props.id}.mp4`}
                    key = "file"
                    controls
                    playing = {true}
                    width = '130vh'
                    height = "auto"/>
    
                    <h1>{this.state.videoInfo?.title}</h1>
                    <span>{this.state.videoInfo?.description}</span>
                </div>
                
                <dl className = "videoplayer-catalog">
                    {this.CatalogView()}
                </dl>

            </div>
        );
    }
    
}

export default Videoplayer;