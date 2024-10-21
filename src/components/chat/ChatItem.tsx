import ChatBubble from './ChatBubble';

type Props = {
  chat: string;
  sender: string;
};
const ChatItem = ({ chat, sender }: Props) => {
  if (sender === 'me') {
    return (
      <div className="self-end">
        <SentChat chat={chat} />
      </div>
    );
  } else {
    return (
      <div>
        <ReceivedChat chat={chat} />
      </div>
    );
  }
};

export default ChatItem;

type SentChatProps = {
  chat: string;
};
const SentChat = ({ chat }: SentChatProps) => {
  return (
    <div className="flex items-center gap-4">
      <ChatBubble chat={chat} />
      <div className="flex items-center justify-center rounded-full bg-slate-100 w-10 h-10">Me</div>
    </div>
  );
};

type ReceivedChatProps = {
  chat: string;
};

const ReceivedChat = ({ chat }: ReceivedChatProps) => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center justify-center rounded-full bg-slate-100 w-10 h-10">N</div>
      <ChatBubble chat={chat} />
    </div>
  );
};
