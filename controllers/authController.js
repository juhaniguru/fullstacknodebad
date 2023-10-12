const User = require('../models/user')

module.exports.registerUser = async (req, res) => {
    const body = req.body;
    // tähän voi laittaa request bodin validointeja yms. ne kuuluu controlleriin

    // validointikoodi tässä

    // ##################### validointi loppuu ################################### //

    // vaikka tämä koodi tekee sen, mitä pitääkin, tämä ei kuulu tänne...koska, jos mongodb pitää vaihtaa johonkin toiseen tietokantaan
    // tai hakea vaikka jostakin googlen rajapinnasta käyttäjätunnus, niin tämä koodi muuttuu...ja silloin koodi on huonosti suunniteltu
    const user = await User.findOne({username: body.username})
    
    if(user != null) {
        res.status(409).json({err: 'username taken'})
        return
    }

    const newUser = new User({username: body.username})
    await newUser.save()
    res.json({account: newUser})


}   