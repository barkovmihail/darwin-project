import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';

export interface StateScheme {
  counter: CounterSchema;
  user: UserSchema;
  loginForm? : LoginSchema;
}
