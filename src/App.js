import React, {Component} from 'react';
import './App.css';
import Dog from './components/Dog'
import axios from 'axios';


class App extends Component {
  constructor() {
    super()
    this.state = {
      favoriteDogs: []
    }
  }
  
  componentDidMount() {
    axios
      .get('/api/dogs')
      .then ( res => {
        console.log('res', res)
        this.setState({ favoriteDogs: res.data })
      })
      .catch(err => console.log(err))
  }
  
  deleteDog = id => {
    axios.delete(`/api/dogs/${id}`)
    .then(res => {
      console.log('Delete Dog res', res)
      this.setState({ favoriteDogs: res.data })
    })
    .catch(err => console.log(err))
  }

  editDogRating = (rating, id) => {
    axios.put(`/api/dogs/${id}?newRating=${rating}`)
    .then(res => {
      console.log('Edit Dog res', res)
      this.setState({ favoriteDogs: res.data })
    })
    .catch(err => console.log(err))
  }

  render () {
    return (
      <div className="App">
        {this.state.favoriteDogs.map( dog => {
          return (
            <Dog
              key={dog.id}
              dog={dog}
              deleteDog={this.deleteDog}
              editDogRating={this.editDogRating}
            />
          )
        })}
      </div>
    );
  }
}

export default App;
