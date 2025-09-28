import React, { useState, useEffect } from 'react';
import './TypingEffectTitle.scss';

interface TypingEffectTitleProps {
  messages: string[];
  typingSpeed?: number;
  delayBetweenMessages?: number;
}

const TypingEffectTitle: React.FC<TypingEffectTitleProps> = ({
  messages,
  typingSpeed = 60,
  delayBetweenMessages = 1500,
}) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isTyping) {
      if (currentText.length < messages[currentMessageIndex].length) {
        timer = setTimeout(() => {
          setCurrentText(messages[currentMessageIndex].slice(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        // Pause after full message typed
        timer = setTimeout(() => {
          setIsTyping(false);
        }, delayBetweenMessages);
      }
    } else {
      // Move to next message after pause
      timer = setTimeout(() => {
        setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
        setCurrentText('');
        setIsTyping(true);
      }, 500); // Short break before next message starts typing
    }

    return () => clearTimeout(timer);
  }, [currentText, isTyping, currentMessageIndex, messages, typingSpeed, delayBetweenMessages]);

  return (
    <span className="typing-effect-title">
      {currentText}
      <span className="typing-cursor">|</span>
    </span>
  );
};

export default TypingEffectTitle;
