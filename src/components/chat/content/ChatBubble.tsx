import ThreeDotsLoading from '../../../icons/ThreeDotsLoading';

type Props = {
  chat: string;
};

const ChatBubble = ({ chat }: Props) => {
  console.log('bubble input', chat, chat.length);

  return (
    <div className="px-4 py-2 border border-gray-200 rounded-xl max-w-80 text-pretty">
      {chat.length ? <p>{chat}</p> : <ThreeDotsLoading />}
    </div>
  );
};

export default ChatBubble;
