import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Detail from "../pages//Detail";
import items from "../items.json";
// import {
//     View,
//     Text,
//     StyleSheet,
//     ImageBackground,
// } from 'react-native';
//const categories = ["Barrells", "Cribbage", "Tables"]
//console.log(categories)

export default class Category extends Component {
  state = {
    renderCat: false,
    cat: "",
    items: items,
    categories: []
  };

  componentDidMount() {

    // read the items db
    let categories = [];
    items.map(cat => {
      if (categories.indexOf(cat.category) === -1) {
        categories.push(cat.category);
      }
    });
    console.log(categories);
    this.setState({ categories: categories });
  }

  handleCat = cat => {
    console.log(cat);
    let filterItems = this.state.items.filter(elem => elem.category === cat);
    this.setState({ renderCat: true, cat: cat, items: filterItems });
  };
  handleRender = () =>{
      console.log("render clicked")
    this.setState({renderCat:false})
  }
  render() {
    return (
      // <ImageBackground source={require('./images/tree.JPEG')} styles={StyleSheet.container}>
      <div className="homeTitle">
        {this.state.renderCat ? (
            <div>
            <button onClick={() => this.handleRender()}>Backk to Categories</button>
          <Detail cat={this.state.cat} items={this.state.items} />
          </div>

        ) : (
          <div>
            <h1>Categories</h1>
            <div>
              {this.state.categories.map(cat => (
                <h3 onClick={() => this.handleCat(cat)}>{cat}</h3>
              ))}
            </div>
          </div>
        )}
        {/* <div className='barrels'>
                        <a href='/search'>
                            <strong>Oak Barrells</strong>
                            <span></span>
                        </a>
                    </div> */}
        {/* <div className='cribbage'>
                        <a href='/search'>
                            <strong>Cribbage Boards</strong>
                            <span></span>
                        </a>
                    </div>
                    <div className='coffee'>
                        <a href='/search'>
                            <strong>Coffee Tables</strong>
                            <span>>></span>
                        </a>
                    </div>
                    <div className='cutting'>
                        <a href='/search'>
                            <strong>Cutting Boards</strong>
                            <span>>></span>
                        </a>
                    </div>
                    <div className='benches'>
                        <a href='/search'>
                            <strong>Outdoor Benches</strong>
                            <span>>></span>
                        </a>
                    </div> */}
      </div>
      // </ImageBackground>
    );
  }
}
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: "center"

//     }
// })
