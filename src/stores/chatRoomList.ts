import { atom } from 'jotai';
import { ChatType } from '../entities/chat';

export const chatRoomListAtom = atom<ChatType[]>([]);
