const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  sku: {
    type: String,
    required: true
  },
  manufacturer: {
    type: Schema.Types.ObjectId,
    ref: 'Manufacturer',
    required: true
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  }
},
{ versionKey: false }
);


ProductSchema.set('toJSON', {
    transform: (_, ret) => {
        const re = ret;
        re.id = re._id;
        if ('__v' in re) delete re.__v;
        delete re._id;
    }
});
module.exports = mongoose.model('Product', ProductSchema);
