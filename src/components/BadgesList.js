import React from "react";

import { Link } from 'react-router-dom';

import './styles/BadgesList.css';


function useSearchBadges(badges) {
  const [ query, setQuery ] = React.useState('');

  const [ filteredBadges, setFilteredBadges ] = React.useState(badges);

  React.useMemo(() => {
    const result = badges.filter(badge => {
    return `${badge.firstName} ${badge.lastName}`
          .toLowerCase()
          .includes(query.toLowerCase());
    });

    setFilteredBadges(result);

  }, [ badges, query ]);

  return { query, setQuery, filteredBadges }

}

function BadgesList(props) {

    const badges = props.badges;

    const { query, setQuery, filteredBadges } = useSearchBadges(badges);
  
    if (filteredBadges.length === 0 ) {
      return (
        <div>
          <div className="form-group">
          <label>Filter Badges</label>

          <input 
              type="text" 
              className="form-control" 
              placeholder="Enter a badge"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value)
              }}
          />

        </div>
          <h3> No badges were found. </h3>
          <Link to="/badges/new" className="btn btn-primary">
            Create new badge
          </Link>
        </div>
      )
    }

    return (
      <ul className="list-unstyled">
        <div className="form-group">
          <label>Filter Badges</label>

          <input 
              type="text" 
              className="form-control" 
              placeholder="Enter a badge"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value)
              }}
          />

        </div>
        {filteredBadges.map((badge) => {
          return (
            <li key={badge.id} className="Badgelist shadow p-3 mb-5 bg-white rounded">
              <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                <div className="row">
              
                <div className="col-3 mb-3">
                  <img src={badge.avatarUrl} className="rounded-circle" alt=""/>
                </div>

                <div className="col-9">
                
                  <p>
                    {badge.firstName} {badge.lastName} <br/>
                    @{badge.twitter} <br/>
                    {badge.jobTitle}

                  </p>

                </div>

              </div>
              </Link>
            </li>
          );
        })}
      </ul>
    );
}

export default BadgesList;
