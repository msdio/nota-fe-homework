import { useAtom, useSetAtom } from 'jotai';
import { currentChatIdAtom } from '../../../stores/currentChatId';
import { useMemo } from 'react';
import { chatModelAtom } from '../../../stores/chatModel';

type Props = {
  chatId: string;
  title?: string;
  model: {
    chat_model_id: string;
    chat_model_name: string;
  };
};

const ChatRoomListItem = ({ chatId, title, model }: Props) => {
  const [currentChatId, setCurrentChatId] = useAtom(currentChatIdAtom);
  const setChatModel = useSetAtom(chatModelAtom);

  const isSelected = useMemo(() => currentChatId === chatId, [chatId, currentChatId]);

  if (!title) {
    return null;
  }

  return (
    <div
      className={
        isSelected ? 'w-full p-4 bg-[#00cee6] text-white' : 'w-full p-4 hover:bg-[#c9f3f8]'
      }
      role="button"
      title={title}
      onClick={() => {
        setCurrentChatId(chatId);
        setChatModel(model);
      }}
    >
      <p className="overflow-hidden text-base text-ellipsis whitespace-nowrap">{title}</p>
      <p className="mt-2 text-xs text-right whitespace-nowrap">{model.chat_model_name}</p>
    </div>
  );
};

export default ChatRoomListItem;
