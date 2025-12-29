// позволяющий несовместимым объектам взаимодействовать друг с другом.

// Адаптер выступает в роли оболочки между двумя объектами.
//  Он перехватывает вызовы одного объекта и преобразует их
//  в формат и интерфейс, распознаваемые вторым объектом.

class Target {
  public request(): string {
    return "Target: The default target's behavior.";
  }
}

class IneedAdapter {
  public specificRequest(): string {
    return '.eetpadA eht fo roivaheb laicepS';
  }
}

class Adapter extends Target {
  private adaptee: IneedAdapter;

  constructor(adaptee: IneedAdapter) {
    super();
    this.adaptee = adaptee;
  }

  public request(): string {
    const result = this.adaptee.specificRequest().split('').reverse().join('');
    return `Adapter: (TRANSLATED) ${result}`;
  }
}

function clientCode(target: Target) {
  console.log(target.request());
}

const target = new Target();
clientCode(target);

const iNeedAdapter = new IneedAdapter();
const adapter = new Adapter(iNeedAdapter);
clientCode(adapter);
