import React, { Component } from "react";
// import { HashLink as Link } from "react-router-hash-link";
import { Link } from "react-router-dom"; 

export default class ArticlePreview extends Component {
  removeUnicode(string) {
    if (string.indexOf("&#8217;") >= 0) {
      return this.removeUnicode(string.replace("&#8217;", "'"));
    } else {
      return string.replace("<p>", "").replace("[&hellip;]</p>", "...");
    }
  }

  render() {
    const excerpt = this.removeUnicode(this.props.post.excerpt);

    if (this.props.post) {
      return (
        <div className="article">
          <h1 className="text-center">{this.props.post.title}</h1>
          <a href={"/blog/" + this.props.post.ID} className="blackLink">
            {this.props.post.featured_image ? (
              <img
                className="img-responsive webpic"
                alt="article header"
                src={this.props.post.featured_image}
              />
            ) : (
              ""
            )}
            <div className="content">{excerpt}</div>
          </a>
<<<<<<< HEAD
          {/* <HashLink to={"/blog/" + this.props.post.ID}> */}
<<<<<<< HEAD
            <button className="btn">Read More</button>
=======
          <button className="btn">Read More</button>
>>>>>>> b2952270fbbced87f2d8ed80ddcf96d09ebcfa3a
          {/* </HashLink> */}
=======
          <Link to={"/blog/" + this.props.post.ID}>
            <button className="btn">Read More</button>
          </Link>
>>>>>>> Dilaran
        </div>
      );
    } else {
      return null;
    }
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> b2952270fbbced87f2d8ed80ddcf96d09ebcfa3a
