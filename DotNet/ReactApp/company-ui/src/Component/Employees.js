import axios from "axios";
import { useEffect, useState } from "react"; 
 
function Employees() { 
  const [emps, setEmps] = useState([]); 
  const [emp, setEmp] = useState({ name:"", salary:"", departmentId:"" }); 
 
  useEffect(() => { load(); }, []); 
 
  const load = async () => { 
    const res = await axios.get("https://localhost:7299/api/Employee/GetAllEmp"); 
    setEmps(res.data); 
  }; 
 
  const add = async () => { 
    await axios.post("https://localhost:7299/api/Employee/SaveEmp", emp); 
    load(); 
  }; 
 
  return ( 
    <> 
      <h2>Employees</h2> 
 
      <input placeholder="Name" 
onChange={e=>setEmp({...emp,name:e.target.value})}/> 
      <input placeholder="Salary" 
onChange={e=>setEmp({...emp,salary:e.target.value})}/> 
      <input placeholder="DeptId" 
onChange={e=>setEmp({...emp,departmentId:e.target.value})}/> 
      <button onClick={add}>Add</button> 
 
      <ul> 
        {emps.map(e => 
          <li key={e.employeeId}> 
            {e.name} - {e.salary} 
          </li> 
        )} 
      </ul> 
    </> 
  ); 
} 
 
export default Employees; 
