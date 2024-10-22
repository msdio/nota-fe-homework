import ChatContents from '../components/chat/content/ChatContents';
import ChatRoomList from '../components/chat/list/ChatRoomList';

const Chat = () => {
  return (
    <div className="flex w-full h-screen gap-4 p-4 bg-white">
      <ChatRoomList />

      <ChatContents />
    </div>
  );
};

export default Chat;
