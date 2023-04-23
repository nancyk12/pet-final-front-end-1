import SearchBar from "../components/SearchBar";
import Cards from "../components/Cards";

const Dashboard = ({ user }) => {
  return (
    <div>
    <SearchBar/>
    <section className='section'>
    <Cards/>
      <h4>Hello, {user?.name}</h4>
    </section>
   
    </div>
  );
};
export default Dashboard;
