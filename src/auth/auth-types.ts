export type TUser = {
  id: string;
  login: string;
  password: string;
  name?: string;
  surname?: string;
  birthday?: string | undefined;
  language?: string;
  email?: string;
  phoneNumber?: string;
};

export type TState = {
  user: {
    isLoading: boolean;
    isError: boolean;
    data?: TUser;
  };
};

export type TUserContext = {
  user: TState['user'];
  logout: () => void;
};
