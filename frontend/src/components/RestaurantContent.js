import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

//M-UI
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from '@material-ui/core/CardMedia';
import Button from "@material-ui/core/Button";



import RestaurantCard from "./RestaurantCard";
import axios from "../util/axios";



const RestaurantContent = () => {
  const [allitems, setAllItems] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const allItems = await axios.get("/seller/getallitems");
      console.log("alll items===>", allItems.data);
      const items = allItems.data.map((element) => {
        const imageUrlSplit =element.imageUrl.split("\\");
        const finalImageUrl = `${process.env.REACT_APP_SERVER_URL}/${imageUrlSplit[0]}/${imageUrlSplit[1]}`;
        element.finalimgUrl=finalImageUrl;
        return element;
      });
      setAllItems(items);
    };
    fetchdata().catch(console.error);
  }, []);

  const { restaurants } = useSelector((state) => state.data);
  const restaurantArray = restaurants.restaurants;

  const getRestaurantCard = (restaurantObj) => {
    return (
      <Grid item xs={12} sm={3} key={restaurantObj._id}>
        <RestaurantCard {...restaurantObj} />
      </Grid>
    );
  };
  return (
    <>
      <Typography
        gutterBottom
        variant="h6"
        color="textPrimary"
        component="p"
        noWrap
      >
        Order from your favourite restaurant
      </Typography>
      <br />
       {/*<Grid container spacing={2}>
        {allitems.length > 0 ? (
          allitems.length > 0 ? (
            allitems.map((restaurant) => getRestaurantCard(restaurant))
          ) : (
            <p>
              No Restaurants currently available in your area, come back Later.
            </p>
          )
        ) : (
          <p>Server Error, come back Later.</p>
        )}
        </Grid> */}

      <div style={{ display: "flex", width: "100%" }}>
        {allitems?.map((item) => (
      <Card sx={{ maxWidth: 345}} style={{ margin:"10px"}} >
      <CardMedia
        component="img"
        height="140"
        image={`http://localhost:3002/${item.imageUrl}`}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
      {item.description}
        </Typography>
        <Typography variant="h5" color="text.secondary" style={{textAlign:"end"}}   >
      {item.price} Dt
        </Typography>
      </CardContent>
      <CardActions>
      
        <Button size="small" style={{margin:"auto",backgroundColor:"darkgreen",color:"white"}}>order online</Button>
      </CardActions>
    </Card>
        ))}
      </div>
    </>
  );
};

export default RestaurantContent;
