import { createStackNavigator, createAppContainer } from "react-navigation";
import TodoContainer from "./features/todo/containers/TodoContainer";

const Navigation = createStackNavigator({
  Todo: { screen: TodoContainer }
});
export default createAppContainer(Navigation);
