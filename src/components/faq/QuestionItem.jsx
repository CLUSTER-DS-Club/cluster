import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

const QuestionItem = ({ id, question, answer, isExpanded, onToggle }) => {
  const buttonRef = useRef(null);


  useEffect(() => {
    if (isExpanded && buttonRef.current) {
      buttonRef.current.focus();
    }
  }, [isExpanded]);

  return (
    <div id={`faq-item-${id}`} className="border rounded-lg overflow-hidden dark:border-gray-600">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={isExpanded}
        aria-controls={`faq-answer-${id}`}
        onClick={onToggle}
       className={`
          w-full text-left px-4 py-3 flex justify-between items-center
          focus:outline-none focus:ring-2 focus:ring-blue-500
          cursor-pointer transition-all duration-300
          ${isExpanded 
            ? 'bg-gray-500  text-white' 
            : 'bg-white dark:bg-gray-800 hover:bg-blue-900 text-gray-800 dark:text-gray-100'
          }
        `}
      >
        
        <span className="font-medium text-gray-800 dark:text-gray-100">{question}</span>
        <span
          aria-hidden="true"
          className="text-gray-600 dark:text-gray-300 font-bold text-xl"
        >
          {isExpanded ? "−" : "+"}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            key="content"
            id={`faq-answer-${id}`}
            role="region"
            aria-labelledby={`faq-item-${id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            
            className="px-4 pb-4 bg-gray-50 dark:bg-gray-900 bg text-gray-700 dark:text-gray-300"
          >
          
            <p className="mt-2 whitespace-pre-line">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>

  
  );
};

QuestionItem.propTypes = {
  id: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  isExpanded: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default QuestionItem;
