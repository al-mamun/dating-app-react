import UserCard from "./components/UserCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, A11y } from "swiper/modules";
declare module 'swiper/modules';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import "./Home.css";

const HomePage = () => {
  const users = [
    {
      image:
        "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Beautiful Castle",
      presentation:
        "The place is close to Metro Station and bus stop just 2 min by walk and near to Naviglio.",
      location: "Milan, Italy",
      price: "$459",
    },
    {
      image:
        "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Cozy Loft",
      presentation:
        "Enjoy the urban vibes, close to cafes and cultural spots in downtown.",
      location: "Paris, France",
      price: "$399",
    },
    {
      image:
        "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Cozy Loft",
      presentation:
        "Enjoy the urban vibes, close to cafes and cultural spots in downtown.",
      location: "Paris, France",
      price: "$399",
    },
    {
      image:
        "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Cozy Loft",
      presentation:
        "Enjoy the urban vibes, close to cafes and cultural spots in downtown.",
      location: "Paris, France",
      price: "$399",
    },
    {
      image:
        "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Cozy Loft",
      presentation:
        "Enjoy the urban vibes, close to cafes and cultural spots in downtown.",
      location: "Paris, France",
      price: "$399",
    },
    {
      image:
        "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Cozy Loft",
      presentation:
        "Enjoy the urban vibes, close to cafes and cultural spots in downtown.",
      location: "Paris, France",
      price: "$399",
    },
  ];

  return (
    <div className="home_page_container">
      {/* Breadcrumb */}
      <div className="w-full z-50 sticky top-0 backdrop-blur-md bg-opacity-30 flex justify-center p-4 mx-auto">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-bold">Analytics</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* User Cards */}
      <div className="swiper_wrapper">
        <Swiper
          modules={[Mousewheel, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          direction="vertical"
          mousewheel
          className="swiper_container"
          style={{ height: "90vh" }}
        >
          {users.map((user, index) => (
            <SwiperSlide key={index} className="swiper_slide">
              <div className="card">
                <UserCard {...user} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomePage;
