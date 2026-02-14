React Quiz App

A dynamic React-based Quiz App that allows users to select subjects, answer multiple-choice questions, track their scores, and save the best scores for each subject. Built with React functional components, hooks, and local storage for persistent scoring.

Table of Contents

Features

Demo

Technologies Used

Project Structure

Getting Started

How It Works

Screenshots

Future Enhancements

License

Features

Select from multiple subjects: Biology, Chemistry, Physics, English, Computer Science, Physical Education.

Answer multiple-choice questions (MCQs) per subject.

Immediate feedback: correct answers highlighted in green, wrong in red.

Track current score and best score per subject.

Progress bar shows question progression.

Reset quiz or switch to another subject.

Persistent best scores using localStorage.

Demo

A simple demo of the app flow:

User selects a subject.

Questions appear with options.

User clicks an answer → feedback is shown.

Click “Next” to move to the next question.

After the last question, the result is displayed.

User can choose another paper or restart.

Technologies Used

React – For building interactive UI components.

React Hooks – useState and useEffect for state and side effects.

CSS – Custom styling for progress bars, buttons, and feedback highlights.

LocalStorage – Store best scores per subject.

Vite – Fast React development environment.

Project Structure
react-quiz-app/
│
├─ public/
│
├─ src/
│   ├─ assets/
│   │   ├─ biology.js
│   │   ├─ chemistry.js
│   │   ├─ physics.js
│   │   ├─ English.js
│   │   ├─ computer.js
│   │   └─ phyEdu.js
│   │
│   ├─ components/
│   │   └─ Quiz.jsx
│   │
│   ├─ styles/
│   │   └─ Quiz.css
│   │
│   └─ main.jsx
│
├─ package.json
├─ vite.config.js
└─ README.md

Getting Started

Follow these steps to run the project locally:

Clone the repository

git clone <repository-url>
cd react-quiz-app


Install dependencies

npm install


Start development server

npm run dev


Open your browser and go to http://localhost:5173 (default Vite port).

How It Works
1. Subject Selection

On loading the app, the user sees a list of subjects.

Clicking a subject loads its respective question paper.

2. Answering Questions

Each question shows four options.

Clicking an option locks the choice and highlights correct/incorrect.

The score updates instantly if the answer is correct.

3. Navigation

Click Next to move to the next question.

At the end of the quiz, results are displayed with the user’s score.

4. Progress & Best Score

A progress bar shows how many questions are completed.

The best score is retrieved from localStorage and updated automatically if a higher score is achieved.

5. Reset & Replay

User can reset the quiz or select a different subject to start over.

Screenshots

(Optional: Add screenshots of subject selection, quiz screen, result screen, and progress bar)

Future Enhancements

Timer per question to increase challenge.

Animations for progress bar and option feedback.

Randomized questions for replayability.

Leaderboard to compare scores with other users.

Dark/Light theme toggle for better UX.

License

This project is licensed under the MIT License.
Feel free to use, modify, and distribute.
