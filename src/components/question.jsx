import axios from "axios";
import React, { useEffect, useState } from "react";

const Question = () => {
  const [index, setIndex] = useState(0);
  const [items, setItems] = useState([]);
  const [answer, setAnswer] = useState();
  
  useEffect(() => {
    axios
      .get(
        "https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple"
      )
      .then((response) => {
        console.log(response.data.results);
        setItems(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function onClickHandler() {
    setIndex((prev) => {
      return prev + 1;
    });
  }
  
  const myQuestion = items[index].question;
  return (
    <div>
      {console.log(index, answer)}

      <div className="question">{myQuestion}</div>
      {console.log(items)}
      <button onClick={onClickHandler}>Increase Index</button>
    </div>
  );
};

export default Question;
