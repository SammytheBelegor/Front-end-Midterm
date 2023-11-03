import React, { useState } from 'react';

const TextArea = () => {
  const [text, setText] = useState('');
<<<<<<< HEAD
=======
  const [textSize, setTextSize] = useState('16px');
  const [textFont, setTextFont] = useState('Arial');
>>>>>>> 8526c57 (Second Commit)
  const [textColor, setTextColor] = useState('black');

  const handleInputChange = (e) => {
    const inputValue = e.target.value;

<<<<<<< HEAD
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
=======
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
>>>>>>> 8526c57 (Second Commit)
      <textarea
        rows="4"
        cols="50"
        placeholder="Type something..."
        onChange={handleInputChange}
<<<<<<< HEAD
        style={{ color: textColor }}
=======
        style={{
          color: textColor,
          fontSize: textSize,
          fontFamily: textFont,
        }}
>>>>>>> 8526c57 (Second Commit)
        value={text}
      />
    </div>
  );
};

export default TextArea;
