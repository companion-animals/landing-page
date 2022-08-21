/* eslint-disable max-classes-per-file */
export class AlreadyExistEmailError extends Error {
  constructor() {
    super();

    this.message = "already exist email";
  }
}

export class InvalidLoginDataError extends Error {
  constructor() {
    super();

    this.message = "check your ID or password";
  }
}
