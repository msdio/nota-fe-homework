type Props = {
  chat: string;
};

const ChatBubble = ({ chat }: Props) => {
  return (
    <div className="px-4 py-2 border border-gray-200 rounded-xl max-w-80 text-pretty">{chat}</div>
  );
};

export default ChatBubble;
