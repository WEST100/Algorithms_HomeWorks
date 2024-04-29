// Задача: вызов лифта
// В доме два лифта.
// Реализовать алгоритм отправки ближайшего лифта на вызывающий этаж.
// Алгоритм будет применяться в домах разной этажности.
// *Алгоритм будет применяться в домах с количеством >= 2 лифтов
// Пример:
// в доме 19 этажей
// работают лифт А и лифт В
// лифт А находиться на 0 этаже
// лифт В находиться на 8 этаже
// на вход: 1
// отправляем лифт А

let elevators = {
  elevatorA: 0,
  elevatorB: 8,
};

function findTheBestElevators(elevators, whichFloor) {
  let calculationA = Math.abs(whichFloor - Object.values(elevators)[0]);
  let calculationB = Math.abs(whichFloor - Object.values(elevators)[1]);

  if (calculationA >= calculationB) {
    console.log("едет лифт B");
  } else {
    console.log("eдет лифт А");
  }
}

findTheBestElevators(elevators, 3);
