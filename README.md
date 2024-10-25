## 과제 추가 안내

mock data 내의 타입 중 any, unkown은 의도된 타입선언이며, 데이터에 대한 타입은 직접 선언하여 사용하시기 바랍니다.

## 과제 요구사항

### 1. 채팅 목록

- [x] 진행했던 전체 채팅 목록을 표시해 주세요.
- [x] 현재 선택된 채팅을 확인할 수 있도록 표시 해주세요.
- [x] 채팅 목록에는 대화의 첫 질문 내용과 채팅에서 사용한 모델명을 표시 해주세요.
- [x] 채팅 목록에는 스크롤 처리를 해 주세요.
- [x] New 버튼 클릭 시 우측 채팅내역이 초기화되며, 현재 선택된 채팅이 비활성화됩니다.

### 2. 현재 채팅

- [x] 모델을 선택하기 이전에는 입력란, 제출버튼이 비활성화되어야 합니다.
- [x] 모델 목록을 불러오는 과정의 로딩 처리가 필요하며, 모델의 초기값은 불러온 모델 목록의 첫 번째 모델입니다.
- [x] 모델을 변경하면 입력란, 채팅 내역 그리고 사이드의 현재 선택된 채팅도 초기화 되어야 합니다.
- [x] 채팅목록에 새로운 채팅이 추가되는 시점은 새로운 질문이 제출된 이후입니다.
- [x] 이전 대화내역을 선택한 경우, 채팅 내역을 표시해주며, 모델은 사용했던 모델로 선택되어야 합니다.
- [ ] 채팅 화면에는 로딩 처리가 필요합니다.
- [x] 질문 입력란(Textarea)은 3줄 이상이 될 경우에만 스크롤 추가 해주세요.
- [x] 채팅 내역은 위에서부터 쌓이기 시작하며 길어질 경우 스크롤을 추가해 주세요.
- [x] 스크롤이 최하단에서 벗어난 경우 최하단으로 이동할 수 있는 버튼이 추가로 나타나며, 클릭 시 스크롤 최하단으로 이동합니다.
  - 해당 작업을 위해, 스크롤 이벤트를 감지하는 `useScroll` hook을 생성했습니다. 해당 hook은 element에 scroll event listener를 붙여서 현재 스크롤 위치가 가장 하단에 위치해 있는지를 판단하는 `isAtBottom` 변수의 값을 업데이트 하고, 가장 하단으로 스크롤하는 `scrollToBottom` 함수를 관리합니다.
