import { useState } from "react";
import LoginForm from "./Components/LoginForm";

function App() {
  const adminUser ={ 
    login: 'admin@agrof2sistemas.com', 
    password: 'sucessoEMerito'
  }

  const [user, setUser] = useState({ login: "", senha: ""})
  const [error, setError] = useState("")

  const Login = details => {
    console.log(details);

    if (details.login == adminUser.login && details.password == adminUser.password) {
      console.log("Logged in!");
      setUser({
        login: details.login, 
        senha: details.password
      })
      setError("")
    } else {
      console.log("Details do not match!");
      setError("Details do not match!");
    }
  }

  const Logout = () => {
    console.log("Logout!");
    setUser({ login: "", senha: "" })
  }

  return (
    <div className="App">
      {(user.login) ? (
        <div className="welcome">
          <h2>Welcome, <span>{user.login}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
