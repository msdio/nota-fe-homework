import ChatContents from '../components/chat/ChatContents';
import ChatRoomList from '../components/chat/ChatRoomList';

const Chat = () => {
  return (
    <div className="flex gap-4 w-full h-screen p-4 bg-white">
      <ChatRoomList />

      <ChatContents />
    </div>
  );
};

export default Chat;
