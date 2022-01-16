export type TToastMethod = (message?: string) => void;

export type TToasterContext = {
  success: TToastMethod;
  error: TToastMethod;
  warning: TToastMethod;
  info: TToastMethod;
};
