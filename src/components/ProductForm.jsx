import React, { useState } from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";

const ProductForm = () => {

  const [productData, setProductData] = useState({
    productName: "",
    description: "",
    condition: "",
    price: "0"
  });
  const [images, setImages] = useState([])

  const handleOnchange = (event) => {
    setProductData({ ...productData, [event.target.name]: event.target.value })
  }

  const handleAddProduct = (event) => {
    event.preventDefault()
    console.log(productData)
  }

  const handleImageChange = (event) => {
    const newImages = Array.from(event.target.files);
    setImages([...images, ...newImages]);
  }

  const handleRemoveImage = (index) => {
    setImages(prevImages =>
      prevImages.filter((_, i) => i !== index)
    );
  }

  return (
    <div className='flex flex-col h-lvh'>
      <div className='bg-gray-100 text-gray-950 dark:bg-gray-900 dark:text-gray-100 h-full overflow-auto'>
        <form className='flex flex-col w-full mx-auto md:w-1/2'>
          <h1 className='text-2xl mb-5 mt-3 text-center md:text-left mx-auto'>Add Product Details</h1>
          <div className='bg-gray-200 dark:bg-gray-800 p-8 rounded-md text-xl'>
            <div className='flex flex-col justify-center items-center'>
              <div className='w-full mb-4'>
                <label htmlFor="productName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
                <input type="text" onChange={handleOnchange} name='productName' id="productName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required />
              </div>
              <div className='w-full mb-4'>
                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Description</label>
                <textarea id="description" onChange={handleOnchange} name='description' rows="2" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write breif about your product"></textarea>
              </div>
              <div className='flex flex-wrap justify-between w-full mb-4'>
                <div className='w-full md:w-1/3 mb-2 md:mb-0'>
                  <label htmlFor="condition" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select condition</label>
                  <select id="condition" onChange={handleOnchange} name='condition' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option defaultValue="">Condition</option>
                    <option value="new">New</option>
                    <option value="refurbished">Refurbished</option>
                    <option value="used">Used</option>
                  </select>
                </div>
                <div className='w-full md:w-1/3 mb-2 md:mb-0'>
                  <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Set Price /-</label>
                  <input type="number" onChange={handleOnchange} name='price' id="price" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" required />
                </div>
              </div>
              <div className='w-full mb-4'>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="productImage">Product Image</label>
                <input name='productImage' onChange={handleImageChange} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="productImage" type="file" />
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG.</p>
              </div>
              <div className='flex justify-end w-full'>
                <button type="button" onClick={handleAddProduct} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none dark:focus:ring-blue-800">Add Product</button>
              </div>
            </div>
          </div>
        </form>
        <div className='md:flex sm:flex lg:flex justify-center mt-4'>
          {images.map((image, index) => (
            <div key={index} className='mx-3 group'>
              <div className="relative">
                <img className="max-w-56 object-cover rounded-md shadow-md group-hover:opacity-75" src={URL.createObjectURL(image)} alt="image description" />
                <button type='button' onClick={() => handleRemoveImage(index)} className="absolute top-0 left-0 p-2 rounded-full bg-gray-200 opacity-0 group-hover:opacity-100 focus:outline-none">
                  <i className="bi bi-trash3-fill text-red-500 hover:text-red-700"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductForm
