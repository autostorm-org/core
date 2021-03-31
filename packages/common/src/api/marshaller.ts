import { ApplicationPayloadInterface } from "./base";

enum MARSHALLER_ROUTE_PREFIXES {
  PREFIX = "marshaller",
  AUTHENTICATE = "authenticate",
  UNAUTHENTICATE = "unauthenticate",
}

enum MARSHALLER_ERROR_CODES {
  MARSHALLER_TOKEN_INVALID = "MARSHALLER_TOKEN_INVALID",
  MARSHALLER_TOKEN_EXPIRED = "MARSHALLER_TOKEN_EXPIRED",
  MARSHALLER_SERVICE_INTERNAL_SERVICE_UNAVAILABLE = "MARSHALLER_SERVICE_INTERNAL_SERVICE_UNAVAILABLE",
}

interface AuthenticateRequestInterface {
  token?: string;
}

interface UnauthenticateRequestInterface {
  token?: string;
}

interface MarshallerPayloadInterface
  extends ApplicationPayloadInterface<MARSHALLER_ERROR_CODES, string, any> {
  code?: MARSHALLER_ERROR_CODES;
  httpCode: number;
  message?: string;
  payload?: any;
}

export {
  MARSHALLER_ROUTE_PREFIXES,
  MARSHALLER_ERROR_CODES,
  AuthenticateRequestInterface,
  UnauthenticateRequestInterface,
  MarshallerPayloadInterface,
};
