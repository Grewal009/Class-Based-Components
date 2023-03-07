
import useOnline from "../utils/useOnline";

const Body = () => {

  const isOnline = useOnline();
  
  if(!isOnline){
    return <h1>Not online</h1>;
  }

  return (
    <div>
        <h1 className="bg-green-200 min-h-screen">Body</h1>
    </div>
  )
}

export default Body;