import { useAtomValue } from 'jotai';
import { currentChatIdAtom } from '../../../stores/currentChatId';
import { useEffect, useRef } from 'react';
import { DialogueType } from '../../../entities/chat';
import DownChevron from '../../../icons/DownChevron';
import useScroll from '../../../hooks/useScroll';
import ChatItem from './ChatItem';

type Props = {
  chatHistory: DialogueType[];
  isLoading: boolean;
};
const ChatHistory = ({ chatHistory, isLoading }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const chatId = useAtomValue(currentChatIdAtom);

  const { isAtBottom, scrollToBottom } = useScroll(containerRef);

  useEffect(() => {
    if (chatHistory.length) {
      scrollToBottom();
    }
  }, [chatHistory]);

  if (!chatId) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        Select chat room or click new button to start chatting.
      </div>
    );
  }

  if (isLoading) {
    return <div className="flex items-center justify-center w-full h-full">Loading...</div>;
  }

  return (
    <>
      <div
        ref={containerRef}
        className="flex flex-col gap-8 mt-14 max-h-[calc(100%-3.5rem-5rem)] py-4 overflow-y-auto"
      >
        {chatHistory.map((chat) => (
          <ChatItem key={chat.dialogue_id} sent={chat.prompt} received={chat.completion} />
        ))}
      </div>

      <button
        type="button"
        className={
          isAtBottom
            ? 'hidden'
            : 'absolute flex items-center justify-center w-10 h-10 bg-white border border-gray-300 rounded-full shadow-2xl shadow-gray-300 right-8 bottom-24'
        }
        onClick={scrollToBottom}
      >
        <DownChevron />
      </button>
    </>
  );
};

export default ChatHistory;
