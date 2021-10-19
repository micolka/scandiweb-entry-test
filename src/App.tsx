import React from 'react';
import './App.css';

import {
  useQuery,
  gql
} from "@apollo/client";

const GET_CATEGORIES = gql`
  query categories {
    category {
      name
      products {
        id
        name
        inStock
        gallery
        description
        category
        attributes {
          id
          name
          type
          items {
            displayValue
            id
            value
          }
        }
        prices {
          currency
          amount
        }
        brand
      }
    }
  }
`;

function App() {
  const { loading, error, data} = useQuery(GET_CATEGORIES);

  console.log(data)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="App">
      {/* {data?.rates.map(({ currency, rate}) => (
        <div key={currency}>
          <p>
            {currency}: {rate}
          </p>
        </div>
      ))} */}
    </div>
  );
}

export default App;
