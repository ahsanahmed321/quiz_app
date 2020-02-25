import React from "react";
import StarRatingComponent from "react-star-rating-component";
import { Button } from "react-bootstrap";

const qBox = props => {
  var rating;
  if (props.difficulty === "easy") rating = 1;
  if (props.difficulty === "medium") rating = 2;
  if (props.difficulty === "hard") rating = 3;
  var stars = (
    <StarRatingComponent name="Difficulty" starCount={5} value={rating} />
  );

  var options = props.incorrect_answers;
  options.push(props.correct_answer);
  var uniqueOptions = [...new Set(options)];

  var optionButton = uniqueOptions.map(res => {
    if (res === props.selectedAnswer) {
      return (
        <Button
          key={Math.random()}
          onClick={() => props.answerSelectHanddler(res)}
          style={{ background: "green", margin: "4px" }}
        >
          {res}
        </Button>
      );
    } else {
      return (
        <Button
          key={Math.random()}
          onClick={() => props.answerSelectHanddler(res)}
          style={{ margin: "4px" }}
        >
          {res}
        </Button>
      );
    }
  });
  return (
    <div>
      <p>{props.category}</p>
      <p>{stars}</p>
      <p>{props.question}</p>
      <p>{optionButton}</p>
      <p>
        <Button onClick={props.nextQuestionHandler}>Next Question</Button>
      </p>
    </div>
  );
};

export default qBox;
