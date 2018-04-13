export interface State {
    isLoading: boolean;
    currentPost: Object;
}
export const initialState: State = {
    isLoading: false,
    currentPost: {}
};

export function appReducer(state: State = initialState, action) {
    switch (action.type) {
        case 'START_LOADING':
            return {
                ...state,
                isLoading: true
            };
        case 'STOP_LOADING':
            return {
                ...state,
                isLoading: false
            };
        default:
            return state;
    }
}
