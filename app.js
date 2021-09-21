export default function App() {
   const [todo, setTodo] = useState([
    {text : 'consumtion', key : '1'},
     {text : 'Transportation', key : '2'},
     {text : 'Place', key : '3'},
     
   ]);

   const pressHandler = (key) => {
     setTodo((prevTodo) => {
       return prevTodo.filter(todo => todo.key != key);
     });
   }

   const submitHandler = (text) => {
     if(text.length > 3){
     setTodo((prevTodo) => {
       return [
         { text: text, key: Math.random().toString()},
         ...prevTodo
       ]
     })
    }
    else{
      Alert.alert('OOps', 'Todo must be over 3 character long', [
        {
          text:'understood', onPress: () => console.log('alert closed')
        }
      ])
    }
   }


  return (
    <View style={styles.container}>
      
      <ScrollView>
        {/*header*/}
        <TouchableOpacity
        onPress={() => console.log('image pressed')}>
        <Image 
        style = {{width : 400, height :200, resizeMode: 'cover' , alignItems:'center', justifyContent:'center', flex: 1, marginTop: 20, borderRadius: 0}}
          source={require('./images/mads-eneqvist-j9KEsbM0Aj4-unsplash.jpg')}
        />
        </TouchableOpacity>

        <Header />
      <View style = {styles.content}>

        {/**to form */}
        <AddTodo submitHandler= {submitHandler}/>
        <View style = {styles.list}>
         <FlatList 
            data = {todo}
            renderItem={({ item }) => (
              <TodoItem item = { item } />
            )}
         />
        </View>
        
      </View>
      
      <Image 
        style = {{width : 400, height :200, resizeMode: 'cover' , alignItems:'center', justifyContent:'center', flex: 1, marginTop: 20, borderRadius: 0}}
          source={require('./images/mads-eneqvist-j9KEsbM0Aj4-unsplash.jpg')}
        />
        <View>
          <Text style = {styles.contact}>
            CopyRight2021 by Mohammad Rizki Fauzi

          </Text>
        </View>
        <SandBox />
      </ScrollView>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize:24,
    backgroundColor: 'white',
   
    
    
  },
   content :{

   },
     list : {

     },
     text1: {
       fontSize: 24,
     },
     contact :{
       textAlign : 'center',
       backgroundColor:'gray',
       fontStyle:'italic',
       color:'white'

     }

  
});
