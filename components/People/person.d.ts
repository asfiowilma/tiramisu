type Person = {
  name: string;
  uid: string;
  balance?: number;
  due?: number;
  settlement?: Settlement[];
};

type PersonProps = Person & { isPayer?: boolean };

type People = Person[];

type PeopleProps = {
  people: People;
};

type Summary = Record<string, number>;

type Settlement = {
  from: string;
  to: string;
  amount: number;
};
