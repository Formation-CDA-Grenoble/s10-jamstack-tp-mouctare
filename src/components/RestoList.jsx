import React, { Component } from 'react';
import Axios from 'axios';
import RestoPreview from './RestoPreview';
// La cons pour mettre mes entités
const query = `
query MyQuery {
  allRestos1 {
    id
    title
    content
    createdAt
    cover {
      url
    }
    category {
      id
      name
    }
  }
}`;




export default class RestoList extends Component {
  state = {
    data: null,// initialisation du state
  }

  componentDidMount = () => {
   
    Axios.post(
      
      // GraphQL endpoint
      'https://graphql.datocms.com/',
      // Requête GraphQL
      { query },
      // Options pour authentifier notre requête
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_DATOCMS_API_KEY}`,
        } 
      },
    )
    // gestion des erreurs
    .then(response => {
      if (response.data.hasOwnProperty('errors')) {
        for (let error of response.data.errors) {
          console.error('Error while querying GraphQL API:', error.message);
        }
      } else {
        // modification du state
        // et range les données dans data
        const { data } = response.data;
        this.setState({ data });
      }
    })
    .catch(error => console.error(error));
  }
// cherche dans le state une clée data les données et range les dans data  const { data } = this.state;
  render = () => {
    const { data } = this.state;

    if (data === null) {
      return <div>Loading...</div>;
    }
    // ci dessou , on fait une destruction de notre objet article  <ArticlePreview {...article} />
    // qui est definit dans le composant ariclPreview.jsx

    return (
      <ul>
        
        {data.allResto.map( (resto, index) =>// Chaque article est mis dans ul de façon unique
          <li key={index}>
            
            <RestoPreview {...resto} />
          </li>
        )}
      </ul>
    );
  }
}
