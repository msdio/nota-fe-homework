import { useCallback, useEffect } from 'react';
import ChatRoomListItem from './ChatRoomListItem';
import { ChatType } from '../../../entities/chat';
import { typedGet } from '../../../apis';
import { useAtom } from 'jotai';
import { chatRoomListAtom } from '../../../stores/chatRoomList';

const ChatRoomList = () => {
  const [chatRooms, setChatRooms] = useAtom(chatRoomListAtom);

  const getChatRooms = useCallback(async () => {
    const response = await typedGet<{ data: ChatType[] }>('/chats');

    setChatRooms(response.data);
  }, [setChatRooms]);

  useEffect(() => {
    getChatRooms();
  }, [getChatRooms]);

  return (
    <div className="w-48 h-full overflow-y-auto rounded-md shadow-md bg-gray-50 shrink-0">
      {chatRooms.map((chatRoom) => (
        <ChatRoomListItem
          key={chatRoom.chat_id}
          chatId={chatRoom.chat_id}
          title={chatRoom.dialogues[0]?.prompt}
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
