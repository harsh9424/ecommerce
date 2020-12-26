import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Route, Switch, BrowserRouter as  Router, Link} from "react-router-dom";
import ProductListContainer  from '../containers/ProductListConatiner';
import   CustomizedBadges from '../components/CustomizedBadges';
import ImageAvatars from '../components/ImageAvatars'
import { LoginContainer }  from '../containers/LoginContainer';
import  CartContainer   from '../containers/CartContainer';
import { DefaultRouteContainer }  from '../containers/DefaultRouteContainer';
import { HomeContainer } from '../containers/HomeContainer';
import { CheckOutContainer } from '../containers/CheckoutContainer'
import { connect } from 'react-redux';
import { Icon } from '@material-ui/core';
import { bindActionCreators } from "redux";
import  { ActionCreators } from '../store/action/index';


const AppContainer = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Router>
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Icon>home</Icon>
            <Link to="/" style={{textDecoration: "none"}}>
                <Typography variant="h6" className={classes.title}>
                    Home
                </Typography>
               </Link> 
               &nbsp;&nbsp;
               
              <Link to="/products" style={{textDecoration: "none"}}>
                <Typography variant="h6" className={classes.title}>
                    Products
                </Typography>
               </Link> 
               
              
              <Link to="/cart" style={{textDecoration: "none"}}>
                <Typography variant="h6" className={classes.title} >
                    <CustomizedBadges items={props.cartList.length || 0}/>
                </Typography>
               </Link> &nbsp;&nbsp;
               <Link to="/checkout" style={{textDecoration: "none"}}>
                <Typography variant="h6" className={classes.title}>
                    Checkout
                </Typography>
               </Link> 
               <Link to="/login" style={{textDecoration: "none",marginLeft:"800px"}}>
                <ImageAvatars src={"/img.jpg"} />
               </Link> 
             
             {/*  */}
          
        </Toolbar>
      </AppBar>
    </div>
          <div style={{margin:"10px"}}>
            <Switch>
              <Route  exact path="/" component={HomeContainer} />
              <Route  exat path="/login" component={LoginContainer} />
              <Route  exact path="/cart" component={CartContainer} />
              <Route  exact path="/checkout" component={CheckOutContainer} />
              <Route  exact path="/products" component={ProductListContainer} />
              <Route  path="/*" component={DefaultRouteContainer} />
            </Switch>
            </div> 
          </Router>  
    </div>
  );
}


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      color: "white",
    },
  }));
  
  function mapStateToProps(state) {
    return {
      cartList: state.cartReducer.cartList
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);