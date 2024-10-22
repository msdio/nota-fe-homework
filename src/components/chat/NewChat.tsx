import { useSetAtom } from 'jotai';
import { currentChatIdAtom } from '../../stores/currentChatId';
import { chatModelAtom } from '../../stores/chatModel';

const NewChat = () => {
  const setCurrentChat = useSetAtom(currentChatIdAtom);
  const setChatModel = useSetAtom(chatModelAtom);

  const onClickNewButton = () => {
    setCurrentChat('');
    setChatModel({ chat_model_id: '', chat_model_name: '' });
  };

  return (
    <button
      type="button"
      onClick={onClickNewButton}
      className="px-6 py-2 bg-gray-200 rounded hover:bg-gray-300"
    >
      New
    </button>
  );
};

export default NewChat;
