import React from "react";
import "./Notes.css";
// import Button from "../Button/Button";
import Card from "../Card/Card";
import data from "../../assets/Data.json";


export const Notes = () => {
 
  return (
    <section className="notes-section">
      <ul>
        {data.map((item) => {
          return (
            <li key={item.id}>
              <Card
                language_image={item.language_image}
                language_name={item.language_name}
                style={{ height: "350px" }}
                label="Open"
                note={data}
                link={item.note}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};
