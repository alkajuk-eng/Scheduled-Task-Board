import React, { useState } from "react";
import "./JobForm.css";

import { Formbuttom } from "./Formbuttom";

export const JobForm = (props) => {
  const [activityFormData, setActivityFormData] = useState({
    activity: "",
    status: "tostart",
    category: [],
  });

  const callFunctionForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setActivityFormData((ini) => {
      return { ...ini, [name]: value };
    });
  };

  const callSubmitForm = (e) => {
    e.preventDefault();
    console.log(activityFormData);

    props.setJob((prev) => {
      return [...prev, activityFormData];
    });
    setActivityFormData({
      activity: "",
      status: "tostart",
      category: [],
    });
  };

  const selectCategory = (cat) => {
    if (activityFormData.category.some((item) => item === cat)) {
      const filterCategory = activityFormData.category.filter(
        (item) => item !== cat,
      );
      setActivityFormData((prev) => {
        return { ...prev, category: filterCategory };
      });
    } else {
      setActivityFormData((prev) => {
        return { ...prev, category: [...prev.category, cat] };
      });
    }
  };

  /* Button Validation */
  const validateCategory = (cat) => {
    return activityFormData.category.some((item) => item === cat);
  };

  return (
    <div>
      <div className="form-header">
        <form onSubmit={callSubmitForm}>
          <input
            value={activityFormData.activity}
            type="text"
            className="bot-input"
            placeholder="Enter the job"
            name="activity"
            onChange={callFunctionForm}
          />

          <div className="form-details">
            <div className="bottom-line">
              <Formbuttom
                value="ReadEmails"
                selectCategory={selectCategory}
                selected={validateCategory("ReadEmails")}
              />
              <Formbuttom
                value="SendEmails"
                selectCategory={selectCategory}
                selected={validateCategory("SendEmails")}
              />
              <Formbuttom
                value="WebParsing"
                selectCategory={selectCategory}
                selected={validateCategory("WebParsing")}
              />
            </div>
          </div>
          <select
            value={activityFormData.status}
            className="job-status"
            name="status"
            onChange={callFunctionForm}
          >
            <option value="tostart">To Start</option>
            <option value="inprogress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
          <button type="submit" className="submit-data">
            Add Job
          </button>
        </form>
      </div>
    </div>
  );
};
