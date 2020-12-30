import React from "react";

export default class Question extends React.Component {
  constructor(props) {
    super(props);

    function findAnswer() {
      const arrayOfCorrectAnswer = Object.values(props.correctAnswers).map(
        (value, index) => {
          if (value === "true") {
            return index;
          } else {
            return null;
          }
        }
      );
      const filteredArray = arrayOfCorrectAnswer.filter((num) => num != null);

      let correctAnswer = filteredArray[0];

      return correctAnswer;
    }

    console.log(findAnswer());

    // console.log( props.correctAnswers);
    // function findCorrectAnswer(props) {

    //   console.log(props.correctAnswers);
    //   // Object.entries(props.correctAnswers).map(item => {
    //   //   console.log(item);
    //   //   return item;
    //   // }
    //   // )
    // }
    // findCorrectAnswer();
    // console.log("the correct answer is at index " + findCorrectAnswer());
    this.state = {
      questionNumber: 0,
      question: props.question,
      firstAnswer: props.answers.answer_a,
      secondAnswer: props.answers.answer_a,
      thirdAnswer: props.answers.answer_c,
      fourthAnswer: props.answers.answer_d,
      fifthAnswer: props.answers.answer_e,
    };
  }

  render() {
    return (
      <div className="container">
        <div className="dotted"></div>
        <h2>{this.state.question}</h2>
        <ul className="options">
          <li>
            <input type="radio" id="0" name="gender" value="male" />
            <label for="0">{this.state.firstAnswer}</label>
          </li>
          <li>
            <input type="radio" id="1" name="gender" value="male" />
            <label for="1">{this.state.secondAnswer}</label>
          </li>
          <li>
            <input type="radio" id="2" name="gender" value="male" />
            <label for="2">{this.state.thirdAnswer}</label>
          </li>
          <li>
            <input type="radio" id="3" name="gender" value="male" />
            <label for="3">{this.state.fourthAnswer}</label>
          </li>
        </ul>
        <div className="dotted"></div>
        <button className="next-button">Next</button>
      </div>
    );
  }
}
