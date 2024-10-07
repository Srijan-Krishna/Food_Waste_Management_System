import React,{ useEffect, useState }from 'react'

function Adedproducts() {
     const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [r,setr]=useState([]);
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await fetch('https://backend-food-management.onrender.com/product/getproducts'); // adjust the URL as needed
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setProducts(data.products);
          setr(data.r)
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchProducts();
    }, []);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }
  
    return (
        <div className='productSection'>
        {!products ? (
            <p>No products added</p>
        ) : (
            <table className="product-table">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>firmName</th>
                        <th>discription</th>
                        <th>category</th> 
                        <th>contact</th> 
                        <th>area</th> 

                       
                    </tr>
                </thead>
                <tbody>
                    {products.map((item,index)=>{
                            return (
                                <>
                                    <tr key={item._id}>
                                        <td>{item.productName}</td>
                                        <td>{r[index].firmName}</td>
                                        <td>{item.description}</td>
                                        <td>{item.category[0]}{' / '}{item.category[1]}</td>
                                        <td>{r[index].contact}</td>
                                        <td>{r[index].area}</td>
                                    </tr>
                                </>
                            )
                    })}
                </tbody>
            </table>
         )}
    </div>
    );
  };
  

export default Adedproducts
