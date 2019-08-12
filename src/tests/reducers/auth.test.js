import authReducer from '../../reducers/auth';

test ('should set uid for login',() => {
    const tmpId = '123';
    const state = authReducer(undefined,{type:'LOGIN', uid:tmpId});
    expect(state.uid).toBe(tmpId);
});


test ('should remove uid for logout',() => {
    const state = authReducer({uid:'123'},{type:'LOGOUT'});
    expect(state.uid).toEqual(undefined);
});