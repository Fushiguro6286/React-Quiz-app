import React, { useState, useEffect } from "react";
import "./Quiz.css";

// Import Subjects
import { biologyMCQ } from "../../assets/biology";
import { chemistryMCQ } from "../../assets/chemistry";
import { physicsQuestions } from "../../assets/physics";
import { englishPaper } from "../../assets/English";
import { computerScienceMCQ } from "../../assets/computer";
import { physicalEducationMCQ } from "../../assets/phyEdu";

const Quiz = () => {
  // ===== SUBJECT LIST =====
  const subjects = [
    { name: "Biology", data: biologyMCQ },
    { name: "Chemistry", data: chemistryMCQ },
    { name: "Physics", data: physicsQuestions },
    { name: "English", data: englishPaper },
    { name: "Computer", data: computerScienceMCQ },
    { name: "PhyEducation", data: physicalEducationMCQ },
  ];

  // ===== STATES =====
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(null);
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);
  const [bestScore, setBestScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null); // dynamic selection

  // ===== LOAD BEST SCORE =====
  useEffect(() => {
    if (selectedSubject) {
      const stored = localStorage.getItem(`bestScore-${selectedSubject}`);
      setBestScore(stored ? Number(stored) : 0);
    }
  }, [selectedSubject]);

  // ===== UPDATE BEST SCORE =====
  useEffect(() => {
    if (selectedSubject && score > bestScore) {
      setBestScore(score);
      localStorage.setItem(`bestScore-${selectedSubject}`, score);
    }
  }, [score]);

  // ===== SELECT SUBJECT =====
  const selectPaper = (subjectName, paperData) => {
    setSelectedSubject(subjectName);
    setQuestions(paperData);
    setQuestion(paperData[0]);
    setIndex(0);
    setScore(0);
    setResult(false);
    setLock(false);
    setSelectedOption(null);
  };

  // ===== CHECK ANSWER =====
  const checkAns = (optionIndex) => {
    if (!lock) {
      setSelectedOption(optionIndex);
      setLock(true);
      if (question.ans === optionIndex) {
        setScore((prev) => prev + 1);
      }
    }
  };

  // ===== NEXT QUESTION =====
  const next = () => {
    if (!lock) return;

    if (index === questions.length - 1) {
      setResult(true);
      return;
    }

    const newIndex = index + 1;
    setIndex(newIndex);
    setQuestion(questions[newIndex]);
    setLock(false);
    setSelectedOption(null);
  };

  // ===== RESET =====
  const reset = () => {
    setSelectedSubject(null);
    setQuestions([]);
    setIndex(0);
    setScore(0);
    setResult(false);
    setLock(false);
    setSelectedOption(null);
  };

  // ===== PROGRESS BAR =====
  const progressPercent =
    questions.length > 0 ? ((index + 1) / questions.length) * 100 : 0;

  // ===== OPTIONS LIST =====
  const options = ["option1", "option2", "option3", "option4"];

  return (
    <div className="container">
      <h1>Quiz App</h1>
      <hr />

      {/* ===== SUBJECT SELECTION ===== */}
      {!selectedSubject && (
        <div className="paper-select">
          <h2>Select Paper</h2>
          {subjects.map((subject, i) => (
            <button
              key={i}
              onClick={() => selectPaper(subject.name, subject.data)}
            >
              {subject.name}
            </button>
          ))}
        </div>
      )}

      {/* ===== QUIZ SCREEN ===== */}
      {selectedSubject && !result && question && (
        <>
          <h3>
            📘 {selectedSubject} | 🏆 Best Score: {bestScore}
          </h3>

          {/* Progress Bar */}
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>

          <h2>
            {index + 1}. {question.question}
          </h2>

          <ul>
            {options.map((optKey, i) => {
              const optionNumber = i + 1;
              let className = "";
              if (lock) {
                if (question.ans === optionNumber) className = "correct";
                else if (selectedOption === optionNumber) className = "wrong";
              }
              return (
                <li
                  key={i}
                  className={className}
                  onClick={() => checkAns(optionNumber)}
                >
                  {question[optKey]}
                </li>
              );
            })}
          </ul>

          <button onClick={next}>Next</button>

          <div className="index">
            {index + 1} of {questions.length} Questions
          </div>
        </>
      )}

      {/* ===== RESULT SCREEN ===== */}
      {result && (
        <>
          <h2>
            You Scored {score} out of {questions.length}
          </h2>
          <button onClick={reset}>Choose Another Paper</button>
        </>
      )}
    </div>
  );
};

export default Quiz;
