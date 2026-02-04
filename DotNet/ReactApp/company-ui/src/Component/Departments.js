import axios from "axios";
import { useEffect, useState } from "react"; 

 
function Departments() { 
  const [departments, setDepartments] = useState([]); 
  const [name, setName] = useState(""); 
 
  useEffect(() => { load(); }, []); 
 
  const load = async () => { 
    const res = await axios.get("https://localhost:7299/api/Department/GetAllDept"); 
    setDepartments(res.data); 
  }; 
 
  const add = async () => { 
    await axios.post("https://localhost:7299/api/Department/SaveDept", { departmentName: name }); 
    setName(""); 
    load(); 
  }; 
 
  const del = async (id) => { 
    await axios.delete(`https://localhost:7299/api/Department/DeleteDept/${id}`); 
    load(); 
  }; 
 
  return ( 
    <> 
      <h2>Departments</h2> 
      <input value={name} onChange={e => setName(e.target.value)} /> 
      <button onClick={add}>Add</button> 
 
      <ul> 
        {departments.map(d => 
          <li key={d.departmentId}> 
            {d.departmentName} 
            <button onClick={() => del(d.departmentId)}>Delete</button> 
          </li> 
        )} 
      </ul> 
    </> 
  ); 
} 
 
export default Departments; 
