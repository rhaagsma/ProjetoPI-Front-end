import React, { useState } from "react";
import { Button } from "src/components/ui/button";
import Modal from "src/pages/cruds/modal";
import CreateAddress from "./createAddress";
import { deleteAddress } from "src/services/address";

const AddressCard = ({ data, user }) => {
    const [showModal, setShowModal] = useState(false);
    const address = data;
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
        <p>{address?.name}</p>
      </div>
      <div className="mb-2">
        <p>{address?.CEP}</p>
      </div>
      <div className="mb-2">
        <p>{address?.street}</p>
      </div>
      <div className="mb-2">
        <p>{address?.number}</p>
      </div>
      <div className="mb-2">
        <p>{address?.city}</p>
      </div>
      <div className="mb-2">
        <p>{address?.complement}</p>
      </div>
      <div className="mb-2">
        <p>{address?.neighbourhood}</p>
      </div>
      <div className="mb-2">
        <p>{address?.state}</p>
      </div>
      <div className="mb-2">
        <p>{address?.country}</p>
      </div>

      <div className="flex justify-between">
        <Button
          type="button"
          onClick={() => setShowModal(true)}
          className="flex items-center justify-between py-3"
        >
          Editar
        </Button>
        <Button
          onClick={handleDeleteClick}
          className="flex items-center justify-between py-3 cursor-pointer bg-red-500 text-white"
        >
          Excluir
        </Button>
      </div>
    </div>
  )
}

export default AddressCard