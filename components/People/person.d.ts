type Person = {
  name: string;
  uid: string;
  due?: number;
};

type PersonProps = Person;

type People = Person[];

type PeopleProps = {
  people: People;
};

type Summary = Record<string, number>;
