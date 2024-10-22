import { useAtomValue } from 'jotai';
import { currentChatIdAtom } from '../../stores/currentChatId';
import { useEffect, useState } from 'react';
import { typedGet } from '../../apis';
import { ChatType, DialogueType } from '../../entities/chat';
import ChatItem from './ChatItem';

const ChatHistory = () => {
  const chatId = useAtomValue(currentChatIdAtom);

  const [chatHistory, setChatHistory] = useState<DialogueType[]>([]);

  const getChatHistory = async () => {
    const response = await typedGet<{ data: ChatType }>(`/chats/${chatId}`);
    setChatHistory(response.data.dialogues);
  };

  useEffect(() => {
    if (chatId) {
      getChatHistory();
    }
  }, [chatId]);

  if (!chatId) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        Select Chat room to start chatting!
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full h-full gap-8 py-4 pl-1">
      {chatHistory.map((chat) => (
        <ChatItem key={chat.dialogue_id} sent={chat.prompt} received={chat.completion} />
      ))}
    </div>
  );
};

export default ChatHistory;
