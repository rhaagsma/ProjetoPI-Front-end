import React, { useState, useEffect, useContext } from "react";
import { Button } from "src/components/ui/button";
import { getUser, updateUser, deleteUser } from "src/services/http-commons";
import { Context } from "src/services/context";
import  DeleteIcon from "../components/assets/Gato ofendido.jpeg";    
import gatio from "../components/assets/gatio.jpg";

const Profile = () => {
    const [login, setName] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [showDeleteIcon, setShowDeleteIcon] = useState(false);
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");
    const [imageSrc, setImageSrc] = useState(gatio);

    const fetchUserData = async () => {

        const response = await getUser(userId);
        if (response) {

            setName(response.login);
            setEmail(response.email);
            setTelephone(response.telephone);
            setPassword(response.password);
            setAddress(response.address);
        }
    };
  
    const handleUpdate = async (e) => {
        e.preventDefault();
        const user = { login, password};
        const response = await updateUser(userId, user);
        if (response.status === 200) {
            console.log(response.data);
        }
    };
    const handleDelete = async (e) => {
        e.preventDefault();
        const response = await deleteUser(userId);
        if (response.status === 200) {
            console.log(response.data);
        }
    };
  
    useEffect(() => {
        fetchUserData();
    }, []);
  
    return (
        <div className="container mx-auto p-4 flex flex-col sm:flex-row items-center justify-center">
            <div className="flex flex-col items-center mb-4 sm:mb-0 sm:mr-4">
                <img
                    src={imageSrc}
                    alt="gatio icon"
                    className="w-60 h-60"
                />
                {/*<h1 className="text-4xl font-bold text-center mt-2"></h1>*/}
            </div>
            <div className="flex flex-col gap-4 w-full sm:max-w-sm">
                <h1 className="text-2xl font-bold mb-4 text-center">Profile Page</h1>
    
                <form className="flex flex-col gap-4 w-full max-w-sm">
                    <input
                        type="text"
                        className="border border-gray-300 p-2 rounded w-full"
                        placeholder="Name"
                        value={login}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        className="border border-gray-300 p-2 rounded w-full"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="text"
                        className="border border-gray-300 p-2 rounded w-full"
                        placeholder="Telephone"
                        value={telephone}
                        onChange={(e) => setTelephone(e.target.value)}
                    />
                    <input
                        type="password"
                        className="border border-gray-300 p-2 rounded w-full"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        type="text"
                        className="border border-gray-300 p-2 rounded w-full"
                        placeholder="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />            
                    <Button className="w-full cursor-pointer" onClick={handleUpdate}>
                        Update
                    </Button>
                    <Button
                        className="w-full cursor-pointer bg-red-500 text-white"
                        onMouseEnter={() => setImageSrc(DeleteIcon)}
                        onMouseLeave={() => setImageSrc(gatio)}
                        onClick={handleDelete}
                    >
                        Delete account
                    </Button>

                </form>
            </div>
        </div>
    );
};


export default Profile;