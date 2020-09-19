// import React from "react";
// import { useQuery } from "@apollo/react-hooks";
// import { GET_BIKES } from "../graphql/get-bikes";

// export function RentalStations() {
//   const { data: { bikes = [] } = {} } = useQuery(GET_BIKES);
//   // console.log(GET_BIKES);
//   // console.log(bikes);
//   // return <div className="bikes">{bikes.map((bike) => console.log(bike))}</div>;
//   return <div>{bikes.map((bike) => console.log(bike))}</div>;
// }
// export default RentalStations;
import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_STATIONS = gql`
  query GetStations {
    bikeRentalStations {
      name
      stationId
      bikesAvailable
      spacesAvailable
    }
  }
`;

export function RentalStations() {
  const { loading, error, data } = useQuery(GET_STATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.bikeRentalStations.map((props) => (
    <div key={props.stationId}>
      <p>{props.name}</p>
      <p>{props.bikesAvailable}</p>
      <p>{props.spacesAvailable}</p>
    </div>
  ));
}
export default RentalStations;
