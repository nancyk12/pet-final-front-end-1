import { Link, Outlet } from 'react-router-dom';
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar"
import Footer from "../components/Footer";
import  StyledNavBar from "../components/StyledNavBar";

const Home = () => {
  return (
    <>
      <StyledNavBar/>
      
    
      <Outlet/>
      
      <Footer/>
    </>
  );
};
export default Home;