import { Card, CardContent, CardHeader, Container } from "@mui/material";
import { useParams } from "react-router-dom";
import SelectedPlaceCarousel from "./SelectedPlaceCarousel";

const DUMMY_DATA = [
  {
    title: "Flower Of Valley",
    image:
      "https://i.pinimg.com/474x/77/c0/93/77c0936288cc58f0feb2fd79cf3bec61.jpg",
    description:
      "Valley of Flowers from Dehradun opens up in June for everyone till the first week of October. It brings forth the best monsoon beauty.",
    moreImages: [
      "https://i.pinimg.com/474x/5b/96/62/5b96629e3ca1748b2115488ede76f4e5.jpg",
      "https://i.pinimg.com/474x/33/b1/3f/33b13f314368d12108c44b49b4df7ab7.jpg",
      "https://ihplb.b-cdn.net/wp-content/uploads/2016/04/Valley-of-Flowers-National-Park-750x430.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi6vUgK6pq-9vLeHUF4m-MHLiWFcbKWDZgMjvb5YmfFRBjFXGqUw83B5z3OD7go3dYeJ4&usqp=CAU",
    ],
    info: `<p>The Valley of Flowers National Park in Uttarakhand, India is a popular hiking destination known for its alpine flowers, natural beauty, and rare wildlife</p>
   <ul>
  <li><strong>Valley of Flowers</strong> is a UNESCO World Heritage Site located in the <strong>West Himalayas</strong> in Uttarakhand, India.</li><br>
  <li>The valley is famous for its <strong>extensive variety of wildflowers</strong>, with over 500 species of flowers blooming in the summer months.</li><br>
  <li>The valley is situated at an altitude of <strong>3,600 meters (11,800 feet)</strong> above sea level, in the <strong>Nanda Devi Biosphere Reserve</strong>.</li><br>
  <li>The Valley of Flowers is known for its stunning <strong>landscape</strong>, vibrant colors, and breathtaking beauty, surrounded by snow-capped mountains.</li><br>
  <li>The best time to visit the valley is between <strong>July and September</strong>, when the flowers are in full bloom, creating a beautiful carpet of colors.</li><br>
  <li>The valley is home to rare and endangered species of plants, including the <strong>blue poppy, Himalayan rose, and brahmakamal</strong>.</li><br>
  <li>It is also a haven for <strong>wildlife</strong>, with sightings of animals like <strong>snow leopards, musk deer, and Himalayan black bears</strong>.</li><br>
  <li>The trek to the Valley of Flowers starts from <strong>Govindghat</strong>, and the journey is around <strong>14 km</strong> to reach the entrance of the valley.</li><br>
  <li>The valley was made famous by the British mountaineer and botanist <strong>Frank Smythe</strong>, who discovered it in 1931.</li><br>
  <li>Nearby places to visit include:</li><br>
  <ul>
    <li><strong>Hemkund Sahib:</strong> A sacred Sikh Gurudwara located at an altitude of 4,632 meters, close to the Valley of Flowers.</li><br>
    <li><strong>Govindghat:</strong> A town and base camp for the Valley of Flowers trek, offering accommodations and transport services for trekkers.</li><br>
    <li><strong>Joshimath:</strong> A popular town near the Valley of Flowers, known for its temples, hot springs, and as a starting point for many treks in the region.</li><br>
    <li><strong>Nanda Devi National Park:</strong> A UNESCO World Heritage Site, located near the Valley of Flowers, known for its diverse flora and fauna and stunning landscapes.</li><br>
  </ul>
</ul>
`,
  },
  {
    title: "Hawa Mahal",
    image:
      "https://i.pinimg.com/474x/4f/58/c1/4f58c145b6de432b0973728a6fd35a10.jpg",
    description:
      "The Hawa Mahal is a five-storey building, and it is the tallest building in the world that has been built without a foundation.",
    moreImages: [
      "https://plus.unsplash.com/premium_photo-1697729831106-dbca67df36af?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGF3YSUyMG1haGFsJTIwamFpcHVyJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1505977003557-c907eece08e3?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGF3YSUyMG1haGFsfGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1697729831106-dbca67df36af?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGF3YSUyMG1haGFsJTIwamFpcHVyJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D",
    ],
    info: `<p>Here are some facts about the Hawa Mahal in Jaipur, India:</p>
<ul>
  <li><strong>Hawa Mahal</strong>, also known as the "Palace of Winds," is a stunning <strong>pink sandstone</strong> structure located in <strong>Jaipur, Rajasthan</strong>, India.</li><br>
  <li>The palace was built in <strong>1799</strong> by Maharaja Sawai Pratap Singh, and was designed by architect <strong>Bhagwant Das</strong> in a unique <strong>Rajput</strong> architectural style.</li><br>
  <li>It is famous for its <strong>mansion-like façade</strong> with <strong>953 small windows</strong> (known as 'jharokhas') that allow cool breezes to pass through, providing relief during the hot Rajasthani summers.</li><br>
  <li>The windows were designed for royal women to observe street life without being seen, as the palace was a part of the <strong>Zenana (women's quarters)</strong> of the royal family.</li><br>
  <li>The Hawa Mahal's design is an example of <strong>blend of Mughal and Rajput architecture</strong>, with its intricate latticework, arches, and domed towers.</li><br>
  <li>Hawa Mahal is a five-story structure, with a <strong>height of 50 feet</strong> and a distinctive pyramid-like shape.</li><br>
  <li>The building's exterior is adorned with ornate decorations, while the interior has <strong>small chambers and galleries</strong> that open up to the outer windows.</li><br>
  <li>It is a popular tourist destination and a must-see landmark in Jaipur, often photographed for its unique architecture and the beautiful light play on its walls.</li><br>
  <li>The best time to visit is during <strong>early morning or late afternoon</strong> when the palace is bathed in soft, golden sunlight, creating a picturesque view.</li><br>
  <li>Nearby places to visit include:</li><br>
  <ul>
    <li><strong>City Palace:</strong> A magnificent complex of courtyards, gardens, and museums, located near Hawa Mahal, showcasing royal heritage and art.</li><br>
    <li><strong>Jantar Mantar:</strong> An astronomical observatory and UNESCO World Heritage Site, featuring impressive instruments used for measuring time and studying celestial bodies.</li><br>
    <li><strong>Amber Fort:</strong> A majestic fort located a short drive from the city, known for its beautiful architecture, history, and panoramic views of the surrounding landscape.</li><br>
    <li><strong>Jaipur Bazaar:</strong> A bustling market area where visitors can shop for traditional handicrafts, textiles, jewelry, and spices.</li><br>
  </ul>
</ul>
`,
  },

  {
    title: "Taj Mahal",
    image:
      "https://i.pinimg.com/474x/c8/57/73/c85773265ec89333d1035ede6be31d83.jpg",
    description:
      "The foundation stone of India Gate was laid by His Royal Highness, the Duke of Connaught in 1921 and it was designed by Edwin Lutyens.",
    moreImages: [
      "https://media.istockphoto.com/id/124688183/photo/taj-mahal-and-its-reflection-in-pool-hdr.webp?a=1&b=1&s=612x612&w=0&k=20&c=9e8_7WK6l7ZaQJsdCrOIFv5VNyvzRigos8Vq-nV-sV0=",
      "https://media.istockphoto.com/id/525811038/photo/taj-mahal-agra-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=xIA1Uu7t4-Hv7y1rpg1oHvndAQlT-2U7sewzYkKLkDs=",
      "https://images.unsplash.com/photo-1548013146-72479768bada?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGFqJTIwbWFoYWx8ZW58MHx8MHx8fDA%3D",
    ],
    info: `
    <ul>
  <li><strong>The Taj Mahal</strong> is a symbol of love, built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal.</li><br>
  <li><strong>Construction started in 1632</strong> and was completed in 1653, taking about 21 years to finish.</li><br>
  <li>The Taj Mahal is made of <strong>white marble</strong>, with intricate carvings and inlay work of semi-precious stones.</li><br>
  <li>It is located in <strong>Agra, India</strong>, and is one of the most famous landmarks in the world.</li><br>
  <li>The Taj Mahal is a UNESCO <strong>World Heritage Site</strong>, attracting millions of visitors each year.</li><br>
  <li>The main structure is surrounded by a large <strong>charbagh garden</strong>, symbolizing paradise in Islamic culture.</li><br>
  <li>The Taj Mahal's central dome is <strong>73 meters (240 feet)</strong> high, and it is surrounded by four minarets.</li><br>
  <li>The monument is an excellent example of Mughal architecture, blending <strong>Persian, Ottoman, and Indian styles</strong>.</li><br>
  <li>The Taj Mahal changes color throughout the day, from a soft <strong>pinkish hue in the morning</strong> to a golden glow at sunset.</li><br>
  <li>Nearby places to visit include:</li><br>
  <ul>
    <li><strong>Agra Fort:</strong> A UNESCO World Heritage Site, it's a historic fort with beautiful Mughal architecture.</li><br>
    <li><strong>Fatehpur Sikri:</strong> A deserted Mughal city, known for its stunning architecture and historical significance.</li><br>
    <li><strong>Mehtab Bagh:</strong> A garden across the Yamuna River offering a great view of the Taj Mahal.</li><br>
    <li><strong>Itmad-ud-Daula Tomb:</strong> Also known as the "Baby Taj," it is an exquisite tomb with intricate marble work.</li><br>
  </ul>
</ul>
`,
  },
  {
    title: "India Gate",
    image:
      "https://i.pinimg.com/474x/55/9a/48/559a4826e6a69b32c2dba25fa856f103.jpg",
    description:
      "Flower of valley is in Uttarakhand. It is famous for the variety of the flower that grow in the himalayns region.Aman",
    moreImages: [
      "https://media.istockphoto.com/id/1398087757/photo/india-gate-under-the-clouds-famous-landmark-of-new-delhi-no-people.jpg?s=612x612&w=0&k=20&c=Kf9Wbo1td_BXIzLo0ohQAKcDeXLvroQGnZ9f2rY4YAA=",
    ],
    info: `<ul>
  <li><strong>India Gate</strong> is a war memorial located in <strong>New Delhi, India</strong>, dedicated to the soldiers of the British Indian Army who died in World War I.</li><br>
  <li>The memorial was designed by <strong>Sir Edwin Lutyens</strong> and completed in <strong>1931</strong>.</li><br>
  <li>India Gate stands at a height of <strong>42 meters (138 feet)</strong> and is made of red sandstone and granite.</li><br>
  <li>It is inscribed with the names of over <strong>13,000 soldiers</strong> who died during the First World War.</li><br>
  <li>The memorial has an <strong>eternal flame</strong> at its base called the "Amar Jawan Jyoti," which honors soldiers who died in the 1971 India-Pakistan war.</li><br>
  <li>India Gate is located in the heart of New Delhi, at the eastern end of the <strong>Rajpath</strong> (King’s Way), the central ceremonial axis of the city.</li><br>
  <li>The memorial is a popular spot for both <strong>tourists</strong> and locals, especially in the evenings, when it is beautifully lit up.</li><br>
  <li>India Gate is often the site of national events, parades, and celebrations, particularly on <strong>Republic Day</strong> (January 26th).</li><br>
  <li>Nearby, you can find the <strong>National War Memorial</strong>, which was inaugurated in 2019 to honor the soldiers who have died in conflicts post-independence.</li><br>
  <li>Nearby places to visit include:</li><br>
  <ul>
    <li><strong>Rashtrapati Bhavan:</strong> The official residence of the President of India, known for its grand architecture and lush gardens.</li><br>
    <li><strong>National Museum:</strong> A museum showcasing India's rich cultural heritage, with artifacts from ancient to modern India.</li><br>
    <li><strong>Lodhi Garden:</strong> A peaceful park with tombs from the Lodhi era, perfect for a relaxing stroll.</li><br>
    <li><strong>Humayun's Tomb:</strong> A UNESCO World Heritage Site, this tomb is an important example of Mughal architecture and a precursor to the Taj Mahal.</li><br>
  </ul>
</ul>
`,
  },
  {
    title: "Goa Beach",
    image:
      "https://i.pinimg.com/474x/86/68/80/8668802fed844bedaf7b1ebbc8edb8c3.jpg",
    description:
      "Goa is a state on the southwestern coast of India within the Konkan region, the Deccan highlands by the Western Ghats.",
    moreImages: [
      "https://plus.unsplash.com/premium_photo-1671358446946-8bd43ba08a6a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z29hJTIwYmVhY2hlc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1697729594707-0fc9e51c8eed?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z29hfGVufDB8fDB8fHww",
    ],
    info: `<ul>
  <li><strong>Goa</strong> is famous for its beautiful <strong>beaches</strong>, attracting tourists from all over the world.</li><br>
  <li>Goa has over <strong>25 beaches</strong>, each offering a unique vibe and set of activities.</li><br>
  <li><strong>North Goa beaches</strong> are known for their vibrant nightlife, water sports, and bustling beach shacks.</li><br>
  <li><strong>South Goa beaches</strong> are quieter, more serene, and perfect for relaxation and solitude.</li><br>
  <li>The beaches of Goa are known for their <strong>golden sands</strong>, clear blue waters, and scenic beauty.</li><br>
  <li><strong>Calangute Beach</strong>, often called the "Queen of Beaches," is one of the most popular beaches in North Goa.</li><br>
  <li><strong>Palolem Beach</strong> in South Goa is famous for its crescent-shaped shore and calm, clear waters, ideal for swimming.</li><br>
  <li><strong>Anjuna Beach</strong> is known for its vibrant party scene, full-moon parties, and hippie culture.</li><br>
  <li><strong>Baga Beach</strong> is famous for its lively atmosphere, water sports, and numerous beachside restaurants and bars.</li><br>
  <li>Nearby places to visit in Goa include:</li><br>
  <ul>
    <li><strong>Fort Aguada:</strong> A 17th-century Portuguese fort offering stunning views of the Arabian Sea.</li><br>
    <li><strong>Chapora Fort:</strong> Known for its panoramic views and popularity due to the movie "Dil Chahta Hai."</li><br>
    <li><strong>Colva Beach:</strong> A pristine beach in South Goa, perfect for a peaceful day by the sea.</li><br>
    <li><strong>Spice Plantations:</strong> Goa is famous for its spice farms, where you can take guided tours and learn about various spices.</li><br>
  </ul>
</ul>
`,
  },

  {
    title: "Marine Drive",
    image:
      "https://i.pinimg.com/736x/96/de/cb/96decb9495048d332aefb84e3455715b.jpg",
    description:
      "Marine Drive in Mumbai, India is a 3.6 kilometer-long promenade and road that's known iconic landmarks, and upscale residential areas",
    moreImages: [
      "https://images.unsplash.com/photo-1496372412473-e8548ffd82bc?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFyaW5lJTIwZHJpdmUlMkMlMjBtdW1iYWklMkMlMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D",
    ],
    info: `<ul>
  <li><strong>Marine Drive</strong> is a famous 3.6 km-long boulevard located in <strong>South Mumbai</strong>, India, along the Arabian Sea.</li><br>
  <li>Often referred to as the <strong>"Queen's Necklace"</strong> because of its curved shape and the streetlights that resemble a necklace when viewed at night.</li><br>
  <li>It was constructed in the <strong>1920s</strong> and was designed by architect <strong>Sir Henry L. Meyers</strong>.</li><br>
  <li>Marine Drive connects <strong>Nariman Point</strong> to <strong>Charni Road</strong>, offering beautiful views of the Arabian Sea.</li><br>
  <li>The promenade along Marine Drive is a popular spot for locals and tourists alike to take leisurely walks, enjoy sea breezes, and watch sunsets.</li><br>
  <li>Marine Drive is also home to several art deco buildings, some of which are recognized as UNESCO World Heritage Sites.</li><br>
  <li>It is one of the busiest roads in Mumbai, lined with numerous <strong>restaurants, cafes, and shops</strong>.</li><br>
  <li>Marine Drive is a great spot for evening drives and is often bustling with <strong>tourists, joggers, and street vendors</strong>.</li><br>
  <li>At night, the streetlights along Marine Drive create a stunning visual, making it one of the best spots for <strong>night photography</strong>.</li><br>
  <li>Nearby places to visit include:</li><br>
  <ul>
    <li><strong>Chowpatty Beach:</strong> A popular beach close to Marine Drive, known for its street food, funfair, and evening activities.</li><br>
    <li><strong>Gateway of India:</strong> A historical landmark located a short distance from Marine Drive, offering views of the Arabian Sea and the Taj Mahal Palace Hotel.</li><br>
    <li><strong>Colaba Causeway:</strong> A bustling street market and shopping area near the Gateway of India, offering a variety of items from clothes to souvenirs.</li><br>
    <li><strong>Horniman Circle Garden:</strong> A beautiful green space with colonial-era architecture, perfect for a peaceful break.</li><br>
  </ul>
</ul>
`,
  },

  {
    title: "Ganga Ghat",
    image:
      "https://i.pinimg.com/474x/97/d6/a9/97d6a9440c2db772094e3f75a4cda36b.jpg",
    description:
      "Most Varanasi ghats were rebuilt after 1700 AD, when the city was part of Maratha Empire Shindes (Scindias)",
    moreImages: [
      "https://thumbs.dreamstime.com/b/pushkar-lake-night-29408905.jpg",
      "https://i.redd.it/0bhw99vl8os61.jpg",
    ],
    info: `<ul>
  <li><strong>Ganga Ghats</strong> are a series of riverfront steps located along the banks of the <strong>River Ganges</strong> in cities like Varanasi, Haridwar, and Rishikesh in India.</li><br>
  <li>The most famous Ganga Ghats are located in <strong>Varanasi</strong>, one of the oldest living cities in the world, and a major pilgrimage destination.</li><br>
  <li>The Ghats are used for various religious and cultural purposes, including <strong>ritual bathing, prayer ceremonies</strong>, and <strong>funeral rites</strong>.</li><br>
  <li>There are over <strong>80 Ghats</strong> in Varanasi, with <strong>Dashashwamedh Ghat</strong> being the most prominent and lively ghat, known for its grand evening <strong>Ganga Aarti</strong> ceremony.</li><br>
  <li>At the Ghats, people come to <strong>purify themselves</strong> by taking a dip in the holy waters of the Ganges, believed to wash away sins.</li><br>
  <li>The Ganga Aarti performed at the Ghats is a <strong>spectacular ritual</strong> of fire offerings, chants, and music, attracting tourists and devotees from around the world.</li><br>
  <li>Many Ghats also have <strong>temples</strong> and <strong>ashrams</strong> along their edges, where pilgrims gather for religious activities.</li><br>
  <li>The Ghats are a hub for local <strong>culture, traditions, and photography</strong>, with vibrant scenes of life and death coexisting along the riverbanks.</li><br>
  <li>The <strong>Maun Vrat Ghat</strong> and <strong>Harishchandra Ghat</strong> are also significant for their association with cremation rituals, where funeral pyres are seen burning on the banks of the Ganges.</li><br>
  <li>Nearby places to visit include:</li><br>
  <ul>
    <li><strong>Kashi Vishwanath Temple:</strong> One of the most revered temples dedicated to Lord Shiva, located near the Ghats in Varanasi.</li><br>
    <li><strong>Assi Ghat:</strong> A quieter, less crowded ghat in Varanasi, where locals often gather for morning prayers and rituals.</li><br>
    <li><strong>Triveni Ghat (Rishikesh):</strong> Famous for its evening Ganga Aarti and as a spiritual hub for meditation and yoga.</li><br>
    <li><strong>Har Ki Pauri (Haridwar):</strong> A sacred Ganga Ghat known for its evening aarti and one of the holiest places for Hindu pilgrims.</li><br>
  </ul>
</ul>
`,
  },
  {
    title: "Rudranath",
    image:
      "https://i.pinimg.com/736x/ee/29/2d/ee292d5cb9375ea0f7a224c029f15506.jpg",
    description:
      "Rudranath Temple is a temple of Lord Shiva situated in Chamoli district of Uttarakhand state of India",
    moreImages: [
      "https://www.shrirudranath.com/Images/background/2.jpg",
      "https://www.shrirudranath.com/Images/background/3.jpg",
    ],
    info: `<ul>
  <li><strong>Rudranath Temple</strong> is an ancient Hindu temple dedicated to Lord Shiva, located in the <strong>Chamoli district</strong> of <strong>Uttarakhand</strong>, India.</li><br>
  <li>It is one of the <strong>Char Dhams</strong> (four sacred shrines) of the Garhwal Himalayas, which is considered an important pilgrimage site.</li><br>
  <li>The temple is located at an altitude of <strong>2,286 meters (7,500 feet)</strong> above sea level, offering stunning views of the surrounding mountains.</li><br>
  <li>Rudranath Temple is unique because its <strong>idol of Lord Shiva</strong> is represented by a natural rock formation, known as the <strong>“Swayambhu”</strong> (self-manifested).</li><br>
  <li>It is part of the <strong>panch kedar</strong> pilgrimage, where five temples dedicated to Lord Shiva are scattered across the region.</li><br>
  <li>The trek to Rudranath Temple is a challenging yet rewarding journey, typically taking around <strong>4-5 days</strong> from the base camp at Gopeshwar.</li><br>
  <li>The temple is surrounded by lush meadows, dense forests, and breathtaking mountain landscapes, making it a paradise for nature lovers and trekkers.</li><br>
  <li>Rudranath is famous for its peaceful environment and is often less crowded than other Char Dham temples, offering a more tranquil experience.</li><br>
  <li>The <strong>Rudranath Trek</strong> passes through villages like <strong>Gopeshwar, Mandal, and Sagar</strong>, where pilgrims and trekkers can interact with locals and experience traditional Garhwali culture.</li><br>
  <li>Nearby places to visit include:</li><br>
  <ul>
    <li><strong>Chopta:</strong> Often referred to as the "Mini Switzerland of India," Chopta is a popular base camp for trekking and offers beautiful views of the snow-capped peaks.</li><br>
    <li><strong>Deoria Tal:</strong> A pristine lake located about 16 km from Chopta, known for its stunning reflections of the Himalayan peaks on its surface.</li><br>
    <li><strong>Gopeshwar:</strong> The town near the base of the Rudranath trek, home to the famous Gopeshwar Temple dedicated to Lord Shiva.</li><br>
    <li><strong>Kedarnath Temple:</strong> Another important Shiva temple located nearby, part of the Char Dham Yatra and a major pilgrimage site for Hindus.</li><br>
  </ul>
</ul>
`,
  },
];

const SelectedPlaces = () => {
  const params = useParams();
  const data = DUMMY_DATA.find(
    (data) => data.title.toLocaleLowerCase() === params.id.toLocaleLowerCase()
  );
  return (
    <Container
      sx={{
        // background: "lightgray",
        p: "0px",
        minHeight: "calc(100vh - 150px)",
        pt: 5,
        width: { xs: "90%", lg: "48%" },
        mb: 10,
      }}
    >
      {/* <Typography>{data.title}</Typography> */}
      <Card>
        <Container sx={{ p: { xs: "0px", lg: "0px" } }}>
          <SelectedPlaceCarousel data={data} />
        </Container>
        <CardHeader title={data.title} />
        <CardContent sx={{ pt: "0px", pl: "24px" }}>
          <div dangerouslySetInnerHTML={{ __html: data.info }} />
          {/* <pre>{data.info}</pre> */}
        </CardContent>
      </Card>
    </Container>
  );
};

export default SelectedPlaces;
