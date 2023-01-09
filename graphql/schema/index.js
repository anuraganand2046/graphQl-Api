const { buildSchema } = require('graphql');

module.exports = buildSchema(`
type Anime {
    _id: ID!
    episodeId: String!
    animeId: String!
    animeTitle: String!
    episodeNum: String!
    subOrDub: String!
    animeImg: String!
    episodeUrl: String!
}
input AnimeInput {
    episodeId: String!
    animeId: String!
    animeTitle: String!
    episodeNum: String!
    subOrDub: String!
    animeImg: String!
    episodeUrl: String!
}
type RootQuery {
    animes: [Anime!]!
}
type RootMutation {
    createAnime(animeInput: AnimeInput): Anime
    deleteAnime(animeId: ID!): Anime
}
schema {
    query: RootQuery
    mutation: RootMutation
}
`);