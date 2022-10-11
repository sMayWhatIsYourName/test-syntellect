import {
  climbToHill,
  countHandshake,
  deleteDuplicate
} from '../index.js';

describe('Задание 1: Черепашка взбирается на гору', () => {
  test('Проверим данное число', () => {
    const fixture = 100;
    const expectValue = 4;
    expect(climbToHill(fixture)).toEqual(expectValue);
  });

  test('Проверим то, что проходит черепашка за 1 день', () => {
    const fixture = 50;
    const expectValue = 1;
    expect(climbToHill(fixture)).toEqual(expectValue);
  });

  test('Проверим то, что пройдет черепашка за 1 сутки и 1 день', () => {
    const fixture = 51;
    const expectValue = 2;
    expect(climbToHill(fixture)).toEqual(expectValue);
  });
});

describe('Задание 2: Посчитать рукопожатия', () => {
  test('Проверим данное число', () => {
    const fixture = 10;
    const expectValue = 45;
    expect(countHandshake(fixture)).toEqual(expectValue);
  });

  test('Проверим число рукопожатий у 4 людей', () => {
    const fixture = 4;
    const expectValue = 6;
    expect(countHandshake(fixture)).toEqual(expectValue);
  });

  test('Проверим число рукопожатий у 1 человека', () => {
    const fixture = 1;
    const expectValue = 0;
    expect(countHandshake(fixture)).toEqual(expectValue);
  });

  test('Проверим число рукопожатий у 0 людей', () => {
    const fixture = 1;
    const expectValue = 0;
    expect(countHandshake(fixture)).toEqual(expectValue);
  });
});

describe('Задание 3: Удалить дубликаты из строки', () => {
  test('Проверим данную строку', () => {
    const fixture = 'кошка,собака,лошадь,корова,кошка';
    const expectValue = 'кошка,собака,лошадь,корова';
    expect(deleteDuplicate(fixture)).toEqual(expectValue);
  });

  test('Проверим значение побольше', () => {
    const fixture = 'кошка,собака,лошадь,корова,кошка,собака,лошадь';
    const expectValue = 'кошка,собака,лошадь,корова';
    expect(deleteDuplicate(fixture)).toEqual(expectValue);
  });

  test('Проверим строку с одним словом', () => {
    const fixture = 'кошка,кошка,кошка,кошка,кошка,кошка';
    const expectValue = 'кошка';
    expect(deleteDuplicate(fixture)).toEqual(expectValue);
  });

  test('Проверим пустую строку', () => {
    const fixture = '';
    const expectValue = '';
    expect(deleteDuplicate(fixture)).toEqual(expectValue);
  });
});