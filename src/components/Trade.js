import React from 'react';
import logo from './icon.png';
import Datetime from 'react-datetime';


import {Button,
        Nav,
        NavItem,
        NavLink,
        Card,
        CardBody,
        CardHeader,
        CardTitle,
        CardGroup,
        Dropdown,
        DropdownMenu,
        DropdownItem,
        UncontrolledDropdown,
        DropdownToggle,
        Container,
        Row,
        Col,
        Table,
        CardFooter,
        Form,
        Input,
        
        } from 'reactstrap';



import {Line} from 'react-chartjs-2';
          

// React Class for Trade
class Trade extends React.Component{


    // Constructor for the class
    constructor(props) {
        

        // Dummy Data for the products
        const products = [ 
            {
                "name":"Product1",
                "available": 1000.00,
                "market": 25.67
            },
            {
                "name": "Product2",
                "available": 961.52,
                "market": 20.98
            },
            {
                "name": "Product3",
                "available": 11203.89,
                "market": 2.31,
            },
            {
                "name": "Product4",
                "available": 358.12,
                "market": 5.78
            },

        ];

        
        

        super(props);

        // state:buy is for the toggling between buying and selling
        // state:selectedProduct is for selecting the product from Dropdown
        // state:currency is for the selected currency
        // state:multiplie is for the currency conversion
        // state:pro is the state for the products
        // state:chart is the list for chart data
        // state:time is the current timestamp
        this.state={
            buy: true,
            selectedProduct: 'Product1',
            currency: 'US $',
            multiplier: 1,
            pro : products,
            chart: [],
            time: new Date()
        }

    }

    // Method for calculating the time intervals for the graph
    // Input value is the current selectedProduct
    makeTimeSeries = (value, mult) => {

        // Converts the date to current hour
        let hour = this.state.time.getHours()
        let arr = []

        // Makes a interval list for the past 24 hours
        for (var i = 0; i < 24; i++) {
            if (hour+i < 24)
                arr.push(hour+i)
            else
                arr.push(hour+i-24)
        }
        arr.push(hour)

        // Currency Values
        var xAxis =[]

        
        //Dummy Currency Values
        if (value == "Select Product") {
            xAxis = []
        }
        if (value == "Product1") {
            xAxis = [25.45, 25.47, 25.67, 25.78, 25.79,
                25.42, 25.12, 25.24, 25.61, 25.63, 25.63, 
                25.64, 25.59, 25.57, 25.58, 25.64, 25.65, 
                25.66, 25.67, 25.65, 25.67, 25.67, 25.67, 
                25.67]
        }
        if (value == "Product2") {
            xAxis = [20.81, 20.82, 20.83, 20.84, 20.85, 
                20.80, 20.79, 20.78, 20.76, 20.75, 20.91, 
                20.90, 20.89, 20.90, 20.89, 20.90, 20.88, 
                20.81, 20.86, 20.84, 20.83, 20.81, 20.85,
                20.87]
        }
        if (value == "Product3") {
            xAxis = [2.45, 2.47, 2.67, 2.32, 2.38, 
                2.45, 2.12, 2.24, 2.63, 2.63, 2.63, 
                2.64, 2.59, 2.61, 2.62, 2.64, 2.65, 
                2.63, 2.67, 2.61, 2.67, 2.55, 2.48, 
                2.41]
        }
        if (value == "Product4") {
            xAxis = [5.10, 5.13, 5.55, 5.78, 
                5.79, 5.42, 5.12, 5.24, 5.61, 
                5.63, 5.55, 5.52, 5.59, 5.57, 
                5.58, 5.41, 5.65, 5.41, 5.32,
                5.65, 5.67, 5.67, 5.67, 5.78]
        }

        // Multiplying the currency change
        for (var i = 0; i < 24; i++) {
            xAxis[i] = xAxis[i]/mult
        }

        
        // Dummy chartData
        
        const chartData = {
            labels: arr,
            datasets: [
              {
                fill: false,
                backgroundColor: 'grey',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 1,
                data: xAxis
              }
            ]
          }
        
        //  Setting the chart data
        this.setState({
            chart: chartData
        })
    }

    

    // handler for toggling between buy and sell
    handleSelectBuy = () => {
        
        this.setState({
            buy: false,
           
        })
    }

    // handler for toggling between buy and sell
    handleSelectSell = () => {
        this.setState({
            buy: true,
        
        })
    }

