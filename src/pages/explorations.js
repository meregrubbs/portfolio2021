import React from 'react';
import SearchEngineOps from '../templates/SearchEngineOps';
import Header from '../templates/Header';
import Footer from '../templates/Footer';

import { StaticQuery, graphql } from 'gatsby';

const query = graphql`
  query {
    allStrapiExplorations {
      edges {
        node {
          strapiId
          title
          description
          image {
            id
            url
          }
          article
        }
      }
    }
  }
`;

const Explorations = () => (
  <main className='explorations'>
    <SearchEngineOps />
    <Header />
    <section>
      <h1 className='section-title'>Explorations</h1>
      <StaticQuery
        query={query}
        render={data => (
          <div className='explorations-list'>
            {data.allStrapiExplorations.edges.map(exploration => (
              <div className='exploration'>
                <div className='exploration-img'>
                  <img
                    src={'http://localhost:1337' + exploration.node.image.url}
                    alt={exploration.node.title}
                    width='500px'
                    aspect-ratio='1/1'
                  />
                </div>
                <div className='exploration-text'>
                  <h2>{exploration.node.title}</h2>
                  <p>{exploration.node.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      />
    </section>
    <Footer />
  </main>
);

export default Explorations;
