export interface IUser {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export interface signupCredentials {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface IShare {
  amount: number;
  dueDate: string;
  payDate: string;
  payStatus: boolean;
  fellowId: string;
  itemId: string;
}

export interface IItem {
  type: string;
  title: string;
  price: number;
  purchaseDate: string;
  numberOfMonths: number;
  monthlyAmount: number;
  startIn: string;
  endIn: string;
  shares: IShare[];
  status: string;
  notes: string;
  userId: string;
}

export interface IFellow {
  manager: string;
  amount: number;
  numberOfMonths: number;
  turnMonth: number;
  startIn: string;
  endIn: string;
  shares: IShare[];
  status: string;
  userId: string;
}

export interface ISpending {
  name: string;
  amount: number;
  schedule: string;
  startIn: string;
  status: string;
  userId: string;
}
