import React from "react";

import { Formbuttom } from "./Formbuttom";
import deleteIcon from "../Images/Delete.png";
import "./Jobstatus.css";
import { Jobcolumn } from "./Jobcolumn";


export const Jobstatus = (props) => {
  return (
    <article className="jobStateArt">
      <p className="textArticle">{props.activity}</p>

      <div className="jobBox">
        <div className="jobStateBox">
          {props.category.map((item, index) => (
            <Formbuttom key={index} value={item} />
          ))}
        </div>

        <div className="jobDelete">
          <img className="deletingImg" src={deleteIcon} alt="Delete" onClick={()=>props.callDeleteJob(props.uqueNumber)} />
        </div>
      </div>
    </article>
  );
};
