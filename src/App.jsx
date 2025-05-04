// import { useState } from "react";
import { questions } from "./assets/data";
import Card from "./components/Card";
function App() {
  return (
    <>
      <div className="grid-cols container mx-auto grid min-h-screen max-w-[1440px] grid-cols-1 place-items-center gap-4 bg-slate-300 p-8 sm:grid-cols-2 sm:gap-8">
        <p className="slate-800 w-full rounded-md bg-slate-400 p-4 text-center text-sm text-slate-100 sm:col-span-2 sm:text-lg">
          This is a flashcard game to help you learn JavaScript ES6 concepts.
          Click on any card to reveal the answer to the question.
        </p>
        {questions.map((q) => (
          <Card q={q} key={q.id} />
        ))}
      </div>
    </>
  );
}

export default App;
