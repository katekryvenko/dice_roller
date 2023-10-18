function kast() {
  let sum = 0;

  for (let i = 1; i <= 6; i++) {
    const randomValue = Math.floor(Math.random() * 6) + 1;
    const die = document.getElementById(`terning${i}`);

    // Remove previous side class
    for (let j = 1; j <= 6; j++) {
      die.classList.remove(`side${j}`);
    }

    // Add new side class
    die.classList.add(`side${randomValue}`);

    sum += randomValue;
  }

  document.getElementById("sum").textContent = `Sum: ${sum}`;
}
