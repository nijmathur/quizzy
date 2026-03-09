import type { Question } from '../types';

export const iscSscGeoQuestions: Question[] = [

  // ══════════════════════════════════════════════════════════════════
  // ISC SCIENCE – GRADES 4-5
  // ══════════════════════════════════════════════════════════════════

  // ─── ISC – CELLS ────────────────────────────────────────────────────────────
  {
    id: 'isc-cell-1', subject: 'science', level: 'ISC', gradeRange: 'Grades 4-5', topic: 'Cells',
    question: 'Which organelle is called the "powerhouse of the cell" because it produces energy?',
    options: ['Nucleus', 'Ribosome', 'Mitochondria', 'Vacuole'],
    correctIndex: 2,
    explanation: 'Mitochondria produce ATP (energy) through cellular respiration, earning them the nickname "powerhouse of the cell."',
  },
  {
    id: 'isc-cell-2', subject: 'science', level: 'ISC', gradeRange: 'Grades 4-5', topic: 'Cells',
    question: 'Which structure is found in plant cells but NOT in animal cells?',
    options: ['Nucleus', 'Cell wall', 'Mitochondria', 'Cell membrane'],
    correctIndex: 1,
    explanation: 'Plant cells have a rigid cell wall (made of cellulose) outside the cell membrane. Animal cells do not have a cell wall.',
  },
  {
    id: 'isc-cell-3', subject: 'science', level: 'ISC', gradeRange: 'Grades 4-5', topic: 'Cells',
    question: 'The correct order from smallest to largest level of organization in living things is:',
    options: ['Organ → Tissue → Cell → Organ system', 'Cell → Tissue → Organ → Organ system', 'Tissue → Cell → Organ → Organism', 'Organ system → Organ → Tissue → Cell'],
    correctIndex: 1,
    explanation: 'Living things are organized from smallest to largest: Cells → Tissues → Organs → Organ systems → Organism.',
  },
  {
    id: 'isc-cell-4', subject: 'science', level: 'ISC', gradeRange: 'Grades 4-5', topic: 'Cells',
    question: 'What is the function of the cell membrane?',
    options: ['To produce energy for the cell', 'To control what enters and exits the cell', 'To store the cell\'s genetic information', 'To carry out photosynthesis'],
    correctIndex: 1,
    explanation: 'The cell membrane is a selectively permeable barrier that controls what substances can enter and leave the cell.',
  },
  {
    id: 'isc-cell-5', subject: 'science', level: 'ISC', gradeRange: 'Grades 4-5', topic: 'Cells',
    question: 'Which organelle contains the DNA of a cell?',
    options: ['Ribosome', 'Vacuole', 'Nucleus', 'Chloroplast'],
    correctIndex: 2,
    explanation: 'The nucleus is the control center of the cell and contains the cell\'s DNA (genetic information) in chromosomes.',
  },

  // ─── ISC – CLASSIFICATION ───────────────────────────────────────────────────
  {
    id: 'isc-class-1', subject: 'science', level: 'ISC', gradeRange: 'Grades 4-5', topic: 'Classification',
    question: 'What is the correct order of classification from broadest to most specific?',
    options: ['Kingdom → Phylum → Class → Order → Family → Genus → Species', 'Species → Genus → Family → Order → Class → Phylum → Kingdom', 'Phylum → Kingdom → Order → Class → Family → Genus → Species', 'Kingdom → Class → Phylum → Family → Order → Genus → Species'],
    correctIndex: 0,
    explanation: 'The taxonomic hierarchy from broadest to most specific is: Kingdom, Phylum, Class, Order, Family, Genus, Species. (Mnemonic: "King Philip Came Over For Good Soup")',
  },
  {
    id: 'isc-class-2', subject: 'science', level: 'ISC', gradeRange: 'Grades 4-5', topic: 'Classification',
    question: 'Bacteria are classified in which kingdom?',
    options: ['Fungi', 'Protista', 'Monera (Bacteria)', 'Animalia'],
    correctIndex: 2,
    explanation: 'Bacteria are prokaryotes (no nucleus) and are classified in Kingdom Monera (or Bacteria). They are single-celled microorganisms.',
  },
  {
    id: 'isc-class-3', subject: 'science', level: 'ISC', gradeRange: 'Grades 4-5', topic: 'Classification',
    question: 'Mushrooms belong to which kingdom?',
    options: ['Plantae', 'Animalia', 'Fungi', 'Protista'],
    correctIndex: 2,
    explanation: 'Mushrooms, molds, and yeasts belong to Kingdom Fungi. Unlike plants, fungi cannot make their own food through photosynthesis.',
  },
  {
    id: 'isc-class-4', subject: 'science', level: 'ISC', gradeRange: 'Grades 4-5', topic: 'Classification',
    question: 'A virus is different from bacteria because a virus:',
    options: ['Is larger than bacteria', 'Is a living cell with a nucleus', 'Is not a cell and needs a host to reproduce', 'Can produce its own energy'],
    correctIndex: 2,
    explanation: 'Viruses are not considered living cells. They have no cell structure of their own and must invade a host cell to reproduce by hijacking the host\'s cellular machinery.',
  },
  {
    id: 'isc-class-5', subject: 'science', level: 'ISC', gradeRange: 'Grades 4-5', topic: 'Classification',
    question: 'Amoebas and paramecia belong to which kingdom?',
    options: ['Fungi', 'Protista', 'Monera', 'Plantae'],
    correctIndex: 1,
    explanation: 'Amoebas and paramecia are protists — mostly single-celled eukaryotic organisms that belong to Kingdom Protista.',
  },

  // ─── ISC – PLANTS ───────────────────────────────────────────────────────────
  {
    id: 'isc-plant-1', subject: 'science', level: 'ISC', gradeRange: 'Grades 4-5', topic: 'Plants (ISC)',
    question: 'Vascular plants differ from non-vascular plants because they have:',
    options: ['No roots', 'Tubes (xylem and phloem) to transport water and nutrients', 'No flowers or seeds', 'Only one cell layer'],
    correctIndex: 1,
    explanation: 'Vascular plants have specialized transport tissues: xylem (carries water up from roots) and phloem (carries food/sugars from leaves). Non-vascular plants like mosses lack these tubes.',
  },
  {
    id: 'isc-plant-2', subject: 'science', level: 'ISC', gradeRange: 'Grades 4-5', topic: 'Plants (ISC)',
    question: 'What is transpiration in plants?',
    options: ['The absorption of water by roots', 'The process of making food using sunlight', 'The loss of water vapor through leaf pores (stomata)', 'The transport of sugar from leaves to roots'],
    correctIndex: 2,
    explanation: 'Transpiration is the process by which plants release water vapor through tiny pores (stomata) on their leaves. This helps pull water up from roots.',
  },
  {
    id: 'isc-plant-3', subject: 'science', level: 'ISC', gradeRange: 'Grades 4-5', topic: 'Plants (ISC)',
    question: 'Gymnosperms and angiosperms are both seed plants. What is the key difference?',
    options: ['Gymnosperms have flowers; angiosperms do not', 'Angiosperms produce seeds enclosed in fruit; gymnosperms have exposed seeds', 'Gymnosperms are non-vascular; angiosperms are vascular', 'Angiosperms cannot undergo photosynthesis'],
    correctIndex: 1,
    explanation: 'Angiosperms (flowering plants) produce seeds enclosed within a fruit. Gymnosperms (like pine trees) produce "naked" seeds, often in cones, not enclosed in fruit.',
  },
  {
    id: 'isc-plant-4', subject: 'science', level: 'ISC', gradeRange: 'Grades 4-5', topic: 'Plants (ISC)',
    question: 'Which type of plant reproduces using spores and does NOT produce seeds?',
    options: ['Rose', 'Oak tree', 'Fern', 'Cactus'],
    correctIndex: 2,
    explanation: 'Ferns are vascular plants that reproduce through spores, not seeds. The spores are usually found in clusters (sori) on the underside of fronds.',
  },
  {
    id: 'isc-plant-5', subject: 'science', level: 'ISC', gradeRange: 'Grades 4-5', topic: 'Plants (ISC)',
    question: 'Vegetative propagation is a type of asexual reproduction. Which of the following is an example?',
    options: ['A bee pollinating a flower', 'A potato growing a new plant from its "eye" (bud)', 'A seed being dispersed by wind', 'A flower being fertilized'],
    correctIndex: 1,
    explanation: 'Vegetative propagation is when new plants grow from vegetative parts of a parent plant (roots, stems, leaves). Potatoes growing from buds ("eyes"), strawberry runners, and garlic bulbs are all examples.',
  },

  // ─── ISC – ANIMALS ──────────────────────────────────────────────────────────
  {
    id: 'isc-anim-1', subject: 'science', level: 'ISC', gradeRange: 'Grades 4-5', topic: 'Animals (ISC)',
    question: 'Which group of invertebrates has a hard exoskeleton and jointed legs?',
    options: ['Mollusks', 'Echinoderms', 'Arthropods', 'Cnidarians'],
    correctIndex: 2,
    explanation: 'Arthropods (insects, spiders, crabs, centipedes) are characterized by a hard exoskeleton (outer skeleton) and jointed appendages (legs/arms). They are the largest animal group on Earth.',
  },
  {
    id: 'isc-anim-2', subject: 'science', level: 'ISC', gradeRange: 'Grades 4-5', topic: 'Animals (ISC)',
    question: 'Starfish (sea stars) belong to which invertebrate group?',
    options: ['Mollusks', 'Echinoderms', 'Arthropods', 'Sponges'],
    correctIndex: 1,
    explanation: 'Starfish, sea urchins, and sand dollars belong to Echinoderms — marine invertebrates with a spiny skin and radial (circular) body symmetry.',
  },
  {
    id: 'isc-anim-3', subject: 'science', level: 'ISC', gradeRange: 'Grades 4-5', topic: 'Animals (ISC)',
    question: 'Which of the following is a cold-blooded vertebrate?',
    options: ['Dog', 'Eagle', 'Snake', 'Whale'],
    correctIndex: 2,
    explanation: 'Snakes are reptiles, which are cold-blooded (ectothermic) — their body temperature depends on the environment. Dogs, eagles, and whales are warm-blooded (endothermic).',
  },
  {
    id: 'isc-anim-4', subject: 'science', level: 'ISC', gradeRange: 'Grades 4-5', topic: 'Animals (ISC)',
    question: 'Jellyfish and sea anemones belong to which invertebrate group?',
    options: ['Echinoderms', 'Cnidarians', 'Mollusks', 'Flatworms'],
    correctIndex: 1,
    explanation: 'Jellyfish, corals, and sea anemones are cnidarians. They have stinging cells (nematocysts) and simple body plans with radial symmetry.',
  },
  {
    id: 'isc-anim-5', subject: 'science', level: 'ISC', gradeRange: 'Grades 4-5', topic: 'Animals (ISC)',
    question: 'What are warm-blooded animals also called?',
    options: ['Ectotherms', 'Endotherms', 'Invertebrates', 'Herbivores'],
    correctIndex: 1,
    explanation: 'Warm-blooded animals are called endotherms — they regulate their own internal body temperature regardless of the outside environment. Birds and mammals are endotherms.',
  },

  // ─── ISC – LIFE PROCESSES ───────────────────────────────────────────────────
  {
    id: 'isc-life-1', subject: 'science', level: 'ISC', gradeRange: 'Grades 4-5', topic: 'Life Processes (ISC)',
    question: 'In the circulatory system, which blood vessel carries oxygen-rich blood AWAY from the heart?',
    options: ['Veins', 'Capillaries', 'Arteries', 'Lymph nodes'],
    correctIndex: 2,
    explanation: 'Arteries carry oxygenated blood away from the heart to the body. Veins carry deoxygenated blood back to the heart. (Exception: pulmonary artery/vein are reversed.)',
  },
  {
    id: 'isc-life-2', subject: 'science', level: 'ISC', gradeRange: 'Grades 4-5', topic: 'Life Processes (ISC)',
    question: 'A dominant trait is best described as:',
    options: ['A trait that only appears in females', 'A trait that is always expressed and masks the recessive trait', 'A trait that only appears in the grandchildren', 'A trait that disappears after one generation'],
    correctIndex: 1,
    explanation: 'A dominant trait is one that is expressed (shows up) whenever at least one copy of the dominant allele is present, masking the effect of the recessive allele.',
  },
  {
    id: 'isc-life-3', subject: 'science', level: 'ISC', gradeRange: 'Grades 4-5', topic: 'Life Processes (ISC)',
    question: 'Complete metamorphosis in butterflies goes through which stages in order?',
    options: ['Egg → Larva → Pupa → Adult', 'Egg → Pupa → Larva → Adult', 'Larva → Egg → Adult → Pupa', 'Egg → Adult → Larva → Pupa'],
    correctIndex: 0,
    explanation: 'Complete metamorphosis (holometabolism) involves four stages: Egg → Larva (caterpillar) → Pupa (chrysalis) → Adult (butterfly). This is distinct from incomplete metamorphosis, which skips the pupa stage.',
  },
  {
    id: 'isc-life-4', subject: 'science', level: 'ISC', gradeRange: 'Grades 4-5', topic: 'Life Processes (ISC)',
    question: 'What is a plant tropism?',
    options: ['The process by which plants make seeds', 'A plant\'s growth response to an external stimulus such as light or gravity', 'The way plants absorb water through their roots', 'The seasonal loss of leaves in deciduous trees'],
    correctIndex: 1,
    explanation: 'Tropisms are growth responses by plants to environmental stimuli. Phototropism is growing toward light; gravitropism is growing in response to gravity; thigmotropism is a response to touch.',
  },
  {
    id: 'isc-life-5', subject: 'science', level: 'ISC', gradeRange: 'Grades 4-5', topic: 'Life Processes (ISC)',
    question: 'Which organ is the main site of gas exchange (oxygen in, carbon dioxide out) in the human body?',
    options: ['Heart', 'Kidneys', 'Lungs', 'Liver'],
    correctIndex: 2,
    explanation: 'The lungs are the primary organs of the respiratory system. Oxygen from inhaled air passes into the blood, and carbon dioxide from the blood is exhaled through the lungs.',
  },

  // ─── ISC – ECOSYSTEMS ───────────────────────────────────────────────────────
  {
    id: 'isc-eco-1', subject: 'science', level: 'ISC', gradeRange: 'Grades 4-5', topic: 'Ecosystems (ISC)',
    question: 'Which of the following is an ABIOTIC factor in an ecosystem?',
    options: ['Grass', 'Deer', 'Sunlight', 'Bacteria'],
    correctIndex: 2,
    explanation: 'Abiotic factors are non-living components of an ecosystem: sunlight, water, temperature, soil, and air. Biotic factors are all living organisms (grass, deer, bacteria).',
  },
  {
    id: 'isc-eco-2', subject: 'science', level: 'ISC', gradeRange: 'Grades 4-5', topic: 'Ecosystems (ISC)',
    question: 'A relationship where both organisms benefit is called:',
    options: ['Parasitism', 'Commensalism', 'Mutualism', 'Predation'],
    correctIndex: 2,
    explanation: 'Mutualism is a symbiotic relationship in which both species benefit. Example: bees get nectar from flowers, and flowers get pollinated by bees.',
  },
  {
    id: 'isc-eco-3', subject: 'science', level: 'ISC', gradeRange: 'Grades 4-5', topic: 'Ecosystems (ISC)',
    question: 'Which of the Earth\'s major biomes is characterized by the HIGHEST biodiversity and receives the most rainfall?',
    options: ['Desert', 'Tundra', 'Tropical rainforest', 'Grassland'],
    correctIndex: 2,
    explanation: 'Tropical rainforests receive the most rainfall (over 200 cm/year) and have the greatest biodiversity of any biome, containing more than half of the world\'s species.',
  },
  {
    id: 'isc-eco-4', subject: 'science', level: 'ISC', gradeRange: 'Grades 4-5', topic: 'Ecosystems (ISC)',
    question: 'In parasitism, what happens to the host?',
    options: ['The host benefits while the parasite is unaffected', 'The host is harmed while the parasite benefits', 'Both the host and parasite benefit', 'Neither organism is affected'],
    correctIndex: 1,
    explanation: 'In parasitism, the parasite benefits at the expense of the host, which is harmed (but usually not immediately killed). Ticks feeding on a dog are an example.',
  },
  {
    id: 'isc-eco-5', subject: 'science', level: 'ISC', gradeRange: 'Grades 4-5', topic: 'Ecosystems (ISC)',
    question: 'Primary succession occurs when:',
    options: ['An existing ecosystem is disturbed by fire and recovers', 'Life colonizes a bare, lifeless area with no soil (such as after a volcanic eruption)', 'A species goes extinct', 'A new predator is introduced into an ecosystem'],
    correctIndex: 1,
    explanation: 'Primary succession starts from scratch — a completely barren area with no soil, like a newly cooled lava field or a glacier retreating. Pioneer species (like lichens) are the first colonizers.',
  },

  // ─── ISC – GEOLOGY ──────────────────────────────────────────────────────────
  {
    id: 'isc-geol-1', subject: 'science', level: 'ISC', gradeRange: 'Grades 4-5', topic: 'Geology (ISC)',
    question: 'The theory of plate tectonics states that:',
    options: ['Earth\'s core is solid iron', 'Earth\'s outer shell is divided into moving plates that float on the mantle', 'All continents are stationary', 'Earthquakes only occur near the equator'],
    correctIndex: 1,
    explanation: 'Plate tectonics theory states that Earth\'s lithosphere (crust + upper mantle) is broken into large pieces called tectonic plates that slowly move over the semi-fluid asthenosphere.',
  },
  {
    id: 'isc-geol-2', subject: 'science', level: 'ISC', gradeRange: 'Grades 4-5', topic: 'Geology (ISC)',
    question: 'Which type of fossil forms when an organism leaves an impression in sediment, which then hardens?',
    options: ['Amber fossil', 'Cast fossil', 'Mold fossil', 'Trace fossil'],
    correctIndex: 2,
    explanation: 'A mold fossil forms when an organism is buried in sediment, decomposes, and leaves behind a hollow impression (mold). If the mold fills with minerals, a cast fossil forms.',
  },
  {
    id: 'isc-geol-3', subject: 'science', level: 'ISC', gradeRange: 'Grades 4-5', topic: 'Geology (ISC)',
    question: 'Which layer of Earth is made of liquid iron and nickel and creates Earth\'s magnetic field?',
    options: ['Crust', 'Mantle', 'Inner core', 'Outer core'],
    correctIndex: 3,
    explanation: 'Earth\'s outer core is composed of liquid iron and nickel. The movement of this liquid metal generates electric currents that create Earth\'s magnetic field.',
  },
  {
    id: 'isc-geol-4', subject: 'science', level: 'ISC', gradeRange: 'Grades 4-5', topic: 'Geology (ISC)',
    question: 'What is the rock cycle?',
    options: ['The process by which the Moon affects tides', 'The continuous process by which rocks are formed, broken down, and reformed over time', 'The daily rotation of Earth on its axis', 'The movement of tectonic plates'],
    correctIndex: 1,
    explanation: 'The rock cycle describes how rocks continuously change from one type to another (igneous → sedimentary → metamorphic → magma → igneous) through geological processes over millions of years.',
  },
  {
    id: 'isc-geol-5', subject: 'science', level: 'ISC', gradeRange: 'Grades 4-5', topic: 'Geology (ISC)',
    question: 'What are renewable energy sources?',
    options: ['Coal, oil, and natural gas', 'Solar, wind, hydroelectric, and geothermal energy', 'Nuclear energy only', 'Gasoline and diesel'],
    correctIndex: 1,
    explanation: 'Renewable energy sources are naturally replenished and include solar (sun), wind, hydroelectric (water), geothermal (Earth\'s heat), and biomass. They contrast with finite fossil fuels.',
  },

  // ─── ISC – EARTH & SPACE ────────────────────────────────────────────────────
  {
    id: 'isc-space-1', subject: 'science', level: 'ISC', gradeRange: 'Grades 4-5', topic: 'Earth & Space (ISC)',
    question: 'Spring tides (the highest tides) occur when:',
    options: ['Only the Moon aligns with Earth', 'The Sun, Earth, and Moon are aligned (new or full moon)', 'The Moon is at its farthest point from Earth', 'Earth is closest to the Sun'],
    correctIndex: 1,
    explanation: 'Spring tides occur during new and full moons, when the Sun, Earth, and Moon align. The combined gravitational pull of both the Sun and Moon creates extra-high (and extra-low) tides.',
  },
  {
    id: 'isc-space-2', subject: 'science', level: 'ISC', gradeRange: 'Grades 4-5', topic: 'Earth & Space (ISC)',
    question: 'What does the life cycle of a star like our Sun end as?',
    options: ['A black hole', 'A neutron star', 'A white dwarf', 'A supernova only'],
    correctIndex: 2,
    explanation: 'Medium-sized stars like our Sun will eventually expand into a red giant, shed their outer layers as a planetary nebula, and leave behind a small, dense white dwarf star.',
  },
  {
    id: 'isc-space-3', subject: 'science', level: 'ISC', gradeRange: 'Grades 4-5', topic: 'Earth & Space (ISC)',
    question: 'A light year is a unit that measures:',
    options: ['Time (how long light takes to travel)', 'Distance (how far light travels in one year)', 'The brightness of a star', 'The size of a galaxy'],
    correctIndex: 1,
    explanation: 'A light year is a unit of distance, not time — it is the distance light travels in one year, approximately 9.46 trillion kilometers (5.88 trillion miles).',
  },
  {
    id: 'isc-space-4', subject: 'science', level: 'ISC', gradeRange: 'Grades 4-5', topic: 'Earth & Space (ISC)',
    question: 'The Big Bang Theory proposes that the universe:',
    options: ['Has always existed and never changes', 'Originated from a massive explosion of a very hot, dense point about 13.8 billion years ago', 'Was created 6,000 years ago', 'Expands and contracts on a 1-million-year cycle'],
    correctIndex: 1,
    explanation: 'The Big Bang Theory is the prevailing cosmological model, proposing that the universe began from an extremely hot, dense state approximately 13.8 billion years ago and has been expanding ever since.',
  },
  {
    id: 'isc-space-5', subject: 'science', level: 'ISC', gradeRange: 'Grades 4-5', topic: 'Earth & Space (ISC)',
    question: 'What are the colors of stars related to?',
    options: ['Their size only', 'Their surface temperature (blue = hottest, red = coolest)', 'Their distance from Earth', 'The gases they contain'],
    correctIndex: 1,
    explanation: 'A star\'s color indicates its surface temperature. Blue/white stars are hottest (~30,000K+), yellow stars are medium (~6,000K like our Sun), and red stars are coolest (~3,000K).',
  },

  // ─── ISC – WEATHER ──────────────────────────────────────────────────────────
  {
    id: 'isc-wea-1', subject: 'science', level: 'ISC', gradeRange: 'Grades 4-5', topic: 'Weather (ISC)',
    question: 'Which layer of Earth\'s atmosphere contains the ozone layer?',
    options: ['Troposphere', 'Stratosphere', 'Mesosphere', 'Thermosphere'],
    correctIndex: 1,
    explanation: 'The ozone layer is found in the stratosphere (about 15–35 km above Earth). It absorbs most of the Sun\'s harmful ultraviolet (UV) radiation, protecting life on Earth.',
  },
  {
    id: 'isc-wea-2', subject: 'science', level: 'ISC', gradeRange: 'Grades 4-5', topic: 'Weather (ISC)',
    question: 'What is the Coriolis effect?',
    options: ['The warming of Earth\'s surface by the Sun', 'The deflection of winds and currents due to Earth\'s rotation', 'The cooling of air as it rises in altitude', 'The formation of hurricanes near the equator'],
    correctIndex: 1,
    explanation: 'The Coriolis effect is the apparent deflection of moving air and water due to Earth\'s rotation. Winds curve to the right in the Northern Hemisphere and to the left in the Southern Hemisphere.',
  },
  {
    id: 'isc-wea-3', subject: 'science', level: 'ISC', gradeRange: 'Grades 4-5', topic: 'Weather (ISC)',
    question: 'El Niño is a climate pattern characterized by:',
    options: ['Unusually cold Pacific Ocean temperatures near the equator', 'Unusually warm Pacific Ocean surface temperatures near the equator, disrupting global weather patterns', 'Increased Arctic ice formation', 'Stronger-than-normal trade winds'],
    correctIndex: 1,
    explanation: 'El Niño is a periodic warming of the central and eastern tropical Pacific Ocean that disrupts normal weather patterns worldwide, causing droughts in some areas and flooding in others.',
  },
  {
    id: 'isc-wea-4', subject: 'science', level: 'ISC', gradeRange: 'Grades 4-5', topic: 'Weather (ISC)',
    question: 'A cold front brings:',
    options: ['Warm, calm weather moving in from the west', 'A mass of cold air moving in and pushing under warm air, often bringing storms', 'Gradual warming over many days', 'Clear skies and high pressure'],
    correctIndex: 1,
    explanation: 'A cold front is the leading edge of a cold air mass moving in. As cold air pushes under warm, moist air, the warm air rises rapidly, often causing thunderstorms and then cooler, clearer weather.',
  },
  {
    id: 'isc-wea-5', subject: 'science', level: 'ISC', gradeRange: 'Grades 4-5', topic: 'Weather (ISC)',
    question: 'Trade winds blow from the:',
    options: ['Poles toward the equator, from east to west in tropical regions', 'Equator toward the poles', 'West to east in the mid-latitudes', 'North to south everywhere'],
    correctIndex: 0,
    explanation: 'Trade winds blow from subtropical high-pressure zones toward the equator. In the Northern Hemisphere, they blow from the northeast; in the Southern Hemisphere, from the southeast.',
  },

  // ─── ISC – DISASTERS ────────────────────────────────────────────────────────
  {
    id: 'isc-dis-1', subject: 'science', level: 'ISC', gradeRange: 'Grades 4-5', topic: 'Disasters',
    question: 'The "Ring of Fire" is:',
    options: ['A chain of volcanoes and earthquake zones surrounding the Pacific Ocean', 'A wildfire zone in North America', 'The region near Earth\'s equator with the highest temperatures', 'A band of desert stretching across Africa'],
    correctIndex: 0,
    explanation: 'The Pacific Ring of Fire is a horseshoe-shaped belt around the Pacific Ocean where a large number of earthquakes and volcanic eruptions occur due to tectonic plate movements.',
  },
  {
    id: 'isc-dis-2', subject: 'science', level: 'ISC', gradeRange: 'Grades 4-5', topic: 'Disasters',
    question: 'A tsunami is most commonly caused by:',
    options: ['Very strong ocean winds', 'Undersea earthquakes or volcanic eruptions that displace large amounts of water', 'Extremely high tides', 'Hurricanes reaching land'],
    correctIndex: 1,
    explanation: 'Tsunamis are most often triggered by undersea earthquakes (especially subduction zone earthquakes) that abruptly displace large volumes of water, creating massive waves.',
  },
  {
    id: 'isc-dis-3', subject: 'science', level: 'ISC', gradeRange: 'Grades 4-5', topic: 'Disasters',
    question: 'What is the difference between lava and magma?',
    options: ['They are the same thing', 'Magma is molten rock underground; lava is molten rock that has reached the surface', 'Lava is underground; magma is on the surface', 'Magma is solid; lava is liquid'],
    correctIndex: 1,
    explanation: 'Magma is molten (liquid) rock found beneath Earth\'s surface. When magma erupts through a volcano and reaches the surface, it is called lava.',
  },
  {
    id: 'isc-dis-4', subject: 'science', level: 'ISC', gradeRange: 'Grades 4-5', topic: 'Disasters',
    question: 'Hurricanes form over:',
    options: ['Cold polar seas', 'Warm tropical ocean water', 'Large deserts', 'Mountain ranges'],
    correctIndex: 1,
    explanation: 'Hurricanes (also called typhoons or cyclones) form over warm tropical ocean water (at least 26°C). The warm water provides the heat energy that fuels the storm.',
  },
  {
    id: 'isc-dis-5', subject: 'science', level: 'ISC', gradeRange: 'Grades 4-5', topic: 'Disasters',
    question: 'Seismic waves from an earthquake are recorded by which instrument?',
    options: ['Barometer', 'Anemometer', 'Seismograph', 'Thermometer'],
    correctIndex: 2,
    explanation: 'A seismograph is an instrument that detects and records the vibrations (seismic waves) caused by earthquakes. The recordings it makes are called seismograms.',
  },

  // ─── ISC – MATTER ───────────────────────────────────────────────────────────
  {
    id: 'isc-mat-1', subject: 'science', level: 'ISC', gradeRange: 'Grades 4-5', topic: 'Matter (ISC)',
    question: 'What are the main components of an atom?',
    options: ['Electrons, neutrons, and photons', 'Protons, neutrons, and electrons', 'Protons, ions, and molecules', 'Quarks, photons, and electrons'],
    correctIndex: 1,
    explanation: 'An atom consists of a nucleus containing protons (positive charge) and neutrons (no charge), surrounded by electrons (negative charge) orbiting in shells.',
  },
  {
    id: 'isc-mat-2', subject: 'science', level: 'ISC', gradeRange: 'Grades 4-5', topic: 'Matter (ISC)',
    question: 'What does pH measure?',
    options: ['The temperature of a solution', 'The acidity or alkalinity (basicity) of a solution on a scale from 0 to 14', 'The density of a liquid', 'The electrical charge of a substance'],
    correctIndex: 1,
    explanation: 'pH measures how acidic or basic a solution is. pH 7 is neutral, below 7 is acidic (like vinegar or lemon juice), and above 7 is basic/alkaline (like baking soda or bleach).',
  },
  {
    id: 'isc-mat-3', subject: 'science', level: 'ISC', gradeRange: 'Grades 4-5', topic: 'Matter (ISC)',
    question: 'Sublimation is the process by which a substance:',
    options: ['Changes from liquid to gas', 'Changes directly from solid to gas without passing through the liquid state', 'Changes from gas to liquid', 'Changes from liquid to solid'],
    correctIndex: 1,
    explanation: 'Sublimation is the phase transition from solid directly to gas without becoming a liquid. Dry ice (solid CO₂) sublimes at room temperature, and so does iodine when gently heated.',
  },
  {
    id: 'isc-mat-4', subject: 'science', level: 'ISC', gradeRange: 'Grades 4-5', topic: 'Matter (ISC)',
    question: 'The Law of Conservation of Mass states that:',
    options: ['Mass increases during chemical reactions', 'Mass is destroyed when matter is burned', 'The total mass of reactants equals the total mass of products in a chemical reaction', 'Only energy, not mass, is conserved'],
    correctIndex: 2,
    explanation: 'The Law of Conservation of Mass states that matter is neither created nor destroyed in a chemical reaction. The total mass of reactants always equals the total mass of products.',
  },
  {
    id: 'isc-mat-5', subject: 'science', level: 'ISC', gradeRange: 'Grades 4-5', topic: 'Matter (ISC)',
    question: 'A solution is a type of mixture where:',
    options: ['The components can be easily seen and separated', 'One substance (solute) is completely dissolved in another (solvent)', 'Solid particles are suspended in liquid', 'Two liquids that do not mix are combined'],
    correctIndex: 1,
    explanation: 'A solution is a homogeneous mixture in which a solute is uniformly dissolved in a solvent. Saltwater is a solution: salt (solute) dissolves in water (solvent).',
  },

  // ─── ISC – FORCES ───────────────────────────────────────────────────────────
  {
    id: 'isc-force-1', subject: 'science', level: 'ISC', gradeRange: 'Grades 4-5', topic: 'Forces (ISC)',
    question: 'Newton\'s First Law of Motion states that:',
    options: ['Force equals mass times acceleration', 'Every action has an equal and opposite reaction', 'An object in motion stays in motion (and at rest stays at rest) unless acted upon by an unbalanced force', 'Gravity pulls objects toward Earth\'s center'],
    correctIndex: 2,
    explanation: 'Newton\'s First Law (Law of Inertia): an object at rest stays at rest and an object in motion stays in motion at the same speed and direction, unless acted on by an unbalanced external force.',
  },
  {
    id: 'isc-force-2', subject: 'science', level: 'ISC', gradeRange: 'Grades 4-5', topic: 'Forces (ISC)',
    question: 'If force = 10 N and mass = 2 kg, what is the acceleration? (F = ma)',
    options: ['5 m/s²', '20 m/s²', '8 m/s²', '12 m/s²'],
    correctIndex: 0,
    explanation: 'From Newton\'s Second Law: F = ma, so a = F/m = 10 N ÷ 2 kg = 5 m/s².',
  },
  {
    id: 'isc-force-3', subject: 'science', level: 'ISC', gradeRange: 'Grades 4-5', topic: 'Forces (ISC)',
    question: 'Newton\'s Third Law states that:',
    options: ['Heavier objects fall faster', 'For every action, there is an equal and opposite reaction', 'Objects slow down due to friction', 'Gravity is proportional to distance'],
    correctIndex: 1,
    explanation: 'Newton\'s Third Law: for every action force, there is an equal and opposite reaction force. Example: a rocket pushes exhaust gas down (action) and the gas pushes the rocket up (reaction).',
  },
  {
    id: 'isc-force-4', subject: 'science', level: 'ISC', gradeRange: 'Grades 4-5', topic: 'Forces (ISC)',
    question: 'Speed is defined as:',
    options: ['Distance × Time', 'Distance ÷ Time', 'Force × Mass', 'Mass ÷ Distance'],
    correctIndex: 1,
    explanation: 'Speed = Distance ÷ Time. For example, if a car travels 100 km in 2 hours, its speed = 100 ÷ 2 = 50 km/h.',
  },
  {
    id: 'isc-force-5', subject: 'science', level: 'ISC', gradeRange: 'Grades 4-5', topic: 'Forces (ISC)',
    question: 'Which of the following is an example of a compound machine?',
    options: ['A single lever', 'A ramp (inclined plane)', 'Scissors (two levers with a wedge)', 'A single pulley'],
    correctIndex: 2,
    explanation: 'A compound machine combines two or more simple machines. Scissors combine two levers and two wedges. Bicycles are another example, combining wheels, levers, and pulleys.',
  },

  // ─── ISC – ENERGY ───────────────────────────────────────────────────────────
  {
    id: 'isc-ene-1', subject: 'science', level: 'ISC', gradeRange: 'Grades 4-5', topic: 'Energy (ISC)',
    question: 'In a series circuit, if one bulb burns out:',
    options: ['Only that bulb goes out; others stay on', 'All bulbs go out because the circuit is broken', 'The remaining bulbs burn brighter', 'Nothing changes'],
    correctIndex: 1,
    explanation: 'In a series circuit, all components are connected in a single loop. If one component fails, the entire circuit is broken and all lights go out. Parallel circuits avoid this problem.',
  },
  {
    id: 'isc-ene-2', subject: 'science', level: 'ISC', gradeRange: 'Grades 4-5', topic: 'Energy (ISC)',
    question: 'The electromagnetic spectrum includes, from lowest to highest energy:',
    options: ['Radio → Microwave → Infrared → Visible light → UV → X-ray → Gamma', 'Gamma → X-ray → UV → Visible → Infrared → Microwave → Radio', 'Visible → Infrared → UV → Gamma → Radio → X-ray → Microwave', 'Radio and visible light only'],
    correctIndex: 0,
    explanation: 'The electromagnetic spectrum ordered from lowest frequency/energy to highest: Radio → Microwave → Infrared → Visible light → Ultraviolet → X-ray → Gamma rays.',
  },
  {
    id: 'isc-ene-3', subject: 'science', level: 'ISC', gradeRange: 'Grades 4-5', topic: 'Energy (ISC)',
    question: 'The Doppler effect explains why:',
    options: ['Sound travels faster in water than in air', 'A siren sounds higher-pitched as it approaches and lower-pitched as it moves away', 'Echolocation works in bats', 'Light bends when passing through a prism'],
    correctIndex: 1,
    explanation: 'The Doppler effect describes the change in frequency of a wave (sound or light) when the source and observer move relative to each other. A siren approaching sounds higher-pitched; moving away sounds lower.',
  },
  {
    id: 'isc-ene-4', subject: 'science', level: 'ISC', gradeRange: 'Grades 4-5', topic: 'Energy (ISC)',
    question: 'Heat transfer through direct contact between objects is called:',
    options: ['Convection', 'Radiation', 'Conduction', 'Insolation'],
    correctIndex: 2,
    explanation: 'Conduction is heat transfer through direct contact between materials. A metal spoon becoming hot in hot soup is an example. Metals are good conductors; wood and rubber are insulators.',
  },
  {
    id: 'isc-ene-5', subject: 'science', level: 'ISC', gradeRange: 'Grades 4-5', topic: 'Energy (ISC)',
    question: 'An electromagnet differs from a permanent magnet because:',
    options: ['Electromagnets are always stronger', 'An electromagnet\'s magnetic force can be turned on and off by controlling the electric current', 'Electromagnets only attract aluminum', 'Permanent magnets require electricity to work'],
    correctIndex: 1,
    explanation: 'An electromagnet is a magnet created by running electric current through a wire coil around an iron core. When the current is off, the magnetism disappears. This makes electromagnets controllable and useful in motors, cranes, and MRI machines.',
  },

  // ══════════════════════════════════════════════════════════════════
  // SSC SCIENCE – GRADES 6-8
  // ══════════════════════════════════════════════════════════════════

  // ─── SSC – CELL BIOLOGY ─────────────────────────────────────────────────────
  {
    id: 'ssc-cell-1', subject: 'science', level: 'SSC', gradeRange: 'Grades 6-8', topic: 'Cell Biology',
    question: 'What is the difference between mitosis and meiosis?',
    options: [
      'Mitosis produces 4 genetically identical cells; meiosis produces 2 cells',
      'Mitosis produces 2 genetically identical cells (for growth/repair); meiosis produces 4 genetically unique cells (for reproduction)',
      'Meiosis occurs in all body cells; mitosis only occurs in sex cells',
      'They are the same process with different names',
    ],
    correctIndex: 1,
    explanation: 'Mitosis divides one cell into 2 identical daughter cells (diploid), used for growth and repair. Meiosis divides one cell into 4 genetically unique cells (haploid), used to produce sex cells (sperm/eggs).',
  },
  {
    id: 'ssc-cell-2', subject: 'science', level: 'SSC', gradeRange: 'Grades 6-8', topic: 'Cell Biology',
    question: 'DNA differs from RNA in that DNA:',
    options: [
      'Is single-stranded; RNA is double-stranded',
      'Contains uracil; RNA contains thymine',
      'Is double-stranded with deoxyribose sugar; RNA is single-stranded with ribose sugar',
      'Only exists in the cytoplasm; RNA is only in the nucleus',
    ],
    correctIndex: 2,
    explanation: 'DNA is double-stranded, contains deoxyribose sugar, and uses A, T, G, C bases. RNA is single-stranded, contains ribose sugar, and replaces thymine (T) with uracil (U).',
  },
  {
    id: 'ssc-cell-3', subject: 'science', level: 'SSC', gradeRange: 'Grades 6-8', topic: 'Cell Biology',
    question: 'Haploid cells contain:',
    options: ['Two complete sets of chromosomes (2n)', 'One set of chromosomes (n)', 'No chromosomes', 'Four sets of chromosomes'],
    correctIndex: 1,
    explanation: 'Haploid cells (n) contain one set of chromosomes. Human sperm and egg cells are haploid (23 chromosomes each). When they fuse during fertilization, they create a diploid cell (2n = 46 chromosomes).',
  },
  {
    id: 'ssc-cell-4', subject: 'science', level: 'SSC', gradeRange: 'Grades 6-8', topic: 'Cell Biology',
    question: 'During protein synthesis, which molecule carries the genetic code from the nucleus to the ribosome?',
    options: ['tRNA', 'DNA', 'mRNA', 'rRNA'],
    correctIndex: 2,
    explanation: 'Messenger RNA (mRNA) is transcribed from DNA in the nucleus and carries the genetic code to ribosomes in the cytoplasm, where it is translated into a protein.',
  },
  {
    id: 'ssc-cell-5', subject: 'science', level: 'SSC', gradeRange: 'Grades 6-8', topic: 'Cell Biology',
    question: 'An electron microscope is preferred over a light microscope when:',
    options: ['Viewing living cells in color', 'Studying large organisms', 'Examining very small structures like viruses and cell organelles in high detail', 'Quick classroom observations'],
    correctIndex: 2,
    explanation: 'Electron microscopes use beams of electrons instead of light, providing much higher magnification and resolution (up to 1,000x better than light microscopes), allowing visualization of viruses and organelles.',
  },

  // ─── SSC – GENETICS ─────────────────────────────────────────────────────────
  {
    id: 'ssc-gen-1', subject: 'science', level: 'SSC', gradeRange: 'Grades 6-8', topic: 'Genetics & Inheritance',
    question: 'In a Punnett square, if both parents are heterozygous (Bb × Bb), what percentage of offspring will show the recessive trait (bb)?',
    options: ['0%', '25%', '50%', '75%'],
    correctIndex: 1,
    explanation: 'From a Bb × Bb cross: BB (25%), Bb (50%), bb (25%). Only bb shows the recessive phenotype = 25% of offspring.',
  },
  {
    id: 'ssc-gen-2', subject: 'science', level: 'SSC', gradeRange: 'Grades 6-8', topic: 'Genetics & Inheritance',
    question: 'Genetic engineering involves:',
    options: ['Selectively breeding animals over generations', 'Directly manipulating an organism\'s DNA to change specific traits', 'The natural process of evolution', 'Creating identical twins'],
    correctIndex: 1,
    explanation: 'Genetic engineering directly alters an organism\'s DNA by inserting, deleting, or modifying specific genes. It is used to create insulin-producing bacteria, disease-resistant crops, and gene therapies.',
  },
  {
    id: 'ssc-gen-3', subject: 'science', level: 'SSC', gradeRange: 'Grades 6-8', topic: 'Genetics & Inheritance',
    question: 'Color blindness is a sex-linked trait carried on the X chromosome. Why are males more commonly color blind?',
    options: ['Males have stronger immune systems', 'Males have one X and one Y chromosome; if the X has the gene, it is expressed with no second X to compensate', 'Males have two Y chromosomes', 'The trait skips male generations'],
    correctIndex: 1,
    explanation: 'Males (XY) have only one X chromosome. If it carries the color blindness allele, there is no second X chromosome to provide a dominant normal allele, so the trait is expressed. Females (XX) need two recessive alleles to show the trait.',
  },
  {
    id: 'ssc-gen-4', subject: 'science', level: 'SSC', gradeRange: 'Grades 6-8', topic: 'Genetics & Inheritance',
    question: 'A mutation is:',
    options: ['A change in an organism\'s behavior', 'A permanent change in DNA sequence', 'The normal process of cell division', 'When an organism adapts to a new environment'],
    correctIndex: 1,
    explanation: 'A mutation is a permanent change in the nucleotide sequence of DNA. Mutations can be caused by radiation, chemicals, or errors in DNA replication, and may have no effect, be harmful, or rarely be beneficial.',
  },
  {
    id: 'ssc-gen-5', subject: 'science', level: 'SSC', gradeRange: 'Grades 6-8', topic: 'Genetics & Inheritance',
    question: 'Darwin\'s theory of natural selection states that:',
    options: [
      'All species were created at the same time and do not change',
      'Organisms with favorable traits survive and reproduce more, passing those traits to offspring',
      'Evolution only occurs due to genetic mutations',
      'Organisms change during their lifetime to suit their environment',
    ],
    correctIndex: 1,
    explanation: 'Natural selection: organisms with traits that help them survive in their environment are more likely to reproduce and pass those traits to offspring. Over generations, these traits become more common — driving evolution.',
  },

  // ─── SSC – ECOSYSTEMS & EVOLUTION ───────────────────────────────────────────
  {
    id: 'ssc-eco-1', subject: 'science', level: 'SSC', gradeRange: 'Grades 6-8', topic: 'Ecosystems (SSC)',
    question: 'Carrying capacity refers to:',
    options: ['How much weight an ecosystem can physically hold', 'The maximum population size an environment can sustainably support', 'The number of species in a biome', 'How far a species can migrate'],
    correctIndex: 1,
    explanation: 'Carrying capacity is the maximum population size that an environment can sustain indefinitely given available resources (food, water, space). When population exceeds carrying capacity, resources become depleted.',
  },
  {
    id: 'ssc-eco-2', subject: 'science', level: 'SSC', gradeRange: 'Grades 6-8', topic: 'Ecosystems (SSC)',
    question: 'Vestigial structures are:',
    options: ['Structures that have evolved recently', 'Reduced or underdeveloped structures that were useful in an ancestor but serve little or no function in the current organism', 'Structures shared by closely related species', 'Organs that are unique to humans'],
    correctIndex: 1,
    explanation: 'Vestigial structures are remnants of features that were functional in ancestors but have diminished in size and function in modern organisms. The human appendix and coccyx (tailbone) are examples.',
  },
  {
    id: 'ssc-eco-3', subject: 'science', level: 'SSC', gradeRange: 'Grades 6-8', topic: 'Ecosystems (SSC)',
    question: 'Estivation is similar to hibernation except it occurs during:',
    options: ['Winter, in response to cold', 'Summer or dry seasons, in response to heat or drought', 'Spring migration', 'Mating season'],
    correctIndex: 1,
    explanation: 'Estivation is a dormant state that some animals (like lungfish and certain snails) enter during hot or dry periods to conserve water and energy. It is the summer equivalent of winter hibernation.',
  },
  {
    id: 'ssc-eco-4', subject: 'science', level: 'SSC', gradeRange: 'Grades 6-8', topic: 'Ecosystems (SSC)',
    question: 'Radiometric dating is used to:',
    options: ['Measure the brightness of distant stars', 'Determine the absolute age of rocks and fossils using the decay of radioactive isotopes', 'Track animal migration patterns using radio signals', 'Measure earthquake intensity'],
    correctIndex: 1,
    explanation: 'Radiometric dating measures the ratio of radioactive parent isotopes to daughter isotopes in a sample. Since radioactive decay occurs at a known rate (half-life), this gives an absolute age.',
  },
  {
    id: 'ssc-eco-5', subject: 'science', level: 'SSC', gradeRange: 'Grades 6-8', topic: 'Ecosystems (SSC)',
    question: 'Biodiversity refers to:',
    options: ['The total number of individual organisms in an ecosystem', 'The variety of life (species, genes, ecosystems) in a given area', 'The number of food chains in a biome', 'The total biomass of an ecosystem'],
    correctIndex: 1,
    explanation: 'Biodiversity encompasses the variety of life at all levels: genetic diversity within species, variety of species, and diversity of ecosystems. High biodiversity makes ecosystems more resilient.',
  },

  // ─── SSC – PLATE TECTONICS & EARTH ──────────────────────────────────────────
  {
    id: 'ssc-geol-1', subject: 'science', level: 'SSC', gradeRange: 'Grades 6-8', topic: 'Plate Tectonics',
    question: 'At a convergent boundary where an oceanic plate meets a continental plate, what typically happens?',
    options: ['The plates slide past each other horizontally', 'The denser oceanic plate subducts (sinks) beneath the continental plate', 'Both plates move apart', 'The continental plate sinks beneath the oceanic plate'],
    correctIndex: 1,
    explanation: 'At a convergent boundary, the denser oceanic plate is subducted (pushed under) the less dense continental plate. This creates deep ocean trenches, volcanic mountain ranges, and earthquakes.',
  },
  {
    id: 'ssc-geol-2', subject: 'science', level: 'SSC', gradeRange: 'Grades 6-8', topic: 'Plate Tectonics',
    question: 'What is seafloor spreading?',
    options: ['The erosion of coastlines by ocean waves', 'The process where new oceanic crust forms at mid-ocean ridges as plates move apart', 'The sinking of old oceanic crust at subduction zones', 'The movement of sediment along the ocean floor'],
    correctIndex: 1,
    explanation: 'Seafloor spreading occurs at divergent boundaries (mid-ocean ridges) where tectonic plates pull apart. Magma wells up, cools, and forms new oceanic crust, pushing the older crust outward.',
  },
  {
    id: 'ssc-geol-3', subject: 'science', level: 'SSC', gradeRange: 'Grades 6-8', topic: 'Plate Tectonics',
    question: 'The Richter scale measures:',
    options: ['The depth of an earthquake\'s focus', 'The magnitude (energy released) of an earthquake', 'The duration of an earthquake', 'The distance from the epicenter'],
    correctIndex: 1,
    explanation: 'The Richter scale measures the magnitude (amount of energy released) of an earthquake. Each whole number increase represents about 32 times more energy released.',
  },
  {
    id: 'ssc-geol-4', subject: 'science', level: 'SSC', gradeRange: 'Grades 6-8', topic: 'Plate Tectonics',
    question: 'Homologous structures are:',
    options: ['Structures that look the same and have the same function in different species', 'Similar structures in different species that suggest common ancestry, even if they serve different functions', 'Structures unique to one species', 'The same structure in the same species'],
    correctIndex: 1,
    explanation: 'Homologous structures have the same basic structural plan (inherited from a common ancestor) but may be used for different purposes. The human arm, whale flipper, bat wing, and horse leg all share the same bone structure.',
  },
  {
    id: 'ssc-geol-5', subject: 'science', level: 'SSC', gradeRange: 'Grades 6-8', topic: 'Plate Tectonics',
    question: 'The evidence Alfred Wegener used for continental drift included:',
    options: ['Satellite images of moving continents', 'Matching fossils, rock formations, and coastlines on opposite sides of the Atlantic Ocean', 'GPS measurements of plate movement', 'Evidence from seafloor spreading only'],
    correctIndex: 1,
    explanation: 'Wegener proposed continental drift based on matching fossils (like Mesosaurus) found on different continents, similar rock formations across oceans, and the jigsaw-puzzle fit of continental coastlines.',
  },

  // ─── SSC – OCEANS ───────────────────────────────────────────────────────────
  {
    id: 'ssc-ocean-1', subject: 'science', level: 'SSC', gradeRange: 'Grades 6-8', topic: 'Oceans',
    question: 'The Gulf Stream is:',
    options: ['A deep cold current in the Pacific Ocean', 'A warm surface ocean current in the North Atlantic that moderates climate in Western Europe', 'A type of underwater volcanic activity', 'The boundary between the Atlantic and Pacific Oceans'],
    correctIndex: 1,
    explanation: 'The Gulf Stream is a warm, powerful Atlantic Ocean current that flows northeastward from the Gulf of Mexico along the eastern US coast and across to Western Europe, significantly warming its climate.',
  },
  {
    id: 'ssc-ocean-2', subject: 'science', level: 'SSC', gradeRange: 'Grades 6-8', topic: 'Oceans',
    question: 'Upwelling in oceans occurs when:',
    options: ['Warm surface water sinks to the bottom', 'Cold, nutrient-rich water from the deep ocean rises to the surface', 'Tidal forces push water toward shore', 'Ocean currents collide and create waves'],
    correctIndex: 1,
    explanation: 'Upwelling occurs when winds push surface water away and cold, nutrient-rich water from the deep rises to replace it. These areas support highly productive fisheries because of the nutrients.',
  },
  {
    id: 'ssc-ocean-3', subject: 'science', level: 'SSC', gradeRange: 'Grades 6-8', topic: 'Oceans',
    question: 'Neap tides are weaker tides that occur when:',
    options: ['The Sun, Earth, and Moon align during full or new moon', 'The Moon is at its closest to Earth', 'The Sun and Moon form a 90° angle relative to Earth (quarter moon)', 'Hurricanes create storm surges'],
    correctIndex: 2,
    explanation: 'Neap tides occur at first and third quarter moons when the Sun and Moon form a right angle (90°) relative to Earth. Their gravitational pulls partially cancel each other, resulting in smaller tidal ranges.',
  },
  {
    id: 'ssc-ocean-4', subject: 'science', level: 'SSC', gradeRange: 'Grades 6-8', topic: 'Oceans',
    question: 'What is desalination?',
    options: ['The process of adding salt to ocean water', 'The process of removing salt from seawater to make it drinkable', 'The erosion of coastlines by salt water', 'The formation of sea ice'],
    correctIndex: 1,
    explanation: 'Desalination is the process of removing dissolved salts and minerals from seawater to produce fresh water suitable for drinking or irrigation. It is used in water-scarce regions like the Middle East.',
  },
  {
    id: 'ssc-ocean-5', subject: 'science', level: 'SSC', gradeRange: 'Grades 6-8', topic: 'Oceans',
    question: 'In the ocean ecosystem, plankton are:',
    options: ['Large marine mammals that drift with currents', 'Tiny organisms (plant-like phytoplankton and animal-like zooplankton) that drift with currents and form the base of ocean food chains', 'Bottom-dwelling creatures like crabs and sea stars', 'Ocean floor sediment'],
    correctIndex: 1,
    explanation: 'Plankton are microscopic or tiny organisms that drift in ocean water. Phytoplankton (plant-like) are primary producers; zooplankton (animal-like) are primary consumers. Together they form the foundation of marine food webs.',
  },

  // ─── SSC – WEATHER & CLIMATE ─────────────────────────────────────────────────
  {
    id: 'ssc-wea-1', subject: 'science', level: 'SSC', gradeRange: 'Grades 6-8', topic: 'Weather & Climate (SSC)',
    question: 'An occluded front forms when:',
    options: ['Two cold air masses meet', 'A fast-moving cold front overtakes a warm front, lifting the warm air off the ground', 'A warm air mass stalls over a region for a long time', 'Warm air meets cold air over the ocean'],
    correctIndex: 1,
    explanation: 'An occluded front forms when a cold front (moving faster) catches up to a warm front. The cold air wedges under the warm air, lifting it off the surface entirely, often causing persistent precipitation.',
  },
  {
    id: 'ssc-wea-2', subject: 'science', level: 'SSC', gradeRange: 'Grades 6-8', topic: 'Weather & Climate (SSC)',
    question: 'Acid rain is caused by:',
    options: ['Rainwater mixing with sea salt', 'Sulfur dioxide and nitrogen oxides from burning fossil fuels mixing with water vapor to form sulfuric and nitric acids', 'Carbon dioxide reacting with rainwater only', 'Natural volcanic gases only'],
    correctIndex: 1,
    explanation: 'Acid rain forms when sulfur dioxide (SO₂) and nitrogen oxides (NOₓ) — emitted mainly by burning fossil fuels — react with water vapor and oxygen in the atmosphere to form sulfuric and nitric acids.',
  },
  {
    id: 'ssc-wea-3', subject: 'science', level: 'SSC', gradeRange: 'Grades 6-8', topic: 'Weather & Climate (SSC)',
    question: 'The Hertzsprung-Russell (H-R) diagram plots stars by:',
    options: ['Age vs. mass', 'Luminosity (brightness) vs. surface temperature', 'Distance vs. size', 'Color vs. distance from Earth'],
    correctIndex: 1,
    explanation: 'The H-R diagram is a scatter plot of stars showing luminosity (intrinsic brightness) on the vertical axis and surface temperature (or spectral class) on the horizontal axis. Most stars fall on the "main sequence" diagonal.',
  },
  {
    id: 'ssc-wea-4', subject: 'science', level: 'SSC', gradeRange: 'Grades 6-8', topic: 'Weather & Climate (SSC)',
    question: 'Global warming is primarily driven by:',
    options: ['Increased solar output', 'The buildup of greenhouse gases (CO₂, methane) in the atmosphere trapping heat', 'Changes in Earth\'s orbital path', 'Volcanic eruptions adding dust to the atmosphere'],
    correctIndex: 1,
    explanation: 'Global warming is primarily attributed to increased greenhouse gases (especially CO₂ from burning fossil fuels and methane from agriculture) that trap heat in Earth\'s atmosphere, raising global average temperatures.',
  },
  {
    id: 'ssc-wea-5', subject: 'science', level: 'SSC', gradeRange: 'Grades 6-8', topic: 'Weather & Climate (SSC)',
    question: 'Jet streams are:',
    options: ['Ocean surface currents near the poles', 'Fast-moving, high-altitude air currents in the upper troposphere that influence surface weather patterns', 'The exhaust trail of jet aircraft', 'Underwater volcanic vents that heat ocean water'],
    correctIndex: 1,
    explanation: 'Jet streams are narrow bands of strong winds (up to 400 km/h) at high altitudes (8–12 km) in the upper troposphere. They guide weather systems, affecting storm tracks and temperatures at the surface.',
  },

  // ─── SSC – CHEMISTRY & PERIODIC TABLE ───────────────────────────────────────
  {
    id: 'ssc-chem-1', subject: 'science', level: 'SSC', gradeRange: 'Grades 6-8', topic: 'Chemistry & Periodic Table',
    question: 'The atomic number of an element represents:',
    options: ['The number of neutrons in the nucleus', 'The total mass of the atom', 'The number of protons in the nucleus (which defines the element)', 'The number of electron shells'],
    correctIndex: 2,
    explanation: 'The atomic number is the number of protons in an atom\'s nucleus. It uniquely identifies each element — for example, all carbon atoms have 6 protons (atomic number 6).',
  },
  {
    id: 'ssc-chem-2', subject: 'science', level: 'SSC', gradeRange: 'Grades 6-8', topic: 'Chemistry & Periodic Table',
    question: 'Elements in the same GROUP (column) of the periodic table have similar chemical properties because they have:',
    options: ['The same atomic mass', 'The same number of protons', 'The same number of valence electrons (outer shell electrons)', 'The same number of neutrons'],
    correctIndex: 2,
    explanation: 'Elements in the same group have the same number of valence electrons, which determines their chemical behavior and reactivity. For example, all Group 1 elements (alkali metals) have 1 valence electron.',
  },
  {
    id: 'ssc-chem-3', subject: 'science', level: 'SSC', gradeRange: 'Grades 6-8', topic: 'Chemistry & Periodic Table',
    question: 'An exothermic reaction is one that:',
    options: ['Absorbs heat from the surroundings', 'Releases heat to the surroundings', 'Does not involve any energy change', 'Only occurs at very high temperatures'],
    correctIndex: 1,
    explanation: 'An exothermic reaction releases energy (usually heat) to the surroundings, making the surroundings warmer. Combustion and many oxidation reactions are exothermic. The opposite is an endothermic reaction.',
  },
  {
    id: 'ssc-chem-4', subject: 'science', level: 'SSC', gradeRange: 'Grades 6-8', topic: 'Chemistry & Periodic Table',
    question: 'Isotopes of the same element have:',
    options: ['The same number of neutrons but different numbers of protons', 'The same number of protons but different numbers of neutrons', 'The same mass number', 'Different atomic numbers'],
    correctIndex: 1,
    explanation: 'Isotopes are atoms of the same element (same number of protons) that have different numbers of neutrons, giving them different mass numbers. Carbon-12 and carbon-14 are isotopes of carbon.',
  },
  {
    id: 'ssc-chem-5', subject: 'science', level: 'SSC', gradeRange: 'Grades 6-8', topic: 'Chemistry & Periodic Table',
    question: 'What is half-life?',
    options: ['The time it takes for all of a radioactive sample to decay', 'The time it takes for half of a radioactive sample to decay into a daughter element', 'The average lifespan of an atom', 'The time required for a chemical reaction to complete'],
    correctIndex: 1,
    explanation: 'Half-life is the time required for half of the radioactive atoms in a sample to decay. It is constant and characteristic for each radioactive isotope, used in carbon dating and other forms of radiometric dating.',
  },

  // ─── SSC – FORCES & ENERGY ──────────────────────────────────────────────────
  {
    id: 'ssc-force-1', subject: 'science', level: 'SSC', gradeRange: 'Grades 6-8', topic: 'Forces & Energy (SSC)',
    question: 'The law of conservation of momentum states that:',
    options: ['Momentum is lost whenever objects collide', 'The total momentum of a closed system remains constant unless an external force acts on it', 'Heavier objects always win collisions', 'Momentum equals force divided by time'],
    correctIndex: 1,
    explanation: 'The law of conservation of momentum: in a closed system with no external forces, total momentum before a collision equals total momentum after. Momentum (p) = mass × velocity.',
  },
  {
    id: 'ssc-force-2', subject: 'science', level: 'SSC', gradeRange: 'Grades 6-8', topic: 'Forces & Energy (SSC)',
    question: 'Archimedes\' Principle states that a buoyant force on an object equals:',
    options: ['The weight of the object', 'The weight of the fluid displaced by the object', 'The object\'s mass times gravity', 'The surface area times pressure'],
    correctIndex: 1,
    explanation: 'Archimedes\' Principle: the upward buoyant force on an object submerged in fluid equals the weight of the fluid that the object displaces. This explains why ships float and why objects feel lighter in water.',
  },
  {
    id: 'ssc-force-3', subject: 'science', level: 'SSC', gradeRange: 'Grades 6-8', topic: 'Forces & Energy (SSC)',
    question: 'Ohm\'s Law relates voltage (V), current (I), and resistance (R) as:',
    options: ['V = I + R', 'V = I × R', 'V = I ÷ R', 'V = R ÷ I'],
    correctIndex: 1,
    explanation: 'Ohm\'s Law: V = I × R (Voltage = Current × Resistance). If you know any two values, you can calculate the third. For example: I = V/R, R = V/I.',
  },
  {
    id: 'ssc-force-4', subject: 'science', level: 'SSC', gradeRange: 'Grades 6-8', topic: 'Forces & Energy (SSC)',
    question: 'Constructive interference of waves occurs when:',
    options: ['Two waves cancel each other out', 'Two waves meet and combine to create a larger amplitude wave', 'A wave reflects off a surface', 'A wave changes speed as it enters a new medium'],
    correctIndex: 1,
    explanation: 'Constructive interference occurs when two waves meet in phase (crest meets crest) and their amplitudes add together, creating a larger wave. Destructive interference occurs when crests meet troughs and cancel.',
  },
  {
    id: 'ssc-force-5', subject: 'science', level: 'SSC', gradeRange: 'Grades 6-8', topic: 'Forces & Energy (SSC)',
    question: 'The Red Shift observed in distant galaxies provides evidence that:',
    options: ['Distant galaxies are moving toward Earth', 'The universe is expanding — distant galaxies are moving away from us', 'Stars are cooling down over time', 'The universe is contracting'],
    correctIndex: 1,
    explanation: 'The redshift (light shifted toward longer, redder wavelengths from distant galaxies) shows those galaxies are moving away from us (Doppler effect for light). This is key evidence that the universe is expanding.',
  },

  // ══════════════════════════════════════════════════════════════════
  // GEOGRAPHY BEE – JGB (GRADES 1-3)
  // ══════════════════════════════════════════════════════════════════

  // ─── JGB – US STATES & CAPITALS ─────────────────────────────────────────────
  {
    id: 'jgb-us-1', subject: 'geography', level: 'JGB', gradeRange: 'Grades 1-3', topic: 'US States & Capitals',
    question: 'What is the capital of the United States?',
    options: ['New York City', 'Los Angeles', 'Washington, D.C.', 'Chicago'],
    correctIndex: 2,
    explanation: 'Washington, D.C. (District of Columbia) is the capital of the United States. It is home to the White House, Congress, and the Supreme Court.',
  },
  {
    id: 'jgb-us-2', subject: 'geography', level: 'JGB', gradeRange: 'Grades 1-3', topic: 'US States & Capitals',
    question: 'How many states are there in the United States?',
    options: ['48', '49', '50', '52'],
    correctIndex: 2,
    explanation: 'The United States has 50 states. The 48 contiguous (connected) states plus Alaska (northwest of Canada) and Hawaii (in the Pacific Ocean).',
  },
  {
    id: 'jgb-us-3', subject: 'geography', level: 'JGB', gradeRange: 'Grades 1-3', topic: 'US States & Capitals',
    question: 'Which state is the largest in area in the United States?',
    options: ['Texas', 'California', 'Montana', 'Alaska'],
    correctIndex: 3,
    explanation: 'Alaska is the largest US state by area, at about 1.7 million km² — more than twice the size of Texas, which is the second largest.',
  },
  {
    id: 'jgb-us-4', subject: 'geography', level: 'JGB', gradeRange: 'Grades 1-3', topic: 'US States & Capitals',
    question: 'What is the capital of Texas?',
    options: ['Houston', 'Dallas', 'Austin', 'San Antonio'],
    correctIndex: 2,
    explanation: 'Austin is the capital of Texas. It is also the fastest-growing large city in the US. Houston is the largest city in Texas, but not the capital.',
  },
  {
    id: 'jgb-us-5', subject: 'geography', level: 'JGB', gradeRange: 'Grades 1-3', topic: 'US States & Capitals',
    question: 'Which ocean is on the EAST coast of the United States?',
    options: ['Pacific Ocean', 'Indian Ocean', 'Arctic Ocean', 'Atlantic Ocean'],
    correctIndex: 3,
    explanation: 'The Atlantic Ocean borders the eastern United States. The Pacific Ocean borders the western coast. This is easy to remember: "Atlantic = East."',
  },

  // ─── JGB – CONTINENTS & OCEANS ──────────────────────────────────────────────
  {
    id: 'jgb-cont-1', subject: 'geography', level: 'JGB', gradeRange: 'Grades 1-3', topic: 'Continents & Oceans',
    question: 'How many continents are there on Earth?',
    options: ['5', '6', '7', '8'],
    correctIndex: 2,
    explanation: 'Earth has 7 continents: Africa, Antarctica, Asia, Australia (Oceania), Europe, North America, and South America.',
  },
  {
    id: 'jgb-cont-2', subject: 'geography', level: 'JGB', gradeRange: 'Grades 1-3', topic: 'Continents & Oceans',
    question: 'Which is the largest continent?',
    options: ['Africa', 'North America', 'Asia', 'Europe'],
    correctIndex: 2,
    explanation: 'Asia is the largest continent, covering about 44.6 million km² — about 30% of Earth\'s total land area. It is also the most populous continent.',
  },
  {
    id: 'jgb-cont-3', subject: 'geography', level: 'JGB', gradeRange: 'Grades 1-3', topic: 'Continents & Oceans',
    question: 'Which is the largest ocean on Earth?',
    options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
    correctIndex: 3,
    explanation: 'The Pacific Ocean is the largest and deepest ocean, covering about 165 million km² — nearly half of the world\'s ocean area. It contains the Mariana Trench, the deepest point on Earth.',
  },
  {
    id: 'jgb-cont-4', subject: 'geography', level: 'JGB', gradeRange: 'Grades 1-3', topic: 'Continents & Oceans',
    question: 'Which continent is located entirely in the Southern Hemisphere and is covered in ice?',
    options: ['Australia', 'South America', 'Africa', 'Antarctica'],
    correctIndex: 3,
    explanation: 'Antarctica is the southernmost continent, surrounding the South Pole. It is covered by an ice sheet averaging 2.3 km thick and is the coldest, driest, and windiest continent.',
  },
  {
    id: 'jgb-cont-5', subject: 'geography', level: 'JGB', gradeRange: 'Grades 1-3', topic: 'Continents & Oceans',
    question: 'The equator is an imaginary line that:',
    options: ['Separates North America from South America', 'Runs from the North Pole to the South Pole', 'Divides Earth into the Northern and Southern Hemispheres at 0° latitude', 'Marks the international date line'],
    correctIndex: 2,
    explanation: 'The equator is an imaginary circle at 0° latitude that divides Earth into the Northern and Southern Hemispheres. Regions near the equator receive the most direct sunlight and are typically tropical.',
  },

  // ─── JGB – BASIC WORLD GEOGRAPHY ────────────────────────────────────────────
  {
    id: 'jgb-world-1', subject: 'geography', level: 'JGB', gradeRange: 'Grades 1-3', topic: 'Basic World Geography',
    question: 'Which is the longest river in the world?',
    options: ['Amazon River', 'Mississippi River', 'Nile River', 'Yangtze River'],
    correctIndex: 2,
    explanation: 'The Nile River in Africa is generally considered the longest river in the world at approximately 6,650 km. It flows northward through northeastern Africa into the Mediterranean Sea.',
  },
  {
    id: 'jgb-world-2', subject: 'geography', level: 'JGB', gradeRange: 'Grades 1-3', topic: 'Basic World Geography',
    question: 'What is the capital of France?',
    options: ['London', 'Berlin', 'Madrid', 'Paris'],
    correctIndex: 3,
    explanation: 'Paris is the capital and largest city of France. It is known as the "City of Light" and is home to famous landmarks like the Eiffel Tower and the Louvre Museum.',
  },
  {
    id: 'jgb-world-3', subject: 'geography', level: 'JGB', gradeRange: 'Grades 1-3', topic: 'Basic World Geography',
    question: 'Which mountain range is the highest in the world?',
    options: ['The Andes', 'The Rocky Mountains', 'The Alps', 'The Himalayas'],
    correctIndex: 3,
    explanation: 'The Himalayas in Asia are the world\'s highest mountain range, containing Mount Everest — the tallest peak on Earth at 8,849 m (29,032 ft). The range spans five countries.',
  },
  {
    id: 'jgb-world-4', subject: 'geography', level: 'JGB', gradeRange: 'Grades 1-3', topic: 'Basic World Geography',
    question: 'What is the capital of China?',
    options: ['Shanghai', 'Hong Kong', 'Beijing', 'Tokyo'],
    correctIndex: 2,
    explanation: 'Beijing is the capital of China. It has been China\'s political center for much of the past eight centuries and is home to the Forbidden City and Tiananmen Square.',
  },
  {
    id: 'jgb-world-5', subject: 'geography', level: 'JGB', gradeRange: 'Grades 1-3', topic: 'Basic World Geography',
    question: 'Which continent is the country of Brazil located on?',
    options: ['North America', 'Africa', 'South America', 'Asia'],
    correctIndex: 2,
    explanation: 'Brazil is located in South America. It is the largest country in South America and the fifth largest in the world, covering nearly half the continent\'s land area.',
  },

  // ══════════════════════════════════════════════════════════════════
  // GEOGRAPHY BEE – SGB (GRADES 4-8)
  // ══════════════════════════════════════════════════════════════════

  // ─── SGB – WORLD COUNTRIES & CAPITALS ───────────────────────────────────────
  {
    id: 'sgb-cap-1', subject: 'geography', level: 'SGB', gradeRange: 'Grades 4-8', topic: 'World Countries & Capitals',
    question: 'What is the capital of Australia?',
    options: ['Sydney', 'Melbourne', 'Canberra', 'Brisbane'],
    correctIndex: 2,
    explanation: 'Canberra is the capital of Australia. It was purpose-built as the capital as a compromise between Sydney and Melbourne, and became the capital in 1913.',
  },
  {
    id: 'sgb-cap-2', subject: 'geography', level: 'SGB', gradeRange: 'Grades 4-8', topic: 'World Countries & Capitals',
    question: 'Which country has the largest population in the world?',
    options: ['USA', 'India', 'China', 'Indonesia'],
    correctIndex: 1,
    explanation: 'India surpassed China to become the world\'s most populous country in 2023, with over 1.4 billion people. China is second, followed by the USA, Indonesia, and Pakistan.',
  },
  {
    id: 'sgb-cap-3', subject: 'geography', level: 'SGB', gradeRange: 'Grades 4-8', topic: 'World Countries & Capitals',
    question: 'What is the capital of Canada?',
    options: ['Toronto', 'Vancouver', 'Montreal', 'Ottawa'],
    correctIndex: 3,
    explanation: 'Ottawa, in the province of Ontario, is the capital of Canada. Toronto is the largest city in Canada, but Ottawa has been the capital since 1857.',
  },
  {
    id: 'sgb-cap-4', subject: 'geography', level: 'SGB', gradeRange: 'Grades 4-8', topic: 'World Countries & Capitals',
    question: 'Which country is both a continent and a country?',
    options: ['Greenland', 'New Zealand', 'Antarctica', 'Australia'],
    correctIndex: 3,
    explanation: 'Australia is unique in being both a continent and a sovereign country. The country (Commonwealth of Australia) occupies the entire Australian continent.',
  },
  {
    id: 'sgb-cap-5', subject: 'geography', level: 'SGB', gradeRange: 'Grades 4-8', topic: 'World Countries & Capitals',
    question: 'The Amazon River flows through which country before emptying into the Atlantic Ocean?',
    options: ['Colombia', 'Peru', 'Bolivia', 'Brazil'],
    correctIndex: 3,
    explanation: 'The Amazon River flows primarily through Brazil, entering the Atlantic Ocean near the city of Belém. It carries about 20% of all fresh water discharged into Earth\'s oceans.',
  },

  // ─── SGB – PHYSICAL GEOGRAPHY ───────────────────────────────────────────────
  {
    id: 'sgb-phys-1', subject: 'geography', level: 'SGB', gradeRange: 'Grades 4-8', topic: 'Physical Geography',
    question: 'The Sahara Desert is located on which continent?',
    options: ['Asia', 'Australia', 'South America', 'Africa'],
    correctIndex: 3,
    explanation: 'The Sahara is located in North Africa and is the world\'s largest hot desert, covering about 9.2 million km² — roughly the size of the United States.',
  },
  {
    id: 'sgb-phys-2', subject: 'geography', level: 'SGB', gradeRange: 'Grades 4-8', topic: 'Physical Geography',
    question: 'Mount Everest, the world\'s tallest peak, is located in the:',
    options: ['Andes Mountains, South America', 'Rocky Mountains, North America', 'Himalayas, on the border of Nepal and Tibet (China)', 'Alps, Europe'],
    correctIndex: 2,
    explanation: 'Mount Everest (8,849 m / 29,032 ft) is in the Himalayan range on the border between Nepal and Tibet (China). It was first summited by Edmund Hillary and Tenzing Norgay in 1953.',
  },
  {
    id: 'sgb-phys-3', subject: 'geography', level: 'SGB', gradeRange: 'Grades 4-8', topic: 'Physical Geography',
    question: 'The Great Barrier Reef is located off the coast of which country?',
    options: ['Brazil', 'Indonesia', 'Australia', 'Philippines'],
    correctIndex: 2,
    explanation: 'The Great Barrier Reef is located in the Coral Sea, off the northeastern coast of Australia (Queensland). It is the world\'s largest coral reef system and a UNESCO World Heritage Site.',
  },
  {
    id: 'sgb-phys-4', subject: 'geography', level: 'SGB', gradeRange: 'Grades 4-8', topic: 'Physical Geography',
    question: 'Which of the following is the deepest lake in the world?',
    options: ['Lake Superior', 'Caspian Sea', 'Lake Baikal', 'Lake Titicaca'],
    correctIndex: 2,
    explanation: 'Lake Baikal in Siberia, Russia, is the world\'s deepest lake at 1,642 m. It contains about 20% of the world\'s unfrozen fresh surface water and is the oldest lake on Earth.',
  },
  {
    id: 'sgb-phys-5', subject: 'geography', level: 'SGB', gradeRange: 'Grades 4-8', topic: 'Physical Geography',
    question: 'The Andes Mountains run along the western edge of which continent?',
    options: ['North America', 'Europe', 'Africa', 'South America'],
    correctIndex: 3,
    explanation: 'The Andes are the world\'s longest mountain range, running about 7,000 km along the western coast of South America through Venezuela, Colombia, Ecuador, Peru, Bolivia, Chile, and Argentina.',
  },

  // ─── SGB – US GEOGRAPHY ─────────────────────────────────────────────────────
  {
    id: 'sgb-us-1', subject: 'geography', level: 'SGB', gradeRange: 'Grades 4-8', topic: 'US Geography',
    question: 'The Mississippi River empties into which body of water?',
    options: ['Atlantic Ocean', 'Gulf of Mexico', 'Pacific Ocean', 'Caribbean Sea'],
    correctIndex: 1,
    explanation: 'The Mississippi River, the second-longest river in North America, flows southward through the central US and empties into the Gulf of Mexico near New Orleans, Louisiana.',
  },
  {
    id: 'sgb-us-2', subject: 'geography', level: 'SGB', gradeRange: 'Grades 4-8', topic: 'US Geography',
    question: 'Which US state is made up entirely of islands in the Pacific Ocean?',
    options: ['Florida', 'California', 'Hawaii', 'Alaska'],
    correctIndex: 2,
    explanation: 'Hawaii is the only US state composed entirely of islands. It consists of 8 main islands and 129 smaller ones in the central Pacific Ocean, formed by volcanic activity over a hot spot.',
  },
  {
    id: 'sgb-us-3', subject: 'geography', level: 'SGB', gradeRange: 'Grades 4-8', topic: 'US Geography',
    question: 'The Great Lakes are a group of five large freshwater lakes in North America. Which lake is the largest by surface area?',
    options: ['Lake Michigan', 'Lake Erie', 'Lake Superior', 'Lake Ontario'],
    correctIndex: 2,
    explanation: 'Lake Superior is the largest of the Great Lakes by surface area (82,100 km²) and is the largest freshwater lake in the world by surface area. The Great Lakes spell HOMES: Huron, Ontario, Michigan, Erie, Superior.',
  },
  {
    id: 'sgb-us-4', subject: 'geography', level: 'SGB', gradeRange: 'Grades 4-8', topic: 'US Geography',
    question: 'Which mountain range runs along the eastern United States?',
    options: ['The Rocky Mountains', 'The Sierra Nevada', 'The Appalachian Mountains', 'The Cascade Range'],
    correctIndex: 2,
    explanation: 'The Appalachian Mountains run roughly parallel to the east coast of North America, stretching from Alabama in the south to Maine in the north. They are among the oldest mountain ranges in the world.',
  },
  {
    id: 'sgb-us-5', subject: 'geography', level: 'SGB', gradeRange: 'Grades 4-8', topic: 'US Geography',
    question: 'Which US state borders both Canada and Mexico?',
    options: ['New Mexico', 'Arizona', 'Montana', 'No US state borders both'],
    correctIndex: 3,
    explanation: 'No US state borders both Canada and Mexico. States bordering Mexico are Texas, New Mexico, Arizona, and California. States bordering Canada include Montana, North Dakota, Minnesota, and others along the northern border.',
  },

  // ─── SGB – CULTURAL & REGIONAL GEOGRAPHY ────────────────────────────────────
  {
    id: 'sgb-cult-1', subject: 'geography', level: 'SGB', gradeRange: 'Grades 4-8', topic: 'Cultural & Regional Geography',
    question: 'The Nile River flows through Egypt and empties into the:',
    options: ['Red Sea', 'Mediterranean Sea', 'Indian Ocean', 'Atlantic Ocean'],
    correctIndex: 1,
    explanation: 'The Nile River flows northward through northeastern Africa, passing through Sudan and Egypt, and empties into the Mediterranean Sea through a large delta near Alexandria.',
  },
  {
    id: 'sgb-cult-2', subject: 'geography', level: 'SGB', gradeRange: 'Grades 4-8', topic: 'Cultural & Regional Geography',
    question: 'Which country is home to the Amazon Rainforest, the world\'s largest tropical rainforest?',
    options: ['Venezuela', 'Brazil', 'Peru', 'Colombia'],
    correctIndex: 1,
    explanation: 'About 60% of the Amazon Rainforest is located in Brazil. The Amazon spans 9 countries in South America and is the world\'s largest tropical rainforest, covering over 5.5 million km².',
  },
  {
    id: 'sgb-cult-3', subject: 'geography', level: 'SGB', gradeRange: 'Grades 4-8', topic: 'Cultural & Regional Geography',
    question: 'The Panama Canal connects which two oceans?',
    options: ['Atlantic and Indian Oceans', 'Pacific and Indian Oceans', 'Atlantic and Pacific Oceans', 'Arctic and Atlantic Oceans'],
    correctIndex: 2,
    explanation: 'The Panama Canal cuts through the Isthmus of Panama in Central America, connecting the Atlantic Ocean (via the Caribbean Sea) to the Pacific Ocean. It opened in 1914 and dramatically shortened shipping routes.',
  },
  {
    id: 'sgb-cult-4', subject: 'geography', level: 'SGB', gradeRange: 'Grades 4-8', topic: 'Cultural & Regional Geography',
    question: 'The Suez Canal connects the Mediterranean Sea to the:',
    options: ['Red Sea (and thus the Indian Ocean)', 'Black Sea', 'Persian Gulf', 'Atlantic Ocean'],
    correctIndex: 0,
    explanation: 'The Suez Canal in Egypt connects the Mediterranean Sea to the Red Sea, providing a direct shipping route between Europe and Asia without going around Africa. It opened in 1869.',
  },
  {
    id: 'sgb-cult-5', subject: 'geography', level: 'SGB', gradeRange: 'Grades 4-8', topic: 'Cultural & Regional Geography',
    question: 'Which continent has the most countries?',
    options: ['Asia', 'South America', 'Europe', 'Africa'],
    correctIndex: 3,
    explanation: 'Africa has the most countries of any continent — 54 recognized sovereign nations. Nigeria is the most populous, and Algeria is the largest by area.',
  },
];
