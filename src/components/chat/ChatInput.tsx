import { useAtomValue, useSetAtom } from 'jotai';
import { KeyboardEvent, useEffect, useMemo, useRef, useState } from 'react';
import { currentChatIdAtom } from '../../stores/currentChatId';
import { chatModelAtom } from '../../stores/chatModel';
import { chatRoomListAtom } from '../../stores/chatRoomList';
import { typedPost } from '../../apis';
import { ChatType, DialogueType } from '../../entities/chat';
import { chatHistoryAtom } from '../../stores/chatHistory';

const ChatInput = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const setChatHistory = useSetAtom(chatHistoryAtom);

  const currentChatId = useAtomValue(currentChatIdAtom);
  const chatModel = useAtomValue(chatModelAtom);
  const setChatRoomList = useSetAtom(chatRoomListAtom);

  const [input, setInput] = useState('');

  const isNewChat = useMemo(() => {
    return currentChatId.includes('-');
  }, [currentChatId]);

  useEffect(() => {
    if (isNewChat) {
      setInput('');
    }
  }, [currentChatId, isNewChat]);

  const createNewChatRoom = () => {
    setChatRoomList((prev) => [
      {
        chat_id: currentChatId,
        chat_model_id: chatModel.chat_model_id,
        chat_model_name: chatModel.chat_model_name,
        dialogues: [
          {
            dialogue_id: new Date().toString(),
            prompt: input,
            completion: '',
          },
        ],
      },
      ...prev.filter((chat) => chat.chat_id !== currentChatId),
    ]);
  };

  const createNewChat = () => {
    setChatHistory((prev: DialogueType[]) => [
      ...prev,
      {
        dialogue_id: new Date().toString(),
        prompt: input,
        completion: '',
      },
    ]);
  };

  const sendMessage = async () => {
    if (input && currentChatId) {
      createNewChatRoom();
      createNewChat();

      setInput('');

      try {
        const response = await typedPost<{ data: ChatType }>(`/chats/${currentChatId}/dialogues`, {
          prompt: input,
        });

        setChatRoomList((prev) => [
          response.data,
          ...prev.filter((chat) => chat.chat_id !== currentChatId),
        ]);
        setChatHistory(response.data.dialogues);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const onKeyDown = async (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if ((e.metaKey && e.key === 'Enter') || (e.ctrlKey && e.key === 'Enter')) {
      await sendMessage();
    }
  };

  return (
    <form
      ref={formRef}
      className="absolute bottom-0 flex justify-between w-full gap-4"
      onSubmit={async (e) => {
        e.preventDefault();
        await sendMessage();
      }}
    >
      <textarea
        name="chat-input"
        id="chat-input"
        value={input}
        placeholder="ctrl + Enter 또는 cmd + Enter를 눌러 제출할 수 있어요."
        onChange={(e) => setInput(e.currentTarget.value)}
        onKeyDown={onKeyDown}
        rows={3}
        className="w-full p-2 text-sm border border-gray-400 rounded-md resize-none"
        disabled={!chatModel.chat_model_id || !currentChatId}
      />

      <button
        type="submit"
        className="px-4 py-2 border border-gray-300 whitespace-nowrap h-fit disabled:bg-gray-400"
        disabled={!chatModel.chat_model_id || !currentChatId}
      >
        제출
      </button>
    </form>
  );
};

export default ChatInput;
