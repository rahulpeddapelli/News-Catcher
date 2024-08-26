import React from "react";
import NoImg from "../Components/No_image_available.svg.png"

const NeweItem = (props)=>{
  
        let { title, descript, url, imgurl, date, author } = props;
        return (
            <div className="card my-2" style={{backgroundColor:"rgb(236, 228, 237)",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                <img src={imgurl ? imgurl : NoImg} className="card-img-top" style={{ height: "140px" }} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{descript}...</p>
                    <p className="card-text"><small className="text-muted">By-{author?author:"Unknown"} on {date}</small></p>
                    <a rel="noreferrer" href={url} target="_blank" className="btn btn-sm btn-dark">Read More...</a>
                </div>
            </div>
        )

   
}

export default NeweItem ;