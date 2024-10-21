import ChatHistory from './ChatHistory';
import ChatInput from './ChatInput';
import NewChat from './NewChat';
import SelectChatModel from './SelectChatModel';

const ChatContents = () => {
  return (
    <div className="w-full h-full p-4 relative flex flex-col justify-between">
      <div className="w-full h-full">
        <div className="w-full flex items-center justify-between">
          <SelectChatModel />
          <NewChat />
        </div>
        <ChatHistory />
      </div>

      <ChatInput />
    </div>
  );
};

export default ChatContents;
