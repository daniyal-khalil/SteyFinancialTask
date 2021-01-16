import React from 'react';
import logo from './icon.png';

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
    Badge
    
    } from 'reactstrap';

class Profile extends React.Component{

    // Constructor Props
    // Time = The current date, used in timestamp rendering for the bank transactions
    constructor(props) {
        super(props)
        this.state={
            time: new Date()
        }
    }


    // Page Data
    render() {
        document.title = "Stey | Profile";
        return (


            // MAIN DIV
            
            <div>
                
                {/* Navigation Bar */}
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <img src={logo} style={{height:90, wifth:90}} alt = "Logo"/>

                    {/* Reponsive Button for the navigation bar in mobile view */}
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    {/* The Navbar used in navigation */}
                    <div class="collapse navbar-collapse" id="navbarColor03">
                        <ul class="navbar-nav mr-auto">

                        {/* The Nav Item Button for Trade */}
                        <li class="nav-item">
                            <a class="nav-link" href="/trade">
                                <p style={{paddingTop:40, paddingLeft: 40, fontSize:20, fontFamily:"Times New Roman"}}>
                                    TRADE
                                </p>
                            </a>
                        </li>

                        {/* The Nav Item Button for Profile */}
                        <li class="nav-item active">
                            <a class="nav-link">
                                <p style={{paddingTop:40, paddingLeft: 40, fontSize:20, fontFamily:"Times New Roman"}}>
                                    PROFILE
                                </p>
                            </a>
                        </li>
                        </ul>
                    </div>
                    </nav>

                    {/* The Container for the Body of the Page */}
                    <Container className="mt--7" fluid>

                        {/* First Row */}
                        <Row className="mt-5">

                            {/* The Column for Personal Information */}
                            <Col className="mb-5 mb-xl-0" xl="6">

                                {/* The Card for Personal Information */}
                                <Card className="shadow" height="400">

                                    {/* Card Header used for the title */}
                                    <CardHeader className="border-0">
                                        <CardTitle className="text-center" style={{fontSize:30, fontFamily: "Times New Roman"}}>
                                            Personal Information
                                        </CardTitle>
                                    </CardHeader>

                                    {/* Card Body containing all the elements and personal information field */}
                                    <CardBody>
                                        <h3><Badge color="light">Name:</Badge> <text style={{fontFamily:"Times New Roman", marginLeft:25}}>Daniyal Khalil </text></h3>
                                        <h3><Badge color="light">Age:</Badge> <text style={{fontFamily:"Times New Roman", marginLeft:45}}> 21 </text></h3>
                                        <h3><Badge color="light">Email:</Badge> <text style={{fontFamily:"Times New Roman", marginLeft:33}}> daniyalkhalil16@gmail.com </text></h3>
                                        <h3><Badge color="light">County:</Badge> <text style={{fontFamily:"Times New Roman", marginLeft:19}}> Turkey </text></h3>
                                        <h3><Badge color="light">City:</Badge> <text style={{fontFamily:"Times New Roman", marginLeft:50}}> Ankara </text></h3>
                                        <h3><Badge color="light">Contact:</Badge> <text style={{fontFamily:"Times New Roman", marginLeft:15}}> +90 507 675 2438 </text></h3>
                                        <h3><Badge color="light">Password:</Badge> <text style={{fontFamily:"Times New Roman", marginLeft:0}}> ********** </text></h3>
                                    </CardBody>
                                </Card>

                            </Col>

                            {/* The Column for Financial Information */}
                            <Col className="mb-5 mb-xl-0" xl="6">

                                {/* The Card for financial information */}
                                <Card className="shadow" height="400">

                                    {/* Card Header containing the title of the Card */}
                                    <CardHeader className="border-0">
                                        <CardTitle className="text-center" style={{fontSize:30, fontFamily: "Times New Roman"}}>
                                            Financial Information
                                        </CardTitle>
                                    </CardHeader>

                                    {/* Card Body containing the financial information */}
                                    <CardBody>

                                        {/* The table contain the Product information and available Balance */}
                                        <Table className="align-items-center table-flush" responsive>
                                            <thead className="thead-light">
                                                <tr>
                                                    <th scope="col">Product</th>
                                                    <th scope="col">Available Balance</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">Product1</th>
                                                    <td>1000.00</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Product2</th>
                                                    <td>961.52</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Product3</th>
                                                    <td>11203.89</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Product4</th>
                                                    <td>358.12</td>
                                                </tr>
                                            </tbody>
                                        </Table>


                                        {/* The Table containing currency information and remaining balance */}
                                        <Table className="align-items-center table-flush" responsive>
                                            <thead className="thead-light">
                                                <tr>
                                                    <th scope="col">Currency</th>
                                                    <th scope="col">Available Balance</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">USD</th>
                                                    <td>912.30</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">TRY</th>
                                                    <td>10002.30</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">GBP</th>
                                                    <td>10.23</td>
                                                </tr>    
                                            </tbody>
                                        </Table>

                                        {/* The Table for Bank Transaction and their details */}
                                        <Table className="align-items-center table-flush" responsive>
                                            <thead className="thead-light">
                                                <tr>
                                                    <th scope="col">Transaction Type</th>
                                                    <th scope="col">Amount</th>
                                                    <th scope="col">Time Stamp</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">Deposit</th>
                                                    <td>100.00</td>
                                                    <td>
                                                        {/* Rendering the current time stamp only */}
                                                        {this.state.time.toLocaleString()}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Withdrawal</th>
                                                    <td>150.00</td>
                                                    <td>
                                                        {this.state.time.toLocaleString()}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Deposit</th>
                                                    <td>170.00</td>
                                                    <td>
                                                        {/* Rendering the current time stamp only */}
                                                        {this.state.time.toLocaleString()}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Withdrawal</th>
                                                    <td>20.00</td>
                                                    <td>
                                                        {/* Rendering the current time stamp only */}
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
            </div>
        )
    }
}

export default Profile