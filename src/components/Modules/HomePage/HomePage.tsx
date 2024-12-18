import UserCard from "./components/UserCard";
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
  ];

  return (
    <div className="home_page_container my-3">
      {/* Breadcrumb Menu */}
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
      <div className="flex flex-col items-center gap-5">
        {users.map((user, index) => (
          <UserCard key={index} {...user} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
