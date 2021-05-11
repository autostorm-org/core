export interface IMultiplerSdkBase {
  readonly connected: boolean;
  readonly connecting: boolean;
  readonly account: string | null;
}

export interface IMultiplierContract<T> extends IMultiplerSdkBase {
  readonly contract?: T;
}

export interface IMultiplerViewMethod<T> extends IMultiplerSdkBase {
  readonly value: T | null;
  readonly error: unknown;
  readonly evaluated: boolean;
}

export interface IMultiplierMutationMethod<T> {
  method: () => Promise<T>;
  value: T;
  evaluated: boolean;
}

export type Await<T> = T extends PromiseLike<infer U> ? U : T;
