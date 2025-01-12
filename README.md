# Capstone-Quiz-App

```markdown
# Quiz App

Welcome to the *Quiz App! This is a fun and interactive quiz application built with React that allows users to test their knowledge across a variety of topics. Whether you're into general knowledge, science, or entertainment, this app has something for everyone. It fetches quiz questions from the **Open Trivia Database API**, and users can select topics, difficulty levels, and track their score as they go.

---

## 🧩 Features

### 🎮 Quiz Experience
- **Topic Selection**: Choose from multiple categories like General Knowledge, Science, History, Entertainment, and more.
- **Difficulty Levels**: Pick from Easy, Medium, or Hard questions to suit your skill level.
- **Answer Feedback**: After each question, the app lets you know if you got it right or wrong.
- **Score Tracking**: Keep track of your score throughout the quiz, and see your final score with a summary of your correct and incorrect answers.

### 🔄 More to Explore
- **Retake the Quiz**: Want to try again? You can retake the quiz or pick a different topic without refreshing the page.
- **Quiz History**: View a list of quizzes you've taken, including scores and topics, so you can track your progress.
- **Responsive Design**: The app adapts to any screen size, making it perfect for desktop, tablet, and mobile users.

---

## 🚀 How to Get Started

To run this app locally, follow these simple steps:

### 1. **Clone the Repo**
Start by cloning the project to your local machine.

```bash
git clone https://github.com/your-username/quiz-app.git
cd quiz-app
```

### 2. **Install Dependencies**
Install all the required dependencies using npm.

```bash
npm install
```

### 3. **Start the App**
Once the dependencies are installed, start the development server.

```bash
npm start
```

Your app will be available at [http://localhost:3000](http://localhost:3000). Open this URL in your browser to play the quiz!

---

## 🧑‍💻 API Integration

The app pulls quiz questions from the **Open Trivia Database API**. You can find the full documentation for the API [here](https://opentdb.com/). 

### Example API Request:
To fetch 10 questions from the General Knowledge category with medium difficulty, the app calls:
```
https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple
```

---

## 📁 Folder Structure

The folder structure for this project looks like this:

```plaintext
├── public/
│   ├── index.html        # Main HTML file
├── src/
│   ├── components/
│   │   ├── QuizStart.jsx  # Page for starting the quiz
│   │   ├── QuizPage.jsx   # Page for displaying questions and answers
│   │   ├── ScoreSummary.jsx  # Displays the score at the end of the quiz
│   ├── App.jsx            # Main application component
│   ├── api.js             # API interaction logic (fetches questions)
│   ├── index.css          # Global styles
│   └── index.js           # Entry point for React
├── package.json           # Project metadata and dependencies
└── README.md              # This file!
```

### Components:
- **QuizStart.jsx**: The first page where users select their quiz topic, difficulty, and number of questions.
- **QuizPage.jsx**: Displays each quiz question one by one with multiple-choice answers.
- **ScoreSummary.jsx**: At the end of the quiz, this component shows the user's final score and a breakdown of their answers.
- **App.jsx**: The root component that ties everything together and handles routing between pages.
- **api.js**: Handles the logic for fetching quiz questions from the Open Trivia Database API.

---

## 💡 How It Works

The app uses **React** to build the user interface, while **Tailwind CSS** provides the styling to make everything look neat and responsive. You’ll see a simple flow:

1. **Start Page**: Choose your quiz settings (category, difficulty, number of questions).
2. **Quiz Page**: Start answering questions! You can go through them one at a time.
3. **End Page**: After you finish, view your score and a summary of how you did.

---

## 🚨 Error Handling

The app is designed to handle errors gracefully, so you don’t have to worry about any crashes or issues while playing. In case the API fails or something goes wrong with fetching the quiz questions, the app will display a friendly error message.

---

## 🛠 Future Improvements

While this app is fun to use, there’s always room for improvement. Here are some features I plan to add:

- **User Authentication**: Allow users to sign in and save their quiz history.
- **Timer for Questions**: Add a timer for each question to add more challenge.
- **Custom Quiz Creation**: Let users create and share their own quizzes.
- **Dark Mode**: A toggle for dark mode to make the app more comfortable in low-light environments.
- **Social Sharing**: Share your quiz scores with friends on social media.


---

## 🙏 Acknowledgements

- A huge thanks to the [Open Trivia Database](https://opentdb.com/) for providing the quiz questions API.
- **Tailwind CSS** made styling super easy and fast.
- **React** for making the app interactive and dynamic.

---

Feel free to explore, play the quiz, and let me know if you have any feedback or suggestions!

Enjoy testing your knowledge! 🚀
```

---
