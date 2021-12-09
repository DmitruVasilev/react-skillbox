//Типизация классов

class Constructor {
  public field: number = 123;

  constructor(arg: number) {
    this.field = arg;
  }

  public publicMethod():number {
    return this.field;
  }

  protected protectedMethod():number { // доступен в дочерних классах
    return this.field;
  }

  private privateMethod():number { // доступен только там где объявили
    return this.field;
  }

  // нельзя понижать уровень доступа
}

abstract class AbstractClass {
  // декларация что находится в классе, их нельзя инстанциировать, а только наследовать
  public abstract field: number;
}

interface MyInterface {
  method(): string;
}

class NewClass implements MyInterface {
  method(): string {
    return "";
  }
}

