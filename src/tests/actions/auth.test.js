import { login, logout } from '../../actions/auth';

test('should generate login action object', () => {
    const tmpId = 'lior123';
    const action = login(tmpId);
    expect(action).toEqual({
        type: 'LOGIN',
        uid: tmpId
    });
});

test('should generate logout action object', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});