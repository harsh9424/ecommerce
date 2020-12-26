import React, { useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import  { ActionCreators } from '../store/action/index';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';

const ProductListContainer = (props) => {
    const [productList, setProductList] = useState(props.productList);
    const [spacing, setSpacing] = React.useState(6);
    const classes = useStyles();

    useEffect(() =>{
        props.getProductList();
        setProductList(props.productList);
    },[]);

    function addCartHandler(value){
        props.addProduct(value);
        console.log(props.cartList)
    }

    if(props.loading){
        return (<div>...loading</div>);
    }

    return(
        <div>
            <h2>ProductListContainer</h2>
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12}>
                    <Grid container justify="space-around" spacing={spacing}>
                        { !props.loading && productList.map((value) => (
                                <Grid key={value} item>
                                    <Paper className={classes.paper}>
                                        <h4>{value.productNm}</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                                        <Button variant="outlined" color="primary" onClick={() => addCartHandler(value)}>Add</Button>
                                    </Paper>
                                </Grid>
                         ))}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 200,
      textAlign: 'center',
      display: "flex",
      flexDirection: "column"
    },
    control: {
      padding: theme.spacing(2),
    },
  }));

function mapStateToProps(state) {
    return {
      loading: state.productReducer.isLoading,
      productList: state.productReducer.productList,
      cartList: state.cartReducer.cartList
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);