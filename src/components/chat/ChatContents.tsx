import ChatHistory from './ChatHistory';
import ChatInput from './ChatInput';
import NewChat from './NewChat';
import SelectChatModel from './SelectChatModel';

const ChatContents = () => {
  return (
    <div className="relative flex flex-col justify-between w-full pb-0">
      <div className="w-full h-full">
        <div className="absolute flex items-center justify-between w-full pr-4 top-4">
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
