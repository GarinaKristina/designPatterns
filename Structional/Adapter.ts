// позволяющий несовместимым объектам взаимодействовать друг с другом.

// Адаптер выступает в роли оболочки между двумя объектами.
//  Он перехватывает вызовы одного объекта и преобразует их
//  в формат и интерфейс, распознаваемые вторым объектом.

// Плюсы и минусы
// + Принцип единственной ответственности . Вы можете отделить код интерфейса или преобразования
//   данных от основной бизнес - логики программы.
// + Принцип открытости/закрытости . Вы можете добавлять в программу новые типы адаптеров,
//   не нарушая работу существующего клиентского кода, при условии, что они взаимодействуют с адаптерами через клиентский интерфейс.
// - Общая сложность кода возрастает, поскольку необходимо ввести набор новых интерфейсов и классов. Иногда проще просто
//   изменить класс сервиса, чтобы он соответствовал остальному коду.
class Target {
  public request(): string {
    return "Target: The default target's behavior.";
  }
}

class IneedAdapter {
  public specificRequest(): string {
    return '.eetpadA';
  }
}

class Adapter extends Target {
  private adaptee: IneedAdapter;

  constructor(adaptee: IneedAdapter) {
    super(); //- Инициализирует родительский класс Target и создаёт this
    this.adaptee = adaptee;
  }

  public request(): string {
    const result = this.adaptee.specificRequest().split('').reverse().join('');
    return `Adapter: (TRANSLATED) ${result}`;
  }
}

function clientCode5(target: Target) {
  console.log(target.request());
}

const target = new Target();
clientCode5(target);

const iNeedAdapter = new IneedAdapter();
const adapter = new Adapter(iNeedAdapter);
console.log(adapter.request());
// clientCode5(adapter);
