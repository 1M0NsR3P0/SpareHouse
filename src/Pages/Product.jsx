import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HotProducts from '../Home/HotProducts';
import './product.css'

const DemoData = [
  {
    name: 'Dainese Super Speed 4 Jacket',
    discount: true,
    discountAmount: 15,
    price: 859.95,
    description: 'lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt eaque deleniti consectetur esse aspernatur recusandae assumenda cum molestiae ducimus soluta? Quam dolor recusandae hic, nesciunt modi explicabo magni eum quidem dolore. Assumenda nobis commodi magni labore ut quia fugit dolor? Unde eaque consequatur nesciunt, totam nulla beatae esse nihil, magni, voluptate molestiae quo debitis eos. Animi, nisi iste! Odit id ullam numquam illo quia. Mollitia eum, nisi amet quia dignissimos incidunt vel quam quaerat. Pariatur nulla, laudantium neque, odit maxime, tempora alias similique veniam eum facilis excepturi explicabo! Praesentium consequuntur error odio repellat saepe, dolorum voluptatum eum mollitia repellendus quia tempore placeat eius itaque esse consectetur beatae fugiat soluta deleniti, sed sit dolorem dignissimos perspiciatis voluptates minus! Fuga repellendus reprehenderit est, nesciunt, ut optio deserunt, in earum aliquam pariatur culpa repudiandae doloremque vitae? Et tempore aliquid sequi corporis molestias perferendis fuga ratione, veritatis deserunt quia accusantium consectetur excepturi eveniet enim porro aperiam dolorum debitis? Voluptatem repudiandae delectus qui odio deleniti animi consequuntur. Explicabo accusantium odit facilis autem distinctio doloremque enim quos at ratione aliquam repellat nobis iure libero laudantium assumenda porro dicta magni minus velit in temporibus, aliquid aspernatur adipisci. Consectetur quia voluptatibus, autem ducimus optio laborum perspiciatis obcaecati cum? Odit dolore praesentium perspiciatis, atque doloribus nihil nobis sit fuga nam. Qui voluptatum quod deleniti esse ducimus nulla doloremque est consequatur harum aut, voluptas atque enim pariatur saepe, obcaecati eaque debitis, quibusdam nam dolores ea? Laboriosam ea assumenda ut animi nobis, nisi inventore at voluptatum consectetur doloribus qui reprehenderit. Aperiam consequatur magnam, sed nobis eos ad. Totam alias eum suscipit, quos quam iure provident ex cum iusto recusandae? Placeat quas reprehenderit officiis facilis, numquam, debitis itaque accusantium fuga nemo laudantium quos quibusdam nostrum ratione architecto neque minus saepe? Porro temporibus quisquam a rem optio placeat fugiat dignissimos cupiditate recusandae, praesentium non perferendis dolore repudiandae. Ut iusto autem rerum minima doloribus temporibus reiciendis corrupti. Quis atque aspernatur ipsa voluptatum in laboriosam officiis, accusamus quasi deserunt deleniti possimus expedita mollitia quam fuga tenetur eius officia sint nobis. Excepturi sapiente minus quod, eveniet eos maxime fugiat quae veritatis repudiandae rerum adipisci non nulla nisi perferendis tempora consequatur at? Praesentium delectus, et autem pariatur ut asperiores, distinctio enim vitae omnis perferendis animi voluptates eveniet quas quo labore ullam! Nulla, dignissimos assumenda quibusdam ex consequatur, qui quia, eaque dolore est eum hic iste officia cupiditate quidem autem vero. Possimus voluptate laboriosam perspiciatis. Laudantium possimus veritatis a iusto voluptatem nobis, ullam eius suscipit doloremque? Doloremque nobis alias porro expedita ratione similique. Vel, at iste tempora animi dolores laboriosam minus illum consequatur beatae fugiat voluptate temporibus odit perferendis doloribus expedita, ipsam qui sapiente eos, modi praesentium nulla voluptates! Saepe ea harum blanditiis nostrum nisi, distinctio facilis modi autem. Voluptatibus doloremque voluptatem voluptate necessitatibus assumenda enim harum fuga ipsum quibusdam cum earum velit, ea, possimus repellendus facilis laboriosam repellat. In libero eius cumque id quaerat quidem nostrum fuga, amet molestiae laudantium assumenda sint magni delectus nesciunt reprehenderit illum quas quos quis qui. Iure voluptatibus excepturi minima voluptas id!',
    reviews: [],
    color: 'Black/Charcoal Grey',
    quantity: 0,
    images: [
      'jacket.png',
      'pant.png',
      'globes.png',
      'globes.png',
      'globes.png',
      'globes.png',
      'globes.png',
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
      'pant.png',
      'jacket.png',
      'globes.png',
      // Add more image URLs as needed
    ],
  },
  {
    name: 'Arai XD-5 Helmet',
    discount: false,
    discountAmount: 0,
    price: 639.95,
    description: 'High-quality helmet for motorcycle enthusiasts.',
    reviews: [],
    color: 'Red',
    quantity: 0,
    images: [
      'jacket.png',
      'pant.png',
      'globes.png',
      // Add more image URLs as needed
    ],
  },
  {
    name: 'Arai XD-5 Helmet',
    discount: false,
    discountAmount: 0,
    price: 639.95,
    description: 'High-quality helmet for motorcycle enthusiasts.',
    reviews: [],
    color: 'Red',
    quantity: 0,
    images: [
      'jacket.png',
      'pant.png',
      'globes.png',
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
    console.log(`Product added to cart: ${productName}`);//Use Fetch method to handle datas here
  };

  const alsoLikeProducts = DemoData.slice(1, 4); // Get the next 3 products as "You May Also Like"

  const handleImageClick = (image, isMainImage = false) => {
    if (isMainImage) {
      setSelectedImage(image);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalImageClick = () => {
    console.log('Image scaled up');
  };

  return (
    <div style={{ padding: '20px', fontWeight: 600 }}>
      <h1 className='text-center text-2xl mb-2'>Home Street Street Bike Closeouts</h1>
      <div style={{ display: "flex", justifyContent: "space-evenly" }} className='  md:flex-row flex-col'>
        {/* Main Product */}
        <div style={{ marginRight: '20px' }} className='md:w-[70%] w-full  h-[65vh] border'>
          <div style={{ border: '1px solid #ccc', padding: '20px', marginBottom: '20px' }} className='flex flex-row-reverse justify-between h-[65vh] gap-4'>
            <div className='border px-3'>
              <h2 className='mb-3'>{DemoData[0].name}</h2>
              <p className='mb-3'>Price: ${DemoData[0].price}</p>
              {DemoData[0].discount && <p>Discount: {DemoData[0].discountAmount}%</p>}
              <p className='w-full h-[400px] overflow-y-auto mt-5'>Description: {DemoData[0].description}</p>
              <button onClick={() => handleAddToCart(DemoData[0].name)} className='mt-2'>Add to Cart</button>
            </div>
            <div style={{ alignItems: 'center' }} className=''>
              <img
                src={selectedImage}
                alt="Main Product Image"
                style={{ maxWidth: '300px', maxHeight: '300px', cursor: 'pointer', marginRight: '20px' }}
                onClick={() => {
                  handleImageClick(selectedImage, true)
                  setIsModalOpen(true)
                }}
                className='border'
              />
              <div className='flex w-[320px] overflow-x-scroll py-[10px]'>
                {DemoData[0].images.map((image, index) => (
                  <img
                    className='border'
                    key={index}
                    src={image}
                    alt={`Product Image ${index + 1}`}
                    style={{ maxWidth: '50px', cursor: 'pointer', marginRight: '10px' }}
                    onClick={() => handleImageClick(image, true)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* you may also like section*/}
        <div style={{ width: "280px" }}>
          <h3>You May Also Like</h3>
          {alsoLikeProducts.map((product, index) => (
            <div key={index} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }} className='flex items-center gap-2 justify-between h-[180px]'>
              <div>
                <img
                  src={product.images[0]} // Displaying only the first image as a thumbnail
                  alt={`Product Thumbnail ${index + 1}`}
                  style={{ maxWidth: '100px', cursor: 'pointer' }}
                  onClick={() => handleImageClick(product.images[0])}
                />
              </div>
              <div>
                <h2>{product.name}</h2>
                <p>Price: ${product.price}</p>
                <button onClick={() => handleAddToCart(product.name)} className='h-[40px] text-[0.7rem]'>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* popular sections */}
      <div className='relative flex justify-center  text-blue-700'>
        <div className='h-[550px]'>
          <h1 className='text-center text-2xl'>People Are Buying These Product</h1>
          <HotProducts />
        </div>
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
