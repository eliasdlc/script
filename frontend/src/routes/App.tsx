import '../styles/App.css'
import {BrowserRouter as Router, Route, Routes, useLocation, useNavigate} from "react-router-dom";
import LogIn from "./LogIn.tsx";
import {useEffect} from "react";
import Home from "./Home.tsx";

function App() {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        // Redirige a la página de login si estás en la raíz o cualquier ruta no autorizada
        if(location.pathname === "/") {
            navigate("/home");
        }
    }, [location.pathname, navigate]);



  return (
    <div className={"flex h-screen w-screen gap-5"}>
        <main className={"flex flex-row w-full flex-wrap gap-5"}>
            <Routes>
                <Route path="/login" element={<LogIn />}></Route>
                <Route path="/home" element={<Home />}></Route>
            </Routes>
        </main>
    </div>
  )
}

export default function AppWrapper() {
    return(
        <Router>
            <App />
        </Router>
    )
}
