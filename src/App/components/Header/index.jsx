import React from 'react';

import {  makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {TryForFreeBtn} from '../Button'

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
    textDecoration: 'none'
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
              <h3 style={{display: 'inline', color: 'orange'}}>App </h3>
               <h3 style={{display: 'inline',color: 'black'}}>Lab</h3>
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
                <Button style={{textTransform: 'none'}}>Home</Button>
                <Button style={{textTransform: 'none'}}>Key Features</Button>
                <Button style={{textTransform: 'none'}}>Pricing</Button>
                <Button style={{textTransform: 'none'}}>Testiminial</Button>
                <Button style={{textTransform: 'none'}}>FAQ</Button>
                 <TryForFreeBtn  text="Try for free" />
          </div>
        </Toolbar>
    </div>
  );
}