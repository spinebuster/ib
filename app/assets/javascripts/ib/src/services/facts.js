NS('Ib.services');

Ib.services.facts = Commons.services.base({
  index: {
    service: 'service_facts',
    url: '/facts.json',
    method: 'GET'
  },
  categories: {
    service: 'service_factsCategories',
    url: 'https://api.chucknorris.io/jokes/categories',
    method: 'GET'
  }
});
