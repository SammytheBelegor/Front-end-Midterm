import React, { useState } from 'react';

const TextArea = () => {
  const [text, setText] = useState('');
  const [textSize, setTextSize] = useState('16px');
  const [textFont, setTextFont] = useState('Arial');
  const [textColor, setTextColor] = useState('black');

  const handleInputChange = (e) => {
    const inputValue = e.target.value;

    // You can customize the text size, font, and color based on user input
    // For example, change text size, font, and color dynamically
    // You can add your logic to change these properties as needed

    // Example: Keep text size relatively consistent
    const newTextSize = '16px';

    // Example: Change text font randomly
    const fonts = ['Arial', 'Helvetica', 'Verdana', 'Georgia', 'Times New Roman'];
    const newTextFont = fonts[Math.floor(Math.random() * fonts.length)];

    // Example: Change text color randomly
    const colors = ['red', 'blue', 'green', 'orange', 'purple'];
    const newTextColor = colors[Math.floor(Math.random() * colors.length)];

    setText(inputValue);
    setTextSize(newTextSize);
    setTextFont(newTextFont);
    setTextColor(newTextColor);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <textarea
        rows="4"
        cols="50"
        placeholder="Type something..."
        onChange={handleInputChange}
        style={{
          color: textColor,
          fontSize: textSize,
          fontFamily: textFont,
        }}
        value={text}
      />
    </div>
  );
};

export default TextArea;
