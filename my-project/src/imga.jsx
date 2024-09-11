// eslint-disable-next-line no-unused-vars
import React from 'react';




const imageData = [
  { src: "https://glovo.dhmedia.io/image/customer-assets-glovo/countries/Stores/o57akgxyabkgo04kjlbu?t=W3siYXV0byI6eyJxIjoibG93In19XQ==", alt: "kfc-pic" },
  { src: "https://glovo.dhmedia.io/image/customer-assets-glovo/countries/Stores/egmjz07ibkbr9uopccsc?t=W3siYXV0byI6eyJxIjoibG93In19XQ==", alt: "pink" },
  { src: "https://glovo.dhmedia.io/image/customer-assets-glovo/countries/Stores/hlwqevdvj0cfzss5gpoi?t=W3siYXV0byI6eyJxIjoibG93In19XQ==", alt: "plce" },
  { src: "https://glovo.dhmedia.io/image/customer-assets-glovo/countries/Stores/jui8atcdisz1fyj8xqif?t=W3siYXV0byI6eyJxIjoibG93In19XQ==", alt: "sensation" },
  { src: "https://glovo.dhmedia.io/image/customer-assets-glovo/countries/Stores/zdpfnwewlbzc40surjgw?t=W3siYXV0byI6eyJxIjoibG93In19XQ==", alt: "kitchen" },
  { src: "https://glovo.dhmedia.io/image/customer-assets-glovo/countries/Stores/e0pcegpluhtq0akciakd?t=W3siYXV0byI6eyJxIjoibG93In19XQ==", alt: "house" },
  { src: "https://glovo.dhmedia.io/image/customer-assets-glovo/countries/Stores/cg4sdskoaecoxhp7lhkt?t=W3siYXV0byI6eyJxIjoibG93In19XQ==", alt: "me" },
  { src: "https://glovo.dhmedia.io/image/customer-assets-glovo/countries/Stores/nem66tghxmqigr2fodaq?t=W3siYXV0byI6eyJxIjoibG93In19XQ==", alt: "letsg0" },
];

const ImageGrid = () => {
  return (

    <>

    <h1>
    Top restaurants and more in Nigeria
</h1>

    <div className="container mx-auto px-4">
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-col0201001ter">
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-auto object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            />
          </li>
        ))}
      </ul>
    </div>


    </>
  );
};

        

export default ImageGrid