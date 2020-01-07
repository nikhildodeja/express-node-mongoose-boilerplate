const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const defaultCategoryId = 0;


const CategorySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  parent: {
      type: String,
      ref: 'Category',
      default: () => defaultCategoryId
  }
}, {
    versionKey: false,
    toJSON: { virtuals: true }
});


CategorySchema.virtual('products', {
    ref: 'Product',
    localField: '_id',
    foreignField: 'category',
    justOne: false
});

// CategorySchema.set('toJSON', {
//     transform: (_, ret) => {
//         const re = ret;
//         re.id = re._id;
//         delete re._id;
//     }
// });
const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;
