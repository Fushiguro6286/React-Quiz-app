🎓 QuizMaster: Ultimate React Quiz App
QuizMaster is a sleek, responsive, and highly interactive quiz platform built with React. Whether you're testing your knowledge in Quantum Physics or English Literature, this app provides a seamless experience with real-time feedback and persistent score tracking.


✨ Features

📚 Multi-Subject Selection – Choose from Biology, Chemistry, Physics, English, Computer Science, and Physical Education.
✅ Instant Visual Feedback – Green and Red highlights let you know immediately if you're right or wrong.
📈 Persistent High Scores – Uses localStorage to remember your personal best for every individual subject.
⏳ Progress Tracking – Dynamic progress bar to visualize your journey through the quiz.
📱 Fully Responsive – Optimized for a premium experience on mobile, tablet, and desktop.
🔄 Replayability – Easily reset the quiz or switch subjects without refreshing the page.


🛠 Technologies Used

React 18: Component-based architecture for a snappy UI.
Vite: Next-generation frontend tooling for fast development and optimized builds.
Hooks: useState for UI state and useEffect for data persistence.
Modern CSS: Custom animations, Flexbox, and Grid for a modern look.
Local Storage API: To store and retrieve "Best Scores" across browser sessions.


📁 Project Structure

react-quiz-app/
├── public/               # Static assets
├── src/
│   ├── assets/           # Subject data (Biology.js, Physics.js, etc.)
│   ├── components/       # Quiz.jsx (The core engine)
│   ├── styles/           # Quiz.css (All visual styling)
│   ├── main.jsx          # App entry point
│   └── App.jsx           # Root component
├── package.json          # Project dependencies
├── vite.config.js        # Vite configuration
└── README.md             # Documentation


⚡ How It Works

The Logic Flow
1. Selection: The user picks a subject which triggers a state update to load the specific JSON-like object from the assets/ folder.
2. Interaction: When an option is clicked:
  . The app compares selectedOption with correctAnswer.
  . Classes are dynamically applied: .correct (Green) or .wrong (Red).
  . The score increments if the choice is correct.
3. Completion: Upon the final question, the resultScreen triggers.


🌟 Future Enhancements
1. [ ] Challenge Mode: Add a 15-second timer per question.
2. [ ] Sound Effects: Add subtle audio cues for correct/incorrect answers.
3. [ ] Dark Mode: A dedicated theme for late-night study sessions.
4. [ ] Leaderboard: Backend integration (Firebase) to compare scores globally.
5. [ ] Animations: Implement Framer Motion for smooth card-flipping transitions.


Built with ❤️ by Piyush Kumar
