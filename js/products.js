/* =========================================================
   ORAVANY — Catalogue produits (fiches premium détaillées)
   ========================================================= */

// Images locales — photos premium ORAVANY
const IMG = {
    poivreSauvage: 'assets/images/products/poivre-sauvage.jpg',
    poivreNoir: 'assets/images/products/poivre-noir.jpg',
    epicesAssorties: 'assets/images/products/epices-assorties.jpg',
    vanille: 'assets/images/products/vanille.jpg',
    girofle: 'assets/images/products/girofle.svg',
    cannelle: 'assets/images/products/cannelle.jpg',
    riz: 'assets/images/products/riz-rouge.jpg',
    paysage: 'assets/images/products/paysage-mada.jpg',
    foret: 'assets/images/products/foret.jpg',
    heroPoivre: 'assets/images/products/hero-poivre.jpg',
    recoltant: 'assets/images/products/recoltant.jpg',
    bundle: 'assets/images/products/bundle.png',
    grossiste: 'assets/images/products/grossiste.png'
};

const PRODUCTS = [
    {
        id: 'poivre-sauvage',
        name: 'Poivre Sauvage Voatsiperifery',
        latinName: 'Piper borbonense',
        category: 'poivres',
        categoryLabel: 'Poivres sauvages',
        tagline: "L'or noir sauvage de Madagascar",
        shortDesc: "Récolté à la main au cœur des forêts tropicales malgaches, l'une des épices les plus rares et les plus recherchées au monde.",
        heroDescription: "Récolté à la main au cœur des forêts tropicales malgaches, le poivre sauvage Voatsiperifery est l'une des épices les plus rares et les plus recherchées au monde. Poussant naturellement à l'état sauvage sur de longues lianes pouvant atteindre plus de 20 mètres de hauteur, ce poivre d'exception est cueilli avec patience et savoir-faire par des récoltants locaux perpétuant une tradition ancestrale. Chez ORAVANY, nous sélectionnons uniquement les plus belles baies afin d'offrir un poivre d'une qualité aromatique remarquable, fidèle à la richesse authentique de Madagascar.",
        aromatic: {
            title: "Une signature aromatique unique",
            intro: "Le Voatsiperifery développe une palette gustative rare et raffinée :",
            notes: [
                "notes boisées profondes",
                "fraîcheur végétale",
                "touches florales délicates",
                "finale légèrement citronnée",
                "longueur en bouche intense et élégante"
            ],
            outro: "Contrairement aux poivres classiques, il révèle une complexité subtile qui sublime aussi bien les plats gastronomiques que les cuisines du quotidien."
        },
        tasting: {
            title: "Conseils de dégustation",
            intro: "À moudre au dernier moment pour préserver toute sa richesse aromatique.",
            ideal: [
                "viandes grillées",
                "poissons nobles",
                "légumes rôtis",
                "sauces raffinées",
                "chocolat noir",
                "fruits exotiques",
                "cuisine gastronomique"
            ]
        },
        origin: {
            title: "Forêts tropicales de Madagascar",
            text: "Le poivre Voatsiperifery pousse exclusivement à Madagascar, dans des zones sauvages préservées où la biodiversité est exceptionnelle. Sa récolte manuelle difficile en fait une épice rare, précieuse et profondément liée au terroir malgache."
        },
        benefits: {
            title: "Bienfaits naturels",
            intro: "Le poivre sauvage est naturellement reconnu pour ses propriétés :",
            list: [
                "riche en antioxydants",
                "stimulant digestif naturel",
                "favorise la circulation",
                "aide à révéler les saveurs",
                "contribue au bien-être général"
            ],
            outro: "Grâce à sa richesse en pipérine, il participe également à une meilleure absorption de certains nutriments."
        },
        experience: "Plus qu'une épice, le poivre sauvage ORAVANY est une invitation au voyage. Une immersion sensorielle dans les forêts de Madagascar, où la nature, le savoir-faire humain et la rareté se rencontrent pour donner naissance à une épice d'exception.",
        price: 5.50,
        unit: '50g',
        formats: [
            { label: '50g', price: 5.50 },
            { label: '100g', price: 10.00 },
            { label: '250g', price: 23.50 }
        ],
        image: IMG.poivreSauvage,
        gallery: [IMG.poivreSauvage, IMG.poivreNoir, IMG.epicesAssorties, IMG.foret],
        badge: 'Phare',
        featured: true,
        notes: ['Boisé', 'Citronné', 'Floral']
    },

    {
        id: 'vanille-bourbon',
        name: 'Vanille Bourbon Premium',
        latinName: 'Vanilla planifolia',
        category: 'vanille',
        categoryLabel: 'Vanille',
        tagline: "L'élégance authentique de la vanille malgache",
        shortDesc: "Gousses charnues, souples et naturellement riches en vanilline — l'excellence du raffinement malgache.",
        heroDescription: "Cultivée dans les terres tropicales de Madagascar, notre vanille Bourbon ORAVANY incarne l'excellence et le raffinement d'un savoir-faire ancestral. Récoltée à maturité puis soigneusement préparée selon des méthodes traditionnelles, chaque gousse développe une richesse aromatique profonde, gourmande et intensément parfumée. Chez ORAVANY, nous sélectionnons uniquement des gousses premium charnues, souples et naturellement riches en vanilline afin d'offrir une expérience sensorielle exceptionnelle.",
        aromatic: {
            title: "Une signature aromatique exceptionnelle",
            intro: "La vanille Bourbon de Madagascar est mondialement reconnue pour son intensité et sa complexité aromatique. Notre sélection révèle :",
            notes: [
                "des notes chaudes et gourmandes",
                "des touches de cacao et de caramel",
                "une rondeur naturellement sucrée",
                "une profondeur boisée élégante",
                "une longueur en bouche raffinée"
            ],
            outro: "Une vanille rare qui sublime aussi bien la pâtisserie que la cuisine gastronomique."
        },
        tasting: {
            title: "Conseils de dégustation",
            intro: "Idéale pour :",
            ideal: [
                "pâtisserie",
                "crèmes et desserts",
                "glaces artisanales",
                "chocolats",
                "boissons chaudes",
                "rhums arrangés",
                "sauces gastronomiques"
            ],
            tipTitle: "Pour une infusion optimale",
            tipList: [
                "fendre la gousse dans le sens de la longueur",
                "récupérer les grains",
                "laisser infuser doucement afin de révéler toute sa richesse aromatique"
            ]
        },
        origin: {
            title: "Région SAVA — Madagascar",
            text: "Notre vanille provient des plantations tropicales du nord-est de Madagascar, berceau historique de la vanille Bourbon. Le climat chaud et humide de la région SAVA offre des conditions idéales pour développer une vanille d'une qualité aromatique incomparable.",
            steps: {
                title: "Chaque gousse est préparée avec patience selon un processus artisanal exigeant :",
                list: ["récolte manuelle", "échaudage", "séchage au soleil", "affinage lent"]
            }
        },
        benefits: {
            title: "Bienfaits naturels",
            intro: "La vanille est naturellement appréciée pour ses propriétés :",
            list: [
                "riche en composés antioxydants",
                "parfum naturellement réconfortant",
                "favorise une sensation de bien-être",
                "apporte une douceur naturelle aux préparations",
                "ingrédient noble et naturel"
            ],
            outro: "Sa richesse aromatique permet également de réduire l'utilisation de sucres ou d'arômes artificiels."
        },
        experience: "La vanille ORAVANY est une immersion dans l'âme de Madagascar. Une épice précieuse née du temps, du climat tropical et du savoir-faire humain, offrant une expérience gustative raffinée et profondément authentique.",
        price: 4.50,
        unit: '5 gousses',
        formats: [
            { label: '5 gousses', price: 4.50 },
            { label: '10 gousses', price: 8.00 },
            { label: '25 gousses', price: 18.50 }
        ],
        image: IMG.vanille,
        gallery: [IMG.vanille, IMG.epicesAssorties, IMG.foret, IMG.paysage],
        badge: 'Grade Gourmet',
        featured: true,
        notes: ['Chocolaté', 'Caramel', 'Boisé']
    },

    {
        id: 'clou-girofle',
        name: 'Clou de Girofle Premium',
        latinName: 'Syzygium aromaticum',
        category: 'epices',
        categoryLabel: 'Épices rares',
        tagline: "Une épice rare aux arômes puissants et raffinés",
        shortDesc: "Cueillis à la main avant floraison, séchés naturellement — concentration aromatique exceptionnelle.",
        heroDescription: "Récolté sous le soleil tropical de Madagascar, le clou de girofle ORAVANY révèle toute l'intensité et la richesse aromatique d'une épice emblématique utilisée depuis des siècles à travers le monde. Cueillis à la main avant floraison puis séchés naturellement, nos clous de girofle sont sélectionnés pour leur qualité exceptionnelle, leur concentration aromatique et leur fraîcheur incomparable. Chez ORAVANY, nous privilégions une récolte artisanale afin de préserver toute la puissance et l'authenticité de cette épice précieuse.",
        aromatic: {
            title: "Une signature aromatique intense",
            intro: "Le clou de girofle développe un profil aromatique unique et profondément chaleureux :",
            notes: [
                "notes boisées et épicées",
                "puissance aromatique intense",
                "touches chaudes et légèrement sucrées",
                "fraîcheur camphrée subtile",
                "longueur en bouche persistante"
            ],
            outro: "Une épice de caractère qui apporte profondeur et élégance aux préparations culinaires."
        },
        tasting: {
            title: "Conseils de dégustation",
            intro: "Idéal pour :",
            ideal: [
                "plats mijotés",
                "currys",
                "marinades",
                "sauces",
                "pâtisserie",
                "compotes",
                "infusions",
                "boissons chaudes et vins épicés"
            ],
            outro: "À utiliser entier ou fraîchement moulu pour révéler toute sa richesse aromatique. Quelques clous suffisent pour parfumer intensément une préparation."
        },
        origin: {
            title: "Madagascar — Terre d'épices d'exception",
            text: "Le climat tropical et les sols riches de Madagascar offrent des conditions idéales pour produire un clou de girofle d'une qualité remarquable. Récoltés manuellement puis séchés lentement au soleil, nos clous développent une forte concentration en huiles essentielles, garantissant un parfum intense et durable."
        },
        benefits: {
            title: "Bienfaits naturels",
            intro: "Le clou de girofle est naturellement reconnu pour ses nombreuses propriétés :",
            list: [
                "riche en antioxydants",
                "source naturelle d'eugénol",
                "propriétés stimulantes et tonifiantes",
                "contribue au confort digestif",
                "apprécié pour ses qualités purifiantes traditionnelles"
            ],
            outro: "Utilisé depuis longtemps dans les médecines traditionnelles, il est également réputé pour son action réchauffante et revitalisante."
        },
        experience: "Le clou de girofle ORAVANY incarne la puissance aromatique des grandes épices tropicales. Une épice noble et intense, issue du terroir exceptionnel de Madagascar, pensée pour sublimer la cuisine avec élégance et authenticité.",
        price: 14.00,
        unit: '80g',
        formats: [
            { label: '80g', price: 14.00 },
            { label: '200g', price: 32.00 }
        ],
        image: IMG.girofle,
        gallery: [IMG.girofle, IMG.epicesAssorties, IMG.poivreSauvage, IMG.foret],
        badge: 'Récolte 2025',
        featured: false,
        notes: ['Boisé', 'Épicé', 'Chaleureux']
    },

    {
        id: 'cannelle',
        name: 'Cannelle Premium',
        latinName: 'Cinnamomum verum',
        category: 'epices',
        categoryLabel: 'Épices rares',
        tagline: "La douceur chaleureuse des épices tropicales",
        shortDesc: "Bâtons premium issus de la véritable cannelle, séchés lentement — finesse et douceur.",
        heroDescription: "Récoltée dans les terres préservées de Madagascar, la cannelle ORAVANY séduit par son parfum délicat, sa chaleur naturelle et sa richesse aromatique raffinée. Issue de l'écorce intérieure du cannelier puis séchée lentement selon des méthodes traditionnelles, notre cannelle dévoile une intensité subtile et élégante, bien différente des cannelles plus agressives ou industrielles. Chez ORAVANY, nous sélectionnons uniquement des bâtons de cannelle premium afin de préserver toute l'authenticité et la finesse de cette épice d'exception.",
        aromatic: {
            title: "Une signature aromatique délicate",
            intro: "La cannelle ORAVANY développe un profil aromatique rond et harmonieux :",
            notes: [
                "notes chaudes et boisées",
                "douceur naturellement sucrée",
                "touches légèrement vanillées",
                "parfum réconfortant",
                "finale épicée subtile et élégante"
            ],
            outro: "Une épice raffinée qui apporte profondeur et gourmandise à toutes les préparations."
        },
        tasting: {
            title: "Conseils de dégustation",
            intro: "Idéale pour :",
            ideal: [
                "pâtisserie",
                "desserts",
                "café et chocolat chaud",
                "thés et infusions",
                "currys",
                "tajines",
                "plats mijotés",
                "fruits caramélisés"
            ],
            outro: "À utiliser entière pour les infusions longues ou fraîchement moulue afin de révéler toute sa puissance aromatique."
        },
        origin: {
            title: "Madagascar — Terroir tropical d'exception",
            text: "Cultivée sous le climat chaud et humide de Madagascar, notre cannelle bénéficie d'un terroir idéal permettant de développer des arômes riches et équilibrés. Chaque écorce est récoltée avec soin puis séchée naturellement afin de préserver ses huiles essentielles et sa finesse aromatique."
        },
        benefits: {
            title: "Bienfaits naturels",
            intro: "La cannelle est naturellement appréciée pour ses nombreuses propriétés :",
            list: [
                "riche en antioxydants",
                "aide au confort digestif",
                "épice naturellement réchauffante",
                "contribue au bien-être général",
                "parfum naturellement apaisant"
            ],
            outro: "Utilisée depuis des siècles dans les traditions culinaires et ancestrales, elle est reconnue pour sa richesse naturelle et ses vertus aromatiques."
        },
        experience: "La cannelle ORAVANY incarne toute la chaleur et l'élégance des grandes épices tropicales. Une épice noble et réconfortante qui transforme chaque recette en expérience sensorielle raffinée.",
        price: 13.00,
        unit: '60g',
        formats: [
            { label: '60g', price: 13.00 },
            { label: '150g', price: 28.00 }
        ],
        image: IMG.cannelle,
        gallery: [IMG.cannelle, IMG.epicesAssorties, IMG.foret, IMG.paysage],
        badge: 'Vraie cannelle',
        featured: false,
        notes: ['Doux', 'Boisé', 'Vanillé']
    },

    {
        id: 'riz-premium',
        name: 'Riz Premium de Madagascar',
        latinName: 'Oryza sativa',
        category: 'riz',
        categoryLabel: "Riz d'exception",
        tagline: "L'authenticité d'un riz d'exception",
        shortDesc: "Riz fin et délicat, cultivé dans les terres fertiles malgaches selon un savoir-faire ancestral.",
        heroDescription: "Cultivé dans les terres fertiles de Madagascar, le riz ORAVANY incarne toute la richesse d'un terroir tropical unique et d'un savoir-faire agricole ancestral. Sélectionné avec soin pour sa qualité, sa texture et sa finesse gustative, notre riz révèle une expérience culinaire raffinée, à la fois authentique et généreuse. Chez ORAVANY, nous privilégions une culture respectueuse de la nature et des producteurs locaux afin d'offrir un produit pur, naturel et premium.",
        aromatic: {
            title: "Une signature gustative raffinée",
            intro: "Le riz ORAVANY se distingue par :",
            notes: [
                "une texture légère et délicate",
                "des grains fins et élégants",
                "une tenue parfaite à la cuisson",
                "des notes subtilement végétales",
                "une grande douceur en bouche"
            ],
            outro: "Sa qualité exceptionnelle permet d'accompagner aussi bien une cuisine traditionnelle que gastronomique."
        },
        tasting: {
            title: "Conseils de dégustation",
            intro: "Idéal pour :",
            ideal: [
                "plats mijotés",
                "cuisine exotique",
                "accompagnements raffinés",
                "currys",
                "fruits de mer",
                "légumes sautés",
                "recettes gastronomiques"
            ],
            tipTitle: "Pour une cuisson optimale",
            tipList: [
                "rincer légèrement avant cuisson",
                "cuire à feu doux afin de préserver sa texture et ses arômes naturels"
            ]
        },
        origin: {
            title: "Madagascar — Terres agricoles d'exception",
            text: "Cultivé dans les régions fertiles de Madagascar, notre riz bénéficie d'un climat tropical et de sols riches favorisant une croissance lente et naturelle. Cette origine unique confère au riz ORAVANY sa finesse, sa légèreté et son profil gustatif délicat."
        },
        benefits: {
            title: "Bienfaits naturels",
            intro: "Le riz est naturellement apprécié pour ses qualités nutritionnelles :",
            list: [
                "source naturelle d'énergie",
                "facile à digérer",
                "faible en matières grasses",
                "riche en glucides complexes",
                "aliment essentiel d'une alimentation équilibrée"
            ],
            outro: "Naturellement polyvalent, il s'intègre parfaitement dans une cuisine saine et raffinée."
        },
        experience: "Le riz ORAVANY est une invitation à découvrir la richesse culinaire de Madagascar à travers un produit noble, naturel et profondément authentique. Une base essentielle sublimée par l'exigence et le savoir-faire ORAVANY.",
        price: 9.00,
        unit: '500g',
        formats: [
            { label: '500g', price: 9.00 },
            { label: '1kg', price: 16.00 },
            { label: '2,5kg', price: 36.00 }
        ],
        image: IMG.riz,
        gallery: [IMG.riz, IMG.epicesAssorties, IMG.paysage, IMG.foret],
        badge: 'Variété ancestrale',
        featured: false,
        notes: ['Fin', 'Délicat', 'Doux']
    },

    /* ============================================
       POIVRE NOIR DE MADAGASCAR — 50 €/kg
       ============================================ */
    {
        id: 'poivre-noir',
        name: 'Poivre Noir de Madagascar',
        latinName: 'Piper nigrum',
        category: 'poivre-noir',
        categoryLabel: 'Poivre noir',
        tagline: "Le grand classique malgache aux notes chaudes et fruitées",
        shortDesc: "Poivre noir cultivé sur la côte ouest malgache, notes boisées chaudes et finale fruitée.",
        heroDescription: "Introduit à Madagascar au début du XXe siècle par l'agronome français Émile Prudhomme, le poivre noir de Madagascar — variété Belontoeng venue de Lampung — a trouvé dans les terres volcaniques de Nossi-Be et du Sambirano un terroir d'exception. Récolté à la main puis séché lentement au soleil, il développe une signature aromatique unique : chaude, boisée et délicatement fruitée. Chez ORAVANY, nous sélectionnons des grains denses, à forte concentration en pipérine, pour offrir un poivre rond, élégant et profondément malgache.",
        aromatic: {
            title: "Une signature aromatique unique",
            intro: "Le poivre noir de Madagascar développe une palette gustative riche et nuancée :",
            notes: [
                "notes chaudes et boisées en attaque",
                "fraîcheur de fruits acidulés",
                "touches briochées et résineuses",
                "finale gourmande légèrement piquante",
                "longueur en bouche élégante"
            ],
            outro: "Un poivre noir à part — à la fois puissant et fruité — qui sublime aussi bien les viandes que les desserts."
        },
        tasting: {
            title: "Conseils de dégustation",
            intro: "À moudre au dernier moment pour préserver toute sa richesse aromatique. Idéal pour :",
            ideal: [
                "steaks et grillades",
                "sauces au poivre",
                "marinades",
                "soupes et veloutés",
                "salades composées",
                "fromages affinés",
                "fruits rouges et chocolat"
            ]
        },
        origin: {
            title: "Nossi-Be & Sambirano — Madagascar",
            text: "Cultivé sur la côte nord-ouest malgache depuis plus d'un siècle, notre poivre noir bénéficie d'un climat chaud et humide idéal pour développer ses arômes. La variété Belontoeng, introduite depuis Lampung en Indonésie au début du XXe siècle, s'est parfaitement acclimatée aux terres volcaniques de la région."
        },
        benefits: {
            title: "Bienfaits naturels",
            intro: "Le poivre noir est naturellement reconnu pour ses nombreuses propriétés :",
            list: [
                "riche en pipérine, aux vertus anti-inflammatoires",
                "favorise la digestion et régule l'appétit",
                "source de minéraux : potassium, phosphore, magnésium, fer",
                "apporte vitamines B, C et K",
                "améliore l'absorption des nutriments"
            ],
            outro: "Utilisé depuis des siècles dans les traditions culinaires et médicinales, il était autrefois utilisé pour faire baisser la fièvre grâce à son action stimulante sur la transpiration."
        },
        experience: "Le poivre noir ORAVANY incarne l'élégance d'un classique sublimé. Une épice incontournable du quotidien, issue d'un terroir d'exception, qui transforme chaque plat en moment de plaisir authentique.",
        price: 5.00,
        unit: '100g',
        formats: [
            { label: '100g', price: 5.00 },
            { label: '250g', price: 12.50 },
            { label: '500g', price: 24.00 }
        ],
        image: IMG.poivreNoir,
        gallery: [IMG.poivreNoir, IMG.epicesAssorties, IMG.foret, IMG.paysage],
        badge: 'Nouveau',
        featured: false,
        notes: ['Boisé', 'Fruité', 'Chaud']
    },

    /* ============================================
       BUNDLE 1 — Découverte (Poivre Noir + Poivrier)
       ============================================ */
    {
        id: 'bundle-decouverte',
        name: 'Bundle Découverte',
        latinName: 'Poivre noir 100g + poivrier acacia',
        category: 'bundles',
        categoryLabel: 'Bundles',
        tagline: "L'initiation parfaite à l'art du poivre malgache",
        shortDesc: "100g de poivre noir de Madagascar + un poivrier en bois d'acacia — l'essentiel pour démarrer.",
        heroDescription: "Le Bundle Découverte ORAVANY réunit l'essentiel pour révéler tout l'art du poivre malgache : 100g de notre Poivre Noir de Madagascar (variété Belontoeng cultivée à Nossi-Be) accompagné d'un poivrier manuel en bois d'acacia naturel, équipé d'un mécanisme en acier carbone réglable. Conçu comme un véritable rituel sensoriel, ce duo permet de moudre votre poivre à la minute pour préserver toute sa richesse aromatique. Une porte d'entrée idéale dans l'univers ORAVANY, à offrir ou à s'offrir.",
        aromatic: {
            title: "Le geste qui change tout",
            intro: "Moudre soi-même, juste avant de servir, c'est :",
            notes: [
                "libérer instantanément les huiles essentielles",
                "préserver les notes volatiles les plus fines",
                "ajuster la mouture selon vos plats",
                "transformer un geste utile en rituel sensoriel",
                "découvrir la vraie identité aromatique du poivre"
            ],
            outro: "Le mécanisme en acier carbone du poivrier offre une mouture précise et durable, du grain entier au plus fin."
        },
        tasting: {
            title: "Composition du bundle",
            intro: "Votre coffret contient :",
            ideal: [
                "1 boîte 100g de Poivre Noir de Madagascar",
                "1 poivrier manuel bois d'acacia (18 cm)",
                "Mécanisme acier carbone réglable",
                "Livret de dégustation ORAVANY",
                "Emballage cadeau premium"
            ]
        },
        origin: {
            title: "Un savoir-faire à 360°",
            text: "Le poivre est récolté à la main à Madagascar par nos producteurs partenaires. Le poivrier est fabriqué en bois d'acacia issu de forêts gérées durablement (FSC), pour un objet noble, robuste et écoresponsable qui vous accompagnera de longues années."
        },
        benefits: {
            title: "Pourquoi ce bundle ?",
            intro: "Le duo poivre + poivrier ORAVANY, c'est :",
            list: [
                "économie vs achat séparé",
                "expérience sensorielle complète",
                "cadeau gourmand et durable",
                "introduction parfaite à notre maison",
                "produit prêt à offrir, en emballage soigné"
            ],
            outro: "Un cadeau de fin d'année, anniversaire, crémaillère, mariage… Le geste juste pour les amateurs de cuisine."
        },
        experience: "Le Bundle Découverte ORAVANY transforme un geste du quotidien en moment de raffinement. L'art de moudre son poivre devient un rituel, le poivre noir de Madagascar révèle toute sa noblesse — et chaque plat raconte une histoire.",
        price: 39.00,
        unit: 'coffret',
        formats: [
            { label: 'Coffret', price: 39.00 }
        ],
        image: IMG.bundle,
        gallery: [IMG.bundle, IMG.poivreNoir, IMG.epicesAssorties, IMG.foret],
        badge: 'Cadeau',
        featured: false,
        notes: ['Bundle', 'Cadeau', 'Complet']
    },

    /* ============================================
       BUNDLE 2 — Prestige (Poivre Sauvage + Poivrier)
       ============================================ */
    {
        id: 'bundle-prestige',
        name: 'Bundle Prestige',
        latinName: 'Poivre sauvage 100g + poivrier acacia premium',
        category: 'bundles',
        categoryLabel: 'Bundles',
        tagline: "L'or noir sauvage et son écrin",
        shortDesc: "100g de Voatsiperifery, le poivre sauvage le plus rare au monde, + un poivrier acacia premium.",
        heroDescription: "Le Bundle Prestige ORAVANY est dédié aux amateurs et aux fins gourmets : 100g de Poivre Sauvage Voatsiperifery — récolté à la main sur les lianes des forêts primaires de Madagascar — accompagné d'un poivrier manuel haut de gamme en bois d'acacia certifié FSC, avec mécanisme en acier carbone à mouture réglable. Une expérience d'exception, pensée comme un cadeau précieux. Idéal pour les chefs, les épicuriens, les passionnés de gastronomie ou simplement pour s'offrir le luxe de l'authentique.",
        aromatic: {
            title: "Le poivre le plus rare au monde",
            intro: "Le Voatsiperifery développe une palette aromatique unique :",
            notes: [
                "notes boisées profondes",
                "fraîcheur végétale",
                "touches florales délicates",
                "finale légèrement citronnée",
                "longueur en bouche intense et élégante"
            ],
            outro: "À moudre à la dernière minute pour révéler chaque note. Sublime sur les viandes, poissons, fruits exotiques et chocolat noir."
        },
        tasting: {
            title: "Composition du bundle",
            intro: "Votre coffret prestige contient :",
            ideal: [
                "1 boîte 100g de Poivre Sauvage Voatsiperifery",
                "1 poivrier manuel bois d'acacia premium (20 cm)",
                "Mécanisme acier carbone à mouture réglable",
                "Livret de dégustation signé ORAVANY",
                "Emballage cadeau noble et soigné"
            ]
        },
        origin: {
            title: "Rareté et savoir-faire",
            text: "Le Voatsiperifery pousse exclusivement à l'état sauvage sur des lianes pouvant atteindre 20 mètres, dans les forêts tropicales du sud-est de Madagascar. Sa récolte manuelle exigeante en fait l'un des poivres les plus rares au monde. Le poivrier qui l'accompagne, en acacia FSC, est fabriqué pour durer une vie."
        },
        benefits: {
            title: "Pour qui ?",
            intro: "Ce bundle prestige est conçu pour :",
            list: [
                "les amateurs de gastronomie",
                "les chefs et passionnés de cuisine",
                "les cadeaux haut de gamme",
                "les épicuriens à la recherche de rareté",
                "les amoureux de l'authentique"
            ],
            outro: "Un cadeau qui marque, qui raconte une histoire, et qui se transmet."
        },
        experience: "Le Bundle Prestige ORAVANY incarne l'excellence : la rareté d'un poivre d'exception, sublimée par l'élégance d'un poivrier en bois noble. Un duo précieux, pensé pour celles et ceux qui placent la cuisine au rang d'art.",
        price: 59.00,
        unit: 'coffret',
        formats: [
            { label: 'Coffret', price: 59.00 }
        ],
        image: IMG.bundle,
        gallery: [IMG.bundle, IMG.poivreSauvage, IMG.foret, IMG.recoltant],
        badge: 'Prestige',
        featured: false,
        notes: ['Rare', 'Cadeau', 'Premium']
    },

    /* ============================================
       BUNDLE 3 — Coffret Dégustation (3 poivres)
       ============================================ */
    {
        id: 'bundle-degustation',
        name: 'Coffret Dégustation',
        latinName: 'Voatsiperifery + Poivre noir + Poivrier',
        category: 'bundles',
        categoryLabel: 'Bundles',
        tagline: "Le voyage complet, des forêts au moulin",
        shortDesc: "100g Voatsiperifery + 100g Poivre noir + poivrier acacia premium — le coffret signature.",
        heroDescription: "Le Coffret Dégustation ORAVANY rassemble l'essence de notre maison : 100g de Poivre Sauvage Voatsiperifery et 100g de Poivre Noir de Madagascar, accompagnés d'un poivrier en bois d'acacia premium pour les sublimer. Deux poivres aux signatures opposées et complémentaires — l'un rare et floral, l'autre noble et fruité — pour explorer toute la richesse aromatique du terroir malgache. Un cadeau exceptionnel, à offrir à un proche ou à savourer pour soi.",
        aromatic: {
            title: "Deux poivres, deux univers",
            intro: "Une dégustation comparée à travers :",
            notes: [
                "le Voatsiperifery — boisé, citronné, floral",
                "le Poivre noir — fruité, briochée, résineux",
                "deux mouture conseillées : grossière puis fine",
                "deux moments : sur viande blanche puis viande rouge",
                "un livret de dégustation pour vous guider"
            ],
            outro: "Une véritable expérience gustative à partager — autour d'une table, en cuisine, ou comme un rituel personnel."
        },
        tasting: {
            title: "Composition du coffret",
            intro: "Votre coffret signature contient :",
            ideal: [
                "1 boîte 100g de Poivre Sauvage Voatsiperifery",
                "1 boîte 100g de Poivre Noir de Madagascar",
                "1 poivrier manuel acacia premium (20 cm)",
                "Livret de dégustation complet",
                "Coffret cadeau noble"
            ]
        },
        origin: {
            title: "Le meilleur des deux mondes",
            text: "Le Voatsiperifery vient des forêts primaires du sud-est malgache, cueilli à la main. Le poivre noir est cultivé à Nossi-Be et au Sambirano selon des méthodes héritées d'un siècle de tradition. Deux terroirs, deux histoires, un même engagement qualité."
        },
        benefits: {
            title: "Le cadeau ultime",
            intro: "Ce coffret est conçu pour :",
            list: [
                "les passionnés de gastronomie",
                "les cadeaux d'exception",
                "les amateurs de découvertes sensorielles",
                "les fêtes de fin d'année",
                "les chefs et amateurs avertis"
            ],
            outro: "Un coffret qui se garde, qui se partage et qui se savoure."
        },
        experience: "Le Coffret Dégustation ORAVANY est l'invitation au voyage par excellence. Deux poivres, deux histoires, un même savoir-faire — l'âme aromatique de Madagascar, condensée en un coffret précieux.",
        price: 79.00,
        unit: 'coffret',
        formats: [
            { label: 'Coffret', price: 79.00 }
        ],
        image: IMG.bundle,
        gallery: [IMG.bundle, IMG.poivreSauvage, IMG.poivreNoir, IMG.recoltant],
        badge: 'Signature',
        featured: true,
        notes: ['Découverte', 'Premium', 'Cadeau']
    },

    /* ============================================
       GROSSISTE 1 — Poivre Noir au kilo
       ============================================ */
    {
        id: 'grossiste-poivre-noir',
        name: 'Poivre Noir — Tarif Grossiste',
        latinName: 'Piper nigrum · Vente en gros',
        category: 'grossiste',
        categoryLabel: 'Grossiste',
        tagline: "Le poivre noir de Madagascar pour les professionnels",
        shortDesc: "Poivre noir au kilo avec tarifs dégressifs jusqu'à -25%, livré directement de notre atelier d'Antananarivo.",
        heroDescription: "ORAVANY accompagne restaurateurs, épiceries fines, traiteurs et revendeurs avec une offre dédiée aux professionnels. Notre poivre noir de Madagascar (variété Belontoeng cultivée à Nossi-Be) est disponible en formats grossiste avec des tarifs dégressifs avantageux. Conditionné sous vide dans des sacs alimentaires premium, livré directement depuis notre atelier d'Antananarivo, traçable jusqu'au village producteur. Une qualité constante, une provenance maîtrisée et une relation directe sans intermédiaire.",
        aromatic: {
            title: "Une qualité professionnelle constante",
            intro: "Pour vos clients exigeants, nous garantissons :",
            notes: [
                "lots homogènes et traçables",
                "calibrage rigoureux des grains",
                "humidité contrôlée < 12%",
                "taux de pipérine certifié",
                "conditionnement sous vide premium"
            ],
            outro: "Chaque lot est testé en laboratoire avant expédition."
        },
        tasting: {
            title: "Tarifs dégressifs",
            intro: "Plus vous commandez, plus le prix au kilo baisse :",
            ideal: [
                "1 kg : 45 € (au lieu de 50 €) — économie 10 %",
                "2 kg : 85 € (42,50 €/kg) — économie 15 %",
                "5 kg : 200 € (40 €/kg) — économie 20 %",
                "10 kg : 375 € (37,50 €/kg) — économie 25 %"
            ],
            outro: "Pour commandes supérieures à 10 kg ou récurrentes, contactez-nous pour un devis personnalisé."
        },
        origin: {
            title: "Direct producteur — Madagascar",
            text: "Nous travaillons sans intermédiaire avec des coopératives de petits producteurs malgaches du Sambirano. Cette relation directe nous permet de proposer des tarifs justes pour les professionnels tout en garantissant une rémunération équitable aux récoltants."
        },
        benefits: {
            title: "Les avantages ORAVANY Pro",
            intro: "Pour les professionnels :",
            list: [
                "livraison sous 5 à 7 jours ouvrés",
                "factures HT avec mentions légales complètes",
                "frais de port offerts dès 5 kg",
                "interlocuteur dédié",
                "possibilité d'abonnement mensuel"
            ],
            outro: "Pour toute demande spécifique (échantillon, marque blanche, conditionnement personnalisé), écrivez-nous à contact@oravany.com."
        },
        experience: "ORAVANY Pro, c'est l'engagement d'une qualité d'exception, livrée directement depuis Madagascar, à un tarif respectueux du producteur comme du professionnel. Un partenariat de confiance, pensé pour la régularité.",
        price: 45.00,
        unit: '1kg',
        formats: [
            { label: '1 kg', price: 45.00 },
            { label: '2 kg', price: 85.00 },
            { label: '5 kg', price: 200.00 },
            { label: '10 kg', price: 375.00 }
        ],
        image: IMG.grossiste,
        gallery: [IMG.grossiste, IMG.poivreNoir, IMG.recoltant, IMG.foret],
        badge: 'Pro -25%',
        featured: false,
        notes: ['Professionnel', 'Dégressif', 'Direct producteur']
    },

    /* ============================================
       GROSSISTE 2 — Poivre Sauvage au kilo
       ============================================ */
    {
        id: 'grossiste-poivre-sauvage',
        name: 'Poivre Sauvage Voatsiperifery — Tarif Grossiste',
        latinName: 'Piper borbonense · Vente en gros',
        category: 'grossiste',
        categoryLabel: 'Grossiste',
        tagline: "Le poivre le plus rare au monde, pour les professionnels d'exception",
        shortDesc: "Voatsiperifery au kilo avec tarifs dégressifs jusqu'à -20%, réservé aux professionnels.",
        heroDescription: "Pour les chefs étoilés, les épiceries fines de luxe, les traiteurs gastronomiques et les distributeurs spécialisés, ORAVANY propose une offre dédiée au Poivre Sauvage Voatsiperifery en formats grossiste. Cueilli à la main dans les forêts primaires de Madagascar, ce poivre rarissime est conditionné sous vide pour préserver tous ses arômes. Livraison directe depuis Antananarivo, traçabilité totale, qualité d'exception.",
        aromatic: {
            title: "Une rareté pour les professionnels exigeants",
            intro: "Notre poivre sauvage Voatsiperifery grossiste, c'est :",
            notes: [
                "récolte 100% manuelle en forêt primaire",
                "lots de petite production, traçables",
                "calibrage premium des baies",
                "conditionnement sous vide hermétique",
                "préservation maximale des huiles essentielles"
            ],
            outro: "Une qualité gastronomique, à un volume professionnel."
        },
        tasting: {
            title: "Tarifs dégressifs",
            intro: "Tarifs réservés aux professionnels avec K-bis :",
            ideal: [
                "1 kg : 90 € (au lieu de 100 €) — économie 10 %",
                "2 kg : 170 € (85 €/kg) — économie 15 %",
                "5 kg : 400 € (80 €/kg) — économie 20 %"
            ],
            outro: "Quantités limitées en raison de la rareté de la récolte. Réservation conseillée."
        },
        origin: {
            title: "Forêts primaires du sud-est malgache",
            text: "Notre poivre sauvage Voatsiperifery est exclusivement cueilli dans des zones forestières préservées du sud-est de Madagascar. Sa récolte sur les lianes — pouvant atteindre 20 mètres — reste artisanale et dépendante des saisons. Une rareté que nous partageons avec les professionnels qui sauront la sublimer."
        },
        benefits: {
            title: "ORAVANY Pro Voatsiperifery",
            intro: "Pour les professionnels d'exception :",
            list: [
                "récolte limitée et exclusive",
                "livraison soignée sous 7 à 10 jours",
                "certificat d'origine fourni",
                "interlocuteur dédié",
                "support marketing (visuels, fiches descriptives)"
            ],
            outro: "Pour un partenariat exclusif ou un volume supérieur à 5 kg, contactez directement notre direction commerciale."
        },
        experience: "Proposer le Voatsiperifery dans votre établissement, c'est offrir à vos clients un voyage sensoriel d'exception. Une signature aromatique unique, une rareté qui se savoure, un terroir qui se raconte.",
        price: 90.00,
        unit: '1kg',
        formats: [
            { label: '1 kg', price: 90.00 },
            { label: '2 kg', price: 170.00 },
            { label: '5 kg', price: 400.00 }
        ],
        image: IMG.grossiste,
        gallery: [IMG.grossiste, IMG.poivreSauvage, IMG.heroPoivre, IMG.recoltant],
        badge: 'Pro Rare',
        featured: false,
        notes: ['Rare', 'Professionnel', 'Exclusif']
    }
];

// Les 4 engagements communs à tous les produits (extraits de la charte ORAVANY)
const COMMITMENTS = [
    {
        title: "Récolte responsable",
        text: "Nous privilégions une cueillette respectueuse des cycles naturels et de la biodiversité locale."
    },
    {
        title: "Artisanat local",
        text: "Nous collaborons directement avec des récoltants et producteurs malgaches afin de valoriser leur savoir-faire."
    },
    {
        title: "Qualité premium",
        text: "Chaque lot est soigneusement sélectionné pour garantir une expérience gustative exceptionnelle."
    },
    {
        title: "Authenticité",
        text: "Aucun arôme ajouté. Aucun compromis sur l'origine ou la qualité."
    }
];

function getProduct(id) {
    return PRODUCTS.find(p => p.id === id);
}

function getProductsByCategory(category) {
    if (!category || category === 'all') return PRODUCTS;
    return PRODUCTS.filter(p => p.category === category);
}

function getFeaturedProducts() {
    return PRODUCTS.filter(p => p.featured);
}
