export const Questions = {
  questions: [
    // JSX
    {
      id: 1,
      type: "fill-in-the-blanks",
      question: "In React, JSX stands for __.",
      blanks: ["JavaScript XML"],
      note: "JSX is a syntax extension for JavaScript used with React."
    },
    {
      id: 2,
      type: "multiple-choice",
      question: "Which of the following is true about JSX?",
      options: [
        "JSX is required in React",
        "JSX is a syntax extension for JavaScript",
        "JSX is a new programming language",
        "JSX runs directly in the browser without compilation"
      ],
      correctAnswers: ["JSX is a syntax extension for JavaScript"],
      multipleAnswers: false,
      note: "JSX allows writing HTML-like syntax in JavaScript."
    },
    // Components
    {
      id: 3,
      type: "fill-in-the-blanks",
      question: "In React, a functional component is defined using a __ function.",
      blanks: ["JavaScript"],
      note: "React functional components are written as JavaScript functions."
    },
    {
      id: 4,
      type: "multiple-choice",
      question: "Which of the following is a valid way to define a functional component in React?",
      options: [
        "function MyComponent() {}",
        "class MyComponent extends React.Component {}",
        "const MyComponent = () => {}",
        "Both 1 and 3"
      ],
      correctAnswers: ["Both 1 and 3"],
      multipleAnswers: false,
      note: "Functional components can be defined using function declarations or arrow functions."
    },
    // Props
    {
      id: 5,
      type: "fill-in-the-blanks",
      question: "Props in React are used to pass __ from parent to child components.",
      blanks: ["data"],
      note: "Props allow components to receive data and configuration."
    },
    {
      id: 6,
      type: "multiple-choice",
      question: "Which of the following statements about props in React is true?",
      options: [
        "Props are mutable",
        "Props can be modified inside a component",
        "Props help pass data between components",
        "Props can only contain strings"
      ],
      correctAnswers: ["Props help pass data between components"],
      multipleAnswers: false,
      note: "Props are read-only and used for passing data."
    },
    // State
    {
      id: 7,
      type: "fill-in-the-blanks",
      question: "To manage state in a functional component, we use the __ hook.",
      blanks: ["useState"],
      note: "The useState hook is used to add state to functional components."
    },
    {
      id: 8,
      type: "multiple-choice",
      question: "Which of the following correctly initializes a state variable in a functional component?",
      options: [
        "const [count, setCount] = useState(0);",
        "const count = useState(0);",
        "useState(0);",
        "this.state = { count: 0 };"
      ],
      correctAnswers: ["const [count, setCount] = useState(0);"],
      multipleAnswers: false,
      note: "useState returns an array containing the state value and a function to update it."
    },
    // Event Handling
    {
      id: 9,
      type: "fill-in-the-blanks",
      question: "In React, event handlers are written in __ case.",
      blanks: ["camel"],
      note: "Event handlers in React follow camelCase naming (e.g., onClick, onChange)."
    },
    {
      id: 10,
      type: "multiple-choice",
      question: "Which is the correct way to handle a button click event in React?",
      options: [
        `<button onclick={handleClick}>Click</button>`,
        `<button onClick={handleClick}>Click</button>`,
        `<button click={handleClick}>Click</button>`,
        `<button OnClick={handleClick}>Click</button>`
      ],
      correctAnswers: [`<button onClick={handleClick}>Click</button>`],
      multipleAnswers: false,
      note: "React uses camelCase for event handlers like onClick."
    },
    // Hooks
    {
      id: 11,
      type: "fill-in-the-blanks",
      question: "The __ hook is used for side effects in functional components.",
      blanks: ["useEffect"],
      note: "useEffect is used to run code when a component mounts or updates."
    },
    {
      id: 12,
      type: "multiple-choice",
      question: "Which of the following is NOT a built-in React Hook?",
      options: ["useState", "useEffect", "useReducer", "useData"],
      correctAnswers: ["useData"],
      multipleAnswers: false,
      note: "React does not have a built-in 'useData' hook."
    },
    // Conditional Rendering
    {
      id: 13,
      type: "fill-in-the-blanks",
      question: "In React, the __ operator is commonly used for conditional rendering.",
      blanks: ["ternary"],
      note: "The ternary operator (`condition ? true : false`) is often used for conditional rendering."
    },
    {
      id: 14,
      type: "multiple-choice",
      question: "Which of the following is a correct way to conditionally render a component in React?",
      options: [
        `{isLoggedIn && <Dashboard />}`,
        `{if (isLoggedIn) <Dashboard />}`,
        `{isLoggedIn ? <Dashboard /> : null}`,
        "Both 1 and 3"
      ],
      correctAnswers: ["Both 1 and 3"],
      multipleAnswers: false,
      note: "React supports conditional rendering using logical AND (`&&`) and ternary (`? :`) operators."
    },
    // Virtual DOM
    {
      id: 15,
      type: "fill-in-the-blanks",
      question: "React uses a __ DOM to improve performance.",
      blanks: ["virtual"],
      note: "The virtual DOM optimizes updates and minimizes direct changes to the real DOM."
    }
  ]
};
