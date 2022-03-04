export const seasonQuotes = {
  spring: [
    "Radishes are vibrant red veggies containing loads of nutrients and minerals. The most common way to eat radishes is in salads. Try experimenting by adding radishes to cooked dishes, too!",
    "Spring is the best time to enjoy artichokes, since they are especially sweet and tender during this time. Because their leaves are not prickly, the baby ones are easier to prep, and can be used the same way the hearts are: steamed, grilled or fried.",
    "Leeks grow well in colder temperatures, making them ideal for a spring harvest. Most recipes call for the leek's white and light green stems, which are great braised, in recipes with goat cheese and blistered or grilled. ",
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
  ],
  autumn: [
    `On the motionless branches of some trees, autumn berries hung like clusters of coral 
        beads, as in those fabled orchards where the fruits were jewels`,
    `Autumn is the time for pumpkins`,
    `The heat of autumn is different from the heat of summer. One ripens apples, the other 
        turns them to cider.`,
    `It's the first day of autumn! A time of hot chocolatey mornings, and toasty marshmallow 
        evenings, and, best of all, leaping into leaves!`,
  ],

  winter: [
    `Cabbage is at its best in winter. Cold sharpens the flavor and insures a crisp leaf.
        Full of antioxidants, cabbage is also an excellent source of vitamin C.`,
    `Like other cruciferous veggies, brussels sprouts have high levels of cancer-fighting 
        antioxidants that may protect DNA from harmful compounds in the body.`,
    `Acorn, butternut, kabocha, and delicata squash are all at their prime during the fall
        and winter. Squash’s trendy golden flesh is teeming with nutrients, including carotenoids, 
        Vitamin A, and potassium.`,
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
