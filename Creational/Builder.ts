//Builder - Как собрать сложный объект?
// Методы "Builder" часто поддерживают цепочки вызовов
//(например, someBuilder.setValueA(1).setValueB(2).create()).

// ****************************
// ✔ объект создаётся пошагово
// ✔ шаги можно комбинировать
// ✔ логика создания отделена от самого объекта
// ✔ build() — финальная точка
// ****************************
// Builder — это когда new откладывается
// и объект собирается цепочкой шагов,
// а не одним конструктором.

// Плюсы и минусы
// + Вы можете создавать объекты пошагово, откладывать этапы создания или выполнять этапы рекурсивно.
// + Вы можете повторно использовать один и тот же код построения при создании различных представлений продуктов.
// + Принцип единственной ответственности . Вы можете изолировать сложный код построения от бизнес-логики продукта.
// + Общая сложность кода возрастает, поскольку данный шаблон требует создания множества новых классов.
// - Этот интерфейс это описание сборки объекта
interface IUserBuilder {
  // тут ссылается сам на себя чтобы поддерживать цепочки вызовов
  setName(name: string): IUserBuilder;
  setAge(age: number): IUserBuilder;
  setEmail(email: string): IUserBuilder;
  makeAdmin(): IUserBuilder;
  // и отдаст он в конце сборки User
  // ✅ Интерфейсы могут ссылаться на классы
  // ❌ но не должны зависеть от их реализации
  build(): User;
}

// Класс продукта
class User {
  constructor(
    public name: string, //
    public age?: number,
    public email?: string,
    public isAdmin?: boolean
  ) {}
}

// Он тут просто запомниает все значения что мы ему передали при колле
class UserBuilder implements IUserBuilder {
  private name!: string;
  private age?: number;
  private email?: string;
  private isAdmin?: boolean;

  setName(name: string): IUserBuilder {
    this.name = name;
    return this;
  }

  setAge(age: number): IUserBuilder {
    this.age = age;
    return this;
  }

  setEmail(email: string): IUserBuilder {
    this.email = email;
    return this;
  }

  makeAdmin(): IUserBuilder {
    this.isAdmin = true;
    return this;
  }
  //а уже тут мы  делаем инстанс класса и засетаем все в конструктор класс User
  build(): User {
    return new User(this.name, this.age, this.email, this.isAdmin);
  }
}

const user = new UserBuilder() //
  .setName('Anna')
  .setAge(25)
  .setEmail('a@mail.com')
  .makeAdmin()
  .build();

console.log(user);
