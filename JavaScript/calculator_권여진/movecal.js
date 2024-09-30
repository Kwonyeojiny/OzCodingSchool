// 계산기 화면내에서 움직이게 만들기
const movedcal = document.querySelector('.calculator-container');

let offsetX, offsetY;

movedcal.addEventListener('mousedown', (e) => {
    // 마우스 클릭 시 현재 위치와 클릭 위치의 차이를 계산
    offsetX = e.clientX - movedcal.getBoundingClientRect().left;
    offsetY = e.clientY - movedcal.getBoundingClientRect().top;
    
    // 마우스 이동 이벤트 추가
    document.addEventListener('mousemove', moveCalculator);
    
    // 마우스 버튼을 떼면 이벤트 제거
    document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', moveCalculator);
    }, { once: true });
});

const moveCalculator = ((e) => {
    // 계산기의 새로운 위치 계산
    movedcal.style.left = `${e.clientX - offsetX}px`;
    movedcal.style.top = `${e.clientY - offsetY}px`;
})