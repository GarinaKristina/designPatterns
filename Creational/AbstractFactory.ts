// Abstract Factory — создаёт семейство связанных продуктов
// Abstract Factory — «какой набор объектов создать?»

// + Плюсы и минусы
// + Вы можете быть уверены, что продукция, которую вы получаете с завода, совместима друг с другом.
// + Вы избегаете тесной связи между конкретными продуктами и клиентским кодом.
// + Принцип единственной ответственности . Вы можете вынести код создания продукта в одно место, что упростит его поддержку.
// + Принцип открытости/закрытости . Вы можете внедрять новые варианты продуктов, не нарушая работу существующего клиентского кода.
// - Код может стать сложнее, чем следовало бы, поскольку вместе с этим шаблоном вводится множество новых интерфейсов и классов.
interface AbstractChair {
  hasLegs(): string;
}

interface AbstractSofa {
  hasCushions(): string;
}

interface AbstractFactory {
  createChair(): AbstractChair;
  createSofa(): AbstractSofa;
}

class ModernChair implements AbstractChair {
  public hasLegs(): string {
    return 'Modern chair has 4 legs';
  }
}

class ModernSofa implements AbstractSofa {
  public hasCushions(): string {
    return 'Modern sofa has soft cushions';
  }
}

class ClassicChair implements AbstractChair {
  public hasLegs(): string {
    return 'Classic chair has ornate legs';
  }
}

class ClassicSofa implements AbstractSofa {
  public hasCushions(): string {
    return 'Classic sofa has firm cushions';
  }
}
class ModernFurniture implements AbstractFactory {
  public createChair(): AbstractChair {
    return new ModernChair();
  }

  public createSofa(): AbstractSofa {
    return new ModernSofa();
  }
}

class ClassicFurniture implements AbstractFactory {
  public createChair(): AbstractChair {
    return new ClassicChair();
  }

  public createSofa(): AbstractSofa {
    return new ClassicSofa();
  }
}
// КЛИЕНТ не знает как создается класс
// Фабрика нужна, чтобы client зависел от интерфейса
function madeFurniture(factory: AbstractFactory) {
  const chair = factory.createChair();
  const sofa = factory.createSofa();

  console.log(chair.hasLegs());
  console.log(sofa.hasCushions());
}

madeFurniture(new ModernFurniture());
madeFurniture(new ClassicFurniture());

////////////////

// Abstract Factory — это порождающий шаблон проектирования, который решает проблему
// создания целых семейств продуктов без указания их конкретных классов.

// Абстрактная фабрика определяет интерфейс для создания всех различных продуктов,
// но фактическое создание продукта остается за конкретными классами фабрик.Каждый
// тип фабрики соответствует определенному виду продукции.

// Клиентский код вызывает методы создания объекта-фабрики вместо непосредственного
// создания продуктов с помощью вызова конструктора(newоператора).Поскольку фабрика
// соответствует одному варианту продукта, все ее продукты будут совместимы.

// Клиентский код работает с фабриками и продуктами только через их абстрактные интерфейсы.
// Это позволяет клиентскому коду работать с любыми вариантами продуктов, созданными объектом
// фабрики.Вам просто нужно создать новый конкретный класс фабрики и передать его клиентскому коду.
// Составьте матрицу различных типов продукции и вариантов этих продуктов.

// Объявите абстрактные интерфейсы продуктов для всех типов продуктов. Затем сделайте
// так, чтобы все конкретные классы продуктов реализовывали эти интерфейсы.

// Объявите интерфейс абстрактной фабрики с набором методов создания для всех абстрактных продуктов.

// Реализуйте набор конкретных классов для фабрики, по одному для каждого варианта продукта.

// Создайте в приложении код инициализации фабрики. Он должен создавать экземпляр
// одного из конкретных классов фабрики в зависимости от конфигурации приложения или
// текущей среды.Передайте этот объект фабрики всем классам, которые создают продукты.

// Просмотрите код и найдите все прямые вызовы конструкторов продукта. Замените их вызовами
// соответствующих методов создания объекта - фабрики.
