Codewars and internet shop for Roman Sirmanov internship

Data generated with the help of https://app.json-generator.com/

products : JG.repeat(100, {
        name: JG.company(),
        id: JG.index() + 1,
        category: JG.random('electronics', 'clothes', 'food', 'toys'),
        bestSeller: JG.bool(),
        runningOut: JG.bool(),
        discount: JG.random(0, 5, 10, 15),
        thumbnail_url: 'https://picsum.photos/seed/' + JG.index() + '/210/210',
        image_url: 'https://picsum.photos/seed/' + JG.index() + '/620/620',
        description: JG.loremIpsum({units: 'words', count: 30}),
        price: JG.integer(100, 10000),
        available: JG.bool(),
        trader: JG.company(),
        country: JG.country(),
        varanty: JG.random(6, 12, 24, 36),
    });

    Deployed Heroku:
    https://internship-intellectsoft.herokuapp.com/