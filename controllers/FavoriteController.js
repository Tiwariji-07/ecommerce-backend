const Product = require("../models/Product");
const Favorite = require("../models/Favorite");

module.exports = {
  addToFavorite: async (req, res) => {
    const { userId, favoriteItem } = req.body;
    try {
      const favorite = await Favorite.findOne({ userId });

      if (favorite) {
        favorite.products.push({ favoriteItem });
        await favorite.save();
        res.status(200).json("Product added to Favorites");
      } else {
        const newFavorite = new Favorite({
          userId,
          products: [{ favoriteItem }],
        });
        await newFavorite.save();
        res.status(200).json("Product added to Favorites");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },
  removeFromFavorite: async (req, res) => {
    const favoriteItemId = req.params.favoriteItemId;
    try {
      const updatedFavorite = await Favorite.findOneAndUpdate(
        { "products._id": favoriteItemId },
        { $pull: { products: { _id: favoriteItemId } } },
        { new: true }
      );

      if (!updatedFavorite) {
        return res.status(404).render("updatedFavorite item not found");
      }

      res.status(200).json(updatedFavorite);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getAllFavorite: async (req, res) => {
    const userId = req.params.id;
    try {
      const favorite = await Favorite.findOne({ userId }).populate(
        "products.favoriteItem",
        "_id title imageUrl price supplier description product_location"
      );
      if (favorite) {
        res.status(200).json(favorite);
      } else {
        res.status(500).json("There are no favorites");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
