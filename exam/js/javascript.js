window.addEventListener('load', () => {
  const answers = [11, 5, 42, 5, 11];
  document.querySelector('.resultButton').addEventListener('click', () => {
    const name = document.querySelector('.name2').value;
    const results = document.querySelectorAll('.result');
    let count = 0;
    results.forEach((input, index) => {
      const userAnswer = parseInt(input.value);
      const resultAnswer = answers[index];
      if (userAnswer === resultAnswer) {
        input.style.backgroundColor = 'lightgray';
      } else {
        input.style.backgroundColor = 'red';
        count++;
      }
    });
    document.querySelector('.outer2').style.display = 'block';

    document.querySelector('.userName').textContent = name
    document.querySelector('.count').textContent = count;
    document.querySelector('.score').textContent = (5 - count) * 20;


    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString('ko-KR', options);
    document.querySelector('.date').textContent = `${formattedDate}`;

  });
});