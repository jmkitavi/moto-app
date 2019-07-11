import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F3F3',
    paddingHorizontal: 15,
    paddingVertical: 40,
  },
  name: {
    fontSize: 15,
    textAlign: 'left',
    fontFamily: 'F1Regular',
  },
  price: {
    color: '#333333',
    marginBottom: 5,
    fontSize: 18,
    fontFamily: 'MGPRegular',
    textAlign: 'left',
  },
  button: {
    width: 20,
    height: 20,
    elevation: 2,
    margin: 10,
    backgroundColor: 'white',
    alignItems: 'center'
  },
  totalContainer: {
    width: '100%',
    height: 60,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  payButton: {
    height: 60,
    width: '100%',
    backgroundColor: '#00D885',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  itemContainer: { 
    height: 150,
    width: '90%',
    flexDirection: 'row',
    marginBottom: 20,
  },
  trapezoidItemImage: {
    width: 0,
    height: 150,
    borderLeftWidth: 150,
    borderLeftColor: 'white',
    borderTopWidth: 50,
    borderTopColor: 'transparent',
    borderStyle: 'solid',
    borderRadius: 10,
    // elevation: 3,
   },
  // itemImage: {
  //   height: 150,
  //   width: '50%',
  //   backgroundColor: 'white',
  //   elevation: 3,
  //   borderRadius: 5,
  // },
  detailsContainer: { 
    marginHorizontal: 20,
    justifyContent: 'center'
  },
  countContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})

export default styles