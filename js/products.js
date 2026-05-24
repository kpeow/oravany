/* =========================================================
   ORAVANY — Catalogue produits (fiches premium détaillées)
   ========================================================= */

// Images locales (4 SVG illustratifs ORAVANY + 5 photographies)
const IMG = {
    poivreSauvage: 'assets/images/products/poivre-sauvage.svg',
    poivreNoir: 'assets/images/products/poivre-noir.jpg',
    epicesAssorties: 'assets/images/products/epices-assorties.jpg',
    vanille: 'assets/images/products/vanille.svg',
    girofle: 'assets/images/products/girofle.svg',
    cannelle: 'assets/images/products/cannelle.svg',
    riz: 'assets/images/products/riz-rouge.jpg',
    paysage: 'assets/images/products/paysage-mada.jpg',
    foret: 'assets/images/products/foret.jpg'
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
        price: 22.00,
        unit: '50g',
        formats: [
            { label: '50g', price: 22.00 },
            { label: '100g', price: 39.00 },
            { label: '250g', price: 89.00 }
        ],
        image: IMG.poivreSauvage,
        gallery: [IMG.poivreSauvage, IMG.poivreNoir, IMG.epicesAssorties, IMG.foret],
        badge: 'Édition rare',
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
        price: 28.00,
        unit: '10 gousses',
        formats: [
            { label: '5 gousses', price: 16.00 },
            { label: '10 gousses', price: 28.00 },
            { label: '25 gousses', price: 62.00 }
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
