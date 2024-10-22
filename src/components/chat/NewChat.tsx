import { useAtom, useSetAtom } from 'jotai';
import { currentChatIdAtom } from '../../stores/currentChatId';
import { chatModelAtom } from '../../stores/chatModel';
import { chatRoomListAtom } from '../../stores/chatRoomList';
import { typedPost } from '../../apis';
import { ChatType } from '../../entities/chat';

const NewChat = () => {
  const [chatModel, setChatModel] = useAtom(chatModelAtom);
  const setCurrentChat = useSetAtom(currentChatIdAtom);
  const setChatRoomList = useSetAtom(chatRoomListAtom);

  const createNewRoom = async () => {
    const response = await typedPost<{ data: ChatType[] }>('/chats', {
      chat_model_id: chatModel.chat_model_id,
    });
    setChatRoomList(response.data);
    setCurrentChat(response.data.at(-1)?.chat_id ?? '');
  };

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
