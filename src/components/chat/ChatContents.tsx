import ChatHistory from './ChatHistory';
import ChatInput from './ChatInput';
import SelectChatModel from './SelectChatModel';

const ChatContents = () => {
  return (
    <div className="w-full h-full p-4 relative flex flex-col justify-between">
      <div className="w-full h-full">
        <SelectChatModel />
        <ChatHistory />
      </div>

      <ChatInput />
    </div>
  );
};

export default ChatContents;
