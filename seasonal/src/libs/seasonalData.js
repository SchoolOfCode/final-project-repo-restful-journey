export const seasonQuotes = {
  spring: [
    "Radishes are vibrant red veggies containing loads of nutrients and minerals. The most common way to eat radishes is in salads. Try experimenting by adding radishes to cooked dishes, too!",
    "Spring is the best time to enjoy artichokes, since they are especially sweet and tender during this time. Because their leaves are not prickly, the baby ones are easier to prep, and can be used the same way the hearts are: steamed, grilled or fried.",
    "Leeks grow well in colder temperatures, making them ideal for a spring harvest. Most recipes call for the leek's white and light green stems, which are great braised, in recipes with goat cheese and blistered or grilled. ",
    "On the first day of spring, a person at the North Pole would see the sun skimming across the horizon, beginning six months of uninterrupted daylight. A person at the South Pole would see the sun skimming across the horizon, signaling the start of six months of darkness.",
    "Holidays that occur in spring include Easter, Passover, April Fool’s Day, Earth Day, Arbor Day, Mother’s Day, Father’s Day, Cinco De Mayo, and Holi (festival of colors in India).",
    "The first spring flowers are typically dandelions, daffodils, lilacs, lilies, iris and tulips to name a few.",
    "The first day of spring, the vernal equinox, has 12 hours of daylight and 12 hours of darkness.The term vernal is Latin for “spring” and equinox is Latin for “equal night.“",
],

  summer: [
    `Did you know that edible fruits belong to the Rosaceae group, 
    or the rose family? A few of our favorite summer fruits, including 
    apples, pears, cherries, plums, apricots, raspberries, strawberries, 
    and peaches, are actually all members of the flowering plant group.`,
    `Cucumbers are one of the most hydrating foods you can eat- they’re 
    made out of a whopping 96% water. In addition to water, they also include 
    electrolytes that help to restore your body from dehydration.`,
    `If you ever want your avocados to ripen quickly, put a banana or apple around it. 
    These fruits give off ethylene gas which helps to speed up the ripening process.`,
    `The summer solstice marks the point when the Sun reaches its highest point in the sky. This is the longest day of the year and afthis point, the days slowly begin to get shorter until the winter solstice which occurs around 21 December. At the same time as Northern Hemisphere experiences the summer solstice, the Southern Hemisphere has a winter solstice marking the shortest day of the year.`,],

  autumn: [
    `On the motionless branches of some trees, autumn berries hung like clusters of coral 
        beads, as in those fabled orchards where the fruits were jewels`,
    `Those who live near the equator miss Autumn entirely, because their regions get a consistent amount of sun.`,
    `The heat of autumn is different from the heat of summer. One ripens apples, the other 
        turns them to cider.`,
    `The word "Autumn" is believed to come from the Etruscan word "autu", meaning change of season.`,
    `In China, the Autumn equinox is a moon festival. Chinese families eat moon cakes and round foods like watermelons, oranges and green soybeans.`
  ],

  winter: [
    `Cabbage is at its best in winter. Cold sharpens the flavor and insures a crisp leaf.
        Full of antioxidants, cabbage is also an excellent source of vitamin C.`,
    `Like other cruciferous veggies, brussels sprouts have high levels of cancer-fighting 
        antioxidants that may protect DNA from harmful compounds in the body.`,
    `Acorn, butternut, kabocha, and delicata squash are all at their prime during the fall
        and winter. Squash’s trendy golden flesh is teeming with nutrients, including carotenoids`, 
    `You might be surprised to know that in the northern hemisphere the Earth is closest to the Sun during winter.`,
  ],
};

export function getSeason() {
  const d = new Date();
  const index = d.getMonth();

  const season = [
    "winter",
    "winter",
    "spring",
    "spring",
    "spring",
    "summer",
    "summer",
    "summer",
    "autumn",
    "autumn",
    "autumn",
    "winter",
  ];
  return season[index];
}
