import React, { useState, useEffect } from "react";
import { Button } from "src/components/ui/button";
import { Input } from 'src/components/ui/input'
import { saveAddress, updateAddress } from "src/services/http-commons";

const AddressCard = ({ user, data, handleHide }) => {
  const [addressname, setAddressname] = useState("");
  const [addresscep, setAddresscep] = useState("");
  const [addressstreet, setAddressstreet] = useState("");
  const [addressnumber, setAddressnumber] = useState("");
  const [addresscity, setAddresscity] = useState("");
  const [addresscomplement, setAddresscomplement] = useState("");
  const [addressneighbourhood, setAddressneighbourhood] = useState("");
  const [addressstate, setAddressstate] = useState("");
  const [addresscountry, setAddresscountry] = useState("");

  const handleSaveAddress = async () => {
    
    const address = {
        name: addressname,
        CEP: addresscep,
        street: addressstreet,
        number: addressnumber,
        city: addresscity,
        complement: addresscomplement,
        neighbourhood: addressneighbourhood,
        state: addressstate,
        country: addresscountry,
        user: user
    }
    try {
        if (data) {
  
          const response = await updateAddress(data.id, address);
          if (!response.ok) {
            throw new Error('Failed to update address');
          }
        } else {
          
          const response = await saveAddress(address);
          if (!response.ok) {
            throw new Error('Failed to save address');
          }
        }
        setAddressname('')
        setAddresscep('')
        setAddressstreet('')
        setAddressnumber('')
        setAddresscity('')
        setAddresscomplement('')
        setAddressneighbourhood('')
        setAddressstate('')
        setAddresscountry('')
  
        console.log('Product saved successfully');
      } catch (error) {
        console.error('Error saving product:', error);
      }

    }
  

  useEffect(() => {


    if (data) {

        setAddressname(data.name)
        setAddresscep(data.CEP)
        setAddressstreet(data.street)
        setAddressnumber(data.number)
        setAddresscity(data.city)
        setAddresscomplement(data.complement)
        setAddressneighbourhood(data.neighbourhood)
        setAddressstate(data.state)
        setAddresscountry(data.country)
    }
  }, [data]);

  return (

    <div className="flex justify-center items-center h-screen">
      <form className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" >
            Name
          </label>
          <Input
            type="text"
            id="name"
            value={addressname}
            onChange={(e) => setAddressname(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" >
            CEP
          </label>
          <Input
            type="text"
            id="cep"
            value={addresscep}
            onChange={(e) => setAddresscep(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productPrice">
            Street
          </label>
          <Input
            type="text"
            id="street"
            value={addressstreet}
            onChange={(e) => setAddressstreet(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bands">
            Number
          </label>
          <Input
            type="number"
            id="number"
            value={addressnumber}
            onChange={(e) => setAddressnumber(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        <div>
        </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
            City
          </label>
          <Input
            type="text"
            id="city"
            value={addresscity}
            onChange={(e) => setAddresscity(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productQuantity">
            Complement
          </label>
          <Input
            type="text"
            id="complement"
            value={addresscomplement}
            onChange={(e) => setAddresscomplement(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productImage">
            neighbourhood
          </label>
          <Input
            type="text"
            id="neighbourhood"
            value={addressneighbourhood}
            onChange={(e) => setAddressneighbourhood(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productImage">
            state
          </label>
          <Input
            type="text"
            id="state"
            value={addressstate}
            onChange={(e) => setAddressstate(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productImage">
            country
          </label>
          <Input
            type="text"
            id="country"
            value={addresscountry}
            onChange={(e) => setAddresscountry(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          <Button onClick={handleSaveAddress}>
            {data ? 'Update Address' : 'Save Address'}
          </Button>
          <Button onClick={handleHide}>Cancel</Button>
        </div>
        
      </form>
    </div>
  )
}

export default AddressCard;