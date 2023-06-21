import {
	heroManaFlare,
	heroDedicatedMonk,
	heroPlaytest,
	iconDice,
	iconBattlefield,
	iconGameIcons,
	iconPlayTime,
	iconNumberOfPlayers,
	iconAgesFor,
	iconEarth,
	iconAir,
	iconFire,
	iconWater,
	iconLight,
	iconShadow,
	iconEarthWhite,
	iconAirWhite,
	iconFireWhite,
	iconLightWhite,
	iconShadowWhite,
	iconWaterWhite,
	prime_earth_sample,
	prime_air_sample,
	prime_fire_sample,
	prime_water_sample,
	prime_light_sample,
	prime_shadow_sample,
	video_attack_4g_mp4,
	video_attack_4g_webm,
	video_attack_mp4,
	video_attack_webm,
	video_charge_4g_mp4,
	video_charge_4g_webm,
	video_charge_mp4,
	video_charge_webm,
	video_siege_4g_mp4,
	video_siege_4g_webm,
	video_siege_mp4,
	video_siege_webm,
	card_array,
	gallery_1,
	gallery_2,
	gallery_3,
	gallery_4,
	gallery_5,
	gallery_6,
	gallery_7,
	gallery_8,
	gallery_9,
	bg_elements_earth,
	bg_elements_air,
	bg_elements_fire,
	bg_elements_water,
	bg_elements_light,
	bg_elements_shadow,
} from "../assets";

const heroSection = [
	{
		id: "manaFlare",
		index: 0,
		alt: "Mana Flare",
		src: heroManaFlare,
		title: "A New Dawn is Rising",
		subTitle:
			"The age of magic returns to the world, bringing relic-seeking warlords, using the elemental forces of Earth, Air, Fire, Water, Light and Shadow to devastate and conquer the land.<br /><br />This is <strong><em>Third Dawn: Siegecraft™</em></strong>, a hybrid card game.",
	},
	{
		id: "dedicatedMonk",
		index: 1,
		alt: "Dedicated Monk",
		src: heroDedicatedMonk,
		title: "Siege the Day",
		subTitle:
			"Build. Expand. Destroy. Conquer.<br /><br />In <strong><em>Third Dawn: Siegecraft</strong></em>, the way you play is up to you.",
	},
	{
		id: "playtest",
		index: 2,
		alt: "A playtest of Third Dawn: Siegecraft",
		src: heroPlaytest,
		title: "A New Way to Play",
		subTitle:
			"Drive your armies across the battlefield. Invade your opponents. Test your luck. Sharpen your skills.",
	},
];

const homePageSectionTitles = [
	{
		title: '<strong><em>Third Dawn: Siegecraft</em></strong><br /> is the ultimate <br class="md:hidden" />2-player card game',
		subTitle:
			"Spend more time playing and less time hunting down the pieces you need.",
	},
	{
		title: "<strong>Master the Elements</strong>",
		subTitle:
			"The 6 Elements of <strong><em>Third Dawn: Siegecraft</em></strong> allow you to play in any way you want. Which will you master first?",
	},
	{
		title: "<strong>Will you Conquer or be Conquered?</strong>",
		subTitle:
			"Summon powerful units. Cast powerful spells. Defend your territories.",
		closingTitle: "Take Your Shot",
		closingSubTitle:
			"Your road to mastery begins in as little as 15 minutes. Check out our easy-play guide and take your first turn today.",
		closingCTA: "Learn to Play",
	},
	{
		title: "Get <strong><em>Third Dawn: Siegecraft</em></strong> Prime",
		image: card_array,
		alt: "An array of cards showing all 6 elements and neutral cards, led by Stormwing, Mother of Tempests.",
		subTitle:
			"Prime is the debut <strong><em>Third Dawn: Siegecraft</em></strong> set. Featuring over 200 fully-illustrated cards spread across the 6 elements, unique mechanics for each element that will shake up gameplay and give you the feel of each element.<br /><br />Plus, each copy of <strong><em>Third Dawn: Siegecraft</em></strong> Prime comes with preconstructed decks that you can use to get started, or tear apart and begin customizing immediately. ",
		CTA: "Visit the Store",
	},
	{
		title: "Sign Up Now To Learn More",
		subTitle:
			"Join our mailing list to learn more about <strong><em>Third Dawn: Siegecraft</em></strong>, including when it will release.",
		CTA: "Sign Up",
	},
];

