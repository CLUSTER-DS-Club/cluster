import React, { useState, useEffect } from "react";
import { faqs as allFaqs } from "../faq/data/faq";
import CategoryFilter from "./CategoryFilter";
import FAQAccordion from "./FAQAccordion";
import ContactPrompt from "./ContactPrompt";
import SearchBar from "./SearchBar";
import { useLocation } from "react-router-dom";
import useLocalStorage from "./hooks/useLocalStorage";
import useDebounce from "./hooks/useDebounce";

const FAQ = () => {
  const categoriesSet = new Set(allFaqs.map((f) => f.category));
  const categories = ["All", ...Array.from(categoriesSet)];

  const [searchTerm, setSearchTerm] = useLocalStorage("faqSearch", "");
  const [selectedCategory, setSelectedCategory] = useLocalStorage("faqCategory", "All");
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const [expandedId, setExpandedId] = useState(null);

  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash) {
      const exists = allFaqs.find((f) => f.id === hash);
      if (exists) {
        setExpandedId(hash);
        setTimeout(() => {
          const el = document.getElementById(`faq-item-${hash}`);
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
      }
    }
  }, []);

  const filteredFaqs = allFaqs.filter((item) => {
    const catMatch = selectedCategory === "All" || item.category === selectedCategory;
    const term = debouncedSearchTerm.trim().toLowerCase();
    if (!term) return catMatch;
    const inQuestion = item.question.toLowerCase().includes(term);
    const inAnswer = item.answer.toLowerCase().includes(term);
    return catMatch && (inQuestion || inAnswer);
  });

  const handleToggle = (id) => {
    const newId = expandedId === id ? null : id;
    setExpandedId(newId);

    if (newId) {
      window.history.replaceState(null, "", `#${newId}`);
      const el = document.getElementById(`faq-item-${newId}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      window.history.replaceState(null, "", location.pathname + location.search);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 px-4 py-10">
      <div className="max-w-4xl mx-auto">
        <section className="text-center mb-10 my-15">
          <h1 className="text-4xl font-extrabold tracking-tight text-white mb-2 ">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-400">
            Find answers about CLUSTER’s purpose, joining process, tech stack, events, contributions, and more.
          </p>
        </section>


        <div className="bg-gray-900 rounded-xl p-6 mb-8 shadow-md">
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
          <div className="mt-4">
            <CategoryFilter categories={categories} selected={selectedCategory} onChange={setSelectedCategory} />
          </div>
        </div>

        <div className="bg-gray-900 rounded-xl p-6 shadow-md">
          {filteredFaqs.length > 0 ? (
            <FAQAccordion faqs={filteredFaqs} expandedId={expandedId} onToggle={handleToggle} />
          ) : (
            <div className="text-center">
              <p className="text-gray-400 mb-4">
                No results found for “{debouncedSearchTerm}” in “{selectedCategory}”
              </p>
              <ContactPrompt context={`FAQ search: ${debouncedSearchTerm}`} />
            </div>
          )}
        </div>

 
        <section className="mt-12 text-center">
          <p className="text-gray-400 mb-2">Still have a question?</p>
          <ContactPrompt />
        </section>
      </div>
    </div>
  );
};

export default FAQ;
