import "../Home.css";
import { FaUserPlus } from "react-icons/fa";

interface UserCardProps {
  image: string;
  name: string;
  presentation: string;
  location: string;
  price: string;
}

const UserCard = ({ image, name, presentation }: UserCardProps) => {
  return (
    <div className="user_card">
      <div className="user_card_container">
        {/* Picture */}
        <div className="user_image_container">
          <img src={image} alt={name} className="user_image" />
        </div>

        {/* Content Section */}
        <div className="user_content relative">
          <h3 className="user_name">{name}</h3>
          <p className="user_presentation">{presentation}</p>
          {/* <hr className="my-2" /> */}
          <div className="user_footer absolute bottom-10 left-0 right-0">
            {/* Action Buttons */}
            <div className="user_action_buttons">
              <button className="btn like">👍</button>
              <button className="btn check">✔</button>
              <button className="btn invite">
                <FaUserPlus size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
