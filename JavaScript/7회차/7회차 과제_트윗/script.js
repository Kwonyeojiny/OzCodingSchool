/* -----------------------------------------------------------------------------*/
// <요구사항>
// 1. input에 트윗을 입력하고 '게시'버튼을 누르면 트윗이 생성되어야 합니다.
// 2. 생성된 트윗은 게시글, 좋아요 버튼, 좋아요 카운트하는 요소를 포함해야 합니다.
// 3. input에 아무것도 입력되어 있지 않으면 트윗이 생성되지 않아야 합니다. (if문)
// 4. 좋아요 버튼을 클릭하면 좋아요 카운트가 1씩 증가해야 합니다.
// 5. styles.css 파일을 보고 새롭게 생성한 요소에 class를 추가하면 미리 작성해둔 스타일이 적용됩니다.
// 6. 스타일은 마음껏 수정해도 좋습니다.
/* -----------------------------------------------------------------------------*/
// 트윗 게시 버튼 요소
const postTweet = document.querySelector('#postTweet');
postTweet.addEventListener('click', function () {
  // 트윗을 입력할 input 요소
  const tweetInput = document.querySelector('#tweetInput');
  // 트윗이 게시될 컨테이너
  const tweetsContainer = document.querySelector('#tweets_container');

  if (tweetInput.value) {
    const tweetElement = newTweet(tweetInput.value);
    tweetsContainer.appendChild(tweetElement);
    tweetInput.value = ''; // 내용 초기화
  }
});

// 트윗 생성
function newTweet(tweetContext) {
  const newTweet = document.createElement('div');
  newTweet.classList.add('tweet');

  const tweetTextElement = tweetText(tweetContext);
  const { likeBtnElement, likeCounterElement } = likeBtnAndCounter();
  const deleteTweetElement = deleteTweet();

  newTweet.appendChild(tweetTextElement);
  newTweet.appendChild(likeBtnElement);
  newTweet.appendChild(likeCounterElement);
  newTweet.appendChild(deleteTweetElement);

  return newTweet;
}

// 트윗 텍스트
function tweetText(tweetContext) {
  const tweetTextElement = document.createElement('span');
  tweetTextElement.classList.add('tweet-text');
  tweetTextElement.textContent = tweetContext;

  return tweetTextElement;
}

// 트윗 라이크 버튼과 카운터
function likeBtnAndCounter() {
  // 버튼
  const likeBtnElement = document.createElement('button');
  likeBtnElement.textContent = '👍🏻';
  likeBtnElement.classList.add('like-button');

  // 라이크 카운터
  const likeCounterElement = document.createElement('span');
  likeCounterElement.classList.add('like-counter');
  let likeCount = 0;
  likeCounterElement.textContent = likeCount;

  // 라이크 버튼 클릭 시 카운트 증가
  likeBtnElement.addEventListener('click', function () {
    likeCount++;
    likeCounterElement.textContent = likeCount;
  });

  return { likeBtnElement, likeCounterElement };
}

// 삭제 버튼도 만들어볼까?
function deleteTweet() {
  const deleteTweetElement = document.createElement('button');
  deleteTweetElement.classList.add('delete-button');
  deleteTweetElement.textContent = '💩';

  deleteTweetElement.addEventListener('click', function () {
    const newTweet = deleteTweetElement.parentElement;
    newTweet.remove();
  });
  return deleteTweetElement;
}