import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Button, Card, CardSection, Input } from './common';

class EmployeeCreate extends Component {
  onButtonPress() {
    const { name, phone, shift } = this.props;

    this.props.employeeCreate({ name, phone, shift });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label='Name'
            onChangeText={
              value => this.props.employeeUpdate({ 
                prop: 'name', value
              })}
            placeholder='Rodrigo'
            value={this.props.name}
          />
        </CardSection>

        <CardSection>
          <Input
            label='Phone'
            onChangeText={
              value => this.props.employeeUpdate({ 
                prop: 'phone', value
              })}
            placeholder='99999-9999'
            value={this.props.phone}
          />
        </CardSection>

        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerTextStyle}>Shift</Text>
            <Picker 
              selectedValue={this.props.shift}
              onValueChange={value => this.props.employeeUpdate({
                prop: 'shift', value
              })}
            >
              <Picker.Item label='Monday' value='Monday' />
              <Picker.Item label='Tuesday' value='Tuesday' />
              <Picker.Item label='Wednesday' value='Wednesday' />
              <Picker.Item label='Thursday' value='Thursday' />
              <Picker.Item label='Friday' value='Friday' />
              <Picker.Item label='Saturday' value='Saturday' />
              <Picker.Item label='Sunday' value='Sunday' />
            </Picker>
        </CardSection>

        <CardSection style={{ flexDirection: 'row' }}>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 10,
    paddingTop: 3
  }
};

const mapStateToProps = (state) => {
  // employeeForm piece of state comes from employeeFormReducer
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift }; 
};

export default connect(mapStateToProps, { 
  employeeUpdate, employeeCreate 
})(EmployeeCreate);
