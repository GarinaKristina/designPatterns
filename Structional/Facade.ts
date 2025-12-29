// предоставляющий упрощенный интерфейс для библиотеки,
//  фреймворка или любого другого сложного набора классов.
// Facade — это “одна кнопка”
// для запуска сложного процесса.

// простой интерфейс для сложной подсистемы, содержащей множество взаимодействующих компонентов.

// Наличие фасада удобно, когда вам нужно интегрировать ваше
// приложение со сложной библиотекой, содержащей десятки функций, но вам требуется лишь небольшая часть её функциональности.

// Вместо того чтобы заставлять ваш код напрямую взаимодействовать с десятками классов фреймворка,
// вы создаете класс - фасад, который инкапсулирует эту функциональность и скрывает ее от остального кода.
// Такая структура также помогает минимизировать усилия по обновлению до будущих версий фреймворка или замене
//  его на другой.Единственное, что вам нужно будет изменить в вашем приложении, — это реализация методов фасада.

// Паттерн «Фасад» следует использовать, когда необходим ограниченный, но простой интерфейс для доступа к сложной подсистеме.
// Используйте Фасад, если хотите структурировать подсистему по уровням.

// Плюсы и минусы
// + Вы можете изолировать свой код от сложности подсистемы.
// - Фасад может стать своего рода «божественным объектом», связанным со всеми классами приложения.

// Abstract Factory может служить альтернативой Facade , если вам нужно скрыть от клиентского кода только способ создания объектов подсистемы.
// Класс Facade часто можно преобразовать в Singleton, поскольку в большинстве случаев достаточно одного объекта-фасада.

// Плюсы и минусы
// + Вы можете изолировать свой код от сложности подсистемы.
// - Фасад может стать своего рода «божественным объектом», связанным со всеми классами приложения.

class Facade {
  protected subsystem1: Subsystem1;
  protected subsystem2: Subsystem2;

  constructor(subsystem1: Subsystem1, subsystem2: Subsystem2) {
    this.subsystem1 = subsystem1;
    this.subsystem2 = subsystem2;
  }

  public operation(): string {
    let result = 'Facade initializes subsystems:\n';
    result += this.subsystem1.operation1();
    result += this.subsystem2.operation1();
    result += 'Facade orders subsystems to perform the action:\n';
    result += this.subsystem1.operationN();
    result += this.subsystem2.operationZ();

    return result;
  }
}

class Subsystem1 {
  public operation1(): string {
    return 'Subsystem1: Ready!\n';
  }

  public operationN(): string {
    return 'Subsystem1: Go!\n';
  }
}

class Subsystem2 {
  public operation1(): string {
    return 'Subsystem2: Get ready!\n';
  }

  public operationZ(): string {
    return 'Subsystem2: Fire!';
  }
}

function clientCode(facade: Facade) {
  console.log(facade.operation());
}

const subsystem1 = new Subsystem1();
const subsystem2 = new Subsystem2();
const facade = new Facade(subsystem1, subsystem2);
clientCode(facade);
