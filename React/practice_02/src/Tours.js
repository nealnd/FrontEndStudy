import React, { useState } from "react";
import Tour from "./Tour";

const Tours = ({ tours, onDelete }) => {
  return tours.map((tour) => (
    <Tour tour={tour} onDelete={onDelete} key={tour.id}></Tour>
  ));
};

export default Tours;
