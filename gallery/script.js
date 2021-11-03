const app = document.getElementById('app');
const data = [{
  id: 1,
  name: "",
  image: "/gallery/Vam/1.jpg"
},
{
  id: 2,
  name: "",
  image: "/gallery/switzerland/1.jpg"
},
{
  id: 3,
  name: "",
  image: "/gallery/Vam/2.jpg"
},
{
  id: 4,
  name: "",
  image: "/gallery/switzerland/2.jpg"
},
{
  id: 5,
  name: "",
  image: "/gallery/Vam/3.jpg"
},
{
  id: 6,
  name: "",
  image: "/gallery/switzerland/3.jpg"
},
{
  id: 7,
  name: "",
  image: "/gallery/Vam/4.jpg"
},
{
  id: 8,
  name: "",
  image: "/gallery/switzerland/4.jpg"
},
{
  id: 9,
  name: "",
  image: "/gallery/Vam/5.jpg"
},
{
  id: 10,
  name: "",
  image: "/gallery/switzerland/5.jpg"
},
{
  id: 11,
  name: "",
  image: "/gallery/Vam/6.jpg"
},
{
  id: 12,
  name: "",
  image: "/gallery/switzerland/6.jpg"
},
{
  id: 13,
  name: "",
  image: "/gallery/Vam/7.png"
},
{
  id: 14,
  name: "",
  image: "/gallery/switzerland/7.jpg"
},
{
  id: 15,
  name: "",
  image: "/gallery/Vam/8.jpg"
},
{
  id: 16,
  name: "",
  image: "/gallery/switzerland/8.jpg"
},
{
  id: 17,
  name: "",
  image: "/gallery/Vam/9.jpg"
},
{
  id: 18,
  name: "",
  image: "/gallery/switzerland/9.jpg"
},
{
  id: 19,
  name: "",
  image: "/gallery/Vam/10.jpg"
},
{
  id: 20,
  name: "",
  image: "/gallery/switzerland/10.jpg"
},
{
  id: 21,
  name: "",
  image: "/gallery/Vam/11.jpg"
},
{
  id: 22,
  name: "",
  image: "/gallery/switzerland/11.jpg"
},
{
  id: 23,
  name: "",
  image: "/gallery/Vam/12.jpg"
},
{
  id: 24,
  name: "",
  image: "/gallery/switzerland/12.jpg"
}];


class App extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement(Tiles, { data: this.props.data }));

  }
}


class Tiles extends React.Component {
  render() {
    // Create tile for each item in data array
    // Pass data to each tile and assign a key
    return /*#__PURE__*/(
      React.createElement("div", { className: "tiles" },
        this.props.data.map(data => {
          return /*#__PURE__*/React.createElement(Tile, { data: data, key: data.id });
        })));


  }
}


class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      mouseOver: false
    };

    // Bind properties to class instance
    this._clickHandler = this._clickHandler.bind(this);
    this._mouseEnter = this._mouseEnter.bind(this);
    this._mouseLeave = this._mouseLeave.bind(this);
  }
  // Event handlers to modify state values
  _mouseEnter(e) {
    e.preventDefault();
    if (this.state.mouseOver === false) {
      console.log(this.props.data.name);
      this.setState({
        mouseOver: true
      });

    }
  }
  _mouseLeave(e) {
    e.preventDefault();
    if (this.state.mouseOver === true) {
      this.setState({
        mouseOver: false
      });

    }
  }
  _clickHandler(e) {
    e.preventDefault();
    if (this.state.open === false) {
      this.setState({
        open: true
      });

    } else {
      this.setState({
        open: false
      });

    }
  }

  render() {
    // Modify styles based on state values
    let tileStyle = {};
    let headerStyle = {};
    let zoom = {};
    // When tile clicked
    if (this.state.open) {
      tileStyle = {
        width: '62vw',
        height: '62vw',
        position: 'absolute',
        top: '50%',
        left: '50%',
        margin: '0',
        marginTop: '-31vw',
        marginLeft: '-31vw',
        boxShadow: '0 0 40px 5px rgba(0, 0, 0, 0.3)',
        transform: 'none'
      };

    } else {
      tileStyle = {
        width: '18vw',
        height: '18vw'
      };

    }

    return /*#__PURE__*/(
      React.createElement("div", { className: "tile" }, /*#__PURE__*/
        React.createElement("img", {
          onMouseEnter: this._mouseEnter,
          onMouseLeave: this._mouseLeave,
          onClick: this._clickHandler,
          src: this.props.data.image,
          alt: this.props.data.name,
          style: tileStyle
        })));



  }
}


ReactDOM.render( /*#__PURE__*/
  React.createElement(App, { data: data }),
  app);