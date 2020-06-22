pokedex app intialized with npx create-react-app (https://pokeapi.co/api/v2/pokemon?limit=10157)

created card component to display image and name of pokemon

created pokedex component to get pokemon details using axios via pokeapi.co

passed the pokemon detail name and URL to pokecard to display it .. used split method to get ID of Pokemon
to fetch pokemon images

padded the ID to 3 digits (required) to fetch fanicer images via assets.pokemon.com

added google font for displaying pokemon name and ID

added React Tilt animation in card component

added fallback image for unvailable pokemon images (must be because of too many requests)

added loading gifs in initial loading and card loading

installed react bootstrap for designs and mainly for modal box.

added MODAL BOX from(on card click) to display pokemon details (could have used router but decided to stick with single page design)

Pokemon individual and species details fetched 

added Navbar with Home Route and Filter Routes using (react-bootstrap) and REACT-ROUTER

added Gender, Habitat and Region filters along with toast notifications

added search (by name) (onChange) in homepage

added Redux-Saga API call method for Homepage api

** I don't think Region APIs return pokemon details. They return location details deeper into the nested apis.

** Since this is a simple small app, its doesn't acutally need Redux implementation as it can get tricky and makes the app heavier.

** I don't have much experience in the field of Testing. I would like to learn that in co-operate level work. If someone can commit to add testing this project feel free !


****** DOWNLOAD OR CLONE THE PROJECT - NPM INSTALL THEN NPM START TO RUN ******





