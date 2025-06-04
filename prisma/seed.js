import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const articles = [
  {
    title: "Artemis",
    slug: "artemis",
    subtitle: "Goddess of the Hunt",
    image: "/images/Artemis.png",
    imageAlt: "Portrait of Artemis",
    content: `
<p>Artemis is the Olympian Goddess of the Hunt and the older twin sister of Apollo. She offers boons to Zagreus which give his abilities the chance to deal Critical damage. In addition, she also offers boons that improve Cast abilities.
While the damage bonus offered on her boons is lower compared to other Gods', the Critical hits they offer deal three times the damage of a normal ability, granting some of the best overall DPS gain offered by any single god or goddess. Artemis boons, when properly combined with other boons, have the potential to deal tremendous damage. In addition, her Cast related boons increase your total ammo or add a projectile, further enabling a powerful ranged tool. </p>
`
  },
  {
    title: "Aphrodite",
    slug: "aphrodite",
    subtitle: "Goddess of Love",
    image: "/images/Aphrodite.png",
    imageAlt: "Portrait of Aphrodite",
    content: `
<p>Aphrodite is the Olympian Goddess of Love and Beauty. She offers boons to Zagreus that inflict her Weak or make enemies more susceptible to damage.
Her signature Status Curse is Weak, which reduces the afflicted enemies' damage by 30%. Aphrodite also offers boons which increase the effectiveness of her Status Curse itself, such as Empty Inside (which increases the effect's duration). </p>
`
  },
  {
    title: "Apollo",
    slug: "apollo",
    subtitle: "God of Light",
    image: "/images/Apollo.png",
    imageAlt: "Portrait of Apollo",
    content: `
<p>Apollo is the God of Light and the younger twin brother of Artemis. He appears in Hades II and offers his boons to Melinoë in her fight against Chronos. His signature Status Curse is Daze which has a chance to cause enemies to deal no damage.  </p>
`
  },
  {
    title: "Ares",
    slug: "ares",
    subtitle: "God of War",
    image: "/images/Ares.png",
    imageAlt: "Portrait of Ares",
    content: `
<p>Ares is the Olympian God of War. Unlike the more strategically oriented Athena, Ares' domain is the physical, violent, and untamed aspects of warfare.
He offers boons to Zagreus, which can increase his ability damage, inflict his signature Status Curse, Doom, or create Blade Rifts which deal rapid damage to enemies who walk into them.
Ares boons deal high amounts of damage over time, either by keeping enemies inside Blade Rifts, or by continuously applying Doom to enemies.   </p>
`
  },
  {
    title: "Athena",
    slug: "athena",
    subtitle: "Goddess of Wisdom",
    image: "/images/Athena.png",
    imageAlt: "Portrait of Athena",
    content: `
<p>Athena is the Olympian Goddess of Wisdom and Strategic Warfare. She offers boons to Zagreus that cause his abilities to Deflect enemy attacks. In addition, she also offers boons that reduce damage or increase other defensive options.
Athena offers excellent defensive options with her boons, protecting you from damage with the ability to deflect enemy projectiles and melee attacks, as well as reduce the damage you will take in a run.
Her signature Status Curse is Exposed, which causes enemies to take additional damage from behind. This stacks with Backstab bonuses offered by the Mirror of Night.  </p>
`
  },
  {
    title: "Demeter",
    slug: "demeter",
    subtitle: "Goddess of Seasons",
    image: "/images/Demeter.png",
    imageAlt: "Portrait of Demeter",
    content: `
<p>Demeter is the Olympian Goddess of Seasons and mother of Persephone.
Many of the boons she offers to Zagreus inflict her signature Status Curse, Chill, which causes enemies to slow down and, possibly, shatter, spreading the Curse. In addition to that, she offers the 2nd highest raw percentage damage increase. Her other boons vary between helping survivability by healing, increasing damage, or boosting your different boons over time by increasing their rarity.  </p>
`
  },
  {
    title: "Dionysus",
    slug: "dionysus",
    subtitle: "God of Wine",
    image: "/images/Dionysus.png",
    imageAlt: "Portrait of Dionysus",
    content: `
<p>Dionysus is the Olympian God of Wine and Madness, and cousin to Zagreus. He offers boons to Zagreus revolving around his signature Status Curse, Hangover, slowing, and stunning enemies, as well as various drinking-themed Boons.
Dionysus offers strong damage over time abilities on nearly all his offensive boons. However, he can also give Zagreus strong utility abilities in the forms of stuns, slows, heals and health, damage reduction effects, and items. </p>
`
  },
  {
    title: "Hephaestus",
    slug: "hephaestus",
    subtitle: "God of the Forge",
    image: "/images/Hephaestus.png",
    imageAlt: "Portrait of Hephaestus",
    content: `
<p>Hephaestus is the Olympian God of the Forge and Craftsmanship, son of Zeus and Hera, younger brother of Ares and husband of Aphrodite. In Hades, he is only mentioned as the one who built the golden statue of Mount Olympus.
Hephaestus appears in Hades II and offers his boons to Melinoë. His signature Status Curse is Vent which deals damage to enemies after 5 seconds.  </p>
`
  },
  {
    title: "Hera",
    slug: "hera",
    subtitle: "Queen of the Olympians",
    image: "/images/Hera.png",
    imageAlt: "Portrait of Hera",
    content: `
<p>Hera is the Olympian Goddess of Marriage and Queen of the Olympians. In Hades, she is only mentioned as one of the previous bearers of Coronacht.
She appears in Hades II and offers her boons to Melinoë. Her Status Curse is Hitch which makes foes take damage when other afflicted foes are attacked.  </p>
`
  },
  {
    title: "Hermes",
    slug: "hermes",
    subtitle: "God of Swiftness",
    image: "/images/Hermes.png",
    imageAlt: "Portrait of Hermes",
    content: `
<p>Hermes is the Olympian God of Commerce, Trickery, and Travel, as well as the messenger of the gods. He works with Charon to guide souls to their proper place in the Underworld, with Hermes delivering the souls to Charon, for him to ferry them down the Styx the rest of the way (giving Hermes the title of psychopomp, or someone who guides souls to the afterlife, which he and Charon share). He offers boons that enhance Zagreus's speed in various ways, including attack speed and special speed. His boons can also improve Zagreus's dash and cast recovery.  </p>
`
  },
  {
    title: "Hestia",
    slug: "hestia",
    subtitle: "Goddess of the Hearth",
    image: "/images/Hestia.png",
    imageAlt: "Portrait of Hestia",
    content: `
<p>Hestia is the Olympian Goddess of Flame and Hearth. In Hades, she is only mentioned as one of the previous bearers of Adamant Rail.
She appears in Hades II and offers her boons to Melinoë in her fight against Chronos. Her signature Status Curse is Scorch, which deals damage-over-time to enemies and increasing with additional Scorch stacks.  </p>
`
  },
  {
    title: "Poseidon",
    slug: "poseidon",
    subtitle: "God of the Sea",
    image: "/images/Poseidon.png",
    imageAlt: "Portrait of Poseidon",
    content: `
<p>Poseidon is the Olympian God of the Sea, Earthquakes and Horses, and is occasionally referred to by the epithet of "Earthshaker." He, like many of his fellow Olympians, offers boons to Zagreus that significantly increase the damage of his abilities, as well as cause his abilities to inflict Knockback.
Poseidon boons offers the 3rd highest raw percentage damage increase in Hades, as well as the ability to knock enemies around, dealing extra wall slam or trap damage.  </p>
`
  },
  // Add more articles here
];

async function main() {
  for (const article of articles) {
    await prisma.article.upsert({
      where: { slug: article.slug },
      update: {
        // List all fields you want to update if the article exists:
        title: article.title,
        subtitle: article.subtitle,
        image: article.image,
        imageAlt: article.imageAlt,
        content: article.content,
      },
      create: article,
    });
  }
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());