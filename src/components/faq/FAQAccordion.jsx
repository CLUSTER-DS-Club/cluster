import React from "react";
import PropTypes from "prop-types";
import QuestionItem from "./QuestionItem";

const FAQAccordion = ({ faqs, expandedId, onToggle }) => {
  return (
    <div className="space-y-4">
      {faqs.map((item) => (
        <QuestionItem
          key={item.id}
          id={item.id}
          question={item.question}
          answer={item.answer}
          isExpanded={expandedId === item.id}
          onToggle={() => onToggle(item.id)}
        />
      ))}
    </div>
  );
};

FAQAccordion.propTypes = {
  faqs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
      category: PropTypes.string, // optional
    })
  ).isRequired,
  expandedId: PropTypes.string,
  onToggle: PropTypes.func.isRequired,
};

export default FAQAccordion;
