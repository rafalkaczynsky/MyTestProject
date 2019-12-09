export default function (state = null, action: any) {
    switch(action.type){
        case 'USER_SELECTED':
            return action.payload;
    }
    return state;
}