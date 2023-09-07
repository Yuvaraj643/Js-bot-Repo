import React, { useState } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';

// Import the necessary CodeMirror styles and modes
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';

const CodeEditor = ({ question, onCodeSubmit }) => {
  const [code, setCode] = useState('function add(a, b) {\n  // Your code here\n}\n');

  const handleChange = (editor, data, value) => {
    setCode(value);
  };

  const handleRunCode = () => {
    // Call the evaluation function with the user's code
    onCodeSubmit(code);
  };

  return (
    <div>
      <div>
        <p>{question}</p>
      </div>
      <CodeMirror
        value={code}
        options={{
          mode: 'javascript',
          theme: 'material',
          lineNumbers: true,
        }}
        onBeforeChange={(editor, data, value) => {
          handleChange(editor, data, value);
        }}
      />
      <button onClick={handleRunCode}>Submit</button>
    </div>
  );
};

export default CodeEditor;
