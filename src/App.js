import React from 'react';
import Question from './components/question';
import array from './questionBank';
import './style.css';

function App(){
    return <Question array={array}/>
   

}



export default App;