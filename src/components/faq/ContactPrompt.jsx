import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const ContactPrompt = ({ context }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (context) {
      const encoded = encodeURIComponent(context);
      navigate(`/contact?from=faq&context=${encoded}`);
    } else {
      navigate("/contact");
    }
  };

  return (
    <div className="mt-6 text-center">
      <p className="text-gray-600 dark:text-gray-300">
        Can’t find the answer?{" "}
        <button
          type="button"
          onClick={handleClick}
          className="text-blue-600 hover:underline focus:outline-none focus:ring-1 focus:ring-blue-500 dark:text-blue-400"
        >
          Contact us
        </button>
      </p>
    </div>
  );
};

ContactPrompt.propTypes = {
  context: PropTypes.string,
};

export default ContactPrompt;
