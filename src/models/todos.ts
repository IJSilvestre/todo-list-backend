export default class Todo {
  id: number;
  description: string;
  complet: boolean;
  date: Date;

  constructor(id: number, description: string, complet: boolean, date: Date) {
    this.id = id;
    this.description = description;
    this.complet = complet;
    this.date = new Date();
    date.setUTCDate(-3);
  }
}