const mainPointsContent = [
	{
		index: 1,
		title: "Step Onto the Battlefield",
		text: "Enjoy an all new dimension of gameplay, using board gaming mechanics like position, luck, and timing take your strategy go to a whole new level.",
		icon: iconBattlefield,
		alt: "Six slots of the battlefield",
	},
	{
		index: 2,
		title: "Endless Variation",
		text: "Combine the elements of Earth, Air, Fire, Water, Light and Shadow in any way you want to create unique decks.",
		icon: iconGameIcons,
		alt: "Strength, Tactical Spells, Defense icons",
	},
	{
		index: 3,
		title: "Everything You Need to Play",
		text: "Every copy comes with hundreds of cards, dice and playmats. Everyone is at the same power level. Getting the game shouldn't be the game.",
		icon: iconDice,
		alt: "A trio of dice",
	},
];

const playIconsContent = [
	{
		index: 1,
		title: "15-30 Minutes",
		text: "Enjoy an all new dimension of gameplay, using board gaming mechanics like position, luck, and timing take your strategy go to a whole new level.",
		icon: iconPlayTime,
		alt: "A quarter of an hour",
	},
	{
		index: 2,
		title: "2 Players",
		icon: iconNumberOfPlayers,
		alt: "Two players",
	},
	{
		index: 3,
		title: "Ages 12+",
		icon: iconAgesFor,
		alt: "Ages 12+",
	},
];

const videoSectionContent = [
	{
		index: 0,
		title: "Charge into Battle",
		subTitle:
			"Using dice, position and timing, Third Dawn: Siegecraft expands on the standard collectible card game, by giving you more options in the game and when building your custom decks.",
		videoUrls: [
			{
				mobile_mp4: [
					{ index: 0, url: video_attack_4g_mp4, type: "video/mp4" },
				],
				mobile_webm: [
					{ index: 1, url: video_attack_4g_webm, type: "video/webm" },
				],
				desktop_mp4: [
					{ index: 2, url: video_attack_mp4, type: "video/mp4" },
				],
				desktop_webm: [
					{ index: 3, url: video_attack_webm, type: "video/webm" },
				],
			},
		],
	},
	{
		index: 1,
		title: "Control Your Fortune",
		subTitle:
			"Cast powerful spells that will help you control the flow of combat, using the 6 distinct elements of Third Dawn: Siegecraft . Learn to master unique combinations of spells and abilities to express yourself and take out your opponents.",
		videoUrls: [
			{
				mobile_mp4: [
					{ index: 0, url: video_charge_4g_mp4, type: "video/mp4" },
				],
				mobile_webm: [
					{ index: 1, url: video_charge_4g_webm, type: "video/webm" },
				],
				desktop_mp4: [
					{ index: 2, url: video_charge_mp4, type: "video/mp4" },
				],
				desktop_webm: [
					{ index: 3, url: video_charge_webm, type: "video/webm" },
				],
			},
		],
	},
	{
		index: 2,
		title: "Conquer Three Territories to Win",
		subTitle:
			"March your units onto your opponent's territories and lay siege. With the territory undefended, your forces are free to pillage.",
		videoUrls: [
			{
				mobile_mp4: [
					{ index: 0, url: video_siege_4g_mp4, type: "video/mp4" },
				],
				mobile_webm: [
					{ index: 1, url: video_siege_4g_webm, type: "video/webm" },
				],
				desktop_mp4: [
					{ index: 2, url: video_siege_mp4, type: "video/mp4" },
				],
				desktop_webm: [
					{ index: 3, url: video_siege_webm, type: "video/webm" },
				],
			},
		],
	},
];

const navLinks = [
	{
		index: 0,
		title: "store",
		url: "/store",
	},
	{
		index: 1,
		title: "elements",
		url: "/elements",
	},
	{
		index: 2,
		title: "cards",
		url: "/cards",
	},
	{
		index: 3,
		title: "blog",
		url: "/blog",
	},
];

