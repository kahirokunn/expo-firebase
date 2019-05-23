import { firestore } from './firebase/index';
import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { generateArticles } from './seed/articles';

type Article = { id: string, title: string, body: string }
type Props = {};
type State = {
  articles: Article[]
};

// generateArticles(100);

export default class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    firestore.collection("articles").onSnapshot((querySnapshot) => {
      const articles: Article[] = []
      querySnapshot.forEach((doc) => {
        const article: Article = {
          id: doc.id,
          title: doc.data().title,
          body: doc.data().body
        }
        articles.push(article)
      })
      this.setState({ articles })
      console.log('look this: ', this.state.articles)
    }, (e) => console.log(e))
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Button title={"add new Article"} onPress={() => generateArticles(10)} />
        <ScrollView>
          {this.state.articles.map(article => (
            <View key={article.id} style={{
              backgroundColor: 'pink',
              height: 45,
              justifyContent: 'center',
              paddingLeft: 20,
            }}>
              <Text style={{
                fontSize: 20,
                color: 'black',
                fontWeight: 'bold',
              }}>{article.title}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
