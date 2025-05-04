import { useState } from "react";
function Card({ q }) {
  const [selected, setSelected] = useState(null);
  const qId = q.id;
  //   Hnandle question click
  const answerQuestion = (id) => {
    id === selected ? setSelected(null) : setSelected(id);
  };
  return (
    <div
      className={`start-center flex h-32 w-full items-center gap-4 rounded-md border border-slate-200 p-4 text-sm text-stone-700 shadow-md transition-all duration-300 hover:scale-105 hover:cursor-pointer md:text-lg ${selected === qId ? "bg-green-300 hover:bg-green-300" : "bg-white hover:bg-slate-100"}`}
      onClick={() => answerQuestion(qId)}
    >
      <span className="text-slate-400">{q.icon}</span>
      {selected === qId ? <span>{q.answer}</span> : <span>{q.question}</span>}
    </div>
  );
}

export default Card;
