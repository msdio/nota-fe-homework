import { useAtomValue, useSetAtom } from 'jotai';
import { currentChatIdAtom } from '../../stores/currentChatId';
import { chatModelAtom } from '../../stores/chatModel';
import { typedPost } from '../../apis';
import { ChatType } from '../../entities/chat';

const NewChat = () => {
  const chatModel = useAtomValue(chatModelAtom);
  const setCurrentChat = useSetAtom(currentChatIdAtom);

  const onClickNewButton = async () => {
    const response = await typedPost<{ data: ChatType[] }>('/chats', {
      chat_model_id: chatModel.chat_model_id,
    });

    setCurrentChat(response.data.at(-1)?.chat_id ?? '');
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
