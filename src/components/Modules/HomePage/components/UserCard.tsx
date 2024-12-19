import "../Home.css";
import { FaCalendarAlt, FaHeart } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

interface UserCardProps {
  user_id: number;
  name: string;
  mobile: string;
  bio: string;
  gender: "male" | "female" | "other"; // Assuming these are the possible values for gender
  status: "active" | "inactive"; // Assuming these are the possible values for status
  avatar: string;
}

const UserCard = ({ avatar, name, bio }: UserCardProps) => {
  return (
    <div className="user_card">
      <div className="user_card_container w-full">
        {/* Picture */}
        <div className="user_image_container">
          <img src={avatar} alt={name} className="user_image" />
        </div>

        {/* Content Section */}
        <div className="user_content relative">
          <h3 className="user_name">{name}</h3>
          <p className="user_presentation line-clamp-2">{bio}</p>
          {/* <hr className="my-2" /> */}
          <div className="user_footer absolute bottom-10 left-0 right-0">
            {/* Action Buttons */}
            <div className="user_action_buttons">
              <button className="btn like">
                <FaHeart size={20} />
              </button>
              <button className="btn check">
                <FaCalendarAlt size={20} />
              </button>
              <button className="btn invite">
                <FaSquareInstagram size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
