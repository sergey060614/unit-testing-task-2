import { sortHeroesByHealth } from '../src/sorter.js';

describe('Функция сортировки героев', () => {
  const inputHeroes = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const expectedSorted = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  test('Сортирует героев по убыванию здоровья', () => {
      expect(sortHeroesByHealth(inputHeroes)).not.toBe(expectedSorted);

      expect(sortHeroesByHealth(inputHeroes)).toEqual(expectedSorted);
  });

  test('Не изменяет исходный массив', () => {
      const originalInput = JSON.stringify(inputHeroes);
      sortHeroesByHealth(inputHeroes);
      const currentInput = JSON.stringify(inputHeroes);
      expect(originalInput).toBe(currentInput);
  });
});