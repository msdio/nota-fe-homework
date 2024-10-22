import { useAtom } from 'jotai';
import { currentChatIdAtom } from '../../stores/currentChatId';
import { useMemo } from 'react';

type Props = {
  chatId: string;
  title: string;
};

const ChatRoomListItem = ({ chatId, title }: Props) => {
  const [currentChatId, setCurrentChatId] = useAtom(currentChatIdAtom);

  const isSelected = useMemo(() => currentChatId === chatId, [chatId, currentChatId]);

  return (
    <div
      className={
        isSelected ? 'w-full p-4 bg-[#00cee6] text-white' : 'w-full p-4 hover:bg-[#c9f3f8]'
      }
      role="button"
      title={title}
      onClick={() => setCurrentChatId(chatId)}
    >
      <p className="overflow-hidden text-ellipsis whitespace-nowrap">{title}</p>
    </div>
  );
};

export default ChatRoomListItem;
