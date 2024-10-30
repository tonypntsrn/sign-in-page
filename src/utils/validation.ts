import * as yup from "yup";
import { MessageStatus } from "../types";

const MIN_CHARACTER_LENGTH = 8;

export const validationMessages = {
  password: {
    hasLength: "8 characters or more (no spaces)",
    hasLowerAndUpperCase: "Uppercase and lowercase letters",
    hasNumber: "At least one digit",
  },
  email: {
    invalid: "Invalid email",
    required: "Email is required",
  },
};

const validateRule = (rule: RegExp, value?: string) => {
  if (!value) {
    return false;
  }

  return rule.test(value);
};

export const hasUpperCase = (value?: string) => validateRule(/[A-Z]/, value);
export const hasLowerCase = (value?: string) => validateRule(/[a-z]/, value);
export const hasNumber = (value?: string) => validateRule(/\d/, value);
export const hasRequiredLength = (value?: string) =>
  validateRule(new RegExp(`^\\S{${MIN_CHARACTER_LENGTH},}$`), value);

const getMessageState = (
  isValid: boolean,
  shouldValidate?: boolean
): MessageStatus => {
  const falseState = shouldValidate
    ? MessageStatus.error
    : MessageStatus.default;

  return isValid ? MessageStatus.success : falseState;
};

export const singInValidationSchema = yup.object({
  email: yup
    .string()
    .email(validationMessages.email.invalid)
    .required(validationMessages.email.required),
  password: yup
    .string()
    .min(8)
    .max(64)
    .test((value) => hasUpperCase(value) && hasLowerCase(value))
    .test((value) => hasNumber(value)),
});

export const passwordFeedbackValidation = [
  {
    message: validationMessages.password.hasLength,
    getMessageStatus: (
      value: string,
      shouldValidate?: boolean
    ): MessageStatus => {
      const isValid = hasRequiredLength(value);

      return getMessageState(isValid, shouldValidate);
    },
  },
  {
    message: validationMessages.password.hasLowerAndUpperCase,
    getMessageStatus: (
      value: string,
      shouldValidate?: boolean
    ): MessageStatus => {
      const isValid = hasLowerCase(value) && hasUpperCase(value);

      return getMessageState(isValid, shouldValidate);
    },
  },
  {
    message: validationMessages.password.hasNumber,
    getMessageStatus: (
      value: string,
      shouldValidate?: boolean
    ): MessageStatus => {
      const isValid = hasNumber(value);

      return getMessageState(isValid, shouldValidate);
    },
  },
];
