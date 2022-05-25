export type TTodoList = Array<TTodoItem | []>;

export type TTodoItem = {
  id: number;
  title: string;
  due_date?: string | number | Date;
  piority: "Low" | "Normal" | "High";
  checked: boolean;
  description: "";
};
