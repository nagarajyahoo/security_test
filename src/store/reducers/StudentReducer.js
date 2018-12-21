import * as Actions from '../actions/StudentActions';

const initialState = {
    students: [],
    error: null
};

const StudentReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.ADD_STUDENT:
            let students = state.students;
            students.concat(action.data);
            return {
                ...state,
                students: students,
                error: null
            };
        case Actions.DELETE_STUDENT:
            students = state.students;
            const newStudents = [];
            for (let i = 0; i < students.length; i++) {
                if (students[i].id !== action.data) {
                    newStudents.push(students[i]);
                }
            }
            return {
                ...state,
                students: newStudents,
                error: null
            };
        case Actions.LIST_STUDENTS:
            break;
        case Actions.ERROR:
            return {
                ...state,
                error: action.data
            };
        default:
            return state;
    }
};

export default StudentReducer;