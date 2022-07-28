type Animal = {
  name: string;
};

type Human = {
  firstName: string;
  lastName: string;
};

type GetRequiredInformation<TType> = TType extends Animal
  ? { name: TType[ 'name' ]; }
  : TType extends Human
  ? { fullName: string; }
  : never;

export type RequiredInformationForAnimal =
  GetRequiredInformation<Animal>;

export type RequiredInformationForHuman =
  GetRequiredInformation<Human>;
