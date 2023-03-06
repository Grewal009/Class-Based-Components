import { NavLink } from "react-router-dom";




const Header = () => {
  return (
    <div className="">
        <ul className="m-5 flex justify-center">
            <NavLink to="/"><li className="w-20 mx-1 bg-slate-500 flex justify-center font-bold text-yellow-50">Home</li></NavLink>

            <NavLink to="/about"><li className="w-20 mx-1 bg-slate-500 flex justify-center font-bold text-yellow-50">About</li></NavLink>

            <NavLink to="/contact"><li className="w-20 mx-1 bg-slate-500 flex justify-center font-bold text-yellow-50">Contact</li></NavLink>
        </ul>
    
    </div>
  );
}

export default Header;