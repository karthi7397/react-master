export const Questions = {
  questions: [
    // Advanced JSX & Rendering
    {
      id: 1,
      type: "fill-in-the-blanks",
      question: "In React, fragments are represented by __.",
      blanks: ["<> </>"],
      note: "Fragments allow grouping elements without adding extra nodes to the DOM."
    },
    {
      id: 2,
      type: "multiple-choice",
      question: "Which of the following can be used to optimize rendering in React?",
      options: ["React.memo", "useCallback", "useMemo", "All of the above"],
      correctAnswers: ["All of the above"],
      multipleAnswers: false,
      note: "React.memo prevents unnecessary re-renders, while useMemo and useCallback optimize computations and callbacks."
    },
    // Performance Optimization
    {
      id: 3,
      type: "fill-in-the-blanks",
      question: "The __ hook is used to store values that persist across renders without causing re-renders.",
      blanks: ["useRef"],
      note: "useRef allows storing mutable values without triggering re-renders."
    },
    {
      id: 4,
      type: "multiple-choice",
      question: "Which of the following statements about React performance optimization is true?",
      options: [
        "React re-renders components only when props change",
        "Re-rendering can be prevented using shouldComponentUpdate or React.memo",
        "All React components always re-render on state updates",
        "Using React context always improves performance"
      ],
      correctAnswers: ["Re-rendering can be prevented using shouldComponentUpdate or React.memo"],
      multipleAnswers: false,
      note: "React.memo and shouldComponentUpdate can prevent unnecessary re-renders."
    },
    // Hooks and Custom Hooks
    {
      id: 5,
      type: "fill-in-the-blanks",
      question: "The __ hook is used for managing complex state logic in React.",
      blanks: ["useReducer"],
      note: "useReducer is an alternative to useState for managing complex state logic."
    },
    {
      id: 6,
      type: "multiple-choice",
      question: "Which of the following is a correct way to create a custom hook?",
      options: [
        "function useCustomHook() {}",
        "const useCustomHook = () => {}",
        "A custom hook name must start with 'use'",
        "All of the above"
      ],
      correctAnswers: ["All of the above"],
      multipleAnswers: false,
      note: "Custom hooks must start with 'use' and can be written as functions or arrow functions."
    },
    // Lifecycle Methods & Effects
    {
      id: 7,
      type: "fill-in-the-blanks",
      question: "To run an effect only on component mount, we pass an empty __ array to useEffect.",
      blanks: ["dependency"],
      note: "An empty dependency array ensures the effect runs only once on mount."
    },
    {
      id: 8,
      type: "multiple-choice",
      question: "Which is the equivalent of componentDidMount in a functional component?",
      options: [
        "useEffect(() => {}, [])",
        "useEffect(() => {})",
        "useEffect(() => { return () => {}; })",
        "componentDidMount()"
      ],
      correctAnswers: ["useEffect(() => {}, [])"],
      multipleAnswers: false,
      note: "useEffect with an empty dependency array runs only on mount."
    },
    // Context API & State Management
    {
      id: 9,
      type: "fill-in-the-blanks",
      question: "In React Context API, the __ component is used to provide a context value.",
      blanks: ["Provider"],
      note: "A context Provider component makes data available to consuming components."
    },
    {
      id: 10,
      type: "multiple-choice",
      question: "Which of the following is NOT a state management solution for React?",
      options: ["Redux", "Recoil", "Vuex", "MobX"],
      correctAnswers: ["Vuex"],
      multipleAnswers: false,
      note: "Vuex is a state management solution for Vue, not React."
    },
    // React Router
    {
      id: 11,
      type: "fill-in-the-blanks",
      question: "In React Router, the __ hook is used to access route parameters.",
      blanks: ["useParams"],
      note: "useParams is used to access dynamic route parameters in React Router."
    },
    {
      id: 12,
      type: "multiple-choice",
      question: "Which of the following statements about React Router is true?",
      options: [
        "useNavigate replaces useHistory in React Router v6",
        "useEffect is required to handle navigation in React",
        "React Router is built into React and doesn't require installation",
        "Switch component is used in React Router v6"
      ],
      correctAnswers: ["useNavigate replaces useHistory in React Router v6"],
      multipleAnswers: false,
      note: "useNavigate is the replacement for useHistory in React Router v6."
    },
    // Server-Side Rendering (SSR) & Next.js
    {
      id: 13,
      type: "fill-in-the-blanks",
      question: "In Next.js, the __ function is used for server-side rendering (SSR).",
      blanks: ["getServerSideProps"],
      note: "getServerSideProps fetches data on the server before rendering the page."
    },
    {
      id: 14,
      type: "multiple-choice",
      question: "Which of the following is a feature of Next.js?",
      options: [
        "Static Site Generation (SSG)",
        "Server-Side Rendering (SSR)",
        "API Routes",
        "All of the above"
      ],
      correctAnswers: ["All of the above"],
      multipleAnswers: false,
      note: "Next.js supports SSG, SSR, and API routes."
    },
    // React Fiber
    {
      id: 15,
      type: "fill-in-the-blanks",
      question: "React's reconciliation algorithm is called __.",
      blanks: ["Fiber"],
      note: "React Fiber improves rendering performance and concurrency."
    }
  ]
};
