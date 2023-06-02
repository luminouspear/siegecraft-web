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
			"Prime is the debut <strong><em>Third Dawn: Siegecraft</em></strong> set. Featuring over 200 cards spread across the 6 elements, unique mechanics for each element that will shake up gameplay and give you the feel of each element.<br /><br />Plus, each copy of <strong><em>Third Dawn: Siegecraft</em></strong> Prime comes with preconstructed decks that you can use to get started, or tear apart and begin customizing immediately. ",
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

export {
	heroSection,
	homePageSectionTitles,
	mainPointsContent,
	playIconsContent,
	elementsCarouselContent,
	navLinks,
	videoSectionContent,
	homePageGallery,
};
