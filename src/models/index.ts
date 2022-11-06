import type {User} from './User';
import type {Login} from './Login';

export type {
  User,
  Login,
}

// Notes about models:
// types ending with `Data` suffix like UserData, InputData, etc. are sent from the API
// and the ones without that suffix (User, Input, etc.) are used in reducers
// it would be nicer to have classes instead of types but, reducers don't allow
// classes in states. more info: https://stackoverflow.com/a/61706168/10468785
// that's why we have creator funcs (UserCreator, InputCreator, etc.) behaving like
// class constructors
