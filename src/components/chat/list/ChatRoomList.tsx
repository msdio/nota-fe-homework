import { useEffect, useState } from 'react';
import ChatRoomListItem from './ChatRoomListItem';
import { ChatType } from '../../../entities/chat';
import { typedGet } from '../../../apis';

const ChatRoomList = () => {
  const [chatRooms, setChatRooms] = useState<ChatType[]>([]);

  const getChatRooms = async () => {
    const response = await typedGet<{ data: ChatType[] }>('/chats');
    setChatRooms(response.data);
  };

  useEffect(() => {
    getChatRooms();
  }, []);

  return (
    <div className="w-40 h-full overflow-hidden rounded-md shadow-md bg-gray-50 shrink-0">
      {chatRooms.map((chatRoom) => (
        <ChatRoomListItem
          key={chatRoom.chat_id}
          chatId={chatRoom.chat_id}
          title={chatRoom.dialogues[0].prompt ?? ''}
          model={{
            chat_model_id: chatRoom.chat_model_id,
            chat_model_name: chatRoom.chat_model_name,
          }}
        />
      ))}
    </div>
  );
};

export default ChatRoomList;
