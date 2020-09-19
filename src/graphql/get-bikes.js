import gql from "graphql-tag";

export const GET_BIKES = gql`
  query bikes {
    bikeRentalStations {
      name
      stationId
    }
  }
`;
