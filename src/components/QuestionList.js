import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  // States
  const [questions, setQuestions] = useState([]);

  // Fetch requests
  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then((response) => response.json())
    .then((questions) => setQuestions(questions))
  }, []);

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {/* display QuestionItem components here after fetching */}
        {questions.map((question) => <QuestionItem question={question}/>)}
      </ul>
    </section>
  );
}

export default QuestionList;
