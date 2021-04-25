interface ILocalComponentContext<V> {
  value: V;
  setValue: (nextValue: V) => void;
}

export type { ILocalComponentContext };
