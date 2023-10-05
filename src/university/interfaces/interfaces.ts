interface StudentInterface {
  firstName: string;
  lastName: string;
  birthday: string;
  email: string;
  id: string;
}

interface TeacherInterface extends StudentInterface {
  department: string;
  hireDate: string;
}

interface CourseInterface {
  courseName: string;
  department: string;
  credits: number;
  id: string;
}
