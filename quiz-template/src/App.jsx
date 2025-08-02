import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import QuizSection from './components/QuizSection'
import ThankYouPage from './components/ThankYouPage'
import UnqualifiedPage from './components/UnqualifiedPage'
import './App.css'

function App() {
  return (
    <Router basename="/quiz">
      <div className="App">
        <Routes>
          <Route path="/" element={<QuizSection />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="/unqualified" element={<UnqualifiedPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
