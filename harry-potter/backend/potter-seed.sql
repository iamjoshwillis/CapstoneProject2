INSERT INTO users (username, image_url, bio, email, password)
VALUES ('joshwillis', 'profilepicurl', 'Developer of this page', 'iamjoshwillis@gmail.com', 'password'),
        ('testaccount', 'profilepicurl', 'Demo Account', 'test@testing.com', 'password');

INSERT INTO houses(id, name, founder, image_link, description)
VALUES 
        (0,
        'Slytherin',
        'Salazar Slytherin',
        'Photo_Placeholder',
        'Slytherins tend to be ambitious, shrewd, cunning, strong leaders, and achievement-oriented. They also have highly developed senses of self-preservation.'
        ),
        (1,
        'Gryffindor',
        'Godric Gryffindor',
        'Photo_Placeholder',
        'The Gryffindor house emphasises the traits of courage as well as "daring, nerve, and chivalry", and thus its members were generally regarded as brave, though sometimes to the point of recklessness.'
        ),
        (2,
        'Ravenclaw',
        'Rowena Ravenclaw',
        'Photo_Placeholder',
        'The Ravenclaw House prizes learning, wisdom, wit, and intellect in its members. Thus, many Ravenclaws tend to be academically motivated and talented students.'
        ),
        (3,
        'Hufflepuff',
        'Helga Hufflepuff',
        'Photo_Placeholder',
        'Students belonging to this house are known to be hard-working, friendly, loyal, honest and rather impartial. Hufflepuffs are more modest about their accomplishments.'
        )

INSERT INTO courses(name, description, professor, time)
VALUES
        (

        )

INSERT INTO professors(name, house, image, courses)
VALUES 
        ("Sybill Trelawney", 3, "", "Divination"),
        ("Rolanda Hooch", 1, "", "Flying"),
        ("Filius Flitwick", 2, "", "Defense Against the Dark Arts"),
        ("Pomona Sprout", 3, "", "Herbology"),
        ("Horace Slughorn", 0, "https://ik.imagekit.io/hpapi/slughorn.JPG", "Potions")
        ("Remus Lupin", 1, "https://ik.imagekit.io/hpapi/lupin.jpg", "Defense Against the Dark Arts"),
        ("Rubeus Hagrid", 1, "https://ik.imagekit.io/hpapi/hagrid.png", "Care of Magical Creatures"),
        ("Severus Snape", 0, "https://ik.imagekit.io/hpapi/snape.jpg", "Potions"),
        ("Minerva McGonagall", 1, "https://ik.imagekit.io/hpapi/mcgonagall.jpg", "Transfiguration")

INSERT INTO stores(name, description, items)
VALUES
        (
                
        )

