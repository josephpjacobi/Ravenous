const apiKey = 'axdO0vIaG8XKlIW8f6OQ9SG6fWx9FsyEiB8b9y32Rj7RuJGt2rklk3zl_fxCKyrjdWcU8lLV79xxefI1dIdtcGexLMTMwuZ5f78chet64s5OJcdZW2FutJ-ozSuRXHYx';
const Yelp = {
  searchYelp(term, location, sortby) {
    return fetch(`https://cors-anywhere.herokuapp.com/https: //api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortby}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    }).then((response) => {
      return response.json();
    }).then((jsonResponse) => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map((business) => {
          console.log(business);
          
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            categoty: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count,
          }
        });
      }
    });
  }
};




export default Yelp;