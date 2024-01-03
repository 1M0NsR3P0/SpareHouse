import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DemoData = [
  {
    name: 'Dainese Super Speed 4 Jacket',
    discount: true,
    discountAmount: 15,
    price: 859.95,
    description: 'The latest innovation in motorcycle jacket technology.',
    reviews: [],
    color: 'Black/Charcoal Grey',
    quantity: 0,
    images: [
      'jacket.png',
      'pant.png',
      'globes.png',
      // Add more image URLs as needed
    ],
  },
  {
    name: 'Arai XD-4 Helmet',
    discount: false,
    discountAmount: 0,
    price: 639.95,
    description: 'High-quality helmet for motorcycle enthusiasts.',
    reviews: [],
    color: 'Red',
    quantity: 0,
    images: [
      'arai_jacket.png',
      'arai_pant.png',
      'arai_globes.png',
      // Add more image URLs as needed
    ],
  },
  // Add more related products as needed
];

const Product = () => {
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(DemoData[0].images[0]);

  const handleAddToCart = async (productName) => {
    // Replace this with your actual implementation
    console.log(`Product added to cart: ${productName}`);
  };

  const alsoLikeProducts = DemoData.slice(1, 4); // Get the next 3 products as "You May Also Like"

  const handleImageClick = (image, isMainImage = false) => {
    setSelectedImage(image);
    if (isMainImage) {
      setIsModalOpen(true);
    }
    console.log(image);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalImageClick = () => {
    // Handle scaling up the image in the modal (customize this behavior as needed)
    console.log('Image scaled up');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
      <div style={{ flex: '1', marginRight: '20px' }}>
        <h1>Home Street Street Bike Closeouts</h1>
        <div style={{ border: '1px solid #ccc', padding: '20px', marginBottom: '20px' }}>
          <h2>{DemoData[0].name}</h2>
          <p>Price: ${DemoData[0].price}</p>
          {DemoData[0].discount && <p>Discount: {DemoData[0].discountAmount}%</p>}
          <p>Description: {DemoData[0].description}</p>
          <div>
            <h3>Main Product Images:</h3>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src={selectedImage}
                alt="Main Product Image"
                style={{ maxWidth: '300px', maxHeight: '300px', cursor: 'pointer', marginRight: '20px' }}
                onClick={() => handleImageClick(selectedImage, true)}
              />
              {DemoData[0].images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Product Image ${index + 1}`}
                  style={{ maxWidth: '50px', cursor: 'pointer', marginRight: '10px' }}
                  onClick={() => handleImageClick(image)}
                />
              ))}
            </div>
          </div>
          <button onClick={() => handleAddToCart(DemoData[0].name)}>Add to Cart</button>
        </div>
      </div>
      <div style={{ flex: '1' }}>
        <h3>You May Also Like</h3>
        {alsoLikeProducts.map((product, index) => (
          <div key={index} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <div>
              <img
                src={product.images[0]} // Displaying only the first image as a thumbnail
                alt={`Product Thumbnail ${index + 1}`}
                style={{ maxWidth: '100px', cursor: 'pointer' }}
                onClick={() => handleImageClick(product.images[0])}
              />
            </div>
            <button onClick={() => handleAddToCart(product.name)}>Add to Cart</button>
          </div>
        ))}
      </div>
      {/* Image Modal */}
      {isModalOpen && (
        <div
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onClick={handleModalClose}
        >
          <img
            src={selectedImage}
            alt="Zoomed Product Image"
            style={{ maxWidth: '80%', maxHeight: '80%', cursor: 'pointer' }}
            onClick={handleModalImageClick}
          />
        </div>
      )}
    </div>
  );
};

export default Product;
