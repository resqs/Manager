import React from 'react';
import { Actions, Router, Scene } from 'react-native-router-flux';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeList from './components/EmployeeList';
import LoginForm from './components/LoginForm';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key='auth'>
        <Scene 
          key='login'
          component={LoginForm}
          title='Please Log In'
        />
      </Scene>

      <Scene key='main'>
        <Scene
          component={EmployeeList}
          key='employeeList'
          rightTitle='Add'
          onRight={() => Actions.employeeCreate()}
          title='Employees'
          initial
        />
        <Scene
          component={EmployeeCreate}
          key='employeeCreate'
          title='Create Employee'
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;