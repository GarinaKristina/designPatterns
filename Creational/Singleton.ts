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
