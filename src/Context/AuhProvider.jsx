import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

export default function AuthProvider({children}) {
    const [user , setUser] = useState(() => {
        const saveUser = localStorage.getItem("user");
        return saveUser ? JSON.parse(saveUser) : null;
    });

   useEffect(() => {
    if (user !== null) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

    function removeUser() {
        localStorage.removeItem("user")
    }

    return (
        <AuthContext.Provider value={{user, setUser, removeUser}} >{children}</AuthContext.Provider>
    )
}