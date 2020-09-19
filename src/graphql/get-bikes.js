import { gql } from "@apollo/client";

export const GET_BIKES = gql`
  query bikes {
    bikeRentalStations {
      name
      stationId
      bikesAvailable
      spacesAvailable
    }
  }
`;
