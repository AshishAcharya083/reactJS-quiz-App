import React, { useState } from "react";
import array from "../questionBank";

function findCorrectAnswer(num) {
  const arrayOfCorrectAnswer = Object.values(array[num].correct_answers).map(
    (value, index) => {
      if (value === "true") {
        return index;
      } else {
        return null;
      }
    }
  );
  console.log('the correct answer array is ' +  arrayOfCorrectAnswer + 'for index ' + num)
  const filteredArray = arrayOfCorrectAnswer.filter((num) => num != null);
  let correctAnswer = filteredArray[0];
  console.log("The correct answer is " + correctAnswer + ' for index ' + num);
  return correctAnswer;
}

function Question(props) {
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState(0);
  const [score, setScore] = useState(0);

  function checkAnswer(){
    console.log('answer checked for ' + index);
    if(answer === findSelectedRadioButton()){
        console.log('CORRECT ANSWER!!!');
    }
  }

  function clicked() {
    console.log('button clicked');
    setAnswer(findCorrectAnswer(index));
    
    checkAnswer();
    
    console.log('index is ' + index);
    console.log('answer is ' + answer);
    setIndex(index + 1);
  }
  function findSelectedRadioButton(){
    let selections = document.getElementsByName('selection');
    let selected;
    for(let  i = 0 ; i< 4; i++){
        if(selections[i].checked){
          selected = selections[i].value;
        }
    } 
    console.log("The selected RADIO BUTTON is " + selected);
    return selected;
  }


  let tempQues = array[index].answers;
  return (
    <div className="container">
      <div className = 'indicators'>
        <h3 className="question-number">
          question number <span className="question-integer"> {index + 1}</span>
        </h3>
        <h3 className="point">
          My score <span className="question-integer">{score}</span>
        </h3>
      </div>
      <div className="dotted"></div>
      <h2>{array[index].question}</h2>
      <ul className="options">
        <li>
          <input type="radio" id="0" name="selection" value="0" />
          <label for="0">{tempQues.answer_a}</label>
        </li>
        <li>
          <input type="radio" id="1" name="selection" value="1" />
          <label for="1">{tempQues.answer_b}</label>
        </li>
        <li>
          <input type="radio" id="2" name="selection" value="2" />
          <label for="2">{tempQues.answer_c}</label>
        </li>
        <li>
          <input type="radio" id="3" name="selection" value="3" />
          <label for="3">{tempQues.answer_d}</label>
        </li>
      </ul>
      <div className="dotted"></div>
      <div></div>
      <button onClick={clicked} className="next-button">
        Next
      </button>
    </div>
  );
}

export default Question;
