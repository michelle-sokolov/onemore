import React, { Component } from "react";
// import values from "../items.json";

// export default class WishListItem extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       post: {}
//     };
//   }

//   removeUnicode(string) {
//     if (string.indexOf("&#8217;") >= 0) {
//       return this.removeUnicode(string.replace("&#8217;", "'"));
//     } else {
//       return string;
//     }
//   }

//   componentDidMount() {
//       get(
//         "items.json" +
//           this.props.match.params.id
//       )
//       .then(res => {
//         this.setState({ post: res.data });
//         const container = document.querySelector(".content");
//         let scr = container.querySelectorAll("script");
//         scr.forEach(node => {
//           let parent = node.parentElement;
//           let d = document.createElement("script");
//           d.async = node.async;
//           d.src = node.src;
//           d.type = "text/javascript";
//           parent.insertBefore(d, node);
//           parent.removeChild(node);
//           d.onload = console.log(d);
//         });
//       })
//       .catch(error => console.log(error));
//   }

//   parseOutScripts(content) {}

//   render() {
//     if (this.state.post) {
//       return (
//         <div className="wishlist">
//           <div className="list">
//             {this.state.post.featured_image ? (
//               <img
//                 className="img-responsive webpic"
//                 alt="article header"
//                 src={this.state.post.featured_image}
//               />
//             ) : (
//               ""
//             )}
//             <h1 className="text-center">{this.state.post.name}</h1>
//             <div
//               className="content"
//               dangerouslySetInnerHTML={{ __html: this.state.post.description }}
//             />
//           </div>
//         </div>
//       );
//     } else {
//       return null;
//     }
//   }
// }
