import React from 'react'
import "./SinglePost.css";



export default function SinglePost(props) {
  return (
    <div className="singlePost ">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src={props.img}
          alt=""
        />
        <h1 className="singlePostTitle">
       {props.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
          
                Safak
            </b>
          </span>
          <span>1 day ago</span>
        </div>
        <p className="singlePostDesc">
          {props.desc}
        </p>
      </div>
     
    </div>
  );
}