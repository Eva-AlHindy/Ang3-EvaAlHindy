/*AdminFull is a model of how our complete admins objects should look*/

export class AdminFull {
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public password: string
  ) { }
}
