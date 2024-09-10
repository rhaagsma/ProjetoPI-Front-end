import React, { useState } from "react";
import { Button } from "src/components/ui/button";
import { deleteAddress } from "src/services/http-commons";
import Modal from "src/pages/cruds/modal";
import CreateAddress from "./CreateAddress";

const AddressCard = ({ data, user }) => {
    const [showModal, setShowModal] = useState(false);

    const handleDeleteClick = async () => {
        try {
          const response = await deleteAddress(data.id);
          console.log(response);
        } catch (error) {
          console.error(error);
        }
      }

  return (
    <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
    {showModal && (
        <Modal>
            <CreateAddress user= {user} data={data} />
        </Modal>
    )}
    <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
    <div className="mb-4">
        <p>{data.name}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-gray-700 text-sm font-bold mb-2">CEP:</h3>
        <p>{data.CEP}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-gray-700 text-sm font-bold mb-2">Street:</h3>
        <p>{data.street}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-gray-700 text-sm font-bold mb-2">Number:</h3>
        <p>{data.number}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-gray-700 text-sm font-bold mb-2">City:</h3>
        <p>{data.city}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-gray-700 text-sm font-bold mb-2">Complement:</h3>
        <p>{data.complement}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-gray-700 text-sm font-bold mb-2">Neighbourhood:</h3>
        <p>{data.neighbourhood}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-gray-700 text-sm font-bold mb-2">State:</h3>
        <p>{data.state}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-gray-700 text-sm font-bold mb-2">Country:</h3>
        <p>{data.country}</p>
      </div>

      <div className="flex justify-between">
        <Button
        
          onClick={() => setShowModal(true)}
          className="flex items-center justify-between py-3"
        >
          Edit
        </Button>
        <Button
        
          onClick={handleDeleteClick}
          className="flex items-center justify-between py-3"     
        >
          Delete
        </Button>
      </div>

    </div>
    </div>
  )
}

export default AddressCard