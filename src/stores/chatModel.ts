import { atom } from 'jotai';
import { ChatModelType } from '../entities/chat';

export const chatModelAtom = atom<ChatModelType>({
  chat_model_id: '',
  chat_model_name: '',
});
