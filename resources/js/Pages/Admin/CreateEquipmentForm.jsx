import { useState } from 'react'
import { Inertia } from '@inertiajs/inertia'

const CreateEquipmentForm = () => {
  // State untuk menyimpan nilai input
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    rental_price_per_day: '',
    purchase_price: '',
    availability_status: '',
    category_id: '',
    brand: '',
  })

  // Handle perubahan nilai input
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  // Handle submit form
  const handleSubmit = (e) => {
    e.preventDefault()
    // Kirim data menggunakan Inertia
    Inertia.post('/equipment/store', formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="rental_price_per_day">Rental Price per Day:</label>
        <input
          type="text"
          id="rental_price_per_day"
          name="rental_price_per_day"
          value={formData.rental_price_per_day}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="purchase_price">Purchase Price:</label>
        <input
          type="text"
          id="purchase_price"
          name="purchase_price"
          value={formData.purchase_price}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="availability_status">Availability Status:</label>
        <input
          type="text"
          id="availability_status"
          name="availability_status"
          value={formData.availability_status}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="category_id">Category ID:</label>
        <input
          type="text"
          id="category_id"
          name="category_id"
          value={formData.category_id}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="brand">Brand:</label>
        <input
          type="text"
          id="brand"
          name="brand"
          value={formData.brand}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

export default CreateEquipmentForm
