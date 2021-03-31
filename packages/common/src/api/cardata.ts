import { ApplicationPayloadInterface } from "./base";
enum CAR_DATA_ROUTE_PREFIXES {
  PREFIX = "car-data",
  GET_TRIM = "get-trims",
  GET_FORM_DATA = "get-form-data",
}
interface getTrimsInterface {
  make?: string;
  model?: string;
  year?: string;
}

interface getFormDataInterface {
  make?: string;
  model?: string;
  trim?: string;
  year?: string;
}

enum CAR_DATA_ERROR_CODES {
  NO_DATA,
}

enum CAR_DATA_ERROR_MESSAGES {
  NO_DATA = "NO_DATA",
}
type CAR_DATA_PAYLOAD_TYPES = getTrimsInterface | getFormDataInterface;
interface CarDataPayloadInterface
  extends ApplicationPayloadInterface<
    CAR_DATA_ERROR_CODES,
    CAR_DATA_ERROR_MESSAGES,
    CAR_DATA_PAYLOAD_TYPES
  > {
  code?: CAR_DATA_ERROR_CODES;
  httpCode: number;
  message?: CAR_DATA_ERROR_MESSAGES;
  payload?: CAR_DATA_PAYLOAD_TYPES;
}

export {
  CarDataPayloadInterface,
  CAR_DATA_PAYLOAD_TYPES,
  CAR_DATA_ERROR_MESSAGES,
  CAR_DATA_ERROR_CODES,
  getFormDataInterface,
  getTrimsInterface,
  CAR_DATA_ROUTE_PREFIXES,
};
