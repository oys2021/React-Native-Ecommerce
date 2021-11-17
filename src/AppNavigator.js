import { createStackNavigator } from 'react-navigation';
import HomeScreen from './views/Home';
import DetailsScreen from './views/Details';
import Detail from './views/pd';


const AppNavigator = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: { title: 'Home' }
        },
        Details: {
            screen: DetailsScreen,
            navigationOptions: { title: 'Details' }
        },
        Detail:{
            screen: Detail,
            navigationOptions: { title: 'Detail' }
        }
      
    },
    {
        initialRouteName: "Home"
    }
);


export default AppNavigator;