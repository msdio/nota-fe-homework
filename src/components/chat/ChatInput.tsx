import { useState } from 'react';

const ChatInput = () => {
  const [input, setInput] = useState('');

  return (
    <form
      className="flex gap-4 justify-between w-full shrink-0"
      onSubmit={(e) => {
        e.preventDefault();
        console.log('submit');
      }}
    >
      <textarea
        name="chat-input"
        id="chat-input"
        value={input}
        onChange={(e) => setInput(e.currentTarget.value)}
        rows={3}
        className="resize-none w-full border border-gray-400 rounded-md text-sm p-2"
      />

      <button type="submit" className="py-2 px-4 border border-gray-300 whitespace-nowrap h-fit">
        제출
      </button>
    </form>
  );
};

export default ChatInput;
