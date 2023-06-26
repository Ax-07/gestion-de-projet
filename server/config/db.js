const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,

})
.then(()=>console.log('Connexion MongoDB établie avec succès !'))
.catch((err)=>console.log('Erreur de connexion MongoDB', err))
