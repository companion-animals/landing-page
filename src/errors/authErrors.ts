export class AlreadyExistEmailError extends Error {
  constructor() {
    super();

    this.message = "already exist email";
  }
}
