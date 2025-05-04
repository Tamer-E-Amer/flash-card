import {
  FaCodeBranch,
  FaLock,
  FaArrowRight,
  FaFileCode,
  FaObjectGroup,
  FaSlidersH,
  FaEllipsisH,
  FaList,
  FaHourglassHalf,
  FaSyncAlt,
} from "react-icons/fa";

export const questions = [
  {
    id: 1,
    question: "What is the purpose of `let` in ES6?",
    answer:
      "`let` allows you to declare block-scoped variables, unlike `var`, which is function-scoped.",
    icon: <FaCodeBranch />,
  },
  {
    id: 2,
    question: "How does `const` differ from `let`?",
    answer:
      "`const` declares block-scoped constants, meaning the variable can't be reassigned after it's set.",
    icon: <FaLock />,
  },
  {
    id: 3,
    question: "What are arrow functions in ES6?",
    answer:
      "Arrow functions provide a shorter syntax for writing functions and do not bind their own `this`.",
    icon: <FaArrowRight />,
  },
  {
    id: 4,
    question: "What is template literal syntax in ES6?",
    answer:
      "Template literals use backticks (``) and allow embedded expressions using `${expression}`.",
    icon: <FaFileCode />,
  },
  {
    id: 5,
    question: "What is destructuring in ES6?",
    answer:
      "Destructuring allows unpacking values from arrays or properties from objects into distinct variables.",
    icon: <FaObjectGroup />,
  },
  {
    id: 6,
    question: "What are default parameters in ES6 functions?",
    answer:
      "Default parameters let you set default values for function arguments if none are provided.",
    icon: <FaSlidersH />,
  },
  {
    id: 7,
    question: "What is the spread operator (`...`) used for?",
    answer:
      "The spread operator expands arrays or objects into individual elements or properties.",
    icon: <FaEllipsisH />,
  },
  {
    id: 8,
    question: "What is the rest parameter (`...args`) used for in functions?",
    answer:
      "It allows a function to accept an indefinite number of arguments as an array.",
    icon: <FaList />,
  },
  {
    id: 9,
    question: "What is a Promise in ES6?",
    answer:
      "A Promise represents the eventual completion (or failure) of an asynchronous operation.",
    icon: <FaHourglassHalf />,
  },
  {
    id: 10,
    question: "What is the difference between `map()` and `forEach()`?",
    answer:
      "`map()` returns a new array with the results, while `forEach()` simply executes a function for each item without returning a new array.",
    icon: <FaSyncAlt />,
  },
];
