import React from 'react';
import Question from './components/question';
import array from './questionBank';
import './style.css';

function App(){

    return <Question question={array[0].question} answers={array[0].answers} correctAnswers = {array[0].correct_answers}/>

}



export default App;