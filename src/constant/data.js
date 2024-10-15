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
    { name: "Home", path: "/" },
    { name: "Product", path: "/products" },
    { name: "Solutions", path: "/solutions" },
    { name: "Resources", path: "/resources" },
    {
      explore: {
        price: "Pricing",
        demo: "Demo",
        trial: "Free -14d ays trail",
        signIn: "signIn",
      },
    },
  ],
};

export default data;
