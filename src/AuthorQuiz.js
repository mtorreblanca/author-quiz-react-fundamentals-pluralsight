import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./bootstrap.min.css";

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

const Book = ({ title }) => {
  return (
    <div className="answer">
      <h4>{title}</h4>
    </div>
  );
};

const Turn = ({ author, books }) => {
  return (
    <div className="row turn" style={{ backgroundColor: "white" }}>
      <div className="col-4 offset-1">
        <img src={author.imageUrl} className="authorimage" alt="Athor" />
      </div>
      <div className="col-6">
        {books.map((title) => (
          <Book title={title} key={title} />
        ))}
      </div>
    </div>
  );
};

const Continue = (props) => {
  return <div></div>;
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

function AuthorQuiz({ turnData }) {
  return (
    <div className="container-fluid">
      <Hero />
      <Turn {...turnData} />
      <Continue />
      <Footer />
    </div>
  );
}

export default AuthorQuiz;
