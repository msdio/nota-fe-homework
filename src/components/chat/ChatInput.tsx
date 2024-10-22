import { useAtomValue } from 'jotai';
import { useEffect, useState } from 'react';
import { currentChatIdAtom } from '../../stores/currentChatId';

const ChatInput = () => {
  const currentChatId = useAtomValue(currentChatIdAtom);

  const [input, setInput] = useState('');

  useEffect(() => {
    setInput('');
  }, [currentChatId]);

  return (
    <form
      className="absolute bottom-0 flex justify-between w-full gap-4"
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
