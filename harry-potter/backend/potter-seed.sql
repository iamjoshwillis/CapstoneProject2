INSERT INTO houses(id, name, founder, image_link, description)
VALUES 
        (1,
        'Slytherin',
        'Salazar Slytherin',
        '/images/SlytherinEmblem.jpg',
        'Slytherins tend to be ambitious, shrewd, cunning, strong leaders, and achievement-oriented. They also have highly developed senses of self-preservation.'
        ),
        (2,
        'Gryffindor',
        'Godric Gryffindor',
        '/images/GryffindorEmblem.jpg',
        'The Gryffindor house emphasises the traits of courage as well as "daring, nerve, and chivalry", and thus its members were generally regarded as brave, though sometimes to the point of recklessness.'
        ),
        (3,
        'Ravenclaw',
        'Rowena Ravenclaw',
        '/images/RavenclawEmblem.jpg',
        'The Ravenclaw House prizes learning, wisdom, wit, and intellect in its members. Thus, many Ravenclaws tend to be academically motivated and talented students.'
        ),
        (4,
        'Hufflepuff',
        'Helga Hufflepuff',
        '/images/HufflepuffEmblem.jpg',
        'Students belonging to this house are known to be hard-working, friendly, loyal, honest and rather impartial. Hufflepuffs are more modest about their accomplishments.'
        );

INSERT INTO professors(name, house, image, courses)
VALUES 
        ('Sybill Trelawney', 4, '/images/Trelawney.jpg', 'Divination'),
        ('Rolanda Hooch', 2, '/images/Hooch.jpg', 'Flying'),
        ('Filius Flitwick', 3, '/images/Flitwick.jpg', 'Charms'),
        ('Pomona Sprout', 4, '/images/Sprout.jpg', 'Herbology'),
        ('Horace Slughorn', 1, 'https://ik.imagekit.io/hpapi/slughorn.JPG', 'Potions'),
        ('Remus Lupin', 2, 'https://ik.imagekit.io/hpapi/lupin.jpg', 'Defense Against the Dark Arts'),
        ('Rubeus Hagrid', 2, 'https://ik.imagekit.io/hpapi/hagrid.png', 'Care of Magical Creatures'),
        ('Severus Snape', 1, 'https://ik.imagekit.io/hpapi/snape.jpg', 'Potions'),
        ('Minerva McGonagall', 2, 'https://ik.imagekit.io/hpapi/mcgonagall.jpg', 'Transfiguration'),
        ('Aurora Sinistra', 3, '/images/Sinistra.jpg', 'Astronomy');

INSERT INTO courses(name, description, professor, time)
VALUES
        ('Astronomy', 'Involves observation of the night skies with telescopes, as well as gaining an understanding of the various phenomena that go on in space, such as Lunar phases and Space weather.', 10, 'MWF 9:00PM'),
        ('Charms', 'Comprised of a very wide range of different spells concerned with giving a target (be it an object or an individual) new and unexpected properties and/or making the target perform certain actions, among other possible effects.', 3, 'MWF 8:50AM'),
        ('Defense Against the Dark Arts', 'The class for students on how to protect themselves against the Dark Arts, how to use offencive and protective spells, and how to properly handle and deal with dark creatures.', 6, 'MWF 10:00AM'),
        ('Herbology', 'The study of magical plants and fungi', 4, 'T/Th 12:20PM'),
        ('Potions', 'The exact art and subtle science of creating various liquid mixtures with different magical effects.', 8, 'T/Th 8:40AM'),
        ('Transfiguration', 'Theory-based subject that practices the art of changing the form or appearance of an object, as well as changing it back.', 9, 'MWF 11:15AM'),
        ('Care of Magical Creatures', 'Teaches the behavior, identification, diet, grooming, proper riding technique for several magical beasts.', 7, 'MWF 1:30PM'),
        ('Divination', 'Art of predicting the future', 1, 'MWF 7:00PM'),
        ('Flying', 'Teaches how to fly on magical broomsticks.', 2, 'T/Th 10:00AM');

INSERT INTO stores(name, description)
VALUES
        ('Honeydukes', 'A wizarding sweet shop filled with shelves upon shelves of the most succulent-looking sweets imaginable.'),
        ('Zonkos Joke Shop', 'A wizarding joke shop that is a favorite of Hogwarts students.'),
        ('Dervish and Banges', 'An equipment shop that sells and repairs magical instruments.'),
        ('Three Broomsticks Inn', 'A popular inn and pub in Hogsmeade serving butterbeer and firewhisky.'),
        ('Scrivenshaft Quill Shop', 'A writing supplies store selling quills, parchment, and stationary.'),
        ('Borgin and Burkes', 'An antique shop known to deal with unusual and ancient magical artifacts.');

INSERT INTO items(store, name, price)
VALUES
        (1, 'Cauldron Cakes', 5.99),
        (1, 'Chocolate Frogs', 2.99),
        (1, 'Fizzing Whizzbees', 4.99),
        (1, 'Glacial Snow Flakes', 3.49),
        (1, 'Pink Coconut Ice', 6.99),

        (2, 'Bewildering Can of Mystery', 14.99),
        (2, 'Boxing Telescope', 16.99),
        (2, 'Gillyweed Tonic', 8.99),
        (2, 'Sneakoscope', 24.99),
        (2, 'Trick Wand', 12.99),

        (2, 'Cauldron', 39.99),
        (2, 'Nimbus 2000', 179.99),
        (2, 'Numbus 2001', 429.99),
        (2, 'Resurrection Stone Ring', 129.99),
        (5, 'Time-Turner', 349.99),

        (5, 'Fish and Chips', 17.99),
        (5, 'Sticky Toffee Pudding', 7.49),
        (5, 'Butterbeer 23oz.', 5.99),
        (5, 'Butterbeer Ice Cream', 6.99),
        (5, 'Pumpkin Juice', 5.99),

        (5, 'Scrivenshaft Premium Ink', 3.49),
        (5, 'Quill Feather Fun Pack', 13.99),
        (5, 'Icelandic Puffin Feather Pack', 24.99),
        (5, 'Combustible Paper', 8.99),
        (5, 'The Scrivenshaft Quill', 49.99),

        (6, 'Staring Glass Eye', 79.99),
        (6, 'Death Eater Mask', 119.99),
        (6, 'Opal Necklace', 149.99),
        (6, 'Assorted Skulls', 249.99),
        (6, 'Vanishing Cabinet', 11099.99);


