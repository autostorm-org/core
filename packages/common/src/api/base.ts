/**
 * Base declaration for all rest api payloads
 */
export interface ApplicationPayloadInterface<T, U, V> {
  code?: T;
  message?: U;
  payload?: V;
}
