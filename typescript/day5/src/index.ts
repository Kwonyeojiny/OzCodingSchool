import Dice from './util/dice';

const labels = {
  button: '주사위 굴리기!',
  div: '결과: ',
};

function main() {
  const button = document.createElement('button');
  const resultDiv = document.createElement('div');

  button.innerHTML = labels.button;

  document.body.append(button, resultDiv);

  const dice = new Dice(6);

  button.addEventListener('click', () => {
    resultDiv.innerHTML = `${labels.div}${dice.roll()}`;
  });
}

main();
