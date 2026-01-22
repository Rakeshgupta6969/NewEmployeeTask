



const Employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare report",
        taskDescription: "Prepare monthly sales report",
        taskDate: "2026-01-10",
        taskCategory: "Reporting"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Client meeting",
        taskDescription: "Meeting with ABC client",
        taskDate: "2026-01-05",
        taskCategory: "Meeting"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Data backup",
        taskDescription: "Backup old system data",
        taskDate: "2026-01-03",
        taskCategory: "Maintenance"
      }
    ]
  },

  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Bug fixing",
        taskDescription: "Fix login page bugs",
        taskDate: "2026-01-12",
        taskCategory: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Code review",
        taskDescription: "Review PRs from team",
        taskDate: "2026-01-08",
        taskCategory: "Review"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "API testing",
        taskDescription: "Test authentication APIs",
        taskDate: "2026-01-06",
        taskCategory: "Testing"
      }
    ]
  },

  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design UI",
        taskDescription: "Create dashboard UI design",
        taskDate: "2026-01-14",
        taskCategory: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Wireframing",
        taskDescription: "Create app wireframes",
        taskDate: "2026-01-09",
        taskCategory: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "User feedback analysis",
        taskDescription: "Analyze feedback forms",
        taskDate: "2026-01-07",
        taskCategory: "Analysis"
      }
    ]
  },

  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Database optimization",
        taskDescription: "Optimize slow queries",
        taskDate: "2026-01-15",
        taskCategory: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Schema update",
        taskDescription: "Update database schema",
        taskDate: "2026-01-10",
        taskCategory: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Backup check",
        taskDescription: "Verify daily backups",
        taskDate: "2026-01-08",
        taskCategory: "Maintenance"
      }
    ]
  },

  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Content writing",
        taskDescription: "Write blog post for website",
        taskDate: "2026-01-16",
        taskCategory: "Content"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "SEO update",
        taskDescription: "Update keywords and meta tags",
        taskDate: "2026-01-11",
        taskCategory: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Email campaign",
        taskDescription: "Launch email marketing campaign",
        taskDate: "2026-01-09",
        taskCategory: "Marketing"
      }
    ]
  }
];

const Admin = [
  {
    id: 101,
    email: "admin@example.com",
    password: "123"
  }
];



// now the mein method to set localStorage data in the local Storage
// and get date from the local storage

 export const setLocalStorage =() =>{
    
    localStorage.setItem('Employees',JSON.stringify(Employees))
      localStorage.setItem('Admin',JSON.stringify(Admin))


 }

 export const getLocalStorage = () =>{
  const employees =  JSON.parse(localStorage.getItem('Employees',Employees));
  const admin = JSON.parse(localStorage.getItem('Admin',Admin));

  console.log(employees,admin);

//   console.log(JSON.parse(data));  // here we covering the data in the JSON  formate


 }