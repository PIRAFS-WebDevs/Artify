const productData = [
    {
        "_id": "5485465846541",
        "name": "E-commerce Bliss",
        "slug": "ecommerce-bliss",
        "categories": ["E-commerce", "Shop"],
        "tags": ["Responsive", "Product Showcase"],
        "layout": "grid",
        "description": "An e-commerce theme for showcasing products with a grid layout.",
        "type_id": "456789",
        "price": "55",
        "sale_price": "50",
        "max_price": "60",
        "in_stock": "90",
        "status": "Published",
        "image": ["image7.jpg", "image8.jpg"],
        "activity": {
          "ratings": [
            { "user_id": "user707", "number": 4 },
            { "user_id": "user808", "number": 5 }
          ],
          "comment": [
            { "user_id": "user909", "text": "Perfect for online stores!" }
          ]
        },
        "preview_url": "https://example.com/ecommerce-bliss"
      },
      {
        "_id": "4545454545451",
        "name": "Photographer's Dream",
        "slug": "photographers-dream",
        "categories": ["Photography", "Portfolio"],
        "tags": ["Fullscreen", "Gallery"],
        "layout": "fullscreen",
        "description": "A theme designed for photographers to showcase their stunning portfolios.",
        "type_id": "567890",
        "price": "70",
        "sale_price": "65",
        "max_price": "80",
        "in_stock": "60",
        "status": "Draft",
        "image": ["image9.jpg", "image10.jpg"],
        "activity": {
          "ratings": [
            { "user_id": "user1010", "number": 5 },
            { "user_id": "user1111", "number": 4 }
          ],
          "comment": [
            { "user_id": "user1212", "text": "Amazing for showcasing photos!" }
          ]
        },
        "preview_url": "https://example.com/photographers-dream"
      },
      {
        "_id": "64544654564541",
        "name": "Modern Blog",
        "slug": "modern-blog",
        "categories": ["Blogging", "Personal"],
        "tags": ["Clean", "Typography"],
        "layout": "blog",
        "description": "A modern and clean theme for personal blogging.",
        "type_id": "345678",
        "price": "30",
        "sale_price": "25",
        "max_price": "35",
        "in_stock": "120",
        "status": "Published",
        "image": ["image5.jpg", "image6.jpg"],
        "activity": {
          "ratings": [
            { "user_id": "user404", "number": 4 },
            { "user_id": "user505", "number": 5 }
          ],
          "comment": [
            { "user_id": "user606", "text": "Great design for blogs!" }
          ]
        },
        "preview_url": "https://example.com/modern-blog"
      },
      {
        "_id": "645645654564651",
        "name": "Theme 2",
        "slug": "theme-2",
        "categories": ["Portfolio", "Creative"],
        "tags": ["Minimal", "Gallery"],
        "layout": "grid",
        "description": "A minimalistic theme for showcasing creative portfolios.",
        "type_id": "789012",
        "price": "45",
        "sale_price": "35",
        "max_price": "50",
        "in_stock": "75",
        "status": "Draft",
        "image": ["image3.jpg", "image4.jpg"],
        "activity": {
          "ratings": [
            { "user_id": "user101", "number": 3 },
            { "user_id": "user202", "number": 4 }
          ],
          "comment": [
            { "user_id": "user303", "text": "Needs more customization options." }
          ]
        },
        "preview_url": "https://example.com/theme2"
      },
      {
        "_id": "454654546545641",
        "name": "Tech Innovation",
        "slug": "tech-innovation",
        "categories": ["Technology", "Innovation"],
        "tags": ["Futuristic", "Tech News"],
        "layout": "magazine",
        "description": "A futuristic theme for presenting technology news and innovations.",
        "type_id": "678901",
        "price": "40",
        "sale_price": "35",
        "max_price": "45",
        "in_stock": "80",
        "status": "Published",
        "image": ["image11.jpg", "image12.jpg"],
        "activity": {
          "ratings": [
            { "user_id": "user1313", "number": 4 },
            { "user_id": "user1414", "number": 3 }
          ],
          "comment": [
            { "user_id": "user1515", "text": "Informative and sleek design!" }
          ]
        },
        "preview_url": "https://example.com/tech-innovation"
      },
      {
        "_id": "647444564541",
        "name": "Nature Retreat",
        "slug": "nature-retreat",
        "categories": ["Nature", "Travel"],
        "tags": ["Scenic", "Adventure"],
        "layout": "fullscreen",
        "description": "A theme designed to showcase the beauty of nature and travel adventures.",
        "type_id": "789012",
        "price": "60",
        "sale_price": "55",
        "max_price": "70",
        "in_stock": "70",
        "status": "Published",
        "image": ["image13.jpg", "image14.jpg"],
        "activity": {
          "ratings": [
            { "user_id": "user1616", "number": 5 },
            { "user_id": "user1717", "number": 4 }
          ],
          "comment": [
            { "user_id": "user1818", "text": "Perfect for travel blogs!" }
          ]
        },
        "preview_url": "https://example.com/nature-retreat"
      },
      {
        "_id": "654545454654654651",
        "name": "Fitness Pro",
        "slug": "fitness-pro",
        "categories": ["Health", "Fitness"],
        "tags": ["Workout", "Healthy Living"],
        "layout": "grid",
        "description": "A theme tailored for fitness enthusiasts and promoting a healthy lifestyle.",
        "type_id": "890123",
        "price": "45",
        "sale_price": "40",
        "max_price": "50",
        "in_stock": "85",
        "status": "Published",
        "image": ["image15.jpg", "image16.jpg"],
        "activity": {
          "ratings": [
            { "user_id": "user1919", "number": 4 },
            { "user_id": "user2020", "number": 5 }
          ],
          "comment": [
            { "user_id": "user2121", "text": "Great design for fitness blogs!" }
          ]
        },
        "preview_url": "https://example.com/fitness-pro"
      },
      {
        "_id": "657455454564651",
        "name": "Unique Theme 1",
        "slug": "unique-theme-1",
        "categories": ["Custom", "Experimental"],
        "tags": ["Innovative", "Experimental"],
        "layout": "custom",
        "description": "An experimental and unique theme for those who seek innovation.",
        "type_id": "987654",
        "price": "75",
        "sale_price": "70",
        "max_price": "80",
        "in_stock": "50",
        "status": "Draft",
        "image": ["image17.jpg", "image18.jpg"],
        "activity": {
          "ratings": [
            { "user_id": "user2222", "number": 5 },
            { "user_id": "user2323", "number": 4 }
          ],
          "comment": [
            { "user_id": "user2424", "text": "Uniqueness at its best!" }
          ]
        },
        "preview_url": "https://example.com/unique-theme-1"
      },
      {
        "_id": "45556445121411",
        "name": "Adventure Explorer",
        "slug": "adventure-explorer",
        "categories": ["Travel", "Adventure"],
        "tags": ["Exploration", "Outdoors"],
        "layout": "fullscreen",
        "description": "An adventurous theme for explorers and outdoor enthusiasts.",
        "type_id": "123123",
        "price": "55",
        "sale_price": "50",
        "max_price": "60",
        "in_stock": "75",
        "status": "Published",
        "image": ["image1.jpg", "image2.jpg"],
        "activity": {
          "ratings": [
            { "user_id": "user111", "number": 4 },
            { "user_id": "user222", "number": 5 }
          ],
          "comment": [
            { "user_id": "user333", "text": "Perfect for travel blogs!" }
          ]
        },
        "preview_url": "https://example.com/adventure-explorer"
      },
      {
        "_id": "354541512311",
        "name": "Fashion Chic",
        "slug": "fashion-chic",
        "categories": ["Fashion", "Style"],
        "tags": ["Trendy", "Runway"],
        "layout": "grid",
        "description": "A chic and trendy theme for fashionistas and style enthusiasts.",
        "type_id": "456456",
        "price": "65",
        "sale_price": "60",
        "max_price": "70",
        "in_stock": "60",
        "status": "Draft",
        "image": ["image3.jpg", "image4.jpg"],
        "activity": {
          "ratings": [
            { "user_id": "user444", "number": 5 },
            { "user_id": "user555", "number": 4 }
          ],
          "comment": [
            { "user_id": "user666", "text": "Highly stylish and elegant!" }
          ]
        },
        "preview_url": "https://example.com/fashion-chic"
      },
      {
        "_id": "454548564541",
        "name": "Tech Hub",
        "slug": "tech-hub",
        "categories": ["Technology", "Innovation"],
        "tags": ["Tech News", "Gadgets"],
        "layout": "magazine",
        "description": "A tech-savvy theme for staying updated on the latest technology trends.",
        "type_id": "789789",
        "price": "40",
        "sale_price": "35",
        "max_price": "45",
        "in_stock": "80",
        "status": "Published",
        "image": ["image5.jpg", "image6.jpg"],
        "activity": {
          "ratings": [
            { "user_id": "user777", "number": 4 },
            { "user_id": "user888", "number": 3 }
          ],
          "comment": [
            { "user_id": "user999", "text": "Great for tech enthusiasts!" }
          ]
        },
        "preview_url": "https://example.com/tech-hub"
      },
      {
        "_id": "545212121",
        "name": "Healthy Living",
        "slug": "healthy-living",
        "categories": ["Health", "Lifestyle"],
        "tags": ["Wellness", "Nutrition"],
        "layout": "blog",
        "description": "A theme promoting a healthy lifestyle with wellness and nutrition tips.",
        "type_id": "987987",
        "price": "50",
        "sale_price": "45",
        "max_price": "55",
        "in_stock": "90",
        "status": "Draft",
        "image": ["image7.jpg", "image8.jpg"],
        "activity": {
          "ratings": [
            { "user_id": "user1010", "number": 5 },
            { "user_id": "user1111", "number": 4 }
          ],
          "comment": [
            { "user_id": "user1212", "text": "Informative and motivating!" }
          ]
        },
        "preview_url": "https://example.com/healthy-living"
      },
      {
        "_id": "8+456541213511",
        "name": "Artistic Showcase",
        "slug": "artistic-showcase",
        "categories": ["Art", "Creativity"],
        "tags": ["Painting", "Sculpture"],
        "layout": "gallery",
        "description": "A theme designed for artists to showcase their creative works in a gallery format.",
        "type_id": "111222",
        "price": "75",
        "sale_price": "70",
        "max_price": "80",
        "in_stock": "70",
        "status": "Published",
        "image": ["image9.jpg", "image10.jpg"],
        "activity": {
          "ratings": [
            { "user_id": "user1313", "number": 4 },
            { "user_id": "user1414", "number": 5 }
          ],
          "comment": [
            { "user_id": "user1515", "text": "Perfect for art lovers!" }
          ]
        },
        "preview_url": "https://example.com/artistic-showcase"
      },
      {
        "_id": "5645545441",
        "name": "Gourmet Delight",
        "slug": "gourmet-delight",
        "categories": ["Food", "Culinary"],
        "tags": ["Gourmet", "Foodie"],
        "layout": "fullscreen",
        "description": "A mouth-watering theme for foodies and culinary enthusiasts to explore gourmet delights.",
        "type_id": "222333",
        "price": "55",
        "sale_price": "50",
        "max_price": "60",
        "in_stock": "75",
        "status": "Draft",
        "image": ["image11.jpg", "image12.jpg"],
        "activity": {
          "ratings": [
            { "user_id": "user1616", "number": 5 },
            { "user_id": "user1717", "number": 4 }
          ],
          "comment": [
            { "user_id": "user1818", "text": "Delicious and tempting!" }
          ]
        },
        "preview_url": "https://example.com/gourmet-delight"
      },
      {
        "_id": "1657744545354",
        "name": "Pet Paradise",
        "slug": "pet-paradise",
        "categories": ["Pets", "Animals"],
        "tags": ["Cute", "Pet Care"],
        "layout": "grid",
        "description": "A theme celebrating the love for pets with cute and adorable designs.",
        "type_id": "333444",
        "price": "45",
        "sale_price": "40",
        "max_price": "50",
        "in_stock": "85",
        "status": "Published",
        "image": ["image13.jpg", "image14.jpg"],
        "activity": {
          "ratings": [
            { "user_id": "user1919", "number": 4 },
            { "user_id": "user2020", "number": 5 }
          ],
          "comment": [
            { "user_id": "user2121", "text": "Perfect for pet lovers!" }
          ]
        },
        "preview_url": "https://example.com/pet-paradise"
      },
      {
        "_id": "5646554841",
        "name": "Science Explorer",
        "slug": "science-explorer",
        "categories": ["Science", "Discovery"],
        "tags": ["Innovation", "Research"],
        "layout": "magazine",
        "description": "A theme designed for science enthusiasts to explore the latest discoveries and innovations.",
        "type_id": "444555",
        "price": "40",
        "sale_price": "35",
        "max_price": "45",
        "in_stock": "80",
        "status": "Published",
        "image": ["image15.jpg", "image16.jpg"],
        "activity": {
          "ratings": [
            { "user_id": "user2222", "number": 4 },
            { "user_id": "user2323", "number": 3 }
          ],
          "comment": [
            { "user_id": "user2424", "text": "Informative and intriguing!" }
          ]
        },
        "preview_url": "https://example.com/science-explorer"
      },
      {
        "_id": "54413584541",
        "name": "Vintage Charm",
        "slug": "vintage-charm",
        "categories": ["Vintage", "Nostalgia"],
        "tags": ["Classic", "Retro"],
        "layout": "blog",
        "description": "A theme that brings back the vintage charm with classic and retro elements.",
        "type_id": "555666",
        "price": "50",
        "sale_price": "45",
        "max_price": "55",
        "in_stock": "90",
        "status": "Draft",
        "image": ["image17.jpg", "image18.jpg"],
        "activity": {
          "ratings": [
            { "user_id": "user2525", "number": 5 },
            { "user_id": "user2626", "number": 4 }
          ],
          "comment": [
            { "user_id": "user2727", "text": "Nostalgic and beautifully designed!" }
          ]
        },
        "preview_url": "https://example.com/vintage-charm"
      },
      {
        "_id": "145445214",
        "name": "Business Pro",
        "slug": "business-pro",
        "categories": ["Business", "Professional"],
        "tags": ["Corporate", "Business Solutions"],
        "layout": "grid",
        "description": "A professional theme tailored for business websites and corporate solutions.",
        "type_id": "666777",
        "price": "60",
        "sale_price": "55",
        "max_price": "70",
        "in_stock": "80",
        "status": "Published",
        "image": ["image19.jpg", "image20.jpg"],
        "activity": {
          "ratings": [
            { "user_id": "user2828", "number": 4 },
            { "user_id": "user2929", "number": 5 }
          ],
          "comment": [
            { "user_id": "user3030", "text": "Perfect for corporate websites!" }
          ]
        },
        "preview_url": "https://example.com/business-pro"
      },
      {
        "_id": "17412544",
        "name": "Music Harmony",
        "slug": "music-harmony",
        "categories": ["Music", "Entertainment"],
        "tags": ["Melody", "Concerts"],
        "layout": "fullscreen",
        "description": "A musical theme for harmony lovers, featuring melodies and concert highlights.",
        "type_id": "777888",
        "price": "55",
        "sale_price": "50",
        "max_price": "60",
        "in_stock": "75",
        "status": "Draft",
        "image": ["image21.jpg", "image22.jpg"],
        "activity": {
          "ratings": [
            { "user_id": "user3131", "number": 5 },
            { "user_id": "user3232", "number": 4 }
          ],
          "comment": [
            { "user_id": "user3333", "text": "Captures the essence of music beautifully!" }
          ]
        },
        "preview_url": "https://example.com/music-harmony"
      },
      {
        "_id": "17464268",
        "name": "Education Hub",
        "slug": "education-hub",
        "categories": ["Education", "Learning"],
        "tags": ["Knowledge", "Online Courses"],
        "layout": "magazine",
        "description": "An educational theme featuring a hub for knowledge seekers and online learners.",
        "type_id": "888999",
        "price": "40",
        "sale_price": "35",
        "max_price": "45",
        "in_stock": "80",
        "status": "Published",
        "image": ["image23.jpg", "image24.jpg"],
        "activity": {
          "ratings": [
            { "user_id": "user3434", "number": 4 },
            { "user_id": "user3535", "number": 3 }
          ],
          "comment": [
            { "user_id": "user3636", "text": "Ideal for online learning platforms!" }
          ]
        },
        "preview_url": "https://example.com/education-hub"
      },
      {
        "_id": "1412584",
        "name": "Sci-Fi World",
        "slug": "sci-fi-world",
        "categories": ["Science Fiction", "Fantasy"],
        "tags": ["Futuristic", "Alternate Reality"],
        "layout": "fullscreen",
        "description": "A theme that transports users to a sci-fi world with futuristic and fantasy elements.",
        "type_id": "999000",
        "price": "65",
        "sale_price": "60",
        "max_price": "70",
        "in_stock": "60",
        "status": "Draft",
        "image": ["image25.jpg", "image26.jpg"],
        "activity": {
          "ratings": [
            { "user_id": "user3737", "number": 5 },
            { "user_id": "user3838", "number": 4 }
          ],
          "comment": [
            { "user_id": "user3939", "text": "A journey into the future! Love it!" }
          ]
        },
        "preview_url": "https://example.com/sci-fi-world"
      },
      {
        "_id": "14158741",
        "name": "Fashionista",
        "slug": "fashionista",
        "categories": ["Fashion", "Style"],
        "tags": ["Trendy", "Chic"],
        "layout": "grid",
        "description": "A stylish and trendy theme for fashion enthusiasts.",
        "type_id": "123456",
        "price": "55",
        "sale_price": "50",
        "max_price": "60",
        "in_stock": "75",
        "status": "Published",
        "image": ["fashion_image1.jpg", "fashion_image2.jpg"],
        "activity": {
          "ratings": [
            { "user_id": "user1", "number": 4 },
            { "user_id": "user2", "number": 5 }
          ],
          "comment": [
            { "user_id": "user3", "text": "Love the style and layout!" }
          ]
        },
        "preview_url": "https://example.com/fashionista"
      },
      {
        "_id": "174895",
        "name": "Gaming Paradise",
        "slug": "gaming-paradise",
        "categories": ["Gaming", "Entertainment"],
        "tags": ["Gamer", "Fun"],
        "layout": "fullscreen",
        "description": "A theme designed for gaming enthusiasts with a focus on immersive experiences.",
        "type_id": "234567",
        "price": "65",
        "sale_price": "60",
        "max_price": "70",
        "in_stock": "60",
        "status": "Draft",
        "image": ["gaming_image1.jpg", "gaming_image2.jpg"],
        "activity": {
          "ratings": [
            { "user_id": "user4", "number": 4 },
            { "user_id": "user5", "number": 3 }
          ],
          "comment": [
            { "user_id": "user6", "text": "Awesome design for gamers!" }
          ]
        },
        "preview_url": "https://example.com/gaming-paradise"
      },
      {
        "_id": "147841",
        "name": "Culinary Delight",
        "slug": "culinary-delight",
        "categories": ["Food", "Cooking"],
        "tags": ["Gourmet", "Recipes"],
        "layout": "blog",
        "description": "A theme for foodies to share gourmet recipes and culinary experiences.",
        "type_id": "345678",
        "price": "40",
        "sale_price": "35",
        "max_price": "45",
        "in_stock": "80",
        "status": "Published",
        "image": ["culinary_image1.jpg", "culinary_image2.jpg"],
        "activity": {
          "ratings": [
            { "user_id": "user7", "number": 5 },
            { "user_id": "user8", "number": 4 }
          ],
          "comment": [
            { "user_id": "user9", "text": "Mouthwatering designs for food bloggers!" }
          ]
        },
        "preview_url": "https://example.com/culinary-delight"
      },
      {
        "_id": "1475",
        "name": "Adventure Seeker",
        "slug": "adventure-seeker",
        "categories": ["Travel", "Adventure"],
        "tags": ["Explore", "Outdoor"],
        "layout": "fullscreen",
        "description": "A theme for those seeking adventure and exploring the great outdoors.",
        "type_id": "456789",
        "price": "50",
        "sale_price": "45",
        "max_price": "55",
        "in_stock": "70",
        "status": "Published",
        "image": ["adventure_image1.jpg", "adventure_image2.jpg"],
        "activity": {
          "ratings": [
            { "user_id": "user10", "number": 4 },
            { "user_id": "user11", "number": 5 }
          ],
          "comment": [
            { "user_id": "user12", "text": "Perfect for travel and adventure blogs!" }
          ]
        },
        "preview_url": "https://example.com/adventure-seeker"
      },
      {
        "_id": "114568",
        "name": "Tech Innovator",
        "slug": "tech-innovator",
        "categories": ["Technology", "Innovation"],
        "tags": ["Futuristic", "Tech News"],
        "layout": "magazine",
        "description": "A theme focused on presenting the latest technology news and innovations.",
        "type_id": "567890",
        "price": "45",
        "sale_price": "40",
        "max_price": "50",
        "in_stock": "85",
        "status": "Draft",
        "image": ["tech_image1.jpg", "tech_image2.jpg"],
        "activity": {
          "ratings": [
            { "user_id": "user13", "number": 3 },
            { "user_id": "user14", "number": 4 }
          ],
          "comment": [
            { "user_id": "user15", "text": "Informative and sleek design for tech enthusiasts!" }
          ]
        },
        "preview_url": "https://example.com/tech-innovator"
      },
      {
        "_id": "1111",
        "name": "Artistic Expression",
        "slug": "artistic-expression",
        "categories": ["Art", "Creativity"],
        "tags": ["Modern Art", "Gallery"],
        "layout": "grid",
        "description": "A theme showcasing modern art and providing a platform for creative expression.",
        "type_id": "678901",
        "price": "55",
        "sale_price": "50",
        "max_price": "60",
        "in_stock": "65",
        "status": "Published",
        "image": ["art_image1.jpg", "art_image2.jpg"],
        "activity": {
          "ratings": [
            { "user_id": "user16", "number": 5 },
            { "user_id": "user17", "number": 4 }
          ],
          "comment": [
            { "user_id": "user18", "text": "Perfect for art lovers and creative minds!" }
          ]
        },
        "preview_url": "https://example.com/artistic-expression"
      },
]

export default productData;