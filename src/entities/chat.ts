export type DialogueType = {
  dialogue_id: string;
  prompt: string;
  completion: string;
};

export type ChatType = {
  chat_model_id: string;
  chat_model_name: string;
  chat_id: string;
  dialogues: DialogueType[];
};

export type ChatModelType = {
  chat_model_id: string;
  chat_model_name: string;
};