    // handler for selecting a product from dropdown
    handleProductSelect = (value) => {
        this.makeTimeSeries(value, this.state.multiplier)
        this.setState({
            selectedProduct: value
        })
    }

    
    //handler for selecting a currency from dropdown
    handleCurrency = (value, mult) => {
        this.makeTimeSeries(this.state.selectedProduct, mult)
        this.setState({
            currency: value,
            multiplier: mult
        })
    }

    //Make graph as soon the component mounts
    componentDidMount() {
        this.makeTimeSeries(this.state.selectedProduct, this.state.multiplier)
    }



    //Rendering all page data
    render() {
        document.title = "Stey | Trade";
        return (
            
            
            // Main Div
            <div>
                
                {/* Navigation Bar */}
                <nav class="navbar navbar-expand-lg navbar-light bg-light">

                    {/* Logo */}
                    <img src={logo} style={{height:90, wifth:90}} alt = "Logo"/>

                    {/* Button for responsive View */}
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    
                    <div class="collapse navbar-collapse" id="navbarColor03">
                        <ul class="navbar-nav mr-auto">

                        {/* Trade Button for NavItem */}
                        <li class="nav-item active">
                            <a class="nav-link">
                                <p style={{paddingTop:40, paddingLeft: 40, fontSize:20, fontFamily:"Times New Roman"}}>
                                    TRADE
                                </p>
                            <span class="sr-only">(current)</span>
                            </a>
                        </li>

                        {/* Profile Button for NavItem */}
                        <li class="nav-item">
                            <a class="nav-link" href="/profile">
                                <p style={{paddingTop:40, paddingLeft: 40, fontSize:20, fontFamily:"Times New Roman"}}>
                                    PROFILE
                                </p>
                            </a>
                        </li>
                        </ul>
                    </div>
                    </nav>

                    {/* Main Page Container */}
                    <Container className="mt--7" fluid>

                        {/* First Row of the Container */}
                        <Row className="mt-5">

                            {/* The Column for buying and selling items */}
                            <Col className="mb-5 mb-xl-0" xl="5">

                                {/* Card for selling items */}
                                <Card className="shadow" height="400">

                                    {/* Card Header containing the buttons */}
                                    <CardHeader className="border-0" style={{paddingBottom:10}}>

                                    {/* Buttons for the header and the conditional statement for disabling them */}
                                    {this.state.buy == true ?
                                        <div className="col text-right">

                                            {/* Disabled SELL and Active Buy */}
                                            <Button style={{marginRight:10, borderRadius:10}} onClick = {() => this.handleSelectBuy()}>
                                                BUY
                                            </Button>
                                            <Button style={{marginRight:10, borderRadius:10}} disabled onClick = {() => this.handleSelectBuy()}>
                                                SELL
                                            </Button>
                                        </div>
                                        :
                                        <div className="col text-right">

                                            {/* Disable BUY and Active SELL */}
                                            <Button style={{marginRight:10, borderRadius:10}} disabled onClick = {() => this.handleSelectSell()}>
                                                BUY
                                            </Button>
                                            <Button style={{marginRight:10, borderRadius:10}} onClick = {() => this.handleSelectSell()}>
                                                SELL
                                            </Button>
                                        </div>
                                    }
                                    </CardHeader>

                                    {/* The CardBody for the Buying and Selling */}
                                    <CardBody style={{paddingBottom:90}}>

                                        {/* The CardTitle and Conditional Statement */}
                                        <CardTitle  className="text-center" style={{fontSize:20, fontFamily: "Times New Roman", paddingBottom:10}}>
                                            {this.state.buy == true ?
                                            <div>
                                                SELL PRODUCT
                                            </div>
                                            :
                                            <div>
                                                BUY PRODUCT
                                            </div>
                                            }
                                        </CardTitle>
                                        
                                        {/* Condition for Buying or Selling */}
                                        {this.state.buy == true?

                                        // Table for Selling
                                        <Table className="align-items-center table-flush" responsive>

                                            {/* Table Heads */}
                                            <thead className="thead-light">
                                                <tr>
                                                    <th scope="col">Product</th>
                                                    <th scope="col">Available Balance</th>
                                                    <th scope="col">Market Price</th>
                                                    <th scope="col">Currency</th>
                                                </tr>
                                            </thead>

                                            {/* Table body containing the drop downs */}
                                            <tbody>
                                                <tr>

                                                    {/* The Product Drop Down */}
                                                    <th scope="row">
                                                    <UncontrolledDropdown>
                                                        <DropdownToggle caret style={{backgroundColor:"white", color:"black"}}>
                                                            {this.state.selectedProduct}
                                                        </DropdownToggle>
                                                    <DropdownMenu container="body" left>
                                                        <DropdownItem onClick={() => this.handleProductSelect("Product1")}>
                                                            Product1
                                                        </DropdownItem>
                                                        <DropdownItem onClick={() => this.handleProductSelect("Product2")}>
                                                            Product2
                                                        </DropdownItem>
                                                        <DropdownItem onClick={() => this.handleProductSelect("Product3")}>
                                                            Product3
                                                        </DropdownItem>
                                                        <DropdownItem onClick={() => this.handleProductSelect("Product4")}>
                                                            Product4
                                                        </DropdownItem>
                                                    </DropdownMenu>
                                                    </UncontrolledDropdown>
                                                    </th>

                                                    {/* Finding the correct Available */}
                                                    <td>
                                                        {this.state.pro.filter(product => product.name === this.state.selectedProduct)
                                                        .map(product => {
                                                            return (
                                                                <div>
                                                                    {(product.available/(this.state.multiplier)).toFixed(2)}
                                                                </div>
                                                            )
                                                        })}
                                                    </td>

                                                    {/* Finding the correctt Market Price */}
                                                    <td>
                                                        {this.state.pro.filter(product => product.name === this.state.selectedProduct)
                                                        .map(product => {
                                                            return (
                                                                <div>
                                                                    {(product.market/(this.state.multiplier)).toFixed(2)}
                                                                </div>
                                                            )
                                                        })}
                                                    </td>

                                                    {/* The DropDown for currency changing */}
                                                    <td>
                                                        <UncontrolledDropdown style={{paddingLeft:10}}>
                                                            <DropdownToggle caret style={{backgroundColor:"white", color:"black"}}>
                                                                {this.state.currency}
                                                            </DropdownToggle>
                                                            <DropdownMenu container="body" left>
                                                                <DropdownItem onClick={() => this.handleCurrency("USD $", 1)}>
                                                                    USD $
                                                                </DropdownItem>
                                                                <DropdownItem onClick={() => this.handleCurrency("Euro €", 1.67)}>
                                                                    Euro €
                                                                </DropdownItem>
                                                                <DropdownItem onClick={() => this.handleCurrency("TRY ₺", 0.13)}>
                                                                    TRY ₺
                                                                </DropdownItem>
                                                                <DropdownItem onClick={() => this.handleCurrency("GDP £", 1.23)}>
                                                                    GDP £
                                                                </DropdownItem>
                                                            </DropdownMenu>
                                                        </UncontrolledDropdown>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                        :
                                        // Table for Buying the product
                                        <Table className="align-items-center table-flush" responsive>

                                            {/* Table heads */}
                                            <thead className="thead-light">
                                                <tr>
                                                    <th scope="col">Product</th>
                                                    <th scope="col">Market Price</th>
                                                    <th scope="col">Currency</th>
                                                </tr>
                                            </thead>

                                            {/* Table Body */}
                                            <tbody>
                                                <tr>
                                                    <th scope="row">

                                                    {/* Dropdown for the Product */}
                                                    <UncontrolledDropdown>
                                                        <DropdownToggle caret style={{backgroundColor:"white", color:"black"}}>
                                                            {this.state.selectedProduct}
                                                        </DropdownToggle>
                                                    <DropdownMenu container="body" left>
                                                        <DropdownItem onClick={() => this.handleProductSelect("Product1")}>
                                                            Product1
                                                        </DropdownItem>
                                                        <DropdownItem onClick={() => this.handleProductSelect("Product2")}>
                                                            Product2
                                                        </DropdownItem>
                                                        <DropdownItem onClick={() => this.handleProductSelect("Product3")}>
                                                            Product3
                                                        </DropdownItem>
                                                        <DropdownItem onClick={() => this.handleProductSelect("Product4")}>
                                                            Product4
                                                        </DropdownItem>
                                                    </DropdownMenu>
                                                    </UncontrolledDropdown>
                                                    </th>
                                                    {/* Market Price only since available amount does not matter in buying */}
                                                    <td>
                                                        {this.state.pro.filter(product => product.name === this.state.selectedProduct)
                                                        .map(product => {
                                                            return (
                                                                <div>
                                                                    {(product.market/(this.state.multiplier)).toFixed(2)}
                                                                </div>
                                                            )
                                                        })}
                                                    </td>
                                                    {/* Dropdown for the currency selection */}
                                                    <td>
                                                        <UncontrolledDropdown>
                                                            <DropdownToggle caret style={{backgroundColor:"white", color:"black"}}>
                                                                {this.state.currency}
                                                            </DropdownToggle>
                                                            <DropdownMenu container="body" left>
                                                                <DropdownItem onClick={() => this.handleCurrency("USD $", 1)}>
                                                                    USD $
                                                                </DropdownItem>
                                                                <DropdownItem onClick={() => this.handleCurrency("Euro €", 1.67)}>
                                                                    Euro €
                                                                </DropdownItem>
                                                                <DropdownItem onClick={() => this.handleCurrency("TRY ₺", 0.13)}>
                                                                    TRY ₺
                                                                </DropdownItem>
                                                                <DropdownItem onClick={() => this.handleCurrency("GDP £", 1.23)}>
                                                                    GDP £
                                                                </DropdownItem>
                                                            </DropdownMenu>
                                                        </UncontrolledDropdown>
                                                    </td>
                                                </tr>
                                            </tbody>

                                        </Table>
                                        }
                                        
                                    
                                    </CardBody>
                                    {/* The Code for the Card footer contain the Desired Input and The button for buy and sell */}
                                    <CardFooter style={{paddingBottom:20}}>
                                        <div className="col text-right">
                                            <input style={{borderRadius:20, height:44, marginRight: 20, textAlign:"center", outlineStyle:"none"}} type="text" id="recipient-name" placeholder="Desired Price" onChange={this.handleDocumentName}></input>
                                            <Button color="primary" size="lg" style={{borderRadius:20}} responsive>
                                                {this.state.buy === true ?
                                                <div>Sell</div>:
                                                <div>Buy</div>
                                                }
                                            </Button>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </Col>
                            
                            {/* Column for the Graph */}
                            <Col className="mb-5 mb-xl-0" xl="7">

                            {/* Card Graph */}
                            <Card className="shadow">
                                
                                {/* Only Body no need for Header and Title */}
                                <CardBody>
                                                
                                    {/* Line Graph from react charts */}
                                    <Line width="700" height="300" responsive
                                    data={this.state.chart}
                                    options={{
                                        title:{
                                        display:true,
                                        text:'Product Change History',
                                        fontSize:20
                                        },
                                        legend:{
                                        display:false,
                                        position:'right'
                                        }
                                    }}
                                    />
                                
                                
                                </CardBody>

                            </Card>
                            </Col>
                        </Row>

                        {/* Row for the Transaction History */}
                        <Row className="mt-5">
                            <Col className="mb-5 mb-xl-0" xl="12">
                            <Card className="shadow">
                                
                                <CardBody>
                                            
                                {/* Table for the transaction history */}
                                <Table className="align-items-center table-flush" responsive>

                                    {/* Table headers */}
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">Transaction Type</th>
                                        <th scope="col">Product</th>
                                        <th scope="col">Amount</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Time Stamp</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>

                                {/* Table body with only dummy data */}
                                <tbody>
                                    <tr>
                                        <th scope="row">
                                            Buy
                                        </th>
                                        <td>
                                            Product1
                                        </td>
                                        <td>
                                            34.65
                                        </td>
                                        <td>
                                            24.67
                                        </td>
                                        <td>
                                            {this.state.time.toLocaleString()}
                                        </td>
                                

                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            Sell
                                        </th>
                                        <td>
                                            Product2
                                        </td>
                                        <td>
                                            50.69
                                        </td>
                                        <td>
                                            19.89
                                        </td>
                                        <td>
                                            {this.state.time.toLocaleString()}
                                        </td>
                                

                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            Buy
                                        </th>
                                        <td>
                                            Product2
                                        </td>
                                        <td>
                                            78
                                        </td>
                                        <td>
                                            18.67
                                        </td>
                                        <td>
                                            {this.state.time.toLocaleString()}
                                        </td>
                                

                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            Buy
                                        </th>
                                        <td>
                                            Product1
                                        </td>
                                        <td>
                                            75.61
                                        </td>
                                        <td>
                                            25.60
                                        </td>
                                        <td>
                                            {this.state.time.toLocaleString()}
                                        </td>
                                

                                    </tr>
                                     <tr>
                                        <th scope="row">
                                            Buy
                                        </th>
                                        <td>
                                            Product1
                                        </td>
                                        <td>
                                            34.65
                                        </td>
                                        <td>
                                            24.67
                                        </td>
                                        <td>
                                            {this.state.time.toLocaleString()}
                                        </td>
                                

                                    </tr>
                                </tbody>
                            </Table>
                                </CardBody>

                            </Card>

                            </Col>
                            
                        </Row>
                    </Container>
                    <CardGroup>

                    
                    

                    </CardGroup>
                    
            </div>
        )
    }
}

export default Trade