const elementsCarouselContent = [
	{
		index: 0,
		icon: iconEarthWhite,
		iconAlt: "Earth icon",
		name: "Earth",
		contentTitle: "Life Begins Anew",
		contentSubtitle:
			"As magic returns to the world, the Wilderness awakens. Spirits dance freely in the woods even during daylight hours, calling eager explorers to delve in, unsure of what they may find.<br />Earth mages utilize the power of rock, stone, blood, and bone to subdue their enemies and restore the natural balance.",
		image: prime_earth_sample,
		imageAlt: "A beautiful translucent earth spirit floating in a forest.",
	},
	{
		index: 1,
		icon: iconAirWhite,
		iconAlt: "Air icon",
		name: "Air",
		contentTitle: "The Battlefield Crackles with Energy",
		contentSubtitle:
			"It's death coming from above. Striking in an instant, like a mirage that suddenly becomes real.<br />Air mages specialize in the art of surprise, striking when their enemies least suspect.",
		image: prime_air_sample,
		imageAlt:
			"A wizard casts a lightning spell that splits into three, hitting three different locations in the far distance.",
	},
	{
		index: 2,
		icon: iconFireWhite,
		iconAlt: "Fire icon",
		name: "Fire",
		contentTitle: "The Battle Never Stops",
		contentSubtitle:
			"Rampage. Pillage. Lay siege to your enemies and leave no prisoners. As long as an ember can turn into a flame, Fire is never gone.",
		image: prime_fire_sample,
		imageAlt: "A giant serpent made of lava springs up in a fire dungeon.",
	},
	{
		index: 3,
		icon: iconWaterWhite,
		iconAlt: "Water icon",
		name: "Water",
		contentTitle: "Control is In Your Hands",
		contentSubtitle:
			"Experience an all new dimension of control. Using the power of Water, the battlefield is yours to command.<br />Withstand your opponent's early onslaughts with your superior defense, and control the flow of the battle and the game with powerful magic.",
		image: prime_water_sample,
		imageAlt:
			"A Capra (goat woman) mage wielding a pair of staves protects a bridge.",
	},
	{
		index: 4,
		icon: iconLightWhite,
		iconAlt: "Light icon",
		name: "Light",
		contentTitle: "Illuminate Your Path to Victory",
		contentSubtitle:
			"The world is dangerous, but Light magic offers shelter from the storm. Through devotion and planning, coordination and brilliance, your fury will be tempered by faith.",
		image: prime_light_sample,
		imageAlt:
			"A female mage receives a blessing in the form of a prayer that wraps around her in magical, holy energy.",
	},
	{
		index: 5,
		icon: iconShadowWhite,
		iconAlt: "Shadow icon",
		name: "Shadow",
		contentTitle: "Discover Secrets",
		contentSubtitle:
			"Delve into the secret world of Shadow, where nothing stays buried for long. Extend your reach into your opponent's battlefield as your search for power corrupts everyone around you.",
		image: prime_shadow_sample,
		imageAlt: "A mortician examines a corpse in a fantasy morgue.",
	},
];

const homePageGallery = [
	{
		original: gallery_1,
		originalAlt:
			"A water mage strides confidently through a flooded desert, behind her soldiers are stuck, confused.",
	},
	{
		original: gallery_2,
		originalAlt:
			"A wide vista with a massive fortress in the far distance.",
	},
	{
		original: gallery_3,
		originalAlt:
			"A gigantic mouse leaps toward a herd of stampeding elephants in a verdant valley.",
	},
	{
		original: gallery_4,
		originalAlt: "A kid prepares his next move at Strategicon.",
	},
	{
		original: gallery_5,
		originalAlt: "A man at Strategicon playing.",
	},
	{
		original: gallery_6,
		originalAlt: "A view of the battlefield with both playmats.",
	},
	{
		original: gallery_7,
		originalAlt:
			"A golden winged spirit walks between a destroyed cityscape and a sacred monument she is protecting.",
	},
	{
		original: gallery_8,
		originalAlt:
			"A giant snake-like wyrm with giant fangs slithers through a vast painted desert.",
	},
	{
		original: gallery_9,
		originalAlt: "A kid holding cards in his hand ponders his next move.",
	},
];

const footerContent = [
	{
		index: 0,
		sectionTitle: "Store",
		sectionLinks: [
			{
				locationName: "Subscribe",
				locationUrl: "/#",
				index: 0,
			},
			{
				locationName: "Buy Now",
				locationUrl: "/#",
				index: 1,
			},
			{
				locationName: "Specials",
				locationUrl: "/#",
				index: 2,
			},
			{
				locationName: "Last Chance",
				locationUrl: "/#",
				index: 3,
			},
		],
	},
	{
		index: 1,
		sectionTitle: "Elements",
		sectionLinks: [
			{
				locationName: "Earth",
				locationUrl: "/elements/earth",
				index: 0,
			},
			{
				locationName: "Air",
				locationUrl: "/elements/air",
				index: 1,
			},
			{
				locationName: "Fire",
				locationUrl: "/elements/fire",
				index: 2,
			},
			{
				locationName: "Water",
				locationUrl: "/elements/water",
				index: 3,
			},
			{
				locationName: "Light",
				locationUrl: "/elements/light",
				index: 4,
			},
			{
				locationName: "Shadow",
				locationUrl: "/elements/shadow",
				index: 5,
			},
		],
	},
	{
		index: 2,
		sectionTitle: "Cards",
		sectionLinks: [
			{
				locationName: "Prime",
				locationUrl: "/cards",
				index: 0,
			},
			{
				locationName: "Future Sets",
				index: 1,
				locationUrl: "/#",
			},
			{
				locationName: "Learn More",
				locationUrl: "/#",
				index: 2,
			},
		],
	},
	{
		index: 3,
		sectionTitle: "Blog",
		sectionLinks: [
			{
				locationName: "Featured Articles",
				locationUrl: "/blog/featured",
				index: 0,
			},
			{
				locationName: "All Articles",
				locationUrl: "/blog",
				index: 1,
			},
		],
	},
];

