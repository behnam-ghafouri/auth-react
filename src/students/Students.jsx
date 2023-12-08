import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import jwtDecode from 'jwt-decode';
import { setRoles, studentsActions } from '../_store';

export { Students };

function Students() {
    const dispatch = useDispatch();
    const getAllStudents = () => dispatch(studentsActions.getAllStudents());
    const getOneStudent = () => dispatch(studentsActions.getOneStudent(["d"]));
    const _Students  = useSelector(state => state.students.students);
    useEffect(() => {
        console.log(_Students)
    }, [_Students]);
    return (
        <div>
            <h1>Hi This is Students Page !{ _Students.loading ? "  loading ..." : ""}</h1>
            <button onClick={getAllStudents} className="btn btn-link nav-item nav-link">getAllStudents</button>
            <button onClick={getOneStudent} className="btn btn-link nav-item nav-link">getOneStudent</button>
            {_Students.studentsList.length &&
                <ul>
                    { _Students.studentsList.slice(0,10).map(student =>
                        <li key={student.age+student.name}>{student.name} {student.age}</li>
                    ) }
                </ul>            
            }
        </div>
    );
}
