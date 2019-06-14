import { createStackNavigator, createAppContainer } from 'react-navigation';
import MainScreen from './home';
import Post from './tambah';


const AppNavigator = createStackNavigator(
        {
            Utama: MainScreen,
            Post:Post,
        },
        {
            initialRouteName: "Utama"
        }
        );
export default createAppContainer(AppNavigator);