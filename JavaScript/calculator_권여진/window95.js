// 계산기 화면내에서 움직이게 만들기
const movedcal = document.querySelector('.calculator-container');
const movedcalTop = document.querySelector('.menu'); // 메뉴부분 잡았을 때만 계산기 움직이게

let offsetX, offsetY;

movedcalTop.addEventListener('mousedown', (e) => {
    movedcalTop.style.cursor = 'grabbing';

    // 마우스 클릭 시 현재 위치와 클릭 위치의 차이를 계산
    offsetX = e.clientX - movedcal.getBoundingClientRect().left;
    offsetY = e.clientY - movedcal.getBoundingClientRect().top;

    // 마우스 이동 이벤트 추가
    document.addEventListener('mousemove', moveCalculator);

    // 마우스 버튼을 떼면 이벤트 제거
    document.addEventListener('mouseup', () => {
        movedcalTop.style.cursor = 'grab';
        document.removeEventListener('mousemove', moveCalculator);
    }, { once: true });
});

const moveCalculator = (e) => {
    // 화면의 크기 경계 계산
    const minX = 0;
    const minY = 0;
    const maxX = window.innerWidth - movedcal.offsetWidth; // 계산기가 넘어가지 않도록 제한
    const maxY = window.innerHeight - movedcal.offsetHeight - 66; // 계산기가 화면 아래로 넘어가지 않도록 제한

    // 계산기의 새로운 위치 계산
    let newLeft = e.clientX - offsetX;
    let newTop = e.clientY - offsetY;

    // 화면의 경계를 넘지 않도록 좌우 상하 제한 설정
    if (newLeft < minX) newLeft = minX;
    if (newTop < minY) newTop = minY;
    if (newLeft > maxX) newLeft = maxX;
    if (newTop > maxY) newTop = maxY;

    // 계산기의 위치 업데이트
    movedcal.style.left = `${newLeft}px`;
    movedcal.style.top = `${newTop}px`;
};



// footer 메뉴바

// 시간 표현
function updateTime() {
    const now = new Date();
    let hours = now.getHours(); // 현재 시간 가져오기
    const minutes = String(now.getMinutes()).padStart(2, '0'); // 분 가져오기, 2자리로 포맷
    const isAm = hours < 12; // 오전/오후 판단

    // 12시간 형식으로 변환
    hours = hours % 12 || 12; // 0을 12로 변환하기 위해 사용

    const formattedTime = `${hours}:${minutes} ${isAm ? 'AM' : 'PM'}`; // HH:MM 오전/오후 형식

    document.querySelector('.footer_time_text').textContent = formattedTime; // 텍스트 업데이트
}

// 1초마다 시간 업데이트
setInterval(updateTime, 1000);

// 페이지 로드 시 초기 시간 설정
updateTime();
