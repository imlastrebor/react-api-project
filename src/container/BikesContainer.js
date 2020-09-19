import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_BIKES } from "../graphql/get-bikes";

export function BikesContainer() {
  const { data: { bikes = [] } = {} } = useQuery(GET_BIKES);
  console.log(GET_BIKES);
  return <div className="bikes">{bikes.map((bike) => console.log(bike))}</div>;
}
export default BikesContainer;
