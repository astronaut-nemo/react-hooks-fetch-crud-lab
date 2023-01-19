import React from "react";

function QuestionItem({ question, onDeleteQuestion }) {
  const { id, prompt, answers, correctIndex } = question;

  // Event Handlers
  function handleDeleteClick(){
    // console.log(question);

    // DELETE Request
    fetch(`http://localhost:4000/questions/${question.id}`, {
      method: "DELETE"
    })
    .then((response) => response.json())
    .then(() => onDeleteQuestion(question))
  }

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
