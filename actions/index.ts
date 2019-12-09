import { User } from '../models/user';

export const selectUser = (user: User) =>{
    return {
        type: 'USER_SELECTED',
        payload: user
    }
}