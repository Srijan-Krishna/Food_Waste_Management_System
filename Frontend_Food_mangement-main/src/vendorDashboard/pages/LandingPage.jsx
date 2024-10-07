import React, {useState, useEffect} from 'react'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import Login from '../components/forms/Login'
import Register from '../components/forms/Register'
import AddFirm from '../components/forms/AddFirm'
import AddProduct from '../components/forms/AddProduct'
import Welcome from '../components/Welcome'
import AllProducts from '../components/AllProducts'
import Adedproducts from '../components/Adedproducts'


const LandingPage = () => {
  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)
  const [showFirm, setShowFirm] = useState(false)
  const [showProduct, setShowProduct] = useState(false)
  const [showWelcome, setShowWelcome] = useState(false)
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [showLogOut, setShowLogOut] = useState(false)
  const [showFirmTitle, setShowFirmTitle] = useState(true)
  const[addedproduct,setAddedproduct]=useState(false);
  useEffect(()=>{
    const loginToken = localStorage.getItem('loginToken');
    if(loginToken){
        setShowLogOut(true)
        setShowWelcome(true)
    }
  }, [])

  useEffect(()=>{
      const firmName = localStorage.getItem('firmName');
      const firmId = localStorage.getItem('firmId')
      if(firmName || firmId ){
          setShowFirmTitle(false)
          setShowWelcome(true)
      }
  },[])



  const logOutHandler =()=>{
    confirm("Are you sure to logout?")
      localStorage.removeItem("loginToken");
      localStorage.removeItem("firmId");
      localStorage.removeItem('firmName');
      setShowLogOut(false)
      setShowFirmTitle(true)
      setShowWelcome(false)
      setAddedproduct(false);
  }

const showLoginHandler =()=>{
    setShowLogin(true)
    setShowRegister(false)
    setShowFirm(false)
    setShowProduct(false)
    setShowWelcome(false)
    setShowAllProducts(false)
    setAddedproduct(false);

}

const showRegisterHandler = ()=>{
    setShowRegister(true)
    setShowLogin(false)
    setShowFirm(false)
    setShowProduct(false)
    setShowWelcome(false)
    setShowAllProducts(false)
    setAddedproduct(false);

}

const showFirmHandler = ()=>{
  if(showLogOut){
    setShowRegister(false)
    setShowLogin(false)
    setShowFirm(true)
    setShowProduct(false)
    setShowWelcome(false)
    setShowAllProducts(false)
    setAddedproduct(false);
  }else{
    alert("please login");
    setShowLogin(true)
  }
  setAddedproduct(false);
}
const showProductHandler = ()=>{
  if(showLogOut){
    setShowRegister(false)
    setShowLogin(false)
    setShowFirm(false)
    setShowProduct(true)
    setShowWelcome(false)
    setAddedproduct(false);
    
    setShowAllProducts(false)
    }else{
        alert("please login")
        setShowLogin(true)
        setAddedproduct(false);
    }
    

}
const showaddedprocducthandler=()=>{
  setShowRegister(false)
  setShowLogin(false)
  setShowFirm(false)
  setShowProduct(false)
  setShowWelcome(false)
  setShowAllProducts(false)
  setAddedproduct(true);
}
const showWelcomeHandler = ()=>{
  setAddedproduct(false);
    setShowRegister(false)
    setShowLogin(false)
    setShowFirm(false)
    setShowProduct(false)
    setShowWelcome(true)
    setShowAllProducts(false)

}
const showAllProductsHandler = ()=>{
  if(showLogOut){
    setShowRegister(false)
    setShowLogin(false)
    setShowFirm(false)
    setShowProduct(false)
    setShowWelcome(false)
    setShowAllProducts(true)
    setAddedproduct(false);

}else{
    alert("please login")
    setShowLogin(true)
    setAddedproduct(false);
 }
}
  return (
    <>
        <section className='landingSection'>
            <NavBar showLoginHandler = {showLoginHandler} showRegisterHandler = {showRegisterHandler}
            showLogOut = {showLogOut}
            logOutHandler = {logOutHandler}
            />
            <div className="collectionSection">
            <SideBar showFirmHandler={showFirmHandler} showProductHandler ={showProductHandler}
            showAllProductsHandler = {showAllProductsHandler}
            showFirmTitle={showFirmTitle} showaddedprocducthandler={showaddedprocducthandler}
            />
          {showFirm && showLogOut && <AddFirm />}
          {showProduct && showLogOut && <AddProduct />}
          {showWelcome && <Welcome />}
          {showAllProducts && showLogOut && <AllProducts />}
          {showLogin && <Login showWelcomeHandler ={showWelcomeHandler}/>}
          {showRegister && <Register showLoginHandler = {showLoginHandler}/>}
          {addedproduct&& <Adedproducts/>}
            </div>
        </section>
    </>
  )
}

export default LandingPage