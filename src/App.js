import React from 'react'
import axios from 'axios'
import Container from './Components/Container'
import Header from './Components/Header'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          pictures: [],
          loader: false
        }
      }

    componentDidMount() {
        this.performSearch('cats')
      }

    // Fetch data with Axios
    performSearch = (query) => {
        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=c7f8f0ccb62e22393de908d71fb3b105&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
            .then(response => {
                this.setState({
                    pictures: response.data.photos.photo
                });
            })
            .catch(error => {
                console.log('Error fetching the data', error);
            });        
    }

    render() {
        console.log(this.state.pictures)
        return(
          // Handle routing
            <BrowserRouter>
                <div className="app">
                    <Route path="/" render={() => <Header onSearch={this.performSearch} />}/>
                    <Route path="/" render={() => <Container data={this.state.pictures}/>} />
                    <Switch>
                        <Route path="/search/:query" render={props => <Header onClick={this.performSearch(props.match.params.query)} />} />
                    </Switch>
                </div>
          </BrowserRouter>
        )
    }
}

export default App  