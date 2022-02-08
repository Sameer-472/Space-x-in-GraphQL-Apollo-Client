import React from "react";
import { useLaunchesQuery } from "../../generated/graphql";
import LinearColor from "../StyleComponents/LinearProgress";
import { LaunchesQuery } from "../../generated/graphql";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import "./Launches.css";

export const Launches = () => {
  const { loading, error, data } = useLaunchesQuery();
  if (loading) return <LinearColor />;
  if (error) return <h1>Error 404</h1>;
  console.log(data?.launches);

  return (
    <>
      <div className="launches">
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={4}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
              {data?.launches?.map((item: any) => {
                  return (
                    <Grid item sm={8} md={6}>
                  <>
                    <h3>{item?.mission_name}</h3>
                    <p>{item?.details}</p>
                    <img src={item?.links?.flickr_images[0]} width={200} height={100} alt="" />
                    <img src={item?.links?.flickr_images[1]} width={200} height={100} alt="" />
                    <img src={item?.links?.flickr_images[2]} width={200} height={100} alt="" />
                  </>
            </Grid>
                );
              })}
          </Grid>
        </Box>
      </div>
    </>
  );
};
