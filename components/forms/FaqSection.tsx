'use client';

import { useState } from "react";

const FaqForm = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqData = [
    {
      question: 'What is a gabion, exactly?',
      answer: 'A gabion is a cage or basket filled with rock or other natural material, often used for retaining walls, landscape features, fencing, and erosion control. They offer both strength and visual appeal in outdoor projects.',
    },
    {
      question: 'How long do gabions last?',
      answer: 'Gabions are extremely durable. With proper installation and quality materials, they can last several decades. We use galvanized or stainless-steel mesh to ensure maximum resistance to rust and corrosion.',
    },
    {
      question: 'Can I customize the look of my gabion?',
      answer: 'Absolutely! You can choose the type of stone or filler material, cage layout, height, and even integrate lighting or plants. We’ll work with your vision to design something that fits your space and aesthetic.',
    },
    {
      question: 'Do I need a permit for a gabion wall?',
      answer: 'It depends on the size and location. For structural retaining walls over a certain height, local permits might be required. We’ll help you understand what’s needed and assist with the process if permits are necessary.',
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      {faqData.map((faq, index) => (
        <div key={index} className="mb-6 border border-gray-300 rounded-xl shadow-xl max-w-[250px] xs:max-w-[270px]">
          <div
            className="bg-slate-100 rounded-xl px-1 xs:px-4 py-3 cursor-pointer font-bold flex justify-between items-center gap-2"
            onClick={() => toggleFAQ(index)}
          >
            <div className="dark:text-black">{faq.question}</div>
            <span className="dark:invert text-xl">
              {activeIndex === index ? '-' : '+'}
            </span>
          </div>

          {activeIndex === index && (
            <div className="p-2 xs:ml-2 py-3">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FaqForm;