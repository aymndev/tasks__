import { BrowserRouter, Routes, Route ,Navigate} from "react-router-dom";
import Login from "./pages/login";
import Tasks from "./pages/user/tasks"
import Register from "./pages/Register";



import Dashboard from "./pages/admin/Dashboard";
import PendingUsers from "./pages/admin/PendingUsers";

import './App.css'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tasks" element={<Tasks />} />
    
      
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register/>}/>
        <Route
          path="/admin/pending-users"
          element={<PendingUsers />}
        />




      </Routes>
    </BrowserRouter>
  )
}

export default App
