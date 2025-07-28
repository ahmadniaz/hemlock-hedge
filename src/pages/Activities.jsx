import { useState } from "react";
import { FaStore, FaBiking, FaFish, FaGlassCheers, FaHiking, FaMapSigns, FaUtensils, FaShoppingBag, FaSnowflake, FaGolfBall, FaCampground, FaSkiing, FaTree, FaFireAlt, FaLeaf, FaBowlingBall, FaSwimmer, FaMapMarkerAlt, FaMountain, FaShoppingCart, FaWater, FaUsers, FaPhone, FaEnvelopeOpen } from "react-icons/fa";

// All activity data here. Shortened names for space but you can expand for full detail!
const activityData = [
  {
    category: "Antiquing",
    icon: <FaShoppingBag />,
    items: [
      { name: "Docktor's Treasures & Trees", contact: "Willard & Alice Docktor", phone: "(570) 869-1500" },
      { name: "Brooks Farm Antiques & Collectibles", contact: "Ron & Diane Brooks", phone: "(570) 278-9313" },
      { name: "Mary's Home Furnishings", contact: "Mary B. Gere", phone: "(570) 278-2187" },
      { name: "Lee & Son Furniture & Antiques", contact: "Donald & Rebekah Lee", phone: "(570) 965-2121" },
      { name: "Aqua Inn Antiques 'n more", contact: "Jack & Carol Masters", phone: "(570) 289-4984 / (570) 289-4581", address: "Kingley, PA" },
      { name: "The Black Cat", contact: "Kate Hari", phone: "(570) 465-3327", address: "New Milford PA" },
      { name: "Never Too Old Antiques & Things", contact: "Marion Leorard & Lil Davies", phone: "(570) 465-7613", address: "Rt. 11 between Hallstead & New Milford, PA at Summersville (Precision Glass Bldg.)" },
      { name: "Not Just Antiques", contact: "Pat Green", phone: "(570) 756-GIFT", address: "Rt. 22, Jackson, PA 18825. Exit 211 on I-81" },
      { name: "The Treasure Chest", contact: "Sandy Yannotta", phone: "(570) 222-4020", address: "South Gibson, PA." },
      { name: "The Marten Creek Switch Shoppes", contact: "Jan Watkins", phone: "(570) 942-4105", address: "Rt. 11 between Nicholson & Hop Bottom" },
      { name: "Lucy's Corner Cabinet", contact: "Lucy & Fred Vierling", phone: "(570) 222-3737", address: "Rt. 22, Lenox, PA 18826. Six miles North of Nicholson, 4 miles South of Exit 211 on I-81" },
      { name: "The Carriage Barn Antiques", phone: "(570) 587-5405" },
    ]
  },
  {
    category: "Berry Picking",
    icon: <FaLeaf />,
    description: "The property is loaded with wild blueberry bushes. They usually are ripe around mid August.",
    items: [],
  },
  {
    category: "Biking",
    icon: <FaBiking />,
    items: [
      { name: "D & H Rail-Trails of NEPA", description: "Great family ride: Simpson PA to NY border or any section." },
      { name: "Merli-Sarnoski Park", description: "Hardcore mountain biking. Lots of single track, rocks, down trees, roots, beautiful lake scenery." },
      { name: "Hubbard Bicycle Club", url: "http://www.hubbardbicycleclub.com/", description: "45 minutes south. Great riding—see site for directions." },
      { name: "New Milford Bike", url: "http://www.newmilfordbike.com/", phone: "570-465-2169" }
    ]
  },
  {
    category: "Boating & Canoeing",
    icon: <FaCampground />,
    description: "Boat/canoe on our private lake. Delaware River is just 10 miles east. Other public lakes nearby.",
    items: [],
  },
  {
    category: "Bowling",
    icon: <FaBowlingBall />,
    items: [
      { name: "Valley Lanes Carbondale", phone: "570-282-3960" },
      { name: "Belvedere Lanes", phone: "570-942-6868" }
    ]
  },
  {
    category: "Golf",
    icon: <FaGolfBall />,
    items: [
      { name: "Scottish Glen at Fern Hall", phone: "(570) 222-3676", address: "RR1 Box 1095 Crystal Lake, Carbondale, PA 18446" },
      { name: "Panorama Golf Course", phone: "(570)222-3525", address: "RR1 Rt. 247, Forest City, PA 18421" },
      { name: "Rock Creek Golf Course & Practice Range", phone: "(570) 222-2500", address: "Exit 206 off Rt. 81, Lenoxville, PA" },
      { name: "Homestead Golf Course", phone: "(570) 282-5197", address: "RR 1, Rt. 106, Carbondale, PA 18407" },
      { name: "Skyline Golf Course", phone: "(570) 282-5993", address: "RR1, Rt. 247, Carbondale, PA 18407" },
      { name: "Sleepy Hollow Golf Course", phone: "(570) 254-4653", address: "Chapman Lake Road, Carbondale, PA 18407" },
      { name: "Lake Lorain Golf Club", phone: "(570) 448-2232", address: "Rt. 370, Poyntelle, PA 18454. 9 holes, driving range, pro shop, snack bar, restaurant/bar, club/cart rental." },
      { name: "Memorial Links", phone: "(570) 448-9200", address: "Rt. 170, Pleasant Mount, PA 18453. 9 holes, reservations on weekends." },
      { name: "Shadowbrook Golf Course", phone: "(570) 836-5417", address: "Rt. 6, Tunkhannock, PA 18657. 18 holes, reservations April-Sept., driving range, pro shop, golf school, snack bar, club/cart rental." },
    ]
  },
  {
    category: "Grocery Stores",
    icon: <FaStore />,
    items: [
      { name: "Hobbs Market", phone: "570-727-2090", address: "Thompson, PA" },
      { name: "Weis Market", phone: "570-253-9797", address: "1199 Texas Palmyra Hwy Ste N, Honesdale PA" },
      { name: "Weis Market", phone: "570-281-3300", address: "97 Brooklyn St. Carbondale PA" },
      { name: "Schneider's Market", phone: "570-853-4415", address: "250 Erie Blvd, Susquehanna, PA" },
      { name: "Zazzera's Grocery", phone: "570-785-3128", address: "600 Main St  Forest City PA" }
    ]
  },
  {
    category: "Fishing",
    icon: <FaFish />,
    description: "Fish Pine Lake (100ft from the lodge), other nearby lakes, and world-renowned upper Delaware trout fishing.",
    items: [
      { name: "Lackawanna River Corridor Association" },
      { name: "PA Fish & Boat Commission Lakes", url: "http://www.fish.state.pa.us/Fish/lakes.htm" },
      { name: "Public access points", url: "http://sites.state.pa.us/PA_Exec/Fish_Boat/access.htm" }
    ]
  },
  {
    category: "Fishing Guides",
    icon: <FaMapSigns />,
    items: [
      { name: "Jerry Hadden's Guide Service", description: "Delaware River Float Trips, Hatch Info", url: "http://www.jerryhadden.com" },
      { name: "Michael Padua", url: "http://www.sweetwaterguide.com" },
      { name: "L.D. Guide Service", phone: "(570) 250-1147", url: "http://www.ldguideservice.com" },
      { name: "Rick Murphy: No Lodge Guide Service", url: "http://nolodgeguideservice.com" }
    ]
  },
  {
    category: "Local Camps for Kids",
    icon: <FaTree />,
    items: [
      { name: "Camp Tioga", url: "http://www.camptioga.com/" },
      { name: "Independent Lake Camp", url: "http://www.independentlake.com/" },
      { name: "Lake Greeley Camp", url: "http://www.lakegreeley.com/" },
      { name: "Camp Watonka", url: "http://www.watonka.com" },
      { name: "Pine Forest Camp", url: "http://www.pineforestcamp.com/" },
      { name: "Camp Cayuga", url: "http://www.campcayuga.com/" },
      { name: "YMCA Camp Skycrest", url: "http://www.ycampskycrest.org/" },
      { name: "Summit Camp", url: "http://www.summitcamp.com/" },
      { name: "Indian Head Camp", url: "http://www.indianhead.com/" }
    ]
  },
  {
    category: "Hiking",
    icon: <FaHiking />,
    items: [
      { name: "On-property Trails", description: "Miles of private scenic trails." },
      { name: "Florence Shelly Preserve", description: "Self-guided trails, 357 acres", phone: "570-756-2429", url: "http://www.nature.org/wherewework/northamerica/states/pennsylvania/preserves/art827.html" },
      { name: "Lacawac Sanctuary", description: "Nature walks, 500-acre sanctuary", phone: "570-689-9494" },
      { name: "Rail-Trail Council of Northeast PA", url: "http://www.nepa-rail-trails.org/" },
      { name: "Archbald Pothole State Park" },
      { name: "Salt Springs State Park" },
      { name: "Lackawanna State Park" },
      { name: "Nescopeck State Park" },
      { name: "Ricketts Glen State Park" },
      { name: "Varden Conservation Area" }
    ]
  },
  {
    category: "Hunting",
    icon: <FaFireAlt />,
    items: [
      { name: "Pennsylvania Game Commission", url: "http://www.pgc.state.pa.us/" },
      { name: "Spruce Hill Guide Service", phone: "(570) 224-4191", url: "http://www.twinsprucelodge.com/" },
      { name: "Rick Murphy: No Lodge Guide Service", url: "http://nolodgeguideservice.com" }
    ]
  },
  {
    category: "Local Attractions",
    icon: <FaGlassCheers />,
    items: [
      { name: "Electric City Trolley Museum", url: "http://www.ectma.org" },
      { name: "Dorflinger Glass Museum", url: "http://www.dorflinger.com/" },
      { name: "Callender’s Sugar House", phone: "570-727-2982", address: "Thompson" },
      { name: "Cider Mill Playhouse" },
      { name: "Elk Mountain Area Guide", url: "http://www.elkmtnarea.com/" },
      { name: "Elk Mountain Ski Resort", url: "http://www.elkskier.com" },
      { name: "Everhart Museum", url: "http://www.everhart-museum.org/" },
      { name: "Houdini Museum", url: "http://www.houdini.org" },
      { name: "J.E.M. Classic Car Museum, Andreas", phone: "570-386-3554" },
      { name: "Lackawanna Coal Mine Tour", url: "http://www.visitnepa.org/coalmine" },
      { name: "Northeast PA Visitors Bureau", url: "http://www.visitnepa.org/" },
      { name: "Old Mill Village", url: "http://www.oldmillvillage.com" },
      { name: "Pocono Downs", url: "http://www.poconodowns.com" },
      { name: "Pocono International Raceway", url: "http://www.poconoraceway.com" },
      { name: "Red Barons Baseball (Phillies AAA)", url: "http://www.redbarons.com" },
      { name: "Stourbridge Rail Excursions, Honesdale", phone: "570-253-1960" },
      { name: "Steamtown National Historic Site", url: "http://www.nps.gov/stea/" },
      { name: "Wilkes-Barre Scranton Penguins", url: "http://www.wbspenguins.com" }
    ]
  },
  {
    category: "Restaurants",
    icon: <FaUtensils />,
    items: [
      { name: "Chet’s Place", address: "Union Dale, PA", phone: "570-679-2129", url: "http://www.chetsplace.com", description: "Take-Out. Live music Wednesdays/weekends. Sandwiches, entrees $2.75–$12.95." },
      { name: "Stone Bridge Restaurant", address: "Union Dale, PA", phone: "570-679-9500", url: "http://www.stone-bridge-inn.com", description: "Beautiful setting, gourmet dishes $7–$29.95." },
      { name: "Elegante Restaurant and Pizzaria", address: "315 South Main Street, Forest City, PA", url: "http://www.eleganterestaurant.com", description: "Italian-American cuisine $3–$17, catering available." },
      { name: "Elk Mountain Ski Resort", address: "RR2, Box 3328, Union Dale, PA", phone: "570-679-4400", url: "http://www.elkskier.com", description: "Soups, salads, sandwiches. See website for details." },
      { name: "Giuseppe's Pizza & Hoagies", address: "500 Main St, Forest City, PA", phone: "570-785-6411" },
      { name: "Pleasant Mount Café", address: "State Route 371, Pleasant Mount, PA", phone: "570-448-2127" },
      { name: "Jay Dee's Bar & Grill", address: "923 Main St, Forest City, PA", phone: "570-785-5995" },
      { name: "The Inn At Starlight Lake Restaurant", address: "289 Starlight Lake Road, Starlight, PA", url: "http://www.innatstarlightlake.com", description: "Pretty setting, award-winning pastry chef." },
      { name: "McDonnell's Family Restaurant", address: "7 Main St., Carbondale, PA", phone: "570-282-5144" },
      { name: "Mamasita's Mexican Food", phone: "570-222-6262" },
      { name: "Mountain View Restaurant", phone: "570-222-5000" }
    ]
  },
  {
    category: "Shopping",
    icon: <FaShoppingCart />,
    items: [
      { name: "Retail Malls and Stores", description: "On RT 6 in Carbondale" },
      { name: "Crossings Outlets", description: "Tannersville (one hour south off RT 80)" }
    ]
  },
  {
    category: "Skiing",
    icon: <FaSkiing />,
    items: [
      { name: "Callender’s Sugar House", phone: "570-727-2982" },
      { name: "Elk Mountain Ski Resort", url: "http://www.elkskier.com" },
      { name: "Idlewild Ski Shop & Rentals", url: "http://www.idlewildskishop.com" },
      { name: "Chet's Place", url: "http://www.chetsplace.com" },
      { name: "Mount Tone Ski Camp", address: "Wallerville Road, Lake Como, PA 18437", phone: "(800) 747-2SKI" }
    ]
  },
  {
    category: "Snowmobiling",
    icon: <FaSnowflake />,
    items: [
      { name: "D & H Rail-Trails of NEPA", url: "http://www.nepa-rail-trails.org" },
      { name: "NEPA Snow Trails", url: "http://www.pasnow.org" }
    ]
  },
  {
    category: "State Parks",
    icon: <FaMountain />,
    description: "See Hiking section above for full list.",
    items: []
  },
  {
    category: "Swimming",
    icon: <FaSwimmer />,
    description: "Swim in our private lake or ask for other local options.",
    items: []
  },
  {
    category: "White Water Rafting & Canoeing",
    icon: <FaWater />,
    items: [
      { name: "Lander's River Trips" },
      { name: "Kittantinny Canoes, Dingman’s Ferry", phone: "800-356-2852" },
      { name: "Soaring Eagle Campground", phone: "877-278-8383", url: "http://www.soaringeaglecampground.com", description: "Upper Delaware River near Equinumk, PA" }
    ]
  },
];

