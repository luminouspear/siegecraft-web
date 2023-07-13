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
	IconEarth,
	IconAir,
	IconFire,
	IconWater,
	IconLight,
	IconShadow,
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
	how_to_play_decks,
	how_to_play_playmat,
	strongholdAnimationData169,
	strongholdAnimationDataMobile,
	playmatAnimationData169,
	playmatAnimationDataMobile,
	playTerritoriesAnimationDataMobile,
	playTerritoriesAnimationData169,
	summonMoveAnimationData169,
	summonMoveAnimationDataMobile,
	attackAnimationDataMobile,
	attackAnimationData169,
	conquerAnimationData169,
	conquerAnimationDataMobile,
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
			"Your road to mastery begins in as little as 15 minutes. Learn the mechanics of <em><strong>Third Dawn: Siegecraft</strong></em> today.",
		closingCTA: "How to Play",
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
			"Cast powerful spells that will help you control the flow of combat, using the 6 distinct elements of Third Dawn: Siegecraft. Learn to master unique combinations of spells and abilities to express yourself and take out your opponents.",
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
		index: 5,
		title: "home",
		url: "/",
	},
	{
		index: 0,
		title: "how to play",
		url: "/howtoplay",
	},
	{
		index: 1,
		title: "elements",
		url: "/elements",
	},
	// {
	// 	index: 2,
	// 	title: "cards",
	// 	url: "/cards",
	// },
	// {
	// 	index: 3,
	// 	title: "blog",
	// 	url: "/blog",
	// },
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
		imageId: ["E001"],
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
		imageId: ["A065"],
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
		imageId: ["F081"],
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
		imageId: ["W116"],
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
		imageId: ["L159"],
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
		imageId: ["S179"],
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
	// {
	// 	index: 0,
	// 	sectionTitle: "Store",
	// 	sectionLinks: [
	// 		{
	// 			locationName: "Subscribe",
	// 			locationUrl: "/",
	// 			index: 0,
	// 		},
	// 		{
	// 			locationName: "Buy Now",
	// 			locationUrl: "/",
	// 			index: 1,
	// 		},
	// 		{
	// 			locationName: "Specials",
	// 			locationUrl: "/",
	// 			index: 2,
	// 		},
	// 		{
	// 			locationName: "Last Chance",
	// 			locationUrl: "/",
	// 			index: 3,
	// 		},
	// 	],
	// },
	{
		index: 0,
		sectionTitle: "How to Play",
		sectionLinks: [
			{
				locationName: "How to Play",
				locationUrl: "/howtoplay",
				index: 0,
			},
		],
	},

	{
		index: 1,
		sectionTitle: "Elements",
		sectionLinks: [
			{
				locationName: "Earth",
				locationUrl: "/elements",
				hash: "#earth",
				index: 0,
			},
			{
				locationName: "Air",
				locationUrl: "/elements",
				hash: "#air",
				index: 1,
			},
			{
				locationName: "Fire",
				locationUrl: "/elements",
				hash: "#fire",
				index: 2,
			},
			{
				locationName: "Water",
				locationUrl: "/elements",
				hash: "#water",
				index: 3,
			},
			{
				locationName: "Light",
				locationUrl: "/elements",
				hash: "#light",
				index: 4,
			},
			{
				locationName: "Shadow",
				locationUrl: "/elements",
				hash: "#shadow",
				index: 5,
			},
		],
	},
	// {
	// 	index: 2,
	// 	sectionTitle: "Cards",
	// 	sectionLinks: [
	// 		{
	// 			locationName: "Prime",
	// 			locationUrl: "/cards",
	// 			index: 0,
	// 		},
	// 		{
	// 			locationName: "Future Sets",
	// 			index: 1,
	// 			locationUrl: "/",
	// 		},
	// 		{
	// 			locationName: "Learn More",
	// 			locationUrl: "/",
	// 			index: 2,
	// 		},
	// 	],
	// },
	// {
	// 	index: 3,
	// 	sectionTitle: "Blog",
	// 	sectionLinks: [
	// 		{
	// 			locationName: "Featured Articles",
	// 			locationUrl: "/blog/featured",
	// 			index: 0,
	// 		},
	// 		{
	// 			locationName: "All Articles",
	// 			locationUrl: "/blog",
	// 			index: 1,
	// 		},
	// 	],
	// },
];

