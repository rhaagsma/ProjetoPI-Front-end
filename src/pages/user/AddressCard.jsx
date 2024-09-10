import React, { useState } from "react";
import { Button } from "src/components/ui/button";
import { deleteAddress } from "src/services/http-commons";
import Modal from "src/pages/cruds/modal";
import CreateAddress from "./CreateAddress";

const AddressCard = ({ data, user }) => {
    const [showModal, setShowModal] = useState(false);
    const address = data[0];
    const handleDeleteClick = async () => {
        try {
          const response = await deleteAddress(address.id);
          console.log(response);
        } catch (error) {
          console.error(error);
        }
      }

  return (
    <div className="w-full max-w-md p-2 bg-white rounded-lg shadow-md">
      {showModal && (
        <Modal>
          <CreateAddress user={user} data={address} />
        </Modal>
      )}

      <div className="mb-2">
        <p>{address.name}</p>
      </div>
      <div className="mb-2">
        <p>{address.CEP}</p>
      </div>
      <div className="mb-2">
        <p>{address.street}</p>
      </div>
      <div className="mb-2">
        <p>{address.number}</p>
      </div>
      <div className="mb-2">
        <p>{address.city}</p>
      </div>
      <div className="mb-2">
        <p>{address.complement}</p>
      </div>
      <div className="mb-2">
        <p>{address.neighbourhood}</p>
      </div>
      <div className="mb-2">
        <p>{address.state}</p>
      </div>
      <div className="mb-2">
        <p>{address.country}</p>
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
          className="flex items-center justify-between py-3 cursor-pointer bg-red-500 text-white"
        >
          Delete
        </Button>
      </div>
    </div>
  )
}

export default AddressCard