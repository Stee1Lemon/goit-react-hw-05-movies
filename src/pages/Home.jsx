import { fetchTrend } from 'api/apiService';

const Home = () => {
  fetchTrend();

  return <div>Home</div>;
};

export default Home;
