const mongoose = require('mongoose');

const crypto = require('crypto');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
},
{ versionKey: false }
);

UserSchema.pre('save', () => {
    this.password = crypto.createHash('md5').update(this.password).digest('hex');
});

module.exports = mongoose.model('User', UserSchema);
