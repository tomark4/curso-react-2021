// import React, { useEffect, useState } from "react";
import React from "react";
import PropTypes from "prop-types";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ name }) => {


  const {data: imgs, loading} = useFetchGifs(name);

  return (
    <>
      <h3>{name}</h3>
      <div>
        { loading && <p>'Cargando...'</p>}
        <ul>
            {imgs.map((img) => (
            <GifGridItem key={img.id} {...img} />
            ))}
        </ul>
        <div style={{ clear: 'both'}}></div>
      </div>
    </>
  );
};

GifGrid.propTypes = {
  name: PropTypes.string.isRequired,
};

export default GifGrid;
