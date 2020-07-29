import React, { Component } from 'react'
import GoogleLogin from 'react-google-login';
import { Redirect } from 'react-router-dom';
import axios from 'axios'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from "mdbreact";
import img1 from '../../assets/images/targetwelcome.png';
import Dashboard from '../dashboard/Dashboard.js';
import VPDashboardList from '../dashboard/VPDashboardList.js'
import button from '@material-ui/core/Button'
// import LogoutButton from '@material-ui/core/Logout'
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import DashboardM from '../dashboard/DashboardM.js';

export class Logintbygoogle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roleName:''
    };

    // this.signup = this

    //   .signup

    //   .bind(this);

  }

  signup(res) {
    const googleresponse = {

      // emp_id: 1,
      empId: res.profileObj.googleId,
      first_name: res.profileObj.givenName,
      last_name: res.profileObj.familyName,
      emp_email: res.profileObj.email,


      image_url: res.profileObj.imageUrl,

      provider_name: 'Google'
    };



    axios.post('http://localhost:8080/employee', googleresponse)

      .then((result) => {

        let responseJson = result;

        sessionStorage.setItem("userData", JSON.stringify(result));

        // this.props.history.push('/Dashboard')

      });
      // componentDidMount() {
        
        axios.get(`http://localhost:8080/emproles`)
          .then(res => {
            const roles = res.data;
            this.setState({ roles });
            
          //  console.log(roles[1].roleName)

            
            console.log(roles)
            
            // if (roles[1].roleName == "role_vp")
            // {
            //   // button = <AccountCircleSharpIcon onClick={this.handleLogoutClick} />;
            //   this.props.history.push('/Dashboard')
              
            // }
            // else 
            // {
            //   this.props.history.push('/DashboardM')
            // }
            

          })
          
      // }
  };

  render() {

    const responseGoogle = (response) => {

      console.log(response);

      var res = response.profileObj;

      console.log(res);

    //   debugger;

      this.signup(response);

    }

    return (

      <div className="App">

<AppBar  position="fixed" style={{ background: 'transparent', boxShadow: 'none'}}>
                <Toolbar>
                <Grid justify="space-between"  container spacing={24}>
                    <Typography class="display-2" variant="h2" color="white">SPOTLIGHT
                    </Typography>
                </Grid>
                    <Grid item>

        <div className="row">

          <div style={{ 'paddingTop': "20px" }} className="col-sm-12">

            <div className="col-sm-4"></div>

            <div className="col-sm-4">

              <GoogleLogin

                clientId="1067840943467-95a8enufi11s9chjcj16e7e0fan3273i.apps.googleusercontent.com"

                buttonText="Login with Google"

                onSuccess={responseGoogle}

                onFailure={responseGoogle} ></GoogleLogin>

            </div>

            <div className="col-sm-4"></div>

          </div>

        </div>
        
                    </Grid>
                </Toolbar>
            </AppBar>
            {/* <MDBContainer>
            <MDBCarousel
              activeItem={1}
              length={3}
              showControls={false}
              showIndicators={false}
              className="z-depth-1"
            > */}
              {/* <MDBCarouselInner>
                <MDBCarouselItem itemId="1">
                  <MDBView> */}
                    <img
                      className="d-block w-100"
                      src={img1} width="100%" height="100%"
                    />
                  {/* </MDBView>
                </MDBCarouselItem>
              </MDBCarouselInner>
            </MDBCarousel> */}
          {/* </MDBContainer> */}

      </div>
     

    )

  }

}


export default Logintbygoogle