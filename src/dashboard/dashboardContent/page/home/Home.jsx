import Banner from "./Banner";
import Item from "./Item";

const Home = () => {
  return (
    <div className="px-6">
      <Banner />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
};

export default Home;
