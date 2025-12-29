// позволяет определить основу алгоритма в базовом классе и позволить подклассам переопределять шаги без изменения общей структуры алгоритма.
// Абстрактные шаги должны быть реализованы каждым подклассом.
// Для необязательных шагов уже предусмотрена реализация по умолчанию, но при необходимости ее можно переопределить.

// Плюсы и минусы
// + Вы можете разрешить клиентам переопределять только определенные части большого алгоритма, что сделает их менее подверженными влиянию изменений, происходящих в других частях алгоритма.
// + Дублирующийся код можно поместить в суперкласс.
// - Возможности некоторых клиентов могут быть ограничены предоставленной базовой структурой алгоритма.
// - Вы можете нарушить принцип подстановки Лискова , подавив реализацию шага по умолчанию с помощью подкласса.
// - Чем больше шагов в шаблонных методах, тем сложнее их поддерживать.
abstract class AbstractClass {
  public templateMethod(): void {
    this.baseOperation();
    this.requiredOperation1();
    this.requiredOperation2();
  }

  protected baseOperation(): void {
    console.log('AbstractClass: базовая операция');
  }

  protected abstract requiredOperation1(): void;
  protected abstract requiredOperation2(): void;
}

class ConcreteClass1 extends AbstractClass {
  protected requiredOperation1(): void {
    console.log('ConcreteClass1: операция 1');
  }
  protected requiredOperation2(): void {
    console.log('ConcreteClass1: операция 2');
  }
}

class ConcreteClass2 extends AbstractClass {
  protected requiredOperation1(): void {
    console.log('ConcreteClass2: операция 1');
  }
  protected requiredOperation2(): void {
    console.log('ConcreteClass2: операция 2');
  }
}

function clientCode(abstractClass: AbstractClass) {
  abstractClass.templateMethod();
}

console.log('Client c ConcreteClass1:');
clientCode(new ConcreteClass1());

console.log('\nClient c ConcreteClass2:');
clientCode(new ConcreteClass2());

// Фабричный метод — это специализация шаблонного метода .
//  При этом фабричный метод может служить шагом в большом шаблонном методе.

// Метод шаблона основан на наследовании: он позволяет изменять части алгоритма,
//  расширяя эти части в подклассах.Стратегия основана на композиции: вы можете изменять
//  части поведения объекта, предоставляя ему различные стратегии, соответствующие этому поведению.
//  Метод шаблона работает на уровне класса, поэтому он статичен.Стратегия работает на уровне объекта,
//  позволяя переключать поведение во время выполнения.
