import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  // States
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  // Fetch requests
  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then((response) => response.json())
    .then((questions) => setQuestions(questions))
    }, []);

  // Event Handlers
  function handleAddNewQuestion(newQuestion){
    // console.log(newQuestion);
    
    // Add the new question to the questions state
    setQuestions([...questions, newQuestion])
  }

  function handleDeleteQuestion(deletedQuestion){
    // console.log("In App.js: ", deletedQuestion);
    // Filter out the deleted question and update questions state
    const updatedQuestion = questions.filter((question) => question.id !== deletedQuestion.id);
    setQuestions(updatedQuestion);
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddNewQuestion={handleAddNewQuestion}/> : <QuestionList questions={questions} onDeleteQuestion={handleDeleteQuestion}/>}
    </main>
  );
}

export default App;
