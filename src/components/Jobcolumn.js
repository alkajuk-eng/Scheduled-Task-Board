import React from "react";

import "./Jobcolumn.css";
import { Jobstatus } from "./Jobstatus";

export const Jobcolumn = (props) => {
  return (
    <section className="columns">
      <h2 className="hdStatus">{props.title}</h2>
      <img className="statusImgClass" src={props.imgIcon} alt="props.title" />

      {props.job.map(
        (item, index) =>
          item.status === props.status && (
            <Jobstatus
              key={index}
              activity={item.activity}
              category={item.category}
              callDeleteJob={props.callDeleteJob}
              uqueNumber={index}
            />
          ),
      )}
    </section>
  );
};
