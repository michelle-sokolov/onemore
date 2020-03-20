import React, { Component } from "react";
import Details from "./Details";
import items from "../items.json";
import "../components/style.css";
const mystyle = {
  display: "flex",
  marginLeft: "450px"
};

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
    items.forEach(cat => {
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
  handleRender = () => {
    console.log("render clicked");
    this.setState({ renderCat: false, items: items });
  };
  render() {
    return (
      <div className="homeTitle">
        {this.state.renderCat ? (
          <div>
            <button onClick={() => this.handleRender()}>
              Back to Categories
            </button>
            <Details cat={this.state.cat} items={this.state.items} />
          </div>
        ) : (
          <div>
            <h1>Categories</h1>
            <div>
              <div style={mystyle} className="row">
                {this.state.categories.map(cat => (
                  <h3 onClick={() => this.handleCat(cat)}>{cat}</h3>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
