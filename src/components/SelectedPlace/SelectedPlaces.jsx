import { Card, CardContent, CardHeader, Container } from "@mui/material";
import { useParams } from "react-router-dom";
import SelectedPlaceCarousel from "./SelectedPlaceCarousel";
import NewCarousel from "./NewDetails/NewCarousel";
import MainCarousel from "./NewDetails/MainCarousel";
import NearPlaces from "./NewDetails/NearPlace";
import Description from "./NewDetails/Description";
/* eslint-disable react/prop-types */

const DUMMY_DATA = [
  {
    title: "Flower Of Valley",
    image:
      "https://i.pinimg.com/474x/77/c0/93/77c0936288cc58f0feb2fd79cf3bec61.jpg",
    description:
      "Valley of Flowers from Dehradun opens up in June for everyone till the first week of October. It brings forth the best monsoon beauty.",
    moreImages: [
      "https://i.pinimg.com/474x/5b/96/62/5b96629e3ca1748b2115488ede76f4e5.jpg",
      "https://www.incredibleindia.gov.in/content/dam/incredible-india/images/trips/uttarakhand/badrinath/badrinath-spiritual-and-natural-expedition/valley-of-flowers-tri-iter-day2.jpg",
      "https://i.pinimg.com/474x/33/b1/3f/33b13f314368d12108c44b49b4df7ab7.jpg",
      "https://ihplb.b-cdn.net/wp-content/uploads/2016/04/Valley-of-Flowers-National-Park-750x430.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi6vUgK6pq-9vLeHUF4m-MHLiWFcbKWDZgMjvb5YmfFRBjFXGqUw83B5z3OD7go3dYeJ4&usqp=CAU",
    ],
    features: [
      {
        image:
          "https://s7ap1.scene7.com/is/image/incredibleindia/jantar-mantar-jaipur-rajasthan-1-attr-nearby?qlt=82&ts=1726660054850",
        title: "Jantar Mantar",
      },
      {
        image:
          "https://s7ap1.scene7.com/is/image/incredibleindia/jal-mahal-jaipur-rajasthan-1-attr-nearby?qlt=82&ts=1726660203224",
        title: "Jal Mahal",
      },
      {
        image:
          "https://assets.cntraveller.in/photos/64c7775e1e94724098a803da/master/w_1600%2Cc_limit/Thaali%2520and%2520more%2520.jpeg",
        title: "Dal Baati Churma",
      },
      {
        image:
          "https://images.unsplash.com/photo-1667849357658-16bfaec30885?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Palace",
      },
    ],
    details: {
      title: "Hawa Mahal",
      des: "Perhaps the most stunning example of Rajasthani heritage from the time of the Royals is the Hawa Mahal (Palace of Winds), a wonder of wonders that will leave you spellbound with its architectural ingenuity. ",
      hotel: 10,
      busStand: "10km",
      railwayStation: "10km",
    },
    nearbyPlaces: [
      {
        title: "Jantar Mantar",
        image:
          "https://s7ap1.scene7.com/is/image/incredibleindia/jantar-mantar-jaipur-rajasthan-1-attr-nearby?qlt=82&ts=1726660054850",
        des: "Jantar Mantar is a celestial masterpiece nestled in the heart of Jaipur. Crafted by the visionary ruler Maharaja Sawai Jai Singh II, this astronomical observatory stands as a testament to human ingenuity and the insatiable thirst for knowledge.",
      },
      {
        title: "Garh Ganesh Temple",
        image:
          "https://s7ap1.scene7.com/is/image/incredibleindia/garh-ganesh-mandira-jaipur-rajasthan-1-attr-nearby?qlt=82&ts=1726660003573",
        des: "Located in the Pink City of India, Jaipur, Rajasthan, the Garh Ganesh Temple is a famous Hindu temple that stands tall as a statement of the rich cultural and devotional values of the country.",
      },
      {
        title: "Jal Mahal",
        image:
          "https://s7ap1.scene7.com/is/image/incredibleindia/jal-mahal-jaipur-rajasthan-1-attr-nearby?qlt=82&ts=1726660203224",
        des: "The pink city of India, Jaipur, is home to one such precious gem. Welcome to Jal Mahal, a majestic palace rising from the still waters of Man Sagar Lake.",
      },
    ],
    info: `<p>The Valley of Flowers National Park in Uttarakhand, India is a popular hiking destination known for its alpine flowers, natural beauty, and rare wildlife</p>
   <ul>
  <li><strong>Valley of Flowers</strong> is a UNESCO World Heritage Site located in the <strong>West Himalayas</strong> in Uttarakhand, India.</li><br>
  <li>The valley is famous for its <strong>extensive variety of wildflowers</strong>, with over 500 species of flowers blooming in the summer months.</li><br>
  <li>The valley is situated at an altitude of <strong>3,600 meters (11,800 feet)</strong> above sea level, in the <strong>Nanda Devi Biosphere Reserve</strong>.</li><br>
  <li>The Valley of Flowers is known for its stunning <strong>landscape</strong>, vibrant colors, and breathtaking beauty, surrounded by snow-capped mountains.</li><br>
  <li>The best time to visit the valley is between <strong>July and September</strong>, when the flowers are in full bloom, creating a beautiful carpet of colors.</li><br>
 
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
    features: [
      {
        image:
          "https://s7ap1.scene7.com/is/image/incredibleindia/jantar-mantar-jaipur-rajasthan-1-attr-nearby?qlt=82&ts=1726660054850",
        title: "Jantar Mantar",
      },
      {
        image:
          "https://s7ap1.scene7.com/is/image/incredibleindia/jal-mahal-jaipur-rajasthan-1-attr-nearby?qlt=82&ts=1726660203224",
        title: "Jal Mahal",
      },
      {
        image:
          "https://assets.cntraveller.in/photos/64c7775e1e94724098a803da/master/w_1600%2Cc_limit/Thaali%2520and%2520more%2520.jpeg",
        title: "Dal Baati Churma",
      },
      {
        image:
          "https://images.unsplash.com/photo-1667849357658-16bfaec30885?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Palace",
      },
    ],
    details: {
      title: "Hawa Mahal",
      des: "Perhaps the most stunning example of Rajasthani heritage from the time of the Royals is the Hawa Mahal (Palace of Winds), a wonder of wonders that will leave you spellbound with its architectural ingenuity. ",
      hotel: 10,
      busStand: "10km",
      railwayStation: "10km",
    },
    nearbyPlaces: [
      {
        title: "Jantar Mantar",
        image:
          "https://s7ap1.scene7.com/is/image/incredibleindia/jantar-mantar-jaipur-rajasthan-1-attr-nearby?qlt=82&ts=1726660054850",
        des: "Jantar Mantar is a celestial masterpiece nestled in the heart of Jaipur. Crafted by the visionary ruler Maharaja Sawai Jai Singh II, this astronomical observatory stands as a testament to human ingenuity and the insatiable thirst for knowledge.",
      },
      {
        title: "Garh Ganesh Temple",
        image:
          "https://s7ap1.scene7.com/is/image/incredibleindia/garh-ganesh-mandira-jaipur-rajasthan-1-attr-nearby?qlt=82&ts=1726660003573",
        des: "Located in the Pink City of India, Jaipur, Rajasthan, the Garh Ganesh Temple is a famous Hindu temple that stands tall as a statement of the rich cultural and devotional values of the country.",
      },
      {
        title: "Jal Mahal",
        image:
          "https://s7ap1.scene7.com/is/image/incredibleindia/jal-mahal-jaipur-rajasthan-1-attr-nearby?qlt=82&ts=1726660203224",
        des: "The pink city of India, Jaipur, is home to one such precious gem. Welcome to Jal Mahal, a majestic palace rising from the still waters of Man Sagar Lake.",
      },
    ],
    info: `<p>Here are some facts about the Hawa Mahal in Jaipur, India:</p>
<ul>
  <li><strong>Hawa Mahal</strong>, also known as the "Palace of Winds," is a stunning <strong>pink sandstone</strong> structure located in <strong>Jaipur, Rajasthan</strong>, India.</li><br>
  <li>The palace was built in <strong>1799</strong> by Maharaja Sawai Pratap Singh, and was designed by architect <strong>Bhagwant Das</strong> in a unique <strong>Rajput</strong> architectural style.</li><br>
  <li>It is famous for its <strong>mansion-like façade</strong> with <strong>953 small windows</strong> (known as 'jharokhas') that allow cool breezes to pass through, providing relief during the hot Rajasthani summers.</li><br>
  <li>The windows were designed for royal women to observe street life without being seen, as the palace was a part of the <strong>Zenana (women's quarters)</strong> of the royal family.</li><br>
  <li>The Hawa Mahal's design is an example of <strong>blend of Mughal and Rajput architecture</strong>, with its intricate latticework, arches, and domed towers.</li><br>
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
    features: [
      {
        image:
          "https://s7ap1.scene7.com/is/image/incredibleindia/jantar-mantar-jaipur-rajasthan-1-attr-nearby?qlt=82&ts=1726660054850",
        title: "Jantar Mantar",
      },
      {
        image:
          "https://s7ap1.scene7.com/is/image/incredibleindia/jal-mahal-jaipur-rajasthan-1-attr-nearby?qlt=82&ts=1726660203224",
        title: "Jal Mahal",
      },
      {
        image:
          "https://assets.cntraveller.in/photos/64c7775e1e94724098a803da/master/w_1600%2Cc_limit/Thaali%2520and%2520more%2520.jpeg",
        title: "Dal Baati Churma",
      },
      {
        image:
          "https://images.unsplash.com/photo-1667849357658-16bfaec30885?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Palace",
      },
    ],
    details: {
      title: "Hawa Mahal",
      des: "Perhaps the most stunning example of Rajasthani heritage from the time of the Royals is the Hawa Mahal (Palace of Winds), a wonder of wonders that will leave you spellbound with its architectural ingenuity. ",
      hotel: 10,
      busStand: "10km",
      railwayStation: "10km",
    },
    nearbyPlaces: [
      {
        title: "Jantar Mantar",
        image:
          "https://s7ap1.scene7.com/is/image/incredibleindia/jantar-mantar-jaipur-rajasthan-1-attr-nearby?qlt=82&ts=1726660054850",
        des: "Jantar Mantar is a celestial masterpiece nestled in the heart of Jaipur. Crafted by the visionary ruler Maharaja Sawai Jai Singh II, this astronomical observatory stands as a testament to human ingenuity and the insatiable thirst for knowledge.",
      },
      {
        title: "Garh Ganesh Temple",
        image:
          "https://s7ap1.scene7.com/is/image/incredibleindia/garh-ganesh-mandira-jaipur-rajasthan-1-attr-nearby?qlt=82&ts=1726660003573",
        des: "Located in the Pink City of India, Jaipur, Rajasthan, the Garh Ganesh Temple is a famous Hindu temple that stands tall as a statement of the rich cultural and devotional values of the country.",
      },
      {
        title: "Jal Mahal",
        image:
          "https://s7ap1.scene7.com/is/image/incredibleindia/jal-mahal-jaipur-rajasthan-1-attr-nearby?qlt=82&ts=1726660203224",
        des: "The pink city of India, Jaipur, is home to one such precious gem. Welcome to Jal Mahal, a majestic palace rising from the still waters of Man Sagar Lake.",
      },
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
    features: [
      {
        image:
          "https://s7ap1.scene7.com/is/image/incredibleindia/jantar-mantar-jaipur-rajasthan-1-attr-nearby?qlt=82&ts=1726660054850",
        title: "Jantar Mantar",
      },
      {
        image:
          "https://s7ap1.scene7.com/is/image/incredibleindia/jal-mahal-jaipur-rajasthan-1-attr-nearby?qlt=82&ts=1726660203224",
        title: "Jal Mahal",
      },
      {
        image:
          "https://assets.cntraveller.in/photos/64c7775e1e94724098a803da/master/w_1600%2Cc_limit/Thaali%2520and%2520more%2520.jpeg",
        title: "Dal Baati Churma",
      },
      {
        image:
          "https://images.unsplash.com/photo-1667849357658-16bfaec30885?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Palace",
      },
    ],
    details: {
      title: "Hawa Mahal",
      des: "Perhaps the most stunning example of Rajasthani heritage from the time of the Royals is the Hawa Mahal (Palace of Winds), a wonder of wonders that will leave you spellbound with its architectural ingenuity. ",
      hotel: 10,
      busStand: "10km",
      railwayStation: "10km",
    },
    nearbyPlaces: [
      {
        title: "Jantar Mantar",
        image:
          "https://s7ap1.scene7.com/is/image/incredibleindia/jantar-mantar-jaipur-rajasthan-1-attr-nearby?qlt=82&ts=1726660054850",
        des: "Jantar Mantar is a celestial masterpiece nestled in the heart of Jaipur. Crafted by the visionary ruler Maharaja Sawai Jai Singh II, this astronomical observatory stands as a testament to human ingenuity and the insatiable thirst for knowledge.",
      },
      {
        title: "Garh Ganesh Temple",
        image:
          "https://s7ap1.scene7.com/is/image/incredibleindia/garh-ganesh-mandira-jaipur-rajasthan-1-attr-nearby?qlt=82&ts=1726660003573",
        des: "Located in the Pink City of India, Jaipur, Rajasthan, the Garh Ganesh Temple is a famous Hindu temple that stands tall as a statement of the rich cultural and devotional values of the country.",
      },
      {
        title: "Jal Mahal",
        image:
          "https://s7ap1.scene7.com/is/image/incredibleindia/jal-mahal-jaipur-rajasthan-1-attr-nearby?qlt=82&ts=1726660203224",
        des: "The pink city of India, Jaipur, is home to one such precious gem. Welcome to Jal Mahal, a majestic palace rising from the still waters of Man Sagar Lake.",
      },
    ],
    info: `<ul>
  <li><strong>India Gate</strong> is a war memorial located in <strong>New Delhi, India</strong>, dedicated to the soldiers of the British Indian Army who died in World War I.</li><br>
  <li>The memorial was designed by <strong>Sir Edwin Lutyens</strong> and completed in <strong>1931</strong>.</li><br>
  <li>India Gate stands at a height of <strong>42 meters (138 feet)</strong> and is made of red sandstone and granite.</li><br>
  <li>It is inscribed with the names of over <strong>13,000 soldiers</strong> who died during the First World War.</li><br>
  <li>The memorial has an <strong>eternal flame</strong> at its base called the "Amar Jawan Jyoti," which honors soldiers who died in the 1971 India-Pakistan war.</li><br>
  <li>India Gate is located in the heart of New Delhi, at the eastern end of the <strong>Rajpath</strong> (King’s Way), the central ceremonial axis of the city.</li><br>
  <li>The memorial is a popular spot for both <strong>tourists</strong> and locals, especially in the evenings, when it is beautifully lit up.</li><br>
 
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
    features: [
      {
        image:
          "https://s7ap1.scene7.com/is/image/incredibleindia/jantar-mantar-jaipur-rajasthan-1-attr-nearby?qlt=82&ts=1726660054850",
        title: "Jantar Mantar",
      },
      {
        image:
          "https://s7ap1.scene7.com/is/image/incredibleindia/jal-mahal-jaipur-rajasthan-1-attr-nearby?qlt=82&ts=1726660203224",
        title: "Jal Mahal",
      },
      {
        image:
          "https://assets.cntraveller.in/photos/64c7775e1e94724098a803da/master/w_1600%2Cc_limit/Thaali%2520and%2520more%2520.jpeg",
        title: "Dal Baati Churma",
      },
      {
        image:
          "https://images.unsplash.com/photo-1667849357658-16bfaec30885?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Palace",
      },
    ],
    details: {
      title: "Hawa Mahal",
      des: "Perhaps the most stunning example of Rajasthani heritage from the time of the Royals is the Hawa Mahal (Palace of Winds), a wonder of wonders that will leave you spellbound with its architectural ingenuity. ",
      hotel: 10,
      busStand: "10km",
      railwayStation: "10km",
    },
    nearbyPlaces: [
      {
        title: "Jantar Mantar",
        image:
          "https://s7ap1.scene7.com/is/image/incredibleindia/jantar-mantar-jaipur-rajasthan-1-attr-nearby?qlt=82&ts=1726660054850",
        des: "Jantar Mantar is a celestial masterpiece nestled in the heart of Jaipur. Crafted by the visionary ruler Maharaja Sawai Jai Singh II, this astronomical observatory stands as a testament to human ingenuity and the insatiable thirst for knowledge.",
      },
      {
        title: "Garh Ganesh Temple",
        image:
          "https://s7ap1.scene7.com/is/image/incredibleindia/garh-ganesh-mandira-jaipur-rajasthan-1-attr-nearby?qlt=82&ts=1726660003573",
        des: "Located in the Pink City of India, Jaipur, Rajasthan, the Garh Ganesh Temple is a famous Hindu temple that stands tall as a statement of the rich cultural and devotional values of the country.",
      },
      {
        title: "Jal Mahal",
        image:
          "https://s7ap1.scene7.com/is/image/incredibleindia/jal-mahal-jaipur-rajasthan-1-attr-nearby?qlt=82&ts=1726660203224",
        des: "The pink city of India, Jaipur, is home to one such precious gem. Welcome to Jal Mahal, a majestic palace rising from the still waters of Man Sagar Lake.",
      },
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
    features: [
      {
        image:
          "https://s7ap1.scene7.com/is/image/incredibleindia/jantar-mantar-jaipur-rajasthan-1-attr-nearby?qlt=82&ts=1726660054850",
        title: "Jantar Mantar",
      },
      {
        image:
          "https://s7ap1.scene7.com/is/image/incredibleindia/jal-mahal-jaipur-rajasthan-1-attr-nearby?qlt=82&ts=1726660203224",
        title: "Jal Mahal",
      },
      {
        image:
          "https://assets.cntraveller.in/photos/64c7775e1e94724098a803da/master/w_1600%2Cc_limit/Thaali%2520and%2520more%2520.jpeg",
        title: "Dal Baati Churma",
      },
      {
        image:
          "https://images.unsplash.com/photo-1667849357658-16bfaec30885?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Palace",
      },
    ],
    details: {
      title: "Hawa Mahal",
      des: "Perhaps the most stunning example of Rajasthani heritage from the time of the Royals is the Hawa Mahal (Palace of Winds), a wonder of wonders that will leave you spellbound with its architectural ingenuity. ",
      hotel: 10,
      busStand: "10km",
      railwayStation: "10km",
    },
    nearbyPlaces: [
      {
        title: "Jantar Mantar",
        image:
          "https://s7ap1.scene7.com/is/image/incredibleindia/jantar-mantar-jaipur-rajasthan-1-attr-nearby?qlt=82&ts=1726660054850",
        des: "Jantar Mantar is a celestial masterpiece nestled in the heart of Jaipur. Crafted by the visionary ruler Maharaja Sawai Jai Singh II, this astronomical observatory stands as a testament to human ingenuity and the insatiable thirst for knowledge.",
      },
      {
        title: "Garh Ganesh Temple",
        image:
          "https://s7ap1.scene7.com/is/image/incredibleindia/garh-ganesh-mandira-jaipur-rajasthan-1-attr-nearby?qlt=82&ts=1726660003573",
        des: "Located in the Pink City of India, Jaipur, Rajasthan, the Garh Ganesh Temple is a famous Hindu temple that stands tall as a statement of the rich cultural and devotional values of the country.",
      },
      {
        title: "Jal Mahal",
        image:
          "https://s7ap1.scene7.com/is/image/incredibleindia/jal-mahal-jaipur-rajasthan-1-attr-nearby?qlt=82&ts=1726660203224",
        des: "The pink city of India, Jaipur, is home to one such precious gem. Welcome to Jal Mahal, a majestic palace rising from the still waters of Man Sagar Lake.",
      },
    ],
    info: `<ul>
  <li><strong>Marine Drive</strong> is a famous 3.6 km-long boulevard located in <strong>South Mumbai</strong>, India, along the Arabian Sea.</li><br>
  <li>Often referred to as the <strong>"Queen's Necklace"</strong> because of its curved shape and the streetlights that resemble a necklace when viewed at night.</li><br>
  <li>It was constructed in the <strong>1920s</strong> and was designed by architect <strong>Sir Henry L. Meyers</strong>.</li><br>
  <li>Marine Drive connects <strong>Nariman Point</strong> to <strong>Charni Road</strong>, offering beautiful views of the Arabian Sea.</li><br>
  <li>The promenade along Marine Drive is a popular spot for locals and tourists alike to take leisurely walks, enjoy sea breezes, and watch sunsets.</li><br>
  <li>Marine Drive is also home to several art deco buildings, some of which are recognized as UNESCO World Heritage Sites.</li><br>
  <li>It is one of the busiest roads in Mumbai, lined with numerous <strong>restaurants, cafes, and shops</strong>.</li><br>
  
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
    features: [
      {
        image:
          "https://s7ap1.scene7.com/is/image/incredibleindia/jantar-mantar-jaipur-rajasthan-1-attr-nearby?qlt=82&ts=1726660054850",
        title: "Jantar Mantar",
      },
      {
        image:
          "https://s7ap1.scene7.com/is/image/incredibleindia/jal-mahal-jaipur-rajasthan-1-attr-nearby?qlt=82&ts=1726660203224",
        title: "Jal Mahal",
      },
      {
        image:
          "https://assets.cntraveller.in/photos/64c7775e1e94724098a803da/master/w_1600%2Cc_limit/Thaali%2520and%2520more%2520.jpeg",
        title: "Dal Baati Churma",
      },
      {
        image:
          "https://images.unsplash.com/photo-1667849357658-16bfaec30885?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Palace",
      },
    ],
    details: {
      title: "Hawa Mahal",
      des: "Perhaps the most stunning example of Rajasthani heritage from the time of the Royals is the Hawa Mahal (Palace of Winds), a wonder of wonders that will leave you spellbound with its architectural ingenuity. ",
      hotel: 10,
      busStand: "10km",
      railwayStation: "10km",
    },
    nearbyPlaces: [
      {
        title: "Jantar Mantar",
        image:
          "https://s7ap1.scene7.com/is/image/incredibleindia/jantar-mantar-jaipur-rajasthan-1-attr-nearby?qlt=82&ts=1726660054850",
        des: "Jantar Mantar is a celestial masterpiece nestled in the heart of Jaipur. Crafted by the visionary ruler Maharaja Sawai Jai Singh II, this astronomical observatory stands as a testament to human ingenuity and the insatiable thirst for knowledge.",
      },
      {
        title: "Garh Ganesh Temple",
        image:
          "https://s7ap1.scene7.com/is/image/incredibleindia/garh-ganesh-mandira-jaipur-rajasthan-1-attr-nearby?qlt=82&ts=1726660003573",
        des: "Located in the Pink City of India, Jaipur, Rajasthan, the Garh Ganesh Temple is a famous Hindu temple that stands tall as a statement of the rich cultural and devotional values of the country.",
      },
      {
        title: "Jal Mahal",
        image:
          "https://s7ap1.scene7.com/is/image/incredibleindia/jal-mahal-jaipur-rajasthan-1-attr-nearby?qlt=82&ts=1726660203224",
        des: "The pink city of India, Jaipur, is home to one such precious gem. Welcome to Jal Mahal, a majestic palace rising from the still waters of Man Sagar Lake.",
      },
    ],
    info: `<ul>
  <li><strong>Ganga Ghats</strong> are a series of riverfront steps located along the banks of the <strong>River Ganges</strong> in cities like Varanasi, Haridwar, and Rishikesh in India.</li><br>
  <li>The most famous Ganga Ghats are located in <strong>Varanasi</strong>, one of the oldest living cities in the world, and a major pilgrimage destination.</li><br>
  <li>The Ghats are used for various religious and cultural purposes, including <strong>ritual bathing, prayer ceremonies</strong>, and <strong>funeral rites</strong>.</li><br>
  <li>There are over <strong>80 Ghats</strong> in Varanasi, with <strong>Dashashwamedh Ghat</strong> being the most prominent and lively ghat, known for its grand evening <strong>Ganga Aarti</strong> ceremony.</li><br>
  <li>At the Ghats, people come to <strong>purify themselves</strong> by taking a dip in the holy waters of the Ganges, believed to wash away sins.</li><br>
  <li>The Ganga Aarti performed at the Ghats is a <strong>spectacular ritual</strong> of fire offerings, chants, and music, attracting tourists and devotees from around the world.</li><br>
 
 
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
    features: [
      {
        image:
          "https://s7ap1.scene7.com/is/image/incredibleindia/jantar-mantar-jaipur-rajasthan-1-attr-nearby?qlt=82&ts=1726660054850",
        title: "Jantar Mantar",
      },
      {
        image:
          "https://s7ap1.scene7.com/is/image/incredibleindia/jal-mahal-jaipur-rajasthan-1-attr-nearby?qlt=82&ts=1726660203224",
        title: "Jal Mahal",
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2020/02/09/06/50/auli-4832101_1280.jpg",
        title: "Auli",
      },
      {
        image:
          "https://images.unsplash.com/photo-1667849357658-16bfaec30885?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Palace",
      },
    ],
    details: {
      title: "Hawa Mahal",
      des: "Perhaps the most stunning example of Rajasthani heritage from the time of the Royals is the Hawa Mahal (Palace of Winds), a wonder of wonders that will leave you spellbound with its architectural ingenuity. ",
      hotel: 10,
      busStand: "10km",
      railwayStation: "10km",
    },
    nearbyPlaces: [
      {
        title: "Badrinath Temple",
        image: "https://www.holidify.com/images/bgImages/BADRINATH.jpg",
        des: "In the heart of the sacred town of Badrinath, amidst an awe-inspiring tapestry of snow-capped peaks and the serene whispers of the Alaknanda River, lies the revered Badrinath Temple.",
      },
      {
        title: "Bheem Pul",
        image:
          "https://www.holidify.com/images/cmsuploads/compressed/1200px-Bheem_Pul2C_every_bit_Magnificent21_20191024175510.jpg",
        des: "In the shadow of the Himalayas, just beyond the sacred town of Badrinath, lies the quaint village of Mana. Here, spanning a narrow gorge of the tumultuous Saraswati River, stands Bheem Pul—a natural rock bridge steeped in legend. ",
      },
      {
        title: "Chandra Shila",
        image: "https://www.holidify.com/images/compressed/164.jpg?v=1.1",
        des: "Chopta is a small region of meadows and evergreen forest area, a part of Kedarnath wildlife sanctuary located in Uttarakhand state, India and a base for trekking to Tungnath, the third temple of Panch Kedar which lies 3.5 kilometres (2.2 mi) away.",
      },
    ],
    info: `<ul>
  <li><strong>Rudranath Temple</strong> is an ancient Hindu temple dedicated to Lord Shiva, located in the <strong>Chamoli district</strong> of <strong>Uttarakhand</strong>, India.</li><br>
  <li>It is one of the <strong>Char Dhams</strong> (four sacred shrines) of the Garhwal Himalayas, which is considered an important pilgrimage site.</li><br>
  <li>The temple is located at an altitude of <strong>2,286 meters (7,500 feet)</strong> above sea level, offering stunning views of the surrounding mountains.</li><br>
  <li>Rudranath Temple is unique because its <strong>idol of Lord Shiva</strong> is represented by a natural rock formation, known as the <strong>“Swayambhu”</strong> (self-manifested).</li><br>
  <li>It is part of the <strong>panch kedar</strong> pilgrimage, where five temples dedicated to Lord Shiva are scattered across the region.</li><br>
  <li>The trek to Rudranath Temple is a challenging yet rewarding journey, typically taking around <strong>4-5 days</strong> from the base camp at Gopeshwar.</li><br>
  
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
    <>
      {/* <Container
        sx={{
          p: "0px",
          minHeight: "calc(100vh - 150px)",
          pt: 5,
          width: { xs: "90%", lg: "48%" },
          mb: 10,
        }}
      >
        <Card>
          <Container sx={{ p: { xs: "0px", lg: "0px" } }}>
            <SelectedPlaceCarousel data={data} />
          </Container>
          <CardHeader title={data.title} />
          <CardContent sx={{ pt: "0px", pl: "24px" }}>
            <div dangerouslySetInnerHTML={{ __html: data.info }} />
          </CardContent>
        </Card>
      </Container> */}
      <MainCarousel data={data} />
      <Container sx={{ mt: 6 }}>
        <Description data={data} />
        <NearPlaces data={data} />
        <NewCarousel data={data} />
      </Container>
    </>
  );
};

export default SelectedPlaces;
