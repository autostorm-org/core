import { ApplicationPayloadInterface } from "./base";

enum AUTHENTICATION_ROUTE_PREFIXES {
  PREFIX = "auth",
  REGISTER = "register",
  LOGIN = "login",
  VERIFY = "verify",
  RESET_VERIFY_EMAIL_TOKEN = "reset-verify-email-token",
  REQUEST_RESET_PASSWORD_TOKEN = "request-reset-password-token",
  RESET_PASSWORD = "reset-password",
  UNAUTHENTICATED_TOKEN = "unauthenticated-token",
}

// PAYLOAD CODES
enum AUTHENTICATION_ERROR_CODES {
  AUTH_SERVICE_INVALID_PARAMETER = "AUTH_SERVICE_INVALID_PARAMETER",
  AUTH_SERVICE_EMAIL_CONFIRMED = "AUTH_SERVICE_EMAIL_CONFIRMED",
  AUTH_SERVICE_VERIFY_EMAIL_TOKEN_EXPIRED = "AUTH_SERVICE_VERIFY_EMAIL_TOKEN_EXPIRED",
  AUTH_SERVICE_INTERNAL_SERVICE_UNAVAIABLE = "AUTH_SERVICE_EMAIL_INTERNAL_SERVICE_UNAVAIABLE",
  AUTH_SERVICE_EMAIL_REGISTERED = "AUTH_SERVICE_EMAIL_REGISTERED",
  AUTH_SERVICE_EMAIL_NOT_CONFIRMED = "AUTH_SERVICE_EMAIL_NOT_CONFIRMED",
  AUTH_SERVICE_VERIFY_EMAIL_TOKEN_STILL_VALID = "AUTH_SERVICE_VERIFY_EMAIL_TOKEN_STILL_VALID",
  AUTH_SERVICE_RESET_PASSWORD_TOKEN_EXPIRED = "AUTH_SERVICE_RESET_PASSWORD_TOKEN_EXPIRED",
}

// PAYLOAD MESSAGES
enum AUTHENTICATION_ERROR_MESSAGES {
  VALIDATION_ERROR_EMAIL = "{VALUE} is not a valid email!",
  VALIDATION_ERROR_FIRST_NAME = "{VALUE} is not a valid firstname!",
  VALIDATION_ERROR_LASTNAME = "{VALUE} is not a valid lastname!",
  VALIDATION_ERROR_PASSWORD = "Provided value is not a valid password!",
  REQUIRED_MSG_EMAIL = "email is required",
  REQUIRED_MSG_FIRST_NAME = "firstname is required",
  REQUIRED_MSG_LASTNAME = "lastname is required",
  REQUIRED_MSG_PASSWORD = "password is required",
}

// PAYLOAD PAYLOAD
interface RegisterInterface {
  email?: string;
  firstName?: string;
  lastName?: string;
  password?: string;
}

interface LoginInterface {
  email?: string;
  password?: string;
}

interface VerifyEmailInterface {
  email?: string;
  token?: string;
}

interface ResetPasswordInterface {
  token?: string;
  email?: string;
  newPassword?: string;
  newPasswordConfirm?: string;
}

interface ResetVerifyEmailTokenInterface {
  email?: string;
}

interface RequestResetPasswordInterface {
  email?: string;
}

type signed_jwt = string;

type AUTHENTICATION_PAYLOAD_TYPES =
  | RegisterInterface
  | LoginInterface
  | VerifyEmailInterface
  | ResetPasswordInterface
  | ResetVerifyEmailTokenInterface
  | RequestResetPasswordInterface
  | signed_jwt
  | payload_jwt
  | any;

// Declaration of interface
interface AuthenticationPayloadInterface
  extends ApplicationPayloadInterface<
    AUTHENTICATION_ERROR_CODES,
    AUTHENTICATION_ERROR_MESSAGES,
    AUTHENTICATION_PAYLOAD_TYPES
  > {
  code?: AUTHENTICATION_ERROR_CODES;
  httpCode: number;
  message?: AUTHENTICATION_ERROR_MESSAGES;
  payload?: AUTHENTICATION_PAYLOAD_TYPES;
}

enum ROLES_ENUM {
  ADMIN = 0 /**Highest human privilege */,

  SYSTEM /**Highest privilege for system process */,

  STAFF /**Team member for organization */,

  DEALER /**Car dealership used cars */,

  CONC /**Car dealership new cars */,

  USER /**General user */,

  UNAUTH /**unauthenticated user */,
}

interface stringToRoleCode {
  [key: string]: ROLES_ENUM;
}

enum RoleNames {
  "User" = ROLES_ENUM.USER,
  "Unauthenticated" = ROLES_ENUM.UNAUTH,
  "Admin" = ROLES_ENUM.ADMIN,
}

interface payload_jwt {
  email?: string;
  ownerId?: string;
  role?: ROLES_ENUM;
}

export {
  AUTHENTICATION_ROUTE_PREFIXES,
  RegisterInterface,
  LoginInterface,
  VerifyEmailInterface,
  RequestResetPasswordInterface,
  ResetVerifyEmailTokenInterface,
  ResetPasswordInterface,
  AUTHENTICATION_ERROR_MESSAGES,
  AUTHENTICATION_ERROR_CODES,
  AuthenticationPayloadInterface,
  payload_jwt,
  ROLES_ENUM,
  RoleNames,
  signed_jwt,
};
