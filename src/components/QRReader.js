import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { registerUser } from '../actions';

class QRReader extends Component {

  state = {
      name: '',
      position: '',
      status: 'reading',
      error: '',
      loading: false
    };

  onSuccess(e) {
      this.setState({
        loading: true,
        error: ''
      })

     var name, position, id
     [name, position, id] = e.data.split(', ')
     var user = { name, position, id }

     registerUser(user, this.props.id)
       .then(response => {
         var logStatus = response.data.was
         if (!logStatus)
           throw new Error('Ошибка ответа сервера!')

         this.setState({
           name,
           position,
           status: 'read',
           loading: false,
           logStatus
         })

       })
       .catch(error => {
         console.log(error)
         if (error.message.indexOf('Request failed with status code 5') !== -1)
           error.message = 'Ошибка сервера!'

         this.setState({
           error: error.message,
           loading: false
         })
       });
  }

  scanNext() {
    if (this.state.status === 'reading')
      return

    this.scanner.reactivate()

    this.setState({
      name: '',
      position: '',
      status: 'reading',
      logStatus: null
    })
  }
  renderBottom() {

    switch (this.state.status) {
      case "read":
        return (
          <TouchableOpacity onPress={this.scanNext.bind(this)}>
            <Text >
              Ф.И.О.: {this.state.name}
            </Text>
            <Text >
              Должность: {this.state.position}
            </Text>
            <Text >
              Статус: {this.state.logStatus === 'true' ? 'вошел' : 'вышел'}
            </Text>
          </TouchableOpacity>
        )
      case "error":
        return (
          <Text >
            Ошибка
          </Text>
        )
      default:
        return (
          <Text >
            Сканирование
          </Text>
        )
    }
  }
  renderTop() {
    const { id } = this.props;
    return (
      <Text >
        Мероприятие: {id}
      </Text>
    )
  }

  render() {
    return (
      <QRCodeScanner
        ref={(node) => { this.scanner = node }}
        onRead={this.onSuccess.bind(this)}
        topContent={this.renderTop()}
        bottomContent={this.renderBottom()}
      />
    );
  }
}


export default QRReader;
