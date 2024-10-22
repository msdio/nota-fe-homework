import { useState } from 'react';

const ChatInput = () => {
  const [input, setInput] = useState('');

  return (
    <form
      className="absolute bottom-0 flex justify-between w-full gap-4 pr-4"
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
        className="w-full p-2 text-sm border border-gray-400 rounded-md resize-none"
      />

      <button type="submit" className="px-4 py-2 border border-gray-300 whitespace-nowrap h-fit">
        제출
      </button>
    </form>
  );
};

export default ChatInput;
