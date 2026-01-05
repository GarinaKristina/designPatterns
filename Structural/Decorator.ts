// Шаблон "Декоратор" — это структурный паттерн,
// позволяющий динамически добавлять новые функции к объектам,
// помещая их внутрь специальных объектов - оболочек, называемых декораторами.

// Используя декораторы, вы можете оборачивать объекты бесчисленное количество раз,
// поскольку как целевые объекты, так и декораторы следуют одному и тому же интерфейсу.
// В результате объект будет обладать свойством наложения всех оберток.

// Плюсы и минусы
// + Вы можете расширить поведение объекта, не создавая новый подкласс.
// + Вы можете добавлять или удалять обязанности объекта во время выполнения.
// + Вы можете комбинировать несколько вариантов поведения, обернув объект в несколько декораторов.
// + Принцип единственной ответственности .
//  Монолитный класс, реализующий множество возможных вариантов поведения,
//  можно разделить на несколько более мелких классов.
// - Удалить конкретный объект-обертку из стека оберток довольно сложно.
// - Сложно реализовать декоратор таким образом, чтобы его поведение не зависело от порядка его
//  расположения в стеке декораторов.
// - Исходный конфигурационный код слоев может выглядеть довольно некрасиво.
interface Sugar {
  operation(): string;
}

class Candy implements Sugar {
  public operation(): string {
    return 'Candy';
  }
}

class SugarPercentage implements Sugar {
  protected component: Sugar;

  constructor(component: Sugar) {
    this.component = component;
  }

  public operation(): string {
    return this.component.operation();
  }
}

class WithCaramel extends SugarPercentage {
  public operation(): string {
    return `Caramel (${super.operation()})`;
  }
}

class MoreSparkles extends SugarPercentage {
  public operation(): string {
    return `Sparkles (${super.operation()})`;
  }
}

function clientCode6(component: Sugar) {
  console.log(`Sweets with: ${component.operation()}`);

  // ...
}

const candy = new Candy();

clientCode6(candy);

const candyResult = new WithCaramel(candy);
const candyResult2 = new MoreSparkles(candyResult);
clientCode6(candyResult);
