export const Questions = {
  questions: [
    // JSX & Components
    {
      id: 1,
      type: "fill-in-the-blanks",
      question: "JSX expressions in React must be wrapped inside a single __ element.",
      blanks: ["parent"],
      note: "JSX requires a single parent element or a fragment to return multiple elements."
    },
    {
      id: 2,
      type: "multiple-choice",
      question: "Which of the following is NOT a valid way to create a React component?",
      options: [
        "Class-based component",
        "Functional component",
        "Arrow function component",
        "JSON component"
      ],
      correctAnswers: ["JSON component"],
      multipleAnswers: false,
      note: "React components can be class-based, functional, or arrow functions."
    },
    // Props & State
    {
      id: 3,
      type: "fill-in-the-blanks",
      question: "Props in React are __, meaning they cannot be modified inside the component.",
      blanks: ["immutable"],
      note: "Props are immutable and should not be changed within a component."
    },
    {
      id: 4,
      type: "multiple-choice",
      question: "Which of the following is NOT a valid way to update state in React?",
      options: [
        "Using setState() in class components",
        "Directly modifying this.state in class components",
        "Using the useState hook in functional components",
        "Passing a function to setState() for updates"
      ],
      correctAnswers: ["Directly modifying this.state in class components"],
      multipleAnswers: false,
      note: "State should always be updated using setState or useState, never directly."
    },
    // Event Handling
    {
      id: 5,
      type: "fill-in-the-blanks",
      question: "In React, the __ method is used to prevent the default behavior of an event.",
      blanks: ["preventDefault"],
      note: "preventDefault is used to stop default form submissions, link navigation, etc."
    },
    {
      id: 6,
      type: "multiple-choice",
      question: "Which of the following is true about event handling in React?",
      options: [
        "Events in React are synthetic events",
        "React uses native browser events",
        "React event handlers use lowercase names like onclick",
        "Event handlers must be written inside class components"
      ],
      correctAnswers: ["Events in React are synthetic events"],
      multipleAnswers: false,
      note: "React uses synthetic events, which wrap native browser events for cross-browser compatibility."
    },
    // Lifecycle Methods & Hooks
    {
      id: 7,
      type: "fill-in-the-blanks",
      question: "In class components, __ is invoked just before a component unmounts.",
      blanks: ["componentWillUnmount"],
      note: "componentWillUnmount is used to clean up resources before unmounting."
    },
    {
      id: 8,
      type: "multiple-choice",
      question: "Which React hook is used to perform side effects in functional components?",
      options: ["useState", "useReducer", "useEffect", "useCallback"],
      correctAnswers: ["useEffect"],
      multipleAnswers: false,
      note: "useEffect is used for side effects like API calls, subscriptions, or updating the DOM."
    },
    // React Router
    {
      id: 9,
      type: "fill-in-the-blanks",
      question: "The __ component in React Router is used to define navigation links.",
      blanks: ["Link"],
      note: "The Link component enables navigation without full page reloads."
    },
    {
      id: 10,
      type: "multiple-choice",
      question: "Which hook is used to programmatically navigate in React Router?",
      options: ["useHistory", "useNavigate", "useLocation", "useParams"],
      correctAnswers: ["useNavigate"],
      multipleAnswers: false,
      note: "useNavigate is used to navigate programmatically in React Router v6."
    },
    // Performance Optimization
    {
      id: 11,
      type: "fill-in-the-blanks",
      question: "React.memo is used to prevent unnecessary __ of functional components.",
      blanks: ["re-renders"],
      note: "React.memo prevents re-rendering if props have not changed."
    },
    {
      id: 12,
      type: "multiple-choice",
      question: "Which of the following helps improve React performance?",
      options: [
        "Using keys in lists",
        "Using React.memo for functional components",
        "Using useCallback to memoize functions",
        "All of the above"
      ],
      correctAnswers: ["All of the above"],
      multipleAnswers: false,
      note: "Keys, React.memo, and useCallback all contribute to better performance."
    },
    // Context API
    {
      id: 13,
      type: "fill-in-the-blanks",
      question: "The __ hook is used to consume values from a React context.",
      blanks: ["useContext"],
      note: "useContext allows accessing context values without a Consumer component."
    },
    {
      id: 14,
      type: "multiple-choice",
      question: "Which of the following is NOT true about React Context API?",
      options: [
        "It helps manage global state",
        "It eliminates the need for Redux in all cases",
        "It can be used with the useContext hook",
        "It allows data to be shared between deeply nested components"
      ],
      correctAnswers: ["It eliminates the need for Redux in all cases"],
      multipleAnswers: false,
      note: "Context API can replace Redux for some cases but is not always a full replacement."
    },
    // Error Boundaries
    {
      id: 15,
      type: "fill-in-the-blanks",
      question: "Error boundaries in React are implemented using the __ lifecycle method.",
      blanks: ["componentDidCatch"],
      note: "componentDidCatch is used to handle errors in React components."
    }
  ]
};
