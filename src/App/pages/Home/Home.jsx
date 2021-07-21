
import React, { useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Loader from '../../components/Loader'
import vector_image from '../../images/vector_smart_object.png'
import Header from '../../components/Header'
import {TryForFreeBtn} from '../../components/Button'
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(() => ({
	column : {
		float: 'left',
		width: '50%',
		padding: '10px',
		height: '100px' 
	  }
  }));

export default function Home(props) {
	const classes = useStyles();

	useEffect(() => {
		const {getData} = props		
		getData()
		// eslint-disable-next-line react-hooks/exhaustive-deps
		}, []);

		const {data, loading} = props

	return (
	<>
		{(loading ) ? (
				<Loader />
			) : (
				<>
				<Header />
					  <div className="row">
 					 <div className={classes.column} style={{paddingTop: '100px', paddingLeft: '100px'}}>
					{
					data && data.map((item) => (
					<div key={item.id}>
					<IconButton>
           			 <CheckCircleOutlineRoundedIcon /> <h6>{item.name}</h6>
           			 </IconButton>
					<h1>{item.title}</h1>
					<h2 style={{color: 'grey'}}>{item.body}</h2>
					</div>
					))
					}
					<div>
	  			<TryForFreeBtn text='Try for free' />
	  			<Button color="primary"  style={{textTransform: 'none'}}>Watch demo video</Button>
					</div>			
  					</div>
 					 <div className={classes.column}>
  					<img src={vector_image} alt="vector_image" />
 				 </div>
				</div>
	 			</>
			)
	  	}
  </>
	)
}


