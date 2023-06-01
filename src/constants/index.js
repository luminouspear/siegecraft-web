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
		title: "Hero Section Title3",
		subTitle: "Hero section subtitle 3",
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
			"Let fury be tempered by faith.",
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

export {
	heroSection,
	homePageSectionTitles,
	mainPointsContent,
	playIconsContent,
	elementsCarouselContent,
};
