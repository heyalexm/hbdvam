const app = document.getElementById('app');
const data = [{
    id: 1,
    name: "",
    image: "/gallery/random/1.jpg"
},
{
    id: 2,
    name: "",
    image: "/gallery/random/2.jpg"
},
{
    id: 3,
    name: "",
    image: "/gallery/random/3.jpg"
},
{
    id: 4,
    name: "",
    image: "/gallery/random/4.jpg"
},
{
    id: 5,
    name: "",
    image: "/gallery/random/5.gif"
},
{
    id: 6,
    name: "",
    image: "/gallery/random/6.jpg"
},
{
    id: 7,
    name: "",
    image: "/gallery/random/7.jpg"
},
{
    id: 8,
    name: "",
    image: "/gallery/random/8.jpg"
},
{
    id: 9,
    name: "",
    image: "/gallery/random/9.jpg"
},
{
    id: 10,
    name: "",
    image: "/gallery/random/10.jpg"
},
{
    id: 11,
    name: "",
    image: "/gallery/random/11.jpg"
},
{
    id: 12,
    name: "",
    image: "/gallery/random/12.jpg"
},
{
    id: 13,
    name: "",
    image: "/gallery/random/13.gif"
},
{
    id: 14,
    name: "",
    image: "/gallery/random/14.gif"
},
{
    id: 15,
    name: "",
    image: "/gallery/random/15.gif"
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