import React, { useState, useEffect } from 'react';
import './TypingEffectTitle.scss';

interface TypingEffectTitleProps {
  messages: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenMessages?: number;
}

const TypingEffectTitle: React.FC<TypingEffectTitleProps> = ({
  messages,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenMessages = 1500,
}) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingPause, setTypingPause] = useState(delayBetweenMessages);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleTyping = () => {
      const fullText = messages[currentMessageIndex];

      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === fullText) {
        // Pause at end of typing
        setTypingPause(delayBetweenMessages);
        setIsDeleting(true);
      } else if (isDeleting && currentText === '') {
        // Pause at end of deleting, move to next message
        setIsDeleting(false);
        setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
        setTypingPause(100); // Short pause before typing next message
      }
    };

    timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed + typingPause
    );

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentMessageIndex, typingPause, messages, typingSpeed, deletingSpeed, delayBetweenMessages]);

  return (
    <span className="typing-effect-title">
      {currentText}
      <span className="typing-cursor"></span>
    </span>
  );
};

export default TypingEffectTitle;
