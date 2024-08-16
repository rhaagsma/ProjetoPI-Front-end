import React, { useState, useEffect, useContext } from "react";
import { Button } from "src/components/ui/button";
import { getUser, updateUser, deleteUser } from "src/services/http-commons";
import { Context } from "src/services/context";
const Profile = () => {
    const [login, setName] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");

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
        <div className="container mx-auto p-4 flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-4">Profile Page</h1>
  
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
                <Button className="w-full cursor-pointer bg-red-500 text-white" onClick={handleDelete}>
                    Delete account
                </Button>
            </form>
  

        </div>
    );
};

export default Profile;