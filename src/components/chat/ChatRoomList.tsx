import { CHATS } from '../../mock/data';
import ChatRoomListItem from './ChatRoomListItem';

const ChatRoomList = () => {
  const chatRooms = CHATS;

  return (
    <div className="w-40 h-full shadow-md rounded-md overflow-hidden bg-gray-50 shrink-0">
      {chatRooms.map((chatRoom) => (
        <ChatRoomListItem
          key={chatRoom.chat_id}
          chatId={chatRoom.chat_id}
          title={chatRoom.dialogues.at(-1)?.prompt ?? ''}
        />
      ))}
    </div>
  );
};

export default ChatRoomList;
