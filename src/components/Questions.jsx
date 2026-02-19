import React, { useState } from "react";
import { X } from "lucide-react";
function Questions() {
  const [activeIndex, setActiveIndex] = useState(null)
  const handleTogle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index))
  }
  const questionAns = [
    {
      question: "What is Netflux",
      answer:
        "Netflux is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    },
    {
      question: "How much does Netflux cost?",
      answer:
        "Watch Netflux on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from USD 2.99 to USD 9.99 a month. No extra costs, no contracts.",
    },
    {
      question: "Where can I watch?",
      answer:
        "Watch anywhere, anytime. Sign in with your Netflux account to watch instantly on the web at netflux.com from your personal computer or on any internet-connected device that offers the Netflux app.",
    },
    {
      question: "How do I cancel?",
      answer:
        "Netflux is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    },
    {
      question: "What can I watch on Netflux?",
      answer:
        "Netflux has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflux originals, and more. Watch as much as you want, anytime you want.",
    },
  ];
  return (
    <div className="py-10 h-screen">
      <div className="text-2xl font-bold">Frequently Asked Questions</div>
      {questionAns.map((item, index) => {
        return (
          <div>
            <div onClick={() => handleTogle(index)} className="cursor-pointer text-2xl bg-gray-800 p-5 flex items-center justify-between px-10 mt-3">
              <div className="">{item.question}</div>
              <div className="text-5xl duration-500 ">
                {activeIndex === index ? "x" : "+"}
              </div>
            </div>
            <div className={`bg-gray-800 overflow-hidden text-xl ${activeIndex === index ? "max-h-[500px]" : "max-h-0"} duration-500 px-5 mt-1`}>
              {item.answer}
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default Questions;
