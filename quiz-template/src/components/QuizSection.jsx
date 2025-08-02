import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import MonthYearSelector from './MonthYearSelector';
import { qualifyLead } from '../services/qualificationService';
import { submitLead } from '../services/leadSubmissionService';
import './App.css';

const QuizSection = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [formData, setFormData] = useState({
    zipcode: '',
    assessmentFor: '',
    injuryTypes: [],
    accidentDate: { month: '', year: '' },
    medicalTreatment: '',
    currentlyTreating: '',
    missedWork: '',
    faultParty: '',
    insuranceClaim: '',
    legalRepresentation: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalQuestions = 8;

  const questions = [
    {
      id: 1,
      question: "What is your ZIP code?",
      type: "text",
      field: "zipcode",
      validation: (value) => /^\d{5}$/.test(value),
      errorMessage: "Please enter a valid 5-digit ZIP code"
    },
    {
      id: 2,
      question: "Who is this assessment for?",
      type: "radio",
      field: "assessmentFor",
      options: ["Myself", "Someone else"]
    },
    {
      id: 3,
      question: "What type of injury occurred? (Select all that apply)",
      type: "checkbox",
      field: "injuryTypes",
      options: [
        "Motor vehicle accident",
        "Slip and fall",
        "Medical malpractice", 
        "Product defect",
        "Workplace injury",
        "Other"
      ]
    },
    {
      id: 4,
      question: "When did the accident occur?",
      type: "monthYear",
      field: "accidentDate"
    },
    {
      id: 5,
      question: "Did you receive medical treatment for your injuries?",
      type: "radio",
      field: "medicalTreatment",
      options: ["Yes", "No"]
    },
    {
      id: 6,
      question: "Are you currently receiving medical treatment?",
      type: "radio",
      field: "currentlyTreating",
      options: ["Yes", "No"]
    },
    {
      id: 7,
      question: "Did you miss work due to your injuries?",
      type: "radio",
      field: "missedWork",
      options: ["Yes", "No"]
    },
    {
      id: 8,
      question: "Who was at fault for the accident?",
      type: "radio",
      field: "faultParty",
      options: ["Myself", "Someone else", "Not sure"]
    }
  ];

  const currentQuestionData = questions[currentQuestion - 1];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCheckboxChange = (field, option) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(option)
        ? prev[field].filter(item => item !== option)
        : [...prev[field], option]
    }));
  };

  const isCurrentQuestionValid = () => {
    const question = currentQuestionData;
    const value = formData[question.field];

    switch (question.type) {
      case 'text':
        return question.validation ? question.validation(value) : value.trim() !== '';
      case 'radio':
        return value !== '';
      case 'checkbox':
        return Array.isArray(value) && value.length > 0;
      case 'monthYear':
        return value.month !== '' && value.year !== '';
      default:
        return true;
    }
  };

  const handleNext = () => {
    if (currentQuestion < totalQuestions) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      // Qualify the lead
      const qualificationResult = await qualifyLead(formData);
      
      // Submit the lead data
      await submitLead(formData, qualificationResult);
      
      // Navigate based on qualification
      if (qualificationResult.qualified) {
        navigate('/thank-you');
      } else {
        navigate('/unqualified');
      }
    } catch (error) {
      console.error('Error processing submission:', error);
      // Handle error - could show error message or navigate to error page
      alert('There was an error processing your submission. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderQuestion = () => {
    const question = currentQuestionData;
    const value = formData[question.field];

    switch (question.type) {
      case 'text':
        return (
          <div className="space-y-4">
            <input
              type="text"
              value={value}
              onChange={(e) => handleInputChange(question.field, e.target.value)}
              className="w-full p-4 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              placeholder="Enter your ZIP code"
              maxLength="5"
            />
            {question.validation && value && !question.validation(value) && (
              <p className="text-red-500 text-sm">{question.errorMessage}</p>
            )}
          </div>
        );

      case 'radio':
        return (
          <div className="space-y-3">
            {question.options.map((option) => (
              <label key={option} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name={question.field}
                  value={option}
                  checked={value === option}
                  onChange={(e) => handleInputChange(question.field, e.target.value)}
                  className="w-5 h-5 text-blue-600"
                />
                <span className="text-lg">{option}</span>
              </label>
            ))}
          </div>
        );

      case 'checkbox':
        return (
          <div className="space-y-3">
            {question.options.map((option) => (
              <label key={option} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={value.includes(option)}
                  onChange={() => handleCheckboxChange(question.field, option)}
                  className="w-5 h-5 text-blue-600"
                />
                <span className="text-lg">{option}</span>
              </label>
            ))}
          </div>
        );

      case 'monthYear':
        return (
          <MonthYearSelector
            value={value}
            onChange={(monthYear) => handleInputChange(question.field, monthYear)}
          />
        );

      default:
        return null;
    }
  };

  const progressPercentage = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <img 
            src="/Logo with Navy Blue Accent 1.png" 
            alt="Peak Settlement" 
            className="h-12 mx-auto mb-4"
          />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Free Case Assessment
          </h1>
          <p className="text-gray-600">
            Answer a few questions to see if you qualify for compensation
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">
              Question {currentQuestion} of {totalQuestions}
            </span>
            <span className="text-sm font-medium text-gray-700">
              {Math.round(progressPercentage)}% Complete
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            {currentQuestionData.question}
          </h2>
          {renderQuestion()}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 1}
            className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
              currentQuestion === 1
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Previous
          </button>

          <button
            onClick={handleNext}
            disabled={!isCurrentQuestionValid() || isSubmitting}
            className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
              !isCurrentQuestionValid() || isSubmitting
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {isSubmitting ? (
              'Processing...'
            ) : currentQuestion === totalQuestions ? (
              'Submit Assessment'
            ) : (
              <>
                Continue
                <ChevronRight className="w-5 h-5 ml-2" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizSection;