const elementPageSectionContent = {
	title: "The Elements of<br/> <strong>Third Dawn: Siegecraft</strong>",
	subTitle:
		"Explore and master the 6 elements of <strong>Third Dawn: Siegecraft</strong>, each with their own unique styles, units, spells and territories.<br/><br/>Combine them all however you wish to create a powerful deck and conquer your foes.",
	icons: [
		{
			id: 1,
			elementName: "Earth",
			elementIcon: IconEarth,
			elementFill: "text-sc-element-earth",
		},
		{
			id: 2,
			elementName: "Air",
			elementIcon: IconAir,
			elementFill: "text-sc-element-air",
		},
		{
			id: 3,
			elementName: "Fire",
			elementIcon: IconFire,
			elementFill: "text-sc-element-fire",
		},
		{
			id: 4,
			elementName: "Water",
			elementIcon: IconWater,
			elementFill: "text-sc-element-water",
		},
		{
			id: 5,
			elementName: "Light",
			elementIcon: IconLight,
			elementFill: "text-sc-element-light",
		},
		{
			id: 6,
			elementName: "Shadow",
			elementIcon: IconShadow,
			elementFill: "text-sc-element-shadow",
		},
	],
};

const elementPageInfo = [
	{
		id: 1,
		sectionElement: "Earth",
		sectionBg: bg_elements_earth,
		sectionBgSrcSet:
			"/assets/images/bg_elements_earth.jpg 1024w, /assets/images/bg_elements_earth@2x.jpg 2500w, /assets/images/bg_elements_earth@3x.jpg 4000w",
		sectionTitle: "Welcome to the Wilderness",
		sectionSubtitle:
			"Buried deep within the heart of the Inzaru wilds is the ancient temple of your ancestors - a hallowed sanctum steeped in enigmas and cloaked in lore. It now stands as an impregnable fortress in the maelstrom of conflict.",
		featuredCardId: ["E008", "E015", "E024", "E022"],
		featuredSectionHeader: "This Land Belongs to its Protectors",
		featuredSectionText:
			"With your deep connection to <strong>Earth</strong> magic, you've tapped into the very essence of the natural world. Drawing from nature's endless resilience, you embody the vitality of the wild, and resonate with the rhythm of life pulsating beneath your feet. You're not just filled with raw energy - you channel the enduring force of the mountains, the forests, the deep-rooted trees.<br/><br/> You are not simply present in the battlefield - you are intertwined with it. The more you claim, the more you can hear the land cry out for renewal. This world echoes with your might.",
	},
	{
		id: 2,
		sectionElement: "Air",
		sectionBg: bg_elements_air,
		sectionBgSrcSet:
			"/assets/images/bg_elements_air.jpg 1024w, /assets/images/bg_elements_air@2x.jpg 2500w , /assets/images/bg_elements_air@3x.jpg 4000w",
		sectionTitle: "Explore the High Desert",
		sectionSubtitle:
			"With each new relic discovered on the cloud plains of Zederi, the influx of northern invaders intensifies. They don't know the storm they are calling down.",
		featuredCardId: ["A048", "A043", "A056", "A057"],
		featuredSectionHeader: "Your Domain Extends to the Horizon",
		featuredSectionText:
			"As an <strong>Air</strong> mage, speed is your ally. You are a zephyr on the battlefield, nimbly threading through enemies, and countering plans before they even happen. You command an elusive army blessed with speed, agility and a tempest's fury, and you turn the winds of fortune to your favor. <br /><br />You delight in the tactical game, moving more swiftly than your opponents and securing a quick victory. You strike like lightning, then vanish just as quickly. You embrace a dynamic blend of power and stealth to protect and expand your homeland, knowing the difference between life and death can hinge on the roll of a die at the right time.",
	},
	{
		id: 3,
		sectionElement: "Fire",
		sectionBg: bg_elements_fire,
		sectionBgSrcSet:
			"/assets/images/bg_elements_fire.jpg 1000w , /assets/images/bg_elements_fire@2x.jpg 2500w, /assets/images/bg_elements_fire@3x.jpg 4000w",
		sectionTitle: "You Rule the Burning Wastelands",
		sectionSubtitle:
			'You are the warlord of Kartha, to whom the oracle once proclaimed: "In your hands, aggression will become an artform. In your wake, empires will turn to ashes."',
		featuredCardId: ["F076", "F073", "F099", "F086"],
		featuredSectionHeader: "Your Star is Burning Brightly",
		featuredSectionText:
			"With the might of <strong>Fire</strong> magic at your command, you embody the spirit of a true conqueror. You know that the flame that burns the brightest commands respect and fear alike. Let your inner flame roar into a blazing inferno, consuming all obstacles and breaking all who stand in your way. <br /><br />You were forged in the relentless heat of the Karthan wastes. Your soldiers are the embodiment of raw power and unrestrained force. Each spell you cast ignites the  air, your opponents reeling in the face of your onslaught. <br /><br />Take hold of your destiny, and blaze a trail of conquest across the world.",
	},
	{
		id: 4,
		sectionElement: "Water",
		sectionBg: bg_elements_water,
		sectionBgSrcSet:
			"/assets/images/bg_elements_water.jpg 1000w, /assets/images/bg_elements_water@2x.jpg 2500w, /assets/images/bg_elements_water@3x.jpg 4000w",
		sectionTitle: "All Rivers Flow Toward You",
		sectionSubtitle:
			"From your throne at the strategic harbor of Ferria, the world's knowledge, trade and commerce revolves around you. Under your watchful eye, nothing passes through your borders unseen.",
		featuredCardId: ["W120", "W132", "W131", "W118"],
		featuredSectionHeader: "The Key to Control is Within",
		featuredSectionText:
			"You aren't a ruler because of luck. You have studied the art of <strong>Water</strong> magic since you were a child, from every corner of the realm. You are a seasoned conqueror because you are a strategist. You know that winning requires controlling the flow of battle and knowing more than your opponent. So whether by trade or by piracy, it's going to wash up on your shores.<br /><br />Your strategy hinges on deflection, turning the  currents of your adversaries' attacks back upon them. It is through this clever counter-maneuvring and calculated advancement that you gain control, rushing forward like the tide.",
	},
	{
		id: 5,
		sectionElement: "Light",
		sectionBg: bg_elements_light,
		sectionBgSrcSet:
			"/assets/images/bg_elements_light.jpg 1000w, /assets/images/bg_elements_light@2x.jpg 2500w, /assets/images/bg_elements_light@3x.jpg 4000w",
		sectionTitle: "We Will Erect Monuments to Your Glory",
		sectionSubtitle:
			"As the Captain of the Merenthian Guard, you are the last champion who stands for the righteous against the forces that would plunge the world into darkness forever. What is your command?",
		featuredCardId: ["L147", "L159", "L161", "L141"],
		featuredSectionHeader: "Only You Can Guide the Way Forward",
		featuredSectionText:
			"As a revered practitioner of <strong>Light</strong> magic, your role extends beyond mere conjurations and spells. Your very essence is a beacon of hope, a safe harbor for those beleaguered by illness and weakness. However, your purpose does not lie in merely healing. With each soothing incantation, with each flicker of restorative magic, you nurture the seeds of resistance within the vulnerable, transforming the defenseless into masters of their own fate.<br /><br />Light magic is not merely about preservation but progression. It involves the cultivation of an indomitable spirit. It's about raising an army, not of mindless drones, but of individuals strengthened by their trials and emboldened by their victories. ",
	},
	{
		id: 6,
		sectionElement: "Shadow",
		sectionBg: bg_elements_shadow,
		sectionBgSrcSet:
			"/assets/images/bg_elements_shadow.jpg 1000w, /assets/images/bg_elements_shadow@2x.jpg 2000w, /assets/images/bg_elements_shadow@3x.jpg 4000w",
		sectionTitle: "There's Some Power Yet in These Old Ruins",
		sectionSubtitle:
			"In the darkest corners of the ancient city of Ghis, power accumulates. The power to uplift the forgotten, to revive those who are lost and to avenge lost wars. All it requires is just a small tribute to the demon Ix. Will you join?",
		featuredCardId: ["S200", "S183", "S201", "S193"],
		featuredSectionHeader: "What Price Will You Pay for Glory?",
		featuredSectionText:
			"We've all heard them, the hushed tales of the forbidden – of demons, of spectral presences, of arcane rituals too profane to mention – these are the tales of the legendary power of <strong>Shadow</strong> magic. But you dare to probe deeper, venturing beyond the veil of apprehension. You know this daunting power presents an opportunity, not a threat - an unlikely ally that holds the potential to alter the fate of the world.<br /><br />Maybe these mysteries are too much for you. Or maybe you have started to like the whispers of amibition that can be heard in the dark. Calling the bold, the fearless, the relentless. Are you ready to take the reins of your destiny?",
	},
];
const sectionElements = [
	{
		id: 1,
		elementLink: "#earth",
		elementName: "Earth",
		elementIcon: IconEarth,
		elementTextColor: "text-sc-element-earth",
	},
	{
		id: 2,
		elementLink: "#air",
		elementName: "Air",
		elementIcon: IconAir,
		elementTextColor: "text-sc-element-air",
	},
	{
		id: 3,
		elementLink: "#fire",
		elementName: "Fire",
		elementIcon: IconFire,
		elementTextColor: "text-sc-element-fire",
	},
	{
		id: 4,
		elementLink: "#water",
		elementName: "Water",
		elementIcon: IconWater,
		elementTextColor: "text-sc-element-water",
	},
	{
		id: 5,
		elementLink: "#light",
		elementName: "Light",
		elementIcon: IconLight,
		elementTextColor: "text-sc-element-light",
	},
	{
		id: 6,
		elementLink: "#shadow",
		elementName: "Shadow",
		elementIcon: IconShadow,
		elementTextColor: "text-sc-element-shadow",
	},
];

