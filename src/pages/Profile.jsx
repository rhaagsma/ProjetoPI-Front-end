import React, { useState, useEffect, useContext } from "react";
import { Button } from "src/components/ui/button";
import { Context } from "src/services/context";
import  DeleteIcon from "../components/assets/Gato ofendido.jpeg";    
import gatio from "../components/assets/gatio.jpg";
import { Link } from "react-router-dom";
import { Input } from "src/components/ui/input";
import { getUserId } from "src/services/auth";
import { deleteUser, getUser, updateUser } from "src/services/users";
import { useToast } from "src/hooks/use-toast";
import { getAllAddresses } from "src/services/address";
import AddressCard from "src/components/addressCart";
import Modal from "./cruds/modal";
import CreateAddress from "src/components/createAddress";

const Profile = () => {
    const { toast } = useToast();
    const { Logout } = useContext(Context);
    const [role, setRole] = useState("");
    const [login, setName] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [password, setPassword] = useState("");
    const [addresses, setAddresses] = useState([]);
    const [imageSrc, setImageSrc] = useState(gatio);
    const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
    const [isImageClicked, setIsImageClicked] = useState(false);
    const [showCreateItem, setShowCreateItem] = useState(false);
    const userId = getUserId();

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
    const fetchUserData = async () => {
      const userId = getUserId();
      const response = await getUser(userId);
      if (!response.error) {
        setName(response.login);
        setEmail(response.email);
        setTelephone(response.telephone);
        
        const addressesA = await getAllAddresses(userId);
        setAddresses(addressesA);

        if(response.role !== 'CLIENT') {
          setRole("admin");
        } else {
          setRole("client");
        }
      } else {
        toast({
          title: 'Ops! Houve um erro',
          description: 'Não foi possível carregar os dados do usuário. Por favor, tente novamente.',
          variant: 'destructive',
        })
      }
    }
  
    const handleUpdate = async (e) => {
        e.preventDefault();
        const userId = getUserId();
        const user = { login, email, telephone, password };
        const res = await updateUser(userId, user);
        if (!res.error) {
          toast({
            title: 'Sucesso!',
            description: 'Dados atualizados com sucesso.',
          })
          await fetchUserData();
        } else {
          toast({
            title: 'Ops! Houve um erro',
            description: 'Não foi possível atualizar os dados do usuário. Por favor, tente novamente.',
            variant: 'destructive',
          })
        }
    }
    const handleDelete = async (e) => {
      e.preventDefault();
      
      const userId = getUserId();
      const response = await deleteUser(userId);
      if (!response.error) {
        toast({
          title: 'Sucesso!',
          description: 'Conta deletada com sucesso.',
        })
        Logout();
      } else {
        toast({
          title: 'Ops! Houve um erro',
          description: 'Não foi possível deletar a conta. Por favor, tente novamente.',
          variant: 'destructive',
        })
      }
    }

    const handleShowCreateItem = () => {
      setShowCreateItem(true);
    }

    const handleHideCreateItem = () => {
      setShowCreateItem(false);
    }
  
    useEffect(() => {
        fetchUserData()
    }, [])

    return (
      <div className="container mx-auto p-4 flex flex-col sm:flex-row items-center justify-center">
        <div
          className="flex flex-col items-center mb-4 sm:mb-0 sm:mr-4 relative"
          onMouseMove={handleMouseMove}
          onClick={handleImageClick}
        >        
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
              placeholder="Login"
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
              placeholder="Telefone"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold">Endereços</h2>
                <Button className="cursor-pointer w-fit" onClick={handleShowCreateItem} type="button">
                  Adicionar endereço
                </Button>
              </div>
              <ul className="flex gap-2 flex-col">
                {addresses.map((address) => (
                  <AddressCard key={address.id} data={address} />
                ))}
              </ul>
            </div>

            <Button className="w-full cursor-pointer" onClick={handleUpdate}>
              Atualizar dados
            </Button>
            <Button onClick={Logout}>
              Sair
            </Button>
            <Button
              className="w-full cursor-pointer bg-red-500 text-white"
              onMouseEnter={() => setImageSrc(DeleteIcon)}
              onMouseLeave={() => setImageSrc(gatio)}
              onClick={handleDelete}
            >
              Deletar conta
            </Button>
            {role === "admin" && (
              <Link to="/adminPage">
                <Button className="w-full cursor-pointer">
                  Painel administrativo
                </Button>
              </Link>
            )}
          </form>
        </div>
        {showCreateItem && (
          <Modal>
          <div className="mt-4">

              <CreateAddress user= {userId} handleHide={handleHideCreateItem} />

          </div>
          </Modal>
        )}
      </div>
    );
  };
    
    export default Profile;