const elementPageSectionContent = {
	title: "The Elements of<br/> <strong>Third Dawn: Siegecraft</strong>",
	subTitle:
		"Explore and master the 6 elements of <strong>Third Dawn: Siegecraft</strong>, each with their own unique styles, units, spells and territories.<br/><br/>Combine them all however you wish to create a powerful deck and conquer your foes.",
	icons: [
		{ id: 1, elementName: "Earth", elementIcon: iconEarthWhite },
		{ id: 2, elementName: "Air", elementIcon: iconAirWhite },
		{ id: 3, elementName: "Fire", elementIcon: iconFireWhite },
		{ id: 4, elementName: "Water", elementIcon: iconWaterWhite },
		{ id: 5, elementName: "Light", elementIcon: iconLightWhite },
		{ id: 6, elementName: "Shadow", elementIcon: iconShadowWhite },
	],
};

const elementPageInfo = [
	{
		id: 1,
		sectionElement: "Earth",
		sectionBg: bg_elements_earth,
		sectionTitle: "Welcome to the Wilderness",
		sectionSubtitle:
			"Buried deep within the heart of the mystical Inzaru wilds, an ancient temple rests - a hallowed sanctum steeped in enigmas and cloaked in lore. Once a revered hub of arcane knowledge and cultured wisdom, this venerated temple now stands as an impregnable fortress in the maelstrom of conflict.",
		featuredCardId: "E023",
		featuredSectionHeader: "This Land is Yours to Rule",
		featuredSectionText:
			"When you tap into Earth magic, you're forging a deep connection with the core of all life, drawing strength from the unyielding resilience that Mother Earth herself offers. This elemental force grants you and your units a toughness that embodies the spirit of the wild - raw, relentless, and full of tenacity.<br /><br />Your units, moulded by the grit and mettle of Earth, stand unflinching on the battlefield, displaying an unbroken spirit as solid as the ground they hold. They are your stalwart defenders, your formidable vanguard, ready to assert their might across every corner of the land that the sun touches.<br /><br />Step into this strategic contest with Earth magic as your ally. Command a powerful force that resists and endures, turning the battlefield into your domain. With Earth magic, you don't just stand on the battlefield - you become a part of it, claiming a domain that is as expansive as your will to dominate. Harness the spirit of the earth, and let your rule extend to the farthest horizons.",
	},
	{
		id: 2,
		sectionElement: "Air",
		sectionBg: bg_elements_air,
		sectionTitle: "Explore the High Desert",
		sectionSubtitle:
			"With Air magic, the sky is the limit. In this boundless expanse, no adversary stands a chance. Unleash the gales to thwart your foes, scatter their strategies to the four winds and infiltrate their fortresses with the swiftness of a gale and the unpredictability of a whirlwind.",
		featuredCardId: "A061",
		featuredSectionHeader: "Control the Skies",
		featuredSectionText:
			"As the commander of Air magic, fortune wings its way to your side, ensuring that the battle always sways in your favor. Become a wraith in the battlefield, flowing seamlessly like the breeze, weaving between foes with grace and precision while robbing them of their arcane prowess.<br /><br />Your Air units, embodiments of force and agility, strike with the tempest's fury and then fade away like whispers on the wind. A ghostly legion, they're a whirlwind of power, an unstoppable force one moment, an insubstantial mirage the next.<br /><br />Revel in this gusty game of wit and strategy, where your warriors strike like thunderclaps, their force resonating long after they've vanished. These elements of strength and stealth imbue your game with an intoxicating blend of power and mystery. So prepare, strategists, to command your spectral legion and redefine the realms of the battlefield. Luck isn't just on your side—it's in your hands, as volatile and powerful as a swirling tempest.",
	},
	{
		id: 3,
		sectionElement: "Fire",
		sectionBg: bg_elements_fire,
		sectionTitle: "Rule the Burning Wastelands",
		sectionSubtitle:
			"You are the warlord of Kartha. In your hands, aggression becomes an art, each strike a masterstroke, each tactic a testament to your dominance. As the ashes of your adversaries mount, so too does your command over the battleground, an untamed force, scattering the armies of your foes in your aftermath. ",
		featuredCardId: "F077",
		featuredSectionHeader: "Your Star is Burning Brightly",
		featuredSectionText:
			"With the blistering might of Fire magic at your command, embody the unquenchable spirit of a true conqueror. Let your inner flame roar into a blazing inferno, consuming all obstacles and turning them into mere cinders. Fire magic is not just about the power to destroy - it's about rebirth, passion, and a commanding presence that lights up the battlefield.<br /><br />Your units, forged in this relentless heat, are the embodiment of raw power and unrestrained force. Each spell you cast ignites the very air, leaving opponents reeling in the face of your fiery onslaught. With the searing might of Fire magic, no stronghold is impregnable, no fortress unassailable.<br /><br />Take hold of your destiny, and with fire in your veins, blaze a trail of conquest across the world. In the merciless dance of war, the flame that burns the brightest commands respect and fear alike. And with Fire magic, you are not just a mere participant - you are the inferno, the embodiment of destruction and rebirth. Seize your destiny, let your ambition set the world alight, and rise as the ultimate warlord from the ashes.",
	},
	{
		id: 4,
		sectionElement: "Water",
		sectionBg: bg_elements_water,
		sectionTitle: "All Rivers Flow Toward You",
		sectionSubtitle:
			"From your throne at the strategic harbor of Ferria, the world's trade and commerce revolves around you. The Water magic you command ensures no vessel may pass without your expressed permission.",
		featuredCardId: "W130",
		featuredSectionHeader: "The Advantage of Control",
		featuredSectionText:
			"Master the pulse of battle with the fluid might of Water magic at your command. You leave the unpredictability of luck to the unseasoned, the unprepared. You, on the other hand, are a seasoned conqueror, adept in the art of seizing what you require.<br /><br />Your strategy hinges on deflection, turning the raging currents of your adversaries' attacks back upon themselves. It is through this clever counter-manoeuvring and calculated advancement that you gain control, marking your territory with each strategic step.",
	},
	{
		id: 5,
		sectionElement: "Light",
		sectionBg: bg_elements_light,
		sectionTitle: "Your Achievements are Monumental",
		sectionSubtitle:
			"As the Captain of the Merenthian Guard, you are the last bulwark between the holy power of Light and the forces that would push the world into darkness forever. Are you ready to take command?",
		featuredCardId: "L147",
		featuredSectionHeader: "Only You Can Guide the Way Forward",
		featuredSectionText:
			"As a revered practitioner of Light magic, your role extends beyond mere conjurations and spells. Your very essence is a beacon of hope, a safe harbor for those beleaguered by illness and weakness. However, your purpose does not lie in merely healing. With each soothing incantation, with each flicker of restorative magic, you are nurturing the seeds of resilience within the vulnerable, transforming those once defenseless into stalwart defenders of their own fate.<br /><br />Light magic is not merely about preservation but progression. It involves the cultivation of an indomitable spirit, turning those who were once prey into potent protectors. It's about raising an army, not of mindless drones, but of individuals strengthened by their trials and emboldened by their victories. Your hands guide the flow of magic, weaving protective enchantments and bolstering your forces against the threats that loom.",
	},
	{
		id: 6,
		sectionElement: "Shadow",
		sectionBg: bg_elements_shadow,
		sectionTitle: "There's Some Power Yet in These Old Ruins",
		sectionSubtitle:
			"In the darkest corners of the ancient city of Ghis, power accumulates. The power to uplift the forgotten, to revive those who are lost and to avenge lost wars. All it requires is just a small tribute to the demon Ix. Will you join?",
		featuredCardId: "S200",
		featuredSectionHeader: "What Price Will You Pay for Glory?",
		featuredSectionText:
			"You've always heard them, the hushed tales of the occult – of demons, of spectral presences, of arcane rituals too potent to fathom – these are the tales of the legendary power of Shadow. But for those who dare to probe deeper, who dare to venture beyond the veil of apprehension, this daunting power presents an opportunity, not a threat - an unlikely ally that holds the potential to alter your fate<br /><br />Maybe these mysteries are too much for you. Or maybe you have started to recognize the whispers of amibition that can be heard in the dark. Calling the bold, the daring, the relentless. Are you ready to take the reins of your destiny?",
	},
];

export {
	heroSection,
	homePageSectionTitles,
	mainPointsContent,
	playIconsContent,
	elementsCarouselContent,
	navLinks,
	videoSectionContent,
	homePageGallery,
	footerContent,
	elementPageSectionContent,
	elementPageInfo,
};
