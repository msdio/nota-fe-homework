import { useSetAtom } from 'jotai';
import { currentChatIdAtom } from '../../stores/currentChatId';

const NewChat = () => {
  const setCurrentChat = useSetAtom(currentChatIdAtom);

  const onClickNewButton = () => {
    setCurrentChat('');
  };

  return (
    <button
      type="button"
      onClick={onClickNewButton}
      className="py-2 px-6 bg-gray-200 rounded hover:bg-gray-300"
    >
      New
    </button>
  );
};

export default NewChat;
