import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import  { ActionCreators } from '../store/action/index';

export const CartContainer = (props) => {
    const classes = useStyles();
    const [cartList, setCartList] = useState([]);

    useEffect(() =>{
        setCartList(props.cartList);
        console.log(props.cartList);
        console.log(props.productList);
    }
    ,[])

    return(
    <div className={classes.root}>
    <Grid container spacing={3}>
    { props.cartList && props.cartList.map((value) => (
                                <Grid key={value.productNm} item xs={12}>
                                    <Paper className={classes.paper}>
                                        <h4>{value.productNm}</h4>
                                        <p>{value.productDesc}</p>
                                    </Paper>
                                </Grid>
                         ))}
      { props.cartList? props.cartList.length ===0? 
                                <Grid item xs={12}>
                                    <Paper className={classes.paper}>
                                        <h4>No product added in the Cart</h4>
                                    </Paper>
                                </Grid> : " ": "" }                   
      </Grid>
  </div>
    )
}



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
      color: theme.palette.text.secondary,
    },
  }));

  function mapStateToProps(state) {
    return {
        productList: state.productReducer.productList,
        cartList: state.cartReducer.cartList
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);