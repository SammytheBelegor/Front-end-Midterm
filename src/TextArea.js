import React, { useState } from 'react';

const TextArea = () => {
  const [text, setText] = useState('');
  const [textColor, setTextColor] = useState('black');

  const handleInputChange = (e) => {
    const inputValue = e.target.value;

    // Add your creative effect or encoding logic here
    // For example, reversing the input text
    const reversedText = inputValue.split('').reverse().join('');

    // Add an effect to change the text color
    const colors = ['red', 'blue', 'green', 'orange', 'purple'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    setText(reversedText);
    setTextColor(randomColor);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <textarea
        rows="4"
        cols="50"
        placeholder="Type something..."
        onChange={handleInputChange}
        style={{ color: textColor }}
        value={text}
      />
    </div>
  );
};

export default TextArea;
