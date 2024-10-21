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
      <div className="w-full h-full flex items-center justify-center">
        Select Chat room to start chatting!
      </div>
    );
  }

  return (
    <div className="py-4 pl-1 h-full w-full flex flex-col gap-8">
      {chatHistory.map((chat) => (
        <ChatItem
          key={chat.dialogue_id}
          chat={chat.completion}
          sender={chat.dialogue_id ? 'AI' : 'me'}
        />
      ))}
    </div>
  );
};

export default ChatHistory;
