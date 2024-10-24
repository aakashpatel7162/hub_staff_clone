const data = {
  emailRegex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  passRegex: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?!.* ).{5,12}$/,
  
  errorMessages: {
    email: "email is not correct",
    password: "Password is to week uppercase,lowercase and number",
    username: "Username is to small",
    number: "number is not correct",
    loginPass: "Password is not correct uppercase,lowercase and number",
    confPassword: "Password is not match",
  },
  navItems: [
    { name: "Home", path: "/home" },
    { name: "Product", path: "/products" },
    { name: "Solutions", path: "/solutions" },
    { name: "Resources", path: "/resources", },
    { name: "ContactUs", path: "/contactus", },

    {
      explore: {
        price: "Pricing",
        demo: "Demo",
        trial: "Free -14 days trail",
        signIn: "signIn",
      },
    },
  ],
   solutions: [
    {
      title: "User Data Tracking",
      description: "Track user activities seamlessly to ensure optimal engagement and productivity.",
    },
    {
      title: "Time Management",
      description: "Manage and analyze time spent on tasks to improve efficiency and workflow.",
    },
    {
      title: "Reporting & Analytics",
      description: "Generate comprehensive reports to assess performance and make data-driven decisions.",
    },
    {
      title: "User Insights",
      description: "Gain insights into user behavior to tailor experiences and improve satisfaction.",
    },
  ],
products: [
    {
      id: 1,
      title: 'Time Tracking',
      description: 'Effortlessly track time and productivity with our intuitive time tracking tool. Monitor your hours, generate reports, and improve efficiency.',
      imageUrl: 'https://media.istockphoto.com/id/623525564/photo/checking-your-activity-status.jpg?s=612x612&w=0&k=20&c=LKfjOM_4WrQF_qyeJ6KTwGxAkJ1o7CUVPuMAdhAn6XQ=', 
    },
    {
      id: 2,
      title: 'Task Management',
      description: 'Organize your tasks and projects seamlessly. Prioritize your workload and collaborate with your team effectively.',
      imageUrl: 'https://media.istockphoto.com/id/1371325578/photo/kanban-project-management-software-on-laptop.jpg?s=612x612&w=0&k=20&c=-YK8Bj2KS3Px74_Rjudm1_Jhq-n8vqhLDHuontnhojs=',
    },
    {
      id: 3,
      title: 'Team Collaboration',
      description: 'Enhance team communication and collaboration with our platform. Share files, discuss ideas, and work together in real-time.',
      imageUrl: 'https://media.istockphoto.com/id/1373240838/photo/positive-team-motivation.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZN5mLRBH0Hd7FEj5aoyFKGm9J1axlpkkqagUDQuwfow=',
    },
  ],

  resource:"Our HIUB staff web application offers a comprehensive resources section designed to empower users with essential tools and information. This section includes features for tracking user data, monitoring museum activity, and managing tasks efficiently. By consolidating various resources, users can easily access analytics and insights that facilitate informed decision-making and enhance productivity. Additionally, the application supports collaboration among staff, ensuring that all team members are aligned and equipped with the necessary resources to optimize their workflows and improve overall operational effectiveness."
};

export default data;
