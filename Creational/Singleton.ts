class Singleton {
  static #instance: Singleton;

  private constructor() {
    // Private constructor to prevent instantiation
  }

  public static get Instance(): Singleton {
    if (!Singleton.#instance) {
      Singleton.#instance = new Singleton();
    }
    return Singleton.#instance;
  }

  public someBusinessLogic() {
    console.log('Executing some business logic.');
  }
}
// Singleton усложняет тестирование,
// потому что содержит глобальное состояние,
// которое разделяется между тестами.
// изолируют инициализацию класса,
// создается инстанс класса только один раз, а потом достается из кэша
// в системе есть только один объект с общим состоянием
