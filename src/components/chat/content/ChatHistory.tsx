import { useAtomValue } from 'jotai';
import { currentChatIdAtom } from '../../../stores/currentChatId';
import { useCallback, useEffect, useRef, useState } from 'react';
import { typedGet } from '../../../apis';
import { ChatType, DialogueType } from '../../../entities/chat';
import DownChevron from '../../../icons/DownChevron';
import useScroll from '../../../hooks/useScroll';
import ChatItem from './ChatItem';

const ChatHistory = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const chatId = useAtomValue(currentChatIdAtom);
  const { isAtBottom, scrollToBottom } = useScroll(containerRef);

  const [chatHistory, setChatHistory] = useState<DialogueType[]>([]);

  const getChatHistory = useCallback(async () => {
    const response = await typedGet<{ data: ChatType }>(`/chats/${chatId}`);
    setChatHistory(response.data.dialogues);
  }, [chatId]);

  useEffect(() => {
    if (chatId) {
      getChatHistory();
    }
  }, [chatId, getChatHistory]);

  if (!chatId) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        Select Chat room to start chatting!
      </div>
    );
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
