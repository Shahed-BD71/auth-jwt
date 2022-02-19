import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home(props) {
  let navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [content, setContent] = useState();
  console.log(user);
  const getUser = async () => {
    const response = await axios.get("/auth", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
    });
    setUser(response.data);
  };

  const getContent = async () => {
    try {
      const response = await axios.get("https://api.quotable.io/random");
      setContent(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
    getContent();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  if (!localStorage.getItem("token")) {
    navigate("/login");
  }

  return (
    <div className="p-10 flex items-center h-screen justify-center">
      <div className="max-w-sm rounded flex justify-center flex-col overflow-hidden shadow-lg">
        <img className="" src="https://random.imagecdn.app/300/150" alt="" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            Welcome {user && user.name}
          </div>
          <p className="text-gray-700 text-xl">{content && content.content}</p>
          <hr />
          <p className="text-gray-700 text-sm">{content && content.author}</p>
        </div>
        <button
          onClick={handleLogout}
          type="button"
          className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          LogOut
        </button>
      </div>
    </div>
  );
}
