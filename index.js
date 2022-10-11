export const climbToHill = (metersMax) => {
  let count = 1;
  if (metersMax <= 50) {
    return 1;
  }
  let meters = 50; // Установим, что пройдено 50 метров для удаления лишней проверки внутри while

  do {
    meters += 20; // 50 + (-30)
    count++;
  } while (meters < metersMax)
  return count;
}

//export const countHandshake = (num) => num > 1 ? num * (num - 1) / 2 : 0; || Не совсем читаемо
export const countHandshake = (num) => {
  if (num > 1) {
    return num * (num - 1) / 2; // Используем арифметическую прогрессию
  }
  return 0;
};

export const deleteDuplicate = (str) => {
  const splitted = str.split(',');
  const uniqueWordsArr = [...new Set(splitted)]; // Удалим дубли с помощью Set и деструктуризируем для использования методов массива
  return uniqueWordsArr.join(',');
};

