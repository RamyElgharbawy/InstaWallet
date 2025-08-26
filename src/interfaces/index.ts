export interface IShare {
  amount: number;
  dueDate: Date;
  payDate: Date;
  payStatus: boolean;
  fellowId: string;
  itemId: string;
}

export interface IItem {
  type: string;
  title: string;
  price: number;
  purchaseDate: Date;
  numberOfMonths: number;
  monthlyAmount: number;
  startIn: Date;
  endIn: Date;
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
  startIn: Date;
  endIn: Date;
  shares: IShare[];
  status: string;
  userId: string;
}

export interface ISpending {
  name: string;
  amount: number;
  schedule: string;
  startIn: Date;
  status: string;
  userId: string;
}
