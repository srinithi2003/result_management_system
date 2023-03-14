const router = require('express').Router();
let Model = require('../amodel');
let semm = require('../smodel');

router.route('/').get((req, res) => {

  Model.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});



// router.route('/check/:uname/:pass').get((req, res) => {
//   console.log(req.params.uname)
//   console.log(req.params.pass)
//   console.log(req.url)
//   // Model.find({uname:req.params.uname } & {pass:req.params.pass})
//   Model.find({
//     $and: [
//         {'uname':req.params.uname},
//         {'pass': req.params.pass}
//     ]
// })
//   .then(exercise => {
//     console.log(exercise);
//     res.json(exercise);})
//     .catch(err => res.status(400).json('Error: ' + err));
// });



router.route('/add').post((req, res) => {
  const roll = req.body.roll;
  const name = req.body.name;
  const dob = req.body.dob;
  const gen = req.body.gen;
  const ph = req.body.ph;
  const fname = req.body.fname;
  const mname = req.body.mname;
  const pph = req.body.pph;
  const cm = req.body.cm;
  const pm = req.body.pm;
  const add = req.body.add;
  const cl = req.body.cl;

  const newUser = new Model({roll,name,dob,gen,ph,fname,mname,pph,cm,pm,add,cl});
  console.log(cl)
  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/sem').post((req, res) => {
  // console.log("admin")
  const roll = req.body.roll;
  const sem = req.body.sem;
  const sub = req.body.sub;
  const cr = req.body.cr;
  const gr = req.body.gr;

  const newUser = new semm({roll,sem,sub,cr,gr});
  console.log(cr)
  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/check/:roll/:sem').get((req, res) => {
  console.log(req.params.roll)
  console.log(req.params.sem)
  console.log(req.url)
  // Model.find({uname:req.params.uname } & {pass:req.params.pass})
  semm.find({
    $and: [
        {'roll':req.params.roll},
        {'sem': req.params.sem}
    ]
})
  .then(ex => {
    console.log("si sdadk")
    console.log(ex);
    res.json(ex);})
    .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;