import { useAtom } from 'jotai';
import { chatModelAtom } from '../../stores/chatModel';
import { useCallback, useEffect, useState } from 'react';
import { ChatModelType } from '../../entities/chat';
import { typedGet } from '../../apis';

const SelectChatModel = () => {
  const [selectedModel, setSelectedModel] = useAtom(chatModelAtom);

  const [models, setModels] = useState<ChatModelType[]>([]);

  const getChatModelList = useCallback(async () => {
    const response = await typedGet<{ data: ChatModelType[] }>('/chat_model');
    setModels(response.data);
    setSelectedModel(response.data[0]);
  }, [setModels, setSelectedModel]);

  useEffect(() => {
    getChatModelList();
  }, [getChatModelList]);

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
      className="p-2 bg-gray-200 rounded-md outline-none w-fit"
      value={selectedModel.chat_model_id}
      onChange={(e) => onSelectModel(e.currentTarget.value)}
    >
      <option value="">모델을 선택해 주세요.</option>
      {models.map((model) => (
        <option key={model.chat_model_id} value={model.chat_model_id}>
          {model.chat_model_name}
        </option>
      ))}
    </select>
  );
};

export default SelectChatModel;
