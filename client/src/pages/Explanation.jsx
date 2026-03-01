import { useParams } from "react-router-dom";

export default function Explanation(){
  const {id}=useParams();
  return <h2>Explanation for {id}</h2>;
}