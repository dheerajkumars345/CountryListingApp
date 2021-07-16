
import React, { useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';

import Loader from '../../components/Loader'

const useStyles = makeStyles(() => ({
	country: {
	  display: 'grid',
	  alignItems: 'center',
	justifyContent: 'center'
	},
  }));

export default function Home(props) {
	const classes = useStyles();

	useEffect(() => {
		const {getCountries} = props		
		getCountries()
		// eslint-disable-next-line react-hooks/exhaustive-deps
		}, []);

		const {data, loading} = props

	return (
	<>
		{(loading ) ? (
				<Loader />
			) : (
				<>
				<h3 className={classes.country}>Countries List</h3>
				<ImageList sx={{ width: 500, height: 450 }}>
				{data && data.map((item) => (
	  				<ImageListItem >
					<img
		  			srcSet={`${item.flag}?w=248&fit=crop&auto=format 1x,
			  		${item.flag}?w=248&fit=crop&auto=format&dpr=2 2x`}
		  			alt={item.name}
		 			loading="lazy"
					/>
					<ImageListItemBar
		 			 title={item.name}
		 			 subtitle={item.region}
					/>
	  				</ImageListItem>
				))}
  				</ImageList>
	 			</>
			)
	  	}
  </>
	)
}






