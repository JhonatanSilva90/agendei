import { createContext, useState } from "react";

const AuthContext = createContext({});

function AuthProvider(props) {
  const [user, setUser] = useState({
    // id_user: 4,
    // name: "JoãoA",
    // email: "joaoa@teste.com.br",
    // token:
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c2VyIjo0LCJpYXQiOjE3MzE5NTczNDYsImV4cCI6MTc0MTk1NzM0NX0.b3BEDQj5B7OicYnyN9WuJMRZ3GDyJIHmhI6aHQ2frSQ",
  });
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
