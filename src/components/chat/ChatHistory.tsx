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
    <div className="flex flex-col gap-8 overflow-y-auto mt-14 max-h-[calc(100%-56px-80px)] py-4">
      {chatHistory.map((chat) => (
        <ChatItem key={chat.dialogue_id} sent={chat.prompt} received={chat.completion} />
      ))}
      {chatHistory.map((chat) => (
        <ChatItem key={chat.dialogue_id} sent={chat.prompt} received={chat.completion} />
      ))}
      {chatHistory.map((chat) => (
        <ChatItem key={chat.dialogue_id} sent={chat.prompt} received={chat.completion} />
      ))}
    </div>
  );
};

export default ChatHistory;
