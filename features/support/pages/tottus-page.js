const { Selector } = require('testcafe');

function select(selector) {
    return Selector(selector).with({ boundTestRun: testController });
}

exports.tottus = {
    url: function () {
        return 'http://www.google.cl';
    },
    searchWord: function () {
        return select('.gLFyf');
    },
    searchSitio: function () {
        return select('#rso').find('div');
    },

    recetas: function () {
        return select('#container').find('div');
    },

    goHome: function () {
        return select('#content').find('a');
    },

    complexity: function () {
        return select('#myDIV').find('button');
    },

    rollitos: function () {
        return select('#divRecipes').find('h3');
    },

    /* 
     
     .drag(Selector('main').find('p').withText('– 125g azúcar rubia'), 146, 23, {
         offsetX: 14,
         offsetY: 12 
     });*/




};
