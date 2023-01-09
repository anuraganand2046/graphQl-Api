const Anime = require('../../models/anime');


module.exports = {
  animes: async () => {
    try {
      const animes = await Anime.find();
      return animes.map(anime => {
        return {
          ...anime._doc,
        };
      });
    } catch (err) {
      throw err;
    }
  },
  createAnime: async args => {
    const anime = new Anime({
      episodeId: args.animeInput.episodeId,
      animeId: args.animeInput.animeId,
      animeTitle: args.animeInput.animeTitle,
      episodeNum: args.animeInput.episodeNum,
      subOrDub: args.animeInput.subOrDub,
      animeImg: args.animeInput.animeImg,
      episodeUrl: args.animeInput.episodeUrl,
    });
    let createdAnime;
    try {
      const result = await anime.save();
      createdAnime = {
        ...result._doc,
        _id: result._doc._id.toString(),
      };
      return createdAnime;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  deleteAnime: async args => {
    try {
      const anime = await Anime.findById(args.animeId);
      deletedAnime = {
        ...anime._doc,
        _id: anime._doc._id.toString(),
      };
      await Anime.deleteOne({_id: args.animeId})
      return deletedAnime;
    } catch (err) {
      throw err;
    }
  }
};