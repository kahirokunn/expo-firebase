import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { Subscription } from 'rxjs'
import { sendTextMessage } from './command/message/messageOneToOne'
import { OneToOneMessageObserver } from './query/message/messageOneToOne'
import { PickItemTypeFromObservable } from './submodule/type'
import {
  isNoteMessage,
  isTextMessage
} from './entity/message/distinguish'

type Message = PickItemTypeFromObservable<OneToOneMessageObserver['messages$']>[number]
type Props = {};
type State = {
  messages: Message[]
  subscription: Subscription | null
};

const messageOneToOne = new OneToOneMessageObserver();

function renderMessage(message: Message) {
  if (isTextMessage(message)) {
    return (
      <Text style={{
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
      }}>{`text: ${message.text}`}</Text>)
  } else if (isNoteMessage(message)) {
    return (
      <Text style={{
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
      }}>{`noteId: ${message.noteId}`}</Text>)
  } else {
    return (
      <Text style={{
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
      }}>{`imageUrl: ${message.imageUrl}`}</Text>)
  }
}

function onPress() {
  sendTextMessage({
    text: `Hello world! ${Math.random() * 100}`,
    sentToAccountId: 'test'
  })
}

export default class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      messages: [],
      subscription: null,
    }
  }

  componentDidMount() {
    const subscription = messageOneToOne
      .messages$
      .subscribe(messages => this.setState({ messages }))
    this.setState({ subscription })
  }

  componentWillUnmount() {
    if (this.state.subscription) {
      this.state.subscription.unsubscribe()
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Button
          title={"add new Article"}
          onPress={() => onPress()}
        />
        <ScrollView>
          {this.state.messages.map(message => (
            <View key={message.id} style={{
              backgroundColor: 'pink',
              height: 45,
              justifyContent: 'center',
              paddingLeft: 20,
            }}>{renderMessage(message)}</View>
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
