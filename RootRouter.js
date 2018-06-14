import { createStackNavigator } from 'react-navigation';
import Login from './pages/Login';
import ListPost from './pages/ListPost';
import DetailPost from './pages/DetailPost';
import DemoListView from './pages/DemoListView';
import DemoLesson6 from './pages/DemoLesson6';

export const RootRouter = createStackNavigator({
  Home: {
    screen: Login
  },
  ListPost: {
    screen: ListPost
  },
  DetailPost: {
    screen: DetailPost
  },
});