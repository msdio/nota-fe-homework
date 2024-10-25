import { atom } from 'jotai';
import { ChatModelType } from '../entities/chat';

export const chatModelList = atom<ChatModelType[]>([]);
