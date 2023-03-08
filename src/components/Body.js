
import useOnline from "../utils/useOnline";

const Body = () => {

  const isOnline = useOnline();
  
  if(!isOnline){
    return <h1>Not online</h1>;
  }

  return (
    <div>
        <div className="bg-green-200 min-h-screen">Body
        <div className="m-2 w-28 bg-orange-400">box-1 (112px)</div>
        <div className="m-2 w-[120] bg-orange-400">box-2 (120px)</div>
        <div className= "m-2 w-32 bg-orange-400">box-2 (128px)</div>
        </div>
    </div>
  )
}

export default Body;