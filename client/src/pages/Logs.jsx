import { useEffect,useState } from "react";
import { API } from "../api/api";

export default function Logs(){

  const [logs,setLogs]=useState([]);

  useEffect(()=>{
    API.get("/notifications/logs")
      .then(res=>setLogs(res.data));
  },[]);

  return(
    <div>
      <h2>Logs</h2>
      {logs.map(l=>(
        <div key={l._id}>
          {l.message} → {l.decision}
        </div>
      ))}
    </div>
  );
}