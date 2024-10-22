import { useAtom } from 'jotai';
import { chatModelAtom } from '../../stores/chatModel';
import { useEffect, useState } from 'react';
import { ChatModelType } from '../../entities/chat';
import { typedGet } from '../../apis';

const SelectChatModel = () => {
  const [selectedModel, setSelectedModel] = useAtom(chatModelAtom);

  const [models, setModels] = useState<ChatModelType[]>([]);

  const getChatModelList = async () => {
    const response = await typedGet<{ data: ChatModelType[] }>('/chat_model');
    setModels(response.data);
    setSelectedModel(response.data[0]);
  };

  useEffect(() => {
    getChatModelList();
  }, []);

  const onSelectModel = (modelId: string) => {
    const selected = models.find((model) => model.chat_model_id === modelId);

    if (selected) {
      setSelectedModel(selected);
    }
  };

  return (
    <select
      name="chat-model"
      id="chat-model"
      className="w-fit"
      value={selectedModel.chat_model_id}
      onChange={(e) => onSelectModel(e.currentTarget.value)}
    >
      {models.map((model) => (
        <option key={model.chat_model_id} value={model.chat_model_id}>
          {model.chat_model_name}
        </option>
      ))}
    </select>
  );
};

export default SelectChatModel;
