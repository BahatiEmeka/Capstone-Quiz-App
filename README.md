# Capstone-Quiz-App# Quiz App

## Overview
The Quiz App is an interactive web application that allows users to take quizzes on various topics and view their scores at the end. It is built using React.js and styled with Tailwind CSS to ensure a responsive and visually appealing interface. The app fetches quiz questions from the Open Trivia Database API, providing users with dynamic and diverse quiz content.

---

## Features
- **Dynamic Quiz Questions:** Fetch questions from the Open Trivia Database API based on user preferences.
- **Topic Selection:** Users can choose quiz topics before starting the quiz.
- **Progressive Display:** Questions are displayed one by one for a seamless experience.
- **Score Tracking:** View the final score after completing the quiz.
- **Responsive Design:** Tailwind CSS ensures the app looks great on all devices.
- **Deployment:** The app is deployed on Netlify/Vercel for easy access.

---

## Tech Stack
- **Frontend:** React.js
- **Styling:** Tailwind CSS
- **API:** Open Trivia Database API (https://opentdb.com/)
- **Deployment:** Netlify/Vercel

---

## Installation

### Prerequisites
- Node.js (v14 or higher) and npm installed.
- A code editor like VS Code.
- Git installed for version control.

### Steps to Set Up

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/quiz-app.git
   cd quiz-app
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start the Development Server**
   ```bash
   npm start
   ```
   Access the app at `http://localhost:3000` in your browser.

4. **Build for Production**
   ```bash
   npm run build
   ```

5. **Deploy**
   Follow the deployment instructions for Netlify or Vercel.

---

## File Structure
```
quiz-app
├── public
├── src
│   ├── components
│   │   ├── Quiz.js
│   │   ├── QuestionCard.js
│   │   ├── Score.js
│   ├── utils
│   │   └── api.js
│   ├── App.js
│   ├── index.css
│   ├── index.js
├── package.json
├── README.md
```

### Key Files
- **`src/components/Quiz.js`:** Manages quiz logic and progress.
- **`src/components/QuestionCard.js`:** Renders questions and answer options.
- **`src/components/Score.js`:** Displays the user's final score.
- **`src/utils/api.js`:** Handles API requests to fetch quiz questions.
- **`index.css`:** Includes Tailwind CSS styles.

---

## API Details
### Open Trivia Database API
- **Base URL:** `https://opentdb.com/api.php`
- **Parameters:**
  - `amount`: Number of questions.
  - `category`: Quiz topic/category.
  - `difficulty`: Difficulty level (`easy`, `medium`, `hard`).
  - `type`: Question type (`multiple` or `boolean`).

### Example Request
```javascript
fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple')
  .then(response => response.json())
  .then(data => console.log(data.results));
```

---

## Deployment
### Netlify Deployment
1. Push your code to GitHub.
2. Log in to [Netlify](https://www.netlify.com/).
3. Click on "New Site from Git."
4. Connect your GitHub repository.
5. Select the `main` branch and deploy.

### Vercel Deployment
1. Push your code to GitHub.
2. Log in to [Vercel](https://vercel.com/).
3. Click on "New Project."
4. Import your GitHub repository.
5. Deploy your app.

---

## Future Enhancements
- **User Authentication:** Allow users to save their progress and view their quiz history.
- **Quiz Categories:** Enable users to filter quizzes by specific categories.
- **Leaderboard:** Add a global leaderboard for competitive quizzing.
- **Timer:** Implement a timer for each question to increase difficulty.

---

## Contributing
1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

---

## License
This project is licensed under the MIT License. See the LICENSE file for details.

---

## Acknowledgments
- [Open Trivia Database](https://opentdb.com/) for providing the API.
- [Tailwind CSS](https://tailwindcss.com/) for the styling framework.
- [React](https://reactjs.org/) for making web development efficient.

---

## Contact
For any questions or feedback, reach out to emekabahti44@gmail.com.

