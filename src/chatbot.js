import CodeEditor from "./CodeEditor";
import React, { useState } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';


// Define the evaluateUserCode function for code evaluation
function evaluateUserCode(userCode) {
  try {
    // You can use eval or another approach to execute the user's code
    const result = eval(`(${userCode})`)(5, 3); // Example: Execute user's code with inputs 5 and 3
    if (result === 8) {
      // Correct answer
      return "Your code is correct!";
    } else {
      // Incorrect answer
      return "That's not the correct result. Try again.";
    }
  } catch (error) {
    // Code contains an error
    return "There was an error in your code. Please check and try again.";
  }
}
export const script = [
  {
    id: "BOT/intro",
    message: "Hello Learner!",
    trigger: "CHOICES/intro"
  },
  {
    id: "CHOICES/intro",
    options: [
      { label: "js basic", trigger: "JS_BASIC" },
      // { label: "js dom", trigger: "JS_DOM" },
    ]
  },
  // Add more steps for "js dom" or other choices if needed

  // JavaScript Basic
  {
    id: "JS_BASIC",
    message: "Great choice! Let's start with JavaScript Basics.",
    trigger: "JS_VARIABLES"
  },
  {
    id: "JS_VARIABLES",
    message: "JavaScript Variables:\n\nNow, let's watch a video tutorial on JavaScript Variables:",
    trigger: "SHOW_VIDEO"
  },
  {
    id: "SHOW_VIDEO",
    component: (
      <div>
        <iframe
          width="200"
          height="200"
          src="https://www.youtube.com/embed/HRBNeERE5PU"
          title="JavaScript Variables Tutorial"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    ),
    asMessage: true,
    trigger: "MCQ_VARIABLES"
  },
  {
    id: "MCQ_VARIABLES",
    message: "What is a variable in JavaScript?",
    trigger: "CHOICES/variables"
  },
  {
    id: "CHOICES/variables",
    options: [
      { label: "A. A container for storing data values.", trigger: "CORRECT_ANSWER" },
      { label: "B. A type of loop.", trigger: "INCORRECT_ANSWER" },
      { label: "C. A function in JavaScript.", trigger: "INCORRECT_ANSWER" }
    ]
  },
  {
    id: "CORRECT_ANSWER",
    message: "Correct! A variable in JavaScript is a container for storing data values.",
    trigger: "CODING_CHALLENGE"
  },
  {
    id: "INCORRECT_ANSWER",
    message: "That's not correct. Try again.",
    trigger: "MCQ_VARIABLES"
  },
  {
    id: "CODING_CHALLENGE",
    component: (
      <CodeEditor
        question="Write a JavaScript function to add two numbers."
        onCodeSubmit={evaluateUserCode}
      />
    ),
    trigger: "FINISH_JS_BASIC",
  },  
  {
    id: "FINISH_JS_BASIC",
    message: "Well done! You've completed the JavaScript Basics section.",
    trigger: "BOT/intro" // You can redirect the user to the main menu or any other part of the conversation
  },

  // Add more steps for other topics or choices as needed

  // JavaScript DOM (if selected)
  // ... (similar steps for JavaScript DOM)
];