import Step1 from "@/components/cards/Step1";
import Step2 from "@/components/cards/Step2";
import { withFormik } from "formik";
import React from "react";
import { SafeAreaView } from "react-native";
import {
  createAppContainer,
  createNavigator,
  createStackNavigator,
  StackRouter
} from "react-navigation";
import Step3 from "../components/cards/Step3";
import Step4 from "../components/cards/Step4";
import Step5 from "../components/cards/Step5";
import Step6 from "../components/cards/Step6";
import StepSummary from "../components/cards/StepSummary";
import PizzaBuilder from "../components/screens/PizzaBuilder";
import ScreenA from "../components/screens/ScreenA";

const test = createStackNavigator({
  A: { screen: ScreenA },
  PizzaBuilder: { screen: PizzaBuilder }
});

const Step2Stack = createStackNavigator({
  Step2: { screen: Step2 }
});

const MyRouter = StackRouter({
  Step1: { screen: Step1 },
  Step2: { screen: Step2 },
  Step3: { screen: Step3 },
  Step4: { screen: Step4 },
  Step5: { screen: Step5 },
  Step6: { screen: Step6 },
  StepSummary: { screen: StepSummary }
});

const MyView = props => {
  const { descriptors, navigation, ...rest } = props;
  const { routes, index } = navigation.state;
  const descriptor = descriptors[routes[index].key];
  const ChildComponent = descriptor.getComponent();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ChildComponent navigation={navigation} {...rest} />
    </SafeAreaView>
  );
};

const enhancedView = withFormik({
  mapPropsToValues: () => ({
    step1: "",
    step2: "",
    step3: "",
    step4: "",
    step5: [],
    step6: []
  })
})(MyView);

const App = createNavigator(enhancedView, MyRouter, {});

export const Router = createAppContainer(App);

export const MainRouter = createAppContainer(test);
