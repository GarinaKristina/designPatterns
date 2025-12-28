// Шаблон "Декоратор" — это структурный паттерн,
// позволяющий динамически добавлять новые функции к объектам,
// помещая их внутрь специальных объектов - оболочек, называемых декораторами.

// Используя декораторы, вы можете оборачивать объекты бесчисленное количество раз,
// поскольку как целевые объекты, так и декораторы следуют одному и тому же интерфейсу.
// В результате объект будет обладать свойством наложения всех оберток.

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

function clientCode(component: Sugar) {
  console.log(`Sweets with: ${component.operation()}`);

  // ...
}

const candy = new Candy();

clientCode(candy);

const candyResult = new WithCaramel(candy);
const candyResult2 = new MoreSparkles(candyResult);
clientCode(candyResult2);
