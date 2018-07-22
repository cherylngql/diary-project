const Sequelize = require('sequelize');

const db = new Sequelize('postgres://localhost:5432/diary', {
  logging: false // unless you like the logs
  // ...and there are many other options you may want to play with
});

const Journal = db.define('journal', {
  name: {
    type: Sequelize.STRING(),
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
})

const Entry = db.define('entry', {
  title: {
    type: Sequelize.STRING(),
    defaultValue: (new Date()).getDate()
  },
  content: {
    type: Sequelize.TEXT(),
    allowNull: false
  }
})

const User = db.define('user', {
  nickname: {
    type: Sequelize.STRING()
  },
  username: {
    type: Sequelize.STRING()
  },
  password: {
    type: Sequelize.STRING(),
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: Sequelize.STRING(),
    validate: {
      isEmail: true
    }
  },
  imageUrl: {
    type: Sequelize.TEXT(),
    defaultValue: ''
  }
})

Journal.belongsTo(User);
User.hasMany(Journal);
User.hasMany(Entry);
Journal.hasMany(Entry);
Entry.belongsTo(User);
Entry.belongsTo(Journal);

module.exports = {db, Journal, User, Entry};