import { atom } from 'jotai';
import { ChatType } from '../entities/chat';

export const chatHistoryAtom = atom<ChatType['dialogues']>([]);
