import { User } from "./User";

export class Manager implements User {
  constructor(
    public firstName: string,
    public lastName: string,
    public birthday: object,
    public location: string,
    public userName: string,
    public password: string,
    public branch: string,
    public accessCode: string
  ) {}
}
