import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useWindowDimensions } from "react-native";
import { Navbar } from "../Navbarcomponents/Navbar.jsx";
import {
  LoginForm,
  Dashboard,
  Register,
  HomePage,
  Perfil,
  Configuracion,
} from "../pages";
import { PrivateRoute } from "./PrivateRouter.jsx";
import Reservador from "../pages/Reservador.jsx";
import Footer from "../Bodycomponents/footer.jsx";
import Hotelindividual from "../pages/Hotel-individual.jsx";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AppRouter = () => {
  const dimensions = useWindowDimensions();
  const isMobile = dimensions.width < 890;
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowNavbar(dimensions.width >= 890);
    };

    Dimensions.addEventListener("change", handleResize);

    return () => {
      Dimensions.removeEventListener("change", handleResize);
    };
  }, [dimensions]);

  return (
    <NavigationContainer>
      {showNavbar && (isMobile ? <Navbar /> : <Navbar />)}
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Login" component={LoginForm} />
        <Tab.Screen name="Register" component={Register} />
        <Tab.Screen name="Dashboard" component={Dashboard} />
        <Tab.Screen name="Configuracion" component={Configuracion} />
        <Tab.Screen name="Perfil" component={Perfil} />
        <Tab.Screen name="Reservador" component={Reservador} />
        <Tab.Screen name="HotelIndividual" component={Hotelindividual} />
      </Tab.Navigator>
      <Footer />
    </NavigationContainer>
  );
};

export default AppRouter;