const howToPlayContent = [
	{
		id: 0,
		sectionTitle: "How to Play",
		sectionText:
			"<strong><em>Third Dawn: Siegecraft</em></strong> is a two player card game of strategy, tactics and timing, using the elemental forces of Earth, Air, Fire, Water, Light and Shadow to dominate the battlefield.",
	},
	{
		id: 1,
		tile: true,
		sectionBg: how_to_play_decks,
		sectionBgSrcSet:
			"/src/assets/how_to_play_decks.jpg 1000w, /src/assets/how_to_play_decks@2x.jpg 2000w, /src/assets/how_to_play_decks@3x.jpg 4000w",
		sectionBgAlt: "A pair of custom built Third Dawn: Siegecraft decks.",
		sectionTitle: "Create Your Deck",
		sectionText:
			"Choose from pre-constructed decks that come with the game, or mix and match elements and cards to discover your own powerful combinations.",
	},
	{
		id: 2,
		tile: true,
		sectionSubtitle: "Prepare to Play",
		sectionBg: "/src/assets/how_to_play_playmat.jpg",
		sectionBgSrcSet:
			"/src/assets/how_to_play_playmat.jpg 1000w, /src/assets/how_to_play_playmat@2x.jpg 2000w, /src/assets/how_to_play_playmat@3x.jpg 4000w",
		sectionBgAlt:
			"A black Third Dawn: Siegecraft playmat, split into three zones- the Assault, Battalion and Cavalry zones.",
		sectionTitle: "Set Up Your Battlefield",
		sectionText:
			"Your playmat is your battlefield. Invade your opponent's battlefield while developing and defending your own.",
		mobileAnimationData: playmatAnimationDataMobile,
		pcAnimationData: playmatAnimationData169,
	},
	{
		id: 3,
		tile: true,
		sectionBg: "src/assets/how_to_play_stronghold.jpg",
		sectionBgAlt:
			"A mountain stronghold with strong walls on a misty morning.",
		sectionBgSrcSet:
			"src/assets/how_to_play_stronghold.jpg 600w, src/assets/how_to_play_stronghold@2x.jpg 1200w, src/assets/how_to_play_stronghold@3x.jpg 1400w",
		sectionBgs: [
			{
				id: "1",
				src: "src/assets/how_to_play_stronghold.jpg",
				srcSet: "src/assets/how_to_play_stronghold.jpg 600w, src/assets/how_to_play_stronghold@2x.jpg 1200w, src/assets/how_to_play_stronghold@3x.jpg 1400w",
				alt: "A mountain stronghold with strong walls on a misty morning.",
			},
			{
				id: "2",
				src: "/src/assets/how_to_play_playmat.jpg",
				srcSet: "/src/assets/how_to_play_playmat.jpg 1000w, /src/assets/how_to_play_playmat@2x.jpg 2000w, /src/assets/how_to_play_playmat@3x.jpg 4000w",
				alt: "A black Third Dawn: Siegecraft playmat, split into three zones- the Assault, Battalion and Cavalry zones.",
			},
		],
		sectionSrcSetSizes:
			"(max-width: 600px) 600px,(max-width: 1200px) 1200px,1400px",
		featuredCardId: "N215",
		sectionTitle: "Play Territories to Expand",
		sectionSubtitle: "Plan an Empire",
		sectionText:
			"Build out your battlefield carefully. Summon units to build an invading and defending force.",
		mobileAnimationData: strongholdAnimationDataMobile,
		pcAnimationData: strongholdAnimationData169,
	},
	{
		id: 4,
		tile: true,
		sectionBg: "",
		bgImageAlt: "",
		sectionSubtitle: "Devote Yourself to the Elements",
		sectionTitle: "Play Elemental Territories",
		sectionText:
			"Declare your affiiliation to the elements of Third Dawn: Siegecraft and draw from their power.",
		mobileAnimationData: playTerritoriesAnimationDataMobile,
		pcAnimationData: playTerritoriesAnimationData169,
	},
	{
		id: 5,
		tile: true,
		sectionBg: "",
		bgImageAlt: "",
		sectionSubtitle: "Summon an Army",
		sectionTitle: "March to Control the Battlefield",
		sectionText:
			"Move units during your Strategy phase. Defend your territories and prepare your invasion.",
		mobileAnimationData: summonMoveAnimationDataMobile,
		pcAnimationData: summonMoveAnimationData169,
	},
	{
		id: 6,
		sectionSubtitle: "Bring the fight to your opponent",
		sectionTitle: "Challenge Your Opponent's Forces",
		sectionText:
			"Charge headlong into your foes. Win your attack rolls to defeat your enemy's defenders.",
		mobileAnimationData: attackAnimationDataMobile,
		pcAnimationData: attackAnimationData169,
	},
	{
		id: 7,
		sectionSubtitle: "Conquer Three Territories to Win",
		sectionTitle: "Lay Siege to Your Enemies",
		sectionText:
			"Attack undefended enemy territories directly with your units to win.",
		mobileAnimationData: conquerAnimationDataMobile,
		pcAnimationData: conquerAnimationData169,
	},
	{
		id: 8,
		sectionTitle: "There Are Six Paths to Power",
		sectionText: "Which will you choose?",
		sectionIcons: sectionElements,
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
	howToPlayContent,
	sectionElements,
};
