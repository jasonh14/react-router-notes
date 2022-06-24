import {useNavigate, useParams, useResolvedPath} from "react-router-dom";

const Profile = () => {
  let navigate = useNavigate();
  let {username} = useParams();

  return (
    <div>
      <p>This is {username} Profile Page</p>
      <button
        onClick={() => {
          navigate("/about");
        }}
      >
        Change to about page
      </button>
    </div>
  );
};

export default Profile;
