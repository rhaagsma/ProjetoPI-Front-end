import React, { useState, useEffect, useContext } from "react";
import { Button } from "src/components/ui/button";
import { getUser, updateUser, deleteUser, getAllAddresses } from "src/services/http-commons";
import { Context } from "src/services/context";
import  DeleteIcon from "../../components/assets/Gato ofendido.jpeg";    
import gatio from "../../components/assets/gatio.jpg";
import { Link } from "react-router-dom";
import { Input } from "src/components/ui/input";
import AddressCard from "./AddressCard";
import CreateAddress from "./CreateAddress";

const Profile = () => {
    const { Logout } = useContext(Context);
    const [role, setRole] = useState("");
    const [login, setName] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [password, setPassword] = useState("");
    const [addresses, setAddresses] = useState([]);
    const userId = localStorage.getItem("userId");

    const [imageSrc, setImageSrc] = useState(gatio);
    const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
    const [isImageClicked, setIsImageClicked] = useState(false);
    const [orders, setOrders] = useState([]);
    const [showCreateItem, setShowCreateItem] = useState(false);



    const handleImageClick = () => {
      setIsImageClicked(true);
    }
  
    const handleMouseMove = (event) => {
      if (isImageClicked) {
        const distancex = 520;
        const distancey = 420;
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        const imageX = mouseX - distancex;
        const imageY = mouseY - distancey;
  
        setImagePosition({ x: imageX, y: imageY });
      }
    }

    const fetchRelatedData = async (data) => {
      const addresses = await getAllAddresses();
      return data.map(userAddress => {
        const relatedAddress = addresses.filter(address => address.id === userAddress.addressId);
        return relatedAddress ? relatedAddress : null;
      })
    }
    const handleUpdate = async (e) => {
        e.preventDefault();
        const user = { login, email, telephone, password };
        const response = await updateUser(userId, user);
        if (response.status === 200) {
            console.log(response.data)
        }
    }
    const handleDelete = async (e) => {
      
        const response = await deleteUser(userId);
        if (response.status === 200) {
            console.log(response.data)
        }
    }
    
    useEffect(() => {
      const fetchUserData = async () => {

        const response = await getUser(userId);
        if (response) {

            setName(response.login);
            setEmail(response.email);
            setTelephone(response.telephone);
            setAddresses(await fetchRelatedData(response.addresses));
            setRole(response.role);
            setOrders(response.order);
            
        }
        
    }
    fetchUserData()
    }, [userId])

    const handleShowCreateItem = () => {
      setShowCreateItem(true);
    }
  
    const handleHideCreateItem = () => {
      setShowCreateItem(false);
    }

    return (
<div className="container mx-auto p-4 flex flex-row sm:flex-row items-center justify-center">
      <div
        className="flex flex-col items-center mb-4 sm:mb-0 sm:mr-4"
        onMouseMove={handleMouseMove}
        onClick={handleImageClick}
        style={{ position: "relative", width: 600, height: "auto" }}
      >        
      <div className=" absolute px-30">
        <Button
          onClick = {Logout}
        >
          Logout
        </Button>
        </div>
        <img
          src={imageSrc}
          alt="gatio icon"
          className="w-60 h-60"
          style={{ position: "relative", left: imagePosition.x, top: imagePosition.y }}
        />

      </div>
          <div className="flex flex-col gap-4 w-full sm:max-w-sm">
            <h1 className="text-2xl font-bold mb-4 text-center">Profile Page</h1>
    
            <form className="flex flex-col gap-4 w-full max-w-sm">
              <Input
                type="text"
                placeholder="Name"
                value={login}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="text"
                placeholder="Telephone"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
              />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
              {role === "admin" && (
                <Link to="/adminPage">
                  <Button className="w-full cursor-pointer">
                    Admin Page
                  </Button>
                </Link>
              )}
            </form>

            
          </div>            
          <div className="container mx-auto p-4 flex flex-col items-center justify-center">
            <h2 className="text-xl font-bold mb-4">Your Addresses</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Button
                type="button"
                onClick={handleShowCreateItem}
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <svg
                  className="w-6 h-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Add Address
              </Button>
            {addresses.length ? (
              addresses.map(address => (
                <AddressCard user= {userId} data={address}  />
              ))
            ) : (
              <p className="text-gray-600">Nenhum endereço encontrado</p>
            )}
        </div>
      </div>
      {showCreateItem && (
        <div className="mt-4">
          
            <CreateAddress user= {userId} handleHide={handleHideCreateItem} />

        </div>
      )}
    </div>
  )
}

export default Profile