import React from "react";
import logo from "./logo.svg";
import { Link } from "react-router-dom";
import "./App.css";
import "./bootstrap.min.css";
import PropTypes from "prop-types";

const Hero = (props) => {
  return (
    <div className="row">
      <div className="jumbotron col-10 offset-1">
        <h1>Author Quiz</h1>
        <p>Select the book written by the author shown</p>
      </div>
    </div>
  );
};

const Book = ({ title, onClick }) => {
  return (
    <div
      className="answer"
      onClick={() => {
        onClick(title);
      }}
    >
      <h4>{title}</h4>
    </div>
  );
};

const Turn = ({ author, books, highlight, onAnswerSelected }) => {
  const highlightToBgColor = (highlight) => {
    const mapping = {
      none: "",
      correct: "green",
      wrong: "red",
    };
    return mapping[highlight];
  };

  return (
    <div
      className="row turn"
      style={{ backgroundColor: highlightToBgColor(highlight) }}
    >
      <div className="col-4 offset-1">
        <img src={author.imageUrl} className="authorimage" alt="Athor" />
      </div>
      <div className="col-6">
        {books.map((title) => (
          <Book title={title} key={title} onClick={onAnswerSelected} />
        ))}
      </div>
    </div>
  );
};

Turn.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    imageSource: PropTypes.string.isRequired,
    books: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
  books: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
  highlight: PropTypes.string.isRequired,
};
const Continue = ({ show, onContinue }) => {
  return (
    <div className="row continue">
      {show ? (
        <div className="col-11">
          <button
            className="btn btn-primary btn-lg float-right"
            onClick={onContinue}
          >
            Continue
          </button>
        </div>
      ) : null}
    </div>
  );
};

const Footer = (props) => {
  return (
    <div id="footer" className="row">
      <p className="text-muted credit">
        All images are from{" "}
        <a href="http://commons.wikimedia.org/wiki"> WikiMedia </a>
      </p>
    </div>
  );
};

function AuthorQuiz({ turnData, highlight, onAnswerSelected, onContinue }) {
  return (
    <div className="container-fluid">
      <Hero />
      <Turn
        {...turnData}
        highlight={highlight}
        onAnswerSelected={onAnswerSelected}
      />
      <p>
        <Link to="/add">Add Author</Link>
      </p>
      <Continue show={highlight === "correct"} onContinue={onContinue} />
      <Footer />
    </div>
  );
}

export default AuthorQuiz;
