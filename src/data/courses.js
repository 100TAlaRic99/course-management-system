// Sample course data shared by several pages (Courses, Course Details, Featured Courses).
// Later this will come from the Spring Boot API instead of this file.
const courses = [
  { id: 1, title: "Web Development with React", category: "Development", instructor: "Dr. Neha Kapoor", level: "Beginner", duration: "12 weeks", lessons: 36, rating: 4.8, students: 320, icon: "bi-code-slash", description: "Build modern, responsive web applications using React, components, props and state." },
  { id: 2, title: "Java Programming Fundamentals", category: "Development", instructor: "Prof. Rajesh Iyer", level: "Beginner", duration: "10 weeks", lessons: 30, rating: 4.7, students: 410, icon: "bi-cup-hot", description: "Learn Java syntax, OOP concepts, collections and exception handling." },
  { id: 3, title: "Database Management with MySQL", category: "Data", instructor: "Dr. Anjali Rao", level: "Intermediate", duration: "8 weeks", lessons: 24, rating: 4.6, students: 275, icon: "bi-database", description: "Design relational databases, write SQL queries and understand normalisation." },
  { id: 4, title: "UI/UX Design Principles", category: "Design", instructor: "Ms. Kavya Menon", level: "Beginner", duration: "6 weeks", lessons: 18, rating: 4.9, students: 198, icon: "bi-palette", description: "Understand layout, colour, typography and user-centred design." },
  { id: 5, title: "Data Structures and Algorithms", category: "Computer Science", instructor: "Prof. Arjun Nair", level: "Advanced", duration: "14 weeks", lessons: 42, rating: 4.8, students: 356, icon: "bi-diagram-3", description: "Master arrays, linked lists, trees, graphs, sorting and searching." },
  { id: 6, title: "Introduction to Data Analytics", category: "Data", instructor: "Dr. Sameer Joshi", level: "Intermediate", duration: "9 weeks", lessons: 27, rating: 4.5, students: 230, icon: "bi-bar-chart-line", description: "Clean, analyse and visualise data to find meaningful insights." },
];

export default courses;