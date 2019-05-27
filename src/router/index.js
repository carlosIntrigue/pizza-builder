import PizzaBuilder from "@/components/screens/PizzaBuilder";
import A from "@/components/screens/ScreenA";
import B from "@/components/screens/ScreenB";
import { createAppContainer, createStackNavigator } from "react-navigation";
const Project = createStackNavigator({
  PizzaBuilder: {
    screen: PizzaBuilder
  },
  A: {
    screen: A
  },
  B: {
    screen: B
  }
});

export const Router = createAppContainer(Project);

export default Router;
