type Props = {
  chat: string;
};

const ChatBubble = ({ chat }: Props) => {
  return <div className="border border-gray-200 rounded-xl py-2 px-4">{chat}</div>;
};

export default ChatBubble;
