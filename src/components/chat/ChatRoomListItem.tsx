import { useSetAtom } from 'jotai';
import { currentChatIdAtom } from '../../stores/currentChatId';

type Props = {
  chatId: string;
  title: string;
};

const ChatRoomListItem = ({ chatId, title }: Props) => {
  const setCurrentChatId = useSetAtom(currentChatIdAtom);

  return (
    <div
      className="w-full p-4 hover:bg-[#00cee6] hover:text-white"
      role="button"
      title={title}
      onClick={() => setCurrentChatId(chatId)}
    >
      <p className="text-ellipsis overflow-hidden whitespace-nowrap">{title}</p>
    </div>
  );
};

export default ChatRoomListItem;
