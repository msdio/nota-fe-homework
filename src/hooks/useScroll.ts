import { RefObject, useState } from 'react';

const useScroll = (ref: RefObject<HTMLElement>) => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  ref.current?.addEventListener('scroll', () => {
    const { scrollHeight, scrollTop, clientHeight } = ref.current!;
    setIsAtBottom(scrollHeight - scrollTop <= clientHeight);
  });

  const scrollToBottom = () => {
    if (!ref.current) return;

    ref.current.scrollTo({
      top: ref.current.scrollHeight,
      behavior: 'smooth',
    });
  };

  return { isAtBottom, scrollToBottom };
};

export default useScroll;
