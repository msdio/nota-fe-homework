import { useAtomValue, useAtom } from 'jotai';
import { chatHistoryAtom } from '../../../stores/chatHistory';
import { currentChatIdAtom } from '../../../stores/currentChatId';
import ChatInput from '../ChatInput';
import NewChat from '../NewChat';
import SelectChatModel from '../SelectChatModel';
import ChatHistory from './ChatHistory';
import { useCallback, useEffect, useState } from 'react';
import { typedGet } from '../../../apis';
import { ChatType } from '../../../entities/chat';

const ChatContents = () => {
  const chatId = useAtomValue(currentChatIdAtom);
  const [chatHistory, setChatHistory] = useAtom(chatHistoryAtom);

  const [isLoading, setIsLoading] = useState(false);

  const getChatHistory = useCallback(async () => {
    setIsLoading(true);

    const response = await typedGet<{ data: ChatType }>(`/chats/${chatId}`);
    setChatHistory(response.data.dialogues);

    setIsLoading(false);
  }, [chatId, setChatHistory]);

  useEffect(() => {
    if (chatId) {
      getChatHistory();
    }
  }, [chatId, getChatHistory]);

  return (
    <div className="relative flex flex-col justify-between w-full pb-0">
      <div className="w-full h-full">
        <div className="absolute flex items-center justify-between w-full pr-4 top-4">
          <SelectChatModel />
          <NewChat />
        </div>

        <ChatHistory chatHistory={chatHistory} isLoading={isLoading} />
      </div>

      <ChatInput />
    </div>
  );
};

export default ChatContents;
