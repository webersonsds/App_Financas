import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../pages/Home';
import New from '../pages/New'
import Profile from '../pages/Profile';
import CustonDrawer from '../components/CustonDrower';

const AppDrawer = createDrawerNavigator();

function AppRoutes(){
  return(
    <AppDrawer.Navigator
    drawerContent={ (props) => <CustonDrawer {...props} />}
      screenOptions={{
        headerShown:false,

        drawerStyle:{
          backgroundColor: '#FFF',
          paddingTop: 20,
        },

        drawerActiveBackgroundColor:'#3b3dbf',
        drawerActiveTintColor: '#FFF',

        drawerInactiveBackgroundColor: '#F0F2FF',
        drawerInactiveTintColor: '#121212'

      }}
    >
      <AppDrawer.Screen
        name="Home"
        component={Home}
      />

      <AppDrawer.Screen
        name="Registrar"
        component={New}
      />
        <AppDrawer.Screen
        name="perfil"
        component={Profile}
      />
    </AppDrawer.Navigator>
  )
}

export default AppRoutes;