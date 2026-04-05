interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  thumbnail: string; 
}

export default async function ProductsPage() {
  try {
    
    const response = await fetch("https://dummyjson.com/products?limit=12");

    if (!response.ok) {
        throw new Error("Failed to fetch data from server");
    }

    const data = await response.json();
    const products: Product[] = data.products; // DummyJSON returns an object with a products array

    return (
      <div className="p-8 bg-gray-50 min-h-screen">
        <h1 className="text-4xl font-extrabold text-center mb-12 text-blue-800">
          Premium Store 🛒
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col border border-gray-100">
              <div className="h-56 bg-gray-200 overflow-hidden">
                <img 
                  src={product.thumbnail} 
                  alt={product.title} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" 
                />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <span className="text-[10px] font-bold text-blue-600 uppercase mb-1">{product.category}</span>
                <h2 className="text-lg font-bold text-gray-800 line-clamp-1 mb-2">{product.title}</h2>
                <p className="text-gray-500 text-sm line-clamp-2 mb-4">{product.description}</p>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-2xl font-black text-gray-900">${product.price}</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-xs font-bold hover:bg-blue-800 transition">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    throw new Error("Network issues! Please check your connection or try again.");
  }
}