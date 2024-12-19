import UserCard from "./components/UserCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, A11y } from "swiper/modules";
import { useEffect, useState } from "react";
declare module "swiper/modules";
import axios from "axios";

interface User {
  user_id: number;
  name: string;
  mobile: string;
  bio: string;
  gender: "male" | "female" | "other"; // Assuming these are the possible values for gender
  status: "active" | "inactive"; // Assuming these are the possible values for status
  avatar: string;
}

const demoUser: User[] = [
  {
    user_id: 974750,
    name: "MBem",
    mobile: "5521992983857",
    bio: "Eu sou um usuário teste",
    gender: "male",
    status: "active",
    avatar: "https://crmstation.net/avatar/5521992983857.jpg",
  },
  {
    user_id: 941801,
    name: "Carol",
    mobile: "5531992962157",
    bio: "eu sou a carol outro usuário teste",
    gender: "female",
    status: "active",
    avatar: "https://crmstation.net/avatar/5531992962157.jpg",
  },
];

const HomePage = () => {
  const [users, setUser] = useState<User[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: any = await axios.get(
          "https://321dbase.com/0/tinder/dating_json.php?group_id=36&user_id=986379"
        );
        console.log("🚀 ~ fetchData ~ response:", response);

        setUser(response.users); // Save the fetched data to state
      } catch (err) {
        setUser(demoUser); // Fallback to demo data
      } finally {
        setLoading(false); // Stop the loading spinner
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once

  if (loading) return <p>Loading...</p>;

  return (
    <div className="home_page_container">
      {/* User Cards */}
      <div className="swiper_wrapper">
        <Swiper
          modules={[Mousewheel, A11y]}
          speed={700}
          spaceBetween={0}
          slidesPerView={1}
          direction="vertical"
          mousewheel
          className="swiper_container"
          style={{ height: "90vh" }}
        >
          {users ? (
            users.map((user, index) => (
              <SwiperSlide key={index} className="swiper_slide">
                <div className="card">
                  <UserCard {...user} />
                </div>
              </SwiperSlide>
            ))
          ) : (
            <p>No users found</p>
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default HomePage;
