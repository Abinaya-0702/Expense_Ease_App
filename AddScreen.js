import { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function AddExpenseScreen() {

  const [isButtonPressed, setIsButtonPressed] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Cash');
  const [expenseData, setExpenseData] = useState({
    amount: '',
    paidTo: '',
    date: '',
    paymentMode: 'Cash',
  });

  const apiUrl = 'https://api.example.com/expense-data';

  const fetchDataFromAPI = async () => {
    try {
      const response = await fetch(apiUrl);
      if (response.ok) {
        const data = await response.json();

        setExpenseData({
          amount: data.amount,
          paidTo: data.paidTo,
          date: data.date,
          paymentMode: data.paymentMode,
        });
      } else {
        console.error('API request failed');
      }
    } catch (error) {
      console.error('API request error', error);
    }
  };

  useEffect(() => {
    fetchDataFromAPI();
  }, []);

  const handleButtonPress = () => {
    setIsButtonPressed(true);
    setTimeout(() => {
      setIsButtonPressed(false);
    }, 250);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}> Add Expense</Text>
      </View>
      <View>
        <Text style={styles.text}> Add Transaction </Text>
        <TextInput
          keyboardType="numeric"
          style={styles.transInput}
          placeholder="Enter Amount"
           value={expenseData.amount}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.category}>Select Category: </Text>
        <View style={styles.iconButtonRow}>
          <TouchableOpacity
            style={[
              styles.iconButton,
              isButtonPressed ? styles.buttonPressed : null,
            ]}
            onPress={handleButtonPress}>
            <Image source={require('./assets/dish.png')} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Image
              source={require('./assets/fashion.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Image source={require('./assets/bus.png')} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Image source={require('./assets/bill.png')} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Image source={require('./assets/menu.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>

        <Text style={styles.category}>Paid to:</Text>
        <TextInput style={styles.input} placeholder="Enter entity name" value={expenseData.paidTo}/>

        <Text style={styles.category}>Select date:</Text>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Enter a date (DD/MM/YYYY)"
            value={expenseData.date}
          />
        </View>
        <Text style={styles.category}>Payment mode:</Text>
        <View style={styles.pickerItem}>
          <Picker
            selectedValue={expenseData.paymentMode}
            onValueChange={(itemValue) => setSelectedCategory(itemValue)}>
            <Picker.Item label="Cash" value="Cash" />
            <Picker.Item label="UPI" value="UPI" />
            <Picker.Item label="Internet Banking" value="Internet Banking" />
            <Picker.Item label="Credit card" value="Credit card" />
            <Picker.Item label="Debit card" value="Debit card" />
          </Picker>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Add Transaction</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 8,
    borderBottomColor: '#BF40BF',
    backgroundColor: '#702670',
  },
  headerText: {
    color: 'white',
    marginLeft: 10,
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 8,
  },
  text: {
    fontSize: 27,
    fontWeight: 'bold',
    marginTop: 25,
    alignSelf: 'center',
  },
  transInput: {
    marginTop: 20,
    borderWidth: 2,
    borderColor: 'gray',
    padding: 10,
    fontSize: 18,
    width: 200,
    alignSelf: 'center',
    borderRadius: 10,
  },
  inputContainer: {
    padding: 16,
  },
  category: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 12,
  },
  iconButtonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginLeft: 10,
  },
  buttonPressed: {
    backgroundColor: '#702670',
  },
  iconButton: {
    height: 45,
    width: 45,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C5C6D0',
    marginRight: 5,
  },
  icon: {
    height: 35,
    width: 35,
  },
  input: {
    height: 45,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    marginTop: 5,
    marginLeft: 10,
    padding: 8,
    borderRadius: 5,
  },
  pickerItem: {
    marginTop: 10,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: 'gray',
    width: 250,
    height: 45,
    fontSize: 18,
    borderRadius: 5,
  },
  button: {
    marginTop:20,
    backgroundColor: '#702670', 
    padding: 10,
    borderRadius: 30, 
    width: 280,
    height:60,
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
  },
});
