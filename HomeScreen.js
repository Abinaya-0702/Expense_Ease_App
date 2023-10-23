import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { PieChart } from 'react-native-svg-charts';
import { LineChart } from 'react-native-chart-kit';
import Icon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper/src';

export default function HomeScreen({ navigation }) {
const data1 = [
  {
    key: 'Food',
    value: 300,
    svg: { fill: '#23297A' },
  },
  {
    key: 'Clothes',
    value: 350,
    svg: { fill: 'green' },
  },
  {
    key: 'Transportation',
    value: 250,
    svg: { fill: '#C80815' },
  },
  {
    key: 'Bills',
    value: 700,
    svg: { fill: '#ED7014' },
  },
  {
    key: 'Others',
    value: 200,
    svg: { fill: '#FFDF00' },
  },
];

  const data2 = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    datasets: [
      {
        data: [850, 600, 700, 550, 500, 750, 900, 950, 600, 850, 700, 1000],
      },
    ],
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Icon name="bars" size={25} color="white" marginTop={10} />
          <Text style={styles.headerText}>Home</Text>
        </View>
        <View style={styles.headerRight}>
          <Icon name="user" size={25} color="white" marginTop={10} />
        </View>
      </View>
      <ScrollView>
        <View style={styles.accountInfo}>
          <Text style={styles.accountText}>Hello Maya!</Text>
          <Text style={styles.account}>Account Balance:</Text>
          <Text style={styles.balanceText}>$650</Text>
        </View>

        <View style={styles.chartContainer}>
          <Text style={styles.chartTitle}>My Expenses:</Text>
        </View>

        <Swiper
          style={styles.wrapper}
          showsPagination={true}
          paginationStyle={styles.pagination}>
          <View style={styles.mainContainer}>
            <ScrollView>
              <View style={styles.row}>
                <Text style={styles.text}>MONTHLY</Text>
                <Text style={styles.text}>March 2023 </Text>
              </View>
              <PieChart style={{ height: 180 }} data={data1} />
            </ScrollView>

            <View style={styles.chartContainer}>
              <View style={styles.chartExplanation}>
                <View style={styles.explanationItem}>
                  <View style={styles.left}>
                    <Icon name="cutlery" size={23} color="#23297A" />
                    <Text style={styles.explanationText}> Food</Text>
                  </View>
                  <View style={styles.right}>
                    <Text style={styles.explanationText}>$300</Text>
                  </View>
                </View>
                <View style={styles.explanationItem}>
                  <View style={styles.left}>
                    <Image
                      source={require('./assets/shirt.png')}
                      style={styles.dressIcon}
                    />
                    <Text style={styles.explanationText}> Clothes</Text>
                  </View>
                  <View style={styles.right}>
                    <Text style={styles.explanationText}>$350</Text>
                  </View>
                </View>
                <View style={styles.explanationItem}>
                  <View style={styles.left}>
                    <Icon name="bus" size={23} color="#C80815" />
                    <Text style={styles.explanationText}> Transportation</Text>
                  </View>
                  <View style={styles.right}>
                    <Text style={styles.explanationText}>$250</Text>
                  </View>
                </View>
                <View style={styles.explanationItem}>
                  <View style={styles.left}>
                    <Icon name="file" size={23} color="#ED7014" />
                    <Text style={styles.explanationText}> Bills</Text>
                  </View>
                  <View style={styles.right}>
                    <Text style={styles.explanationText}>$700</Text>
                  </View>
                </View>
                <View style={styles.explanationItem}>
                  <View style={styles.left}>
                    <Icon name="circle" size={23} color="#FFDF00" />
                    <Text style={styles.explanationText}> Others</Text>
                  </View>
                  <View style={styles.right}>
                    <Text style={styles.explanationText}>$200</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.mainContainer}>
            <ScrollView>
              <View>
                <View style={styles.row}>
                  <Text style={styles.text}>YEARLY</Text>
                  <Text style={styles.text}>2022</Text>
                </View>
                <View style={styles.chartContainer1}>
                  <LineChart
                    data={data2}
                    width={360}
                    height={300}
                    yAxisSuffix="$"
                    chartConfig={{
                      backgroundGradientFrom: 'white',
                      backgroundGradientTo: 'white',
                      color: (opacity = 1) => `#702670`,
                      labelColor: (opacity = 1) => `black`,
                      strokeWidth: 2,
                      decimalPlaces: 0,
                      propsForDots: {
                        r: '5',
                        strokeWidth: '2',
                        stroke: '#702670',
                      },
                    }}
                    bezier
                  />
                </View>
              </View>
            </ScrollView>
          </View>
        </Swiper>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('Add')}>
          <Icon name="plus" size={24} color="#702670" />
        </TouchableOpacity>
      </View>
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
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    marginLeft: 10,
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 8,
  },
  accountInfo: {
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: -10,
    backgroundColor: '#702670',
    width: 370,
    height: 120,
    elevation: 50,
    padding: 20,
    borderRadius: 20,
  },
  accountText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  account: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  balanceText: {
    fontSize: 20,
    color: 'white',
  },
  wrapper: {
    backgroundColor: 'white',
    borderRadius: 10,
  },
  pagination: {
    color: '#702670',
    marginTop: 5,
    bottom: 10, 
  },
  mainContainer: {
    alignSelf: 'center',
    marginTop: 1,
    backgroundColor: '#FBFCF8',
    width: 370,
    height: 450,
    elevation: 20,
    padding: 20,
    borderRadius: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  chartContainer: {
    padding: 20,
  },
  chartContainer1: {
    padding: 20,
    marginLeft: -40,
  },
  chartTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  chartExplanation: {
    width: 300,
    height: 180,
    marginBottom: -30,
  },
  explanationItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dressIcon: {
    width: 28,
    height: 28,
    marginLeft: -4,
  },
  explanationText: {
    fontSize: 20,
  },
  footer: {
    alignItems: 'center',
    backgroundColor: '#702670',
    width: 400,
    height:45,
    position: 'absolute',
    bottom: 0,
  },
  addButton: {
    backgroundColor: 'white',
    width: 42, 
    height: 42,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
