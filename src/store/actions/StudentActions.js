import axios from '../../interceptors/Axios';

export const ADD_STUDENT = 'ADD_STUDENT';
export const DELETE_STUDENT = 'DELETE_STUDENT';
export const LIST_STUDENTS = 'LIST_STUDENTS';
export const ERROR = 'ERROR';

const errorOccurred = (message) => {
    return {
        type: ERROR,
        data: message
    }
};

const addedStudent = (addStudentReq, respose) => {
    return {
        type: ADD_STUDENT,
        data: {
            ...addStudentReq,
            id: respose.studentId
        }
    }
};

export const addStudents = (studentDetails) => {
    const addStudentReq = {
        ...studentDetails
    };

    return (dispatch) => {
        axios.post('/students', addStudentReq)
            .then(res => {
                return dispatch(addedStudent(addStudentReq, res.data))
            })
            .catch(error => {
                return dispatch(errorOccurred(error.message));
            })
    }
};

const deletedStudent = (studentId) => {
    return {
        type: DELETE_STUDENT,
        data: studentId
    }
};

export const deleteStudents = (studentId) => {
    return (dispatch) => {
        axios.delete('/students/' + studentId)
            .then(res => {
                return dispatch(deletedStudent(studentId))
            })
            .catch(error => {
                return dispatch(errorOccurred(error.message));
            })
    }
};

const listedStudents = (students) => {
    return {
        type: LIST_STUDENTS,
        data: students
    }
};

export const listStudents = () => {
    return (dispatch) => {
        axios.get('/students')
            .then(res => {
                return dispatch(listedStudents(res.data))
            })
            .catch(error => {
                return dispatch(errorOccurred(error.message));
            })
    }
};