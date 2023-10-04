export class CreateUserDto {
  // TODO: readonly를 붙여야 하는 이유
  readonly name: string;
  readonly email: string;
  readonly password: string;
}
