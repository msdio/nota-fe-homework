import { useAtomValue, useSetAtom } from 'jotai';
import { useEffect, useRef, useState } from 'react';
import { currentChatIdAtom } from '../../stores/currentChatId';
import { chatModelAtom } from '../../stores/chatModel';
import { chatRoomListAtom } from '../../stores/chatRoomList';
import { typedPost } from '../../apis';
import { ChatType, DialogueType } from '../../entities/chat';
import { chatHistoryAtom } from '../../stores/chatHistory';

type Props = {
  setChatHistory: (value: DialogueType[]) => void;
};
const ChatInput = ({ setChatHistory }: Props) => {
  const formRef = useRef<HTMLFormElement>(null);

  const currentChatId = useAtomValue(currentChatIdAtom);
  const chatModel = useAtomValue(chatModelAtom);
  const setChatRoomList = useSetAtom(chatRoomListAtom);

  const [input, setInput] = useState('');

  useEffect(() => {
    setInput('');
  }, [currentChatId]);

  const sendMessage = async () => {
    if (input) {
      setChatRoomList((prev) => [
        ...prev.filter((chat) => chat.chat_id !== currentChatId),
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
      ]);

      setChatHistory((prev: DialogueType[]) => [
        ...prev,
        {
          dialogue_id: new Date().toString(),
          prompt: input,
          completion: '',
        },
      ]);

      try {
        const response = await typedPost<{ data: ChatType }>(`/chats/${currentChatId}/dialogues`, {
          prompt: input,
        });

        setChatRoomList((prev) => [
          ...prev.filter((chat) => chat.chat_id !== currentChatId),
          response.data,
        ]);
        setChatHistory((prev: DialogueType[]) => prev.filter((chat) => chat.dialogue_id));

        setInput('');
      } catch (error) {
        console.error(error);
      }
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
        onChange={(e) => setInput(e.currentTarget.value)}
        onKeyDown={(e) => {
          if (e.metaKey && e.key === 'Enter') {
            formRef.current?.submit();
          }
        }}
        rows={3}
        className="w-full p-2 text-sm border border-gray-400 rounded-md resize-none"
        disabled={!chatModel.chat_model_id}
      />

      <button
        type="submit"
        className="px-4 py-2 border border-gray-300 whitespace-nowrap h-fit disabled:bg-gray-400"
        disabled={!chatModel.chat_model_id}
      >
        제출
      </button>
    </form>
  );
};

export default ChatInput;
