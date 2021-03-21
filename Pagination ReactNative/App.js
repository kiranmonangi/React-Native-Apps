import React,{Component} from 'react';
import { View,Text,FlatList,TouchableOpacity,Linking } from 'react-native';
import axios from 'axios';
import styles from './src/screens/styles';

export default class App extends Component{
  constructor(props){
    super(props)
    this.state={
      data:[],
      page:0,
    }
  }

componentDidMount(){
  this.getData()
}
  getData = async()=>{
    try {
      const response = await axios.get(
       `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${this.state.page}`
      );
      
        let res= response.data;
        let result =res.hits;
        this.setState({
          data: this.state.data.concat(result)
        })  
    } catch (error) {
      alert(error.message);
    }
  }

  renderRow = ({item}) => {
    return(
      <TouchableOpacity style={styles.button} onPress={ ()=>{ Linking.openURL('https://hn.algolia.com/?dateRange=last24h&page=0&prefix=false&query=&sort=byDate&type=all')}}>
        <Text style={styles.itemTextTitle}>{item.title}</Text>
        <Text></Text>
        <Text style={styles.itemText}>Author: {item.author}</Text>
        <Text></Text>
        <Text style={styles.itemText}>url: {item.url}</Text>
        <Text></Text>
        <Text style={styles.itemTextTime}>{item.created_at}</Text>
      </TouchableOpacity>
    )
}
  handleLoadMore = ()=>{
    this.setState({page: this.state.page + 1 },this.getData)
  }
  render(){
    return(
      <View>
        <View style={styles.header}>
            <Text style={styles.headerText}>  Hacker News </Text>
         </View>
        <FlatList
        style={styles.container}
        data={this.state.data}
        renderItem={this.renderRow}
        keyExtractor={(item,index)=>index.toString()}      
        onEndReached={this.handleLoadMore}
      />
      </View>
    )
  }
}
