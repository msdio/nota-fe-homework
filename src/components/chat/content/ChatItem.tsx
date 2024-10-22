import ChatBubble from "./ChatBubble";

type Props = {
  sent: string;
  received: string;
};
const ChatItem = ({ sent, received }: Props) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="self-end">
        <SentChat chat={sent} />
      </div>
      <div>
        <ReceivedChat chat={received} />
      </div>
    </div>
  );
};

export default ChatItem;

type SentChatProps = {
  chat: string;
};
const SentChat = ({ chat }: SentChatProps) => {
  return (
    <div className="flex items-center gap-4">
      <ChatBubble chat={chat} />
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100">Me</div>
    </div>
  );
};

type ReceivedChatProps = {
  chat: string;
};

const ReceivedChat = ({ chat }: ReceivedChatProps) => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100">N</div>
      <ChatBubble chat={chat} />
    </div>
  );
};
