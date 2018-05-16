const food = require ('../models').food;

function affichePlat(){
    Post.findAll({
        where: {
            type=plat
        }
    });
}