function LocalActivities() {
  const [modalCategory, setModalCategory] = useState(null);
  const modalData = activityData.find((c) => c.category === modalCategory);

  return (
    <main style={{
      background: "linear-gradient(120deg, #eaf6fb 0%, #f7fff7 100%)",
      minHeight: "100vh",
      padding: 0
    }}>
      <section style={{
        maxWidth: 1150,
        margin: "0 auto",
        padding: "3vw 4vw 2vw 4vw"
      }}>
        <h1 style={{
          fontSize: "2.2rem",
          fontFamily: "'Playfair Display', serif",
          color: "#29422c",
          fontWeight: 800,
          letterSpacing: "1px",
          textAlign: "center"
        }}>
          Local Activities & Attractions
        </h1>
        <div style={{
          maxWidth: 900,
          margin: "1.5rem auto 2.5rem",
          color: "#52796f",
          background: "#ffffffd9",
          borderRadius: "1.2rem",
          padding: "1.5rem 2rem",
          boxShadow: "0 2px 16px #b7b7a433",
          fontSize: "1.12rem"
        }}>
          <p>
            <b>Call for hours of operation and directions.</b> All listings are provided for your convenience, not as endorsements. If you find another activity that is not listed or have corrections please let us know at <a href="mailto:nfahimi@yahoo.com" style={{ color: "#497C5C", textDecoration: "underline" }}>nfahimi@yahoo.com</a>.
          </p>
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(265px, 1fr))",
          gap: "2.3rem",
          marginBottom: "4rem"
        }}>
          {activityData.map((cat) => (
            <div key={cat.category}
              style={{
                background: "rgba(255,255,255,0.98)",
                borderRadius: "1.5rem",
                boxShadow: "0 4px 24px rgba(80,112,72,0.07)",
                padding: "2.3rem 1.5rem 2rem 1.5rem",
                textAlign: "center",
                cursor: "pointer",
                transition: "transform 0.15s",
                border: "1.5px solid #eaf6fb",
                minHeight: 160
              }}
              onClick={() => setModalCategory(cat.category)}
              tabIndex={0}
              aria-label={"See all " + cat.category}
            >
              <div style={{
                fontSize: "2.5rem",
                marginBottom: 16,
                color: "#7cb518"
              }}>{cat.icon}</div>
              <div style={{
                fontWeight: 700,
                fontSize: "1.17rem",
                fontFamily: "'Playfair Display', serif",
                color: "#39553A",
                marginBottom: 8
              }}>{cat.category}</div>
              {cat.description && <div style={{ color: "#52796f", fontSize: "1.02rem", minHeight: 36 }}>{cat.description}</div>}
              {cat.items.length > 0 && <div style={{ marginTop: 8, color: "#a7c957", fontWeight: 500, fontSize: "1.02rem" }}>{cat.items.length} listings</div>}
            </div>
          ))}
        </div>
      </section>

      {/* Modal Overlay for Category */}
      {modalCategory && modalData && (
        <div
          style={{
            position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh",
            background: "rgba(32,55,36,0.60)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center"
          }}
          onClick={() => setModalCategory(null)}
        >
          <div
            style={{
              background: "#f7fff7",
              borderRadius: "2.2rem",
              boxShadow: "0 10px 60px #39553a44, 0 2px 16px #fff7",
              padding: "2.6rem 3vw",
              minWidth: 340,
              maxWidth: 540,
              maxHeight: "80vh",
              overflowY: "auto",
              position: "relative"
            }}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setModalCategory(null)}
              style={{
                position: "absolute", top: 18, right: 24, background: "none", border: "none", fontSize: 32, color: "#a7c957", cursor: "pointer", lineHeight: 1
              }}
              aria-label="Close"
            >&times;</button>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 12 }}>
              <span style={{ fontSize: 28 }}>{modalData.icon}</span>
              <div style={{ fontFamily: "'Playfair Display', serif", color: "#39553A", fontWeight: 700, fontSize: "1.24rem" }}>{modalData.category}</div>
            </div>
            {modalData.description && <p style={{ color: "#52796f", marginBottom: 16 }}>{modalData.description}</p>}
            <ul style={{ padding: 0, listStyle: "none" }}>
              {modalData.items.map((item, idx) => (
                <li key={idx} style={{ marginBottom: 18, color: "#2d3a2e", fontSize: "1.08rem" }}>
                  <b>{item.name}</b>
                  {item.description && <span style={{ color: "#4b6958", fontWeight: 400 }}> – {item.description}</span>}
                  {item.address && <span style={{ color: "#8a9a5b" }}> ({item.address})</span>}
                  {item.phone && <> <FaPhone style={{ fontSize: 13, verticalAlign: -2, marginLeft: 5, marginRight: 2 }} /> <span style={{ color: "#8a9a5b" }}>{item.phone}</span></>}
                  {item.url && <> {` `}<a href={item.url} target="_blank" rel="noopener noreferrer" style={{ color: "#386641", textDecoration: "underline" }}>{item.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}</a></>}
                </li>
              ))}
            </ul>
            {modalData.items.length === 0 && (
              <div style={{ color: "#668166", fontStyle: "italic", marginTop: 12 }}>No detailed listings. See description above.</div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

export default LocalActivities;
