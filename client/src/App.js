import React, { Component } from 'react'
import SiteHeader from './components/SiteHeader'
import Wrapper from './components/Wrapper'
import Super from './components/Super'
import HeroBanner from './components/HeroBanner'
import superheroes from './assets/heroes.json'
import './App.css'
import './animate.css'


class App extends Component {

  state = {
    superheroes,
    chosen: [],
    score: 0,
    high_score: 0,
    anim_class: ''
  }

  update_state = (name, val) => {
    this.setState({
      [name]: val
    })
  }

  shuffle = arr => {
    let counter = arr.length
    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter)
        // Decrease counter by 1
        counter--
        // And swap the last element with it
        let temp = arr[counter]
        arr[counter] = arr[index]
        arr[index] = temp
    }
    return arr
  }

  
  check_selection = (id, elem) =>{
    if(!this.state.chosen.includes(id)) {
      const user_selected = this.state.chosen
      user_selected.push(id)
      console.log(user_selected)
      this.setState({
        score: this.state.score + 1,
        chosen: user_selected,
        superheroes: this.shuffle(this.state.superheroes),
        anim_class: ''
      })
    } else {
      this.setState({
        score: 0,
        chosen: [],
        superheroes: this.shuffle(this.state.superheroes),
        high_score: this.state.score > this.state.high_score ? this.state.score : this.state.high_score,
        anim_class: 'animated shake'
      })
    }
  }

  render() {
    return (
      <div>
        <SiteHeader score={this.state.score} high_score={this.state.high_score} />
        <Wrapper>
          <div id='main_bkg' />
          <HeroBanner />
          <ul className='list-inline heroes-group col-sm-12' id={this.state.anim_class}>
            {this.state.superheroes.map(e => <Super key={e.name} name={e.name} img={e.img} alt={e.alt} update={this.check_selection} />)}
          </ul>
        </Wrapper>
      </div>
    )
  }
}

export default App;
