import StudentCard from "./StudentCard"

function StudentList({students}) {
    return (
        <div className="student-list"> 
        {students.map((student) => {
            return (
                <StudentCard key={student.id} student={student} />
            )
        })}      
            </div>
    );
}

export default StudentList;