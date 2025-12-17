import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import {
  ExamDashboard,
  ExamInterface,
  TextbookPage,
  compiledContentService
} from '@srfoster/textbook-lib';
import { compiledFiles, stats } from './compiled';
import { loadAllQuestions } from './services/questionLoader';

function AppContent() {
  const location = useLocation();
  const [questions, setQuestions] = useState([]);
  const [currentExam, setCurrentExam] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize the compiled content service with our compiled content
    compiledContentService.initialize({ compiledFiles, stats });
    
    const fetchQuestions = async () => {
      try {
        const allQuestions = await loadAllQuestions();
        setQuestions(allQuestions);
      } catch (error) {
        console.error('Failed to load questions:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  if (loading) {
    return (
      <div className="app loading">
        <h2>Loading CS-333 Textbook...</h2>
      </div>
    );
  }

  const handleStartExam = (examConfig) => {
    setCurrentExam(examConfig);
  };

  const handleEndExam = () => {
    setCurrentExam(null);
  };

  const isExamRoute = location.pathname === '/exam' || location.pathname === '/#/exam';

  return (
    <div className="app">
      <header>
        <div className="header-content">
          <div className="header-title">
            <h1>CS-333: Data Structures and Algorithms</h1>
            <p>Understanding computational complexity and efficient problem solving</p>
          </div>
          <nav className="main-nav">
            <Link to="/textbook" className={`nav-link ${location.pathname.startsWith('/textbook') ? 'active' : ''}`}>
              Textbook
            </Link>
            <Link to="/exam" className={`nav-link ${isExamRoute ? 'active' : ''}`}>
              Practice Exam
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/textbook" replace />} />
          <Route path="/textbook/*" element={<TextbookPage />} />
          <Route 
            path="/exam" 
            element={
              currentExam ? (
                <ExamInterface 
                  questions={currentExam.questions} 
                  settings={currentExam.settings}
                  onEndExam={handleEndExam}
                />
              ) : (
                <ExamDashboard 
                  questions={questions} 
                  onStartExam={handleStartExam}
                />
              )
            } 
          />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
