import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

export const LIST_STATES = gql`
  query allCountries($code: ID!) {
    country(code: $code) {
      code
      states {
        code
        name
      }
    }
  }
`;

function StateSelect({ country }) {
  const [state, setState] = useState();
  const { data, loading, error } = useQuery(LIST_STATES, {
    variables: { code: country },
  });

  if (error) {
    return <p>{`Could not load states for ${country}...`}</p>;
  }

  if (loading) {
    return <p>{`Loading states for ${country}...`}</p>;
  }

  if (!data.country.states.length) {
    return <p>{`${country} has no states.`}</p>;
  }

  return (
    <>
      <select value={state} onChange={(event) => setState(event.target.value)}>
        {data.country.states.map((state) => (
          <option key={state.name} value={state.code}>
            {state.name}
          </option>
        ))}
      </select>
      <div>{state && `Selected: ${state}`}</div>
    </>
  );
}

export default StateSelect;
