export const ADD_PROFILE = 'ADD_PROFILE';
export const RESET_PROFILE = 'RESET_PROFILE';

export const addProfile = (profileObject) => {
    return {
        type: ADD_PROFILE,
        profileObject
    }
};

export const resetProfile = () => {
    return {
        type: RESET_PROFILE
    }
};