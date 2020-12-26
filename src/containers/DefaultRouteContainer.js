import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

export const DefaultRouteContainer = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.defaultRouteContainer}>
      <h2 className={classes.noPageAvailableText}> This page isn't available</h2>
    </div>
    )
}

const useStyles = makeStyles(theme => ({
    defaultRouteContainer: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '80vh',
      minWidth: '100%',
      alignItems: 'center',
      justifyContent: 'center'
    },
    noPageAvailableText: {
      fontSize: 24,
      fontWeight: 600,
      color: '#3b5998'
    }
  }));

