// Network section: South Africa map with three regional networks (CT, JHB, DBN)
// rendered as Force-Edge-Bundling-bundled lines between hub and city nodes,
// plus traveling pulse dots along the bundled paths. d3, topojson-client, and
// the FDEB algorithm are vendored via npm + a local module, but loaded with a
// dynamic import() that only fires when the section enters the viewport — so
// Vite emits them as a separate chunk and they don't ship in the initial bundle.

const HUBS = [
  { key: "cpt", name: "Cape Town",     lon: 18.4241, lat: -33.9249 },
  { key: "jhb", name: "Johannesburg",  lon: 28.0473, lat: -26.2041 },
  { key: "dbn", name: "Durban",        lon: 31.0218, lat: -29.8587 }
];

const CITIES = [
  // Western Cape
  { name: "Stellenbosch",      lon: 18.8602, lat: -33.9321 },
  { name: "Paarl",             lon: 18.9776, lat: -33.7274 },
  { name: "Worcester",         lon: 19.4485, lat: -33.6464 },
  { name: "Hermanus",          lon: 19.2345, lat: -34.4187 },
  { name: "Knysna",            lon: 23.0444, lat: -34.0363 },
  { name: "George",            lon: 22.4617, lat: -33.9628 },
  { name: "Plettenberg Bay",   lon: 23.3704, lat: -34.0527 },
  { name: "Mossel Bay",        lon: 22.1462, lat: -34.1832 },
  { name: "Beaufort West",     lon: 22.5855, lat: -32.3565 },
  { name: "Saldanha",          lon: 17.9442, lat: -33.0117 },
  { name: "Vredenburg",        lon: 17.9876, lat: -32.9079 },
  { name: "Oudtshoorn",        lon: 22.2106, lat: -33.5864 },
  { name: "Robertson",         lon: 19.8895, lat: -33.8033 },
  { name: "Caledon",           lon: 19.4276, lat: -34.2293 },
  { name: "Citrusdal",         lon: 19.0166, lat: -32.5891 },
  // Northern Cape
  { name: "Kimberley",         lon: 24.7499, lat: -28.7282, major: true },
  { name: "Upington",          lon: 21.2561, lat: -28.4478 },
  { name: "Springbok",         lon: 17.8868, lat: -29.6648 },
  { name: "De Aar",            lon: 24.0214, lat: -30.6516 },
  { name: "Colesberg",         lon: 25.0975, lat: -30.7197 },
  { name: "Calvinia",          lon: 19.7716, lat: -31.4690 },
  // Gauteng & surrounds
  { name: "Pretoria",          lon: 28.1881, lat: -25.7479, major: true },
  { name: "Soweto",            lon: 27.8579, lat: -26.2678, major: true },
  { name: "Centurion",         lon: 28.1878, lat: -25.8579 },
  { name: "Sandton",           lon: 28.0567, lat: -26.1076 },
  { name: "Midrand",           lon: 28.1232, lat: -25.9994 },
  { name: "Vereeniging",       lon: 27.9319, lat: -26.6739 },
  { name: "Vanderbijlpark",    lon: 27.8378, lat: -26.7117 },
  { name: "Krugersdorp",       lon: 27.7749, lat: -26.0856 },
  { name: "Roodepoort",        lon: 27.8728, lat: -26.1625 },
  // North West
  { name: "Rustenburg",        lon: 27.2422, lat: -25.6672 },
  { name: "Klerksdorp",        lon: 26.6519, lat: -26.8667 },
  { name: "Potchefstroom",     lon: 27.0972, lat: -26.7145 },
  { name: "Mahikeng",          lon: 25.6300, lat: -25.8657 },
  { name: "Brits",             lon: 27.7836, lat: -25.6362 },
  // Mpumalanga
  { name: "Mbombela",          lon: 30.9700, lat: -25.4753, major: true },
  { name: "Witbank",           lon: 29.2099, lat: -25.8741 },
  { name: "Middelburg",        lon: 29.4636, lat: -25.7732 },
  { name: "Secunda",           lon: 29.1919, lat: -26.5560 },
  { name: "White River",       lon: 31.0140, lat: -25.3303 },
  { name: "Barberton",         lon: 31.0523, lat: -25.7857 },
  // Limpopo
  { name: "Polokwane",         lon: 29.4699, lat: -23.9045, major: true },
  { name: "Tzaneen",           lon: 30.1632, lat: -23.8331 },
  { name: "Phalaborwa",        lon: 31.1399, lat: -23.9425 },
  { name: "Mokopane",          lon: 29.0094, lat: -24.1944 },
  { name: "Thohoyandou",       lon: 30.4839, lat: -22.9500 },
  { name: "Giyani",            lon: 30.7195, lat: -23.3022 },
  // Free State
  { name: "Bloemfontein",      lon: 26.1596, lat: -29.0852, major: true },
  { name: "Welkom",            lon: 26.7367, lat: -27.9783 },
  { name: "Bethlehem",         lon: 28.3050, lat: -28.2330 },
  { name: "Kroonstad",         lon: 27.2270, lat: -27.6565 },
  { name: "Sasolburg",         lon: 27.8161, lat: -26.8113 },
  { name: "Harrismith",        lon: 29.1267, lat: -28.2729 },
  // KwaZulu-Natal
  { name: "Pinetown",          lon: 30.8624, lat: -29.8203 },
  { name: "Pietermaritzburg",  lon: 30.3923, lat: -29.6094, major: true },
  { name: "Newcastle",         lon: 29.9322, lat: -27.7574 },
  { name: "Ladysmith",         lon: 29.7741, lat: -28.5572 },
  { name: "Richards Bay",      lon: 32.0387, lat: -28.7807 },
  { name: "Empangeni",         lon: 31.9000, lat: -28.7415 },
  { name: "Margate",           lon: 30.3700, lat: -30.8633 },
  { name: "Port Shepstone",    lon: 30.4505, lat: -30.7411 },
  { name: "Vryheid",           lon: 30.7913, lat: -27.7689 },
  { name: "Eshowe",            lon: 31.4750, lat: -28.8943 },
  { name: "Ulundi",            lon: 31.4185, lat: -28.3322 },
  { name: "KwaDukuza",         lon: 31.2828, lat: -29.3275 },
  { name: "Howick",            lon: 30.2342, lat: -29.4905 },
  // Eastern Cape
  { name: "Gqeberha",          lon: 25.6022, lat: -33.9608, major: true },
  { name: "East London",       lon: 27.9116, lat: -32.9783, major: true },
  { name: "Mthatha",           lon: 28.7820, lat: -31.5889, major: true },
  { name: "Port Alfred",       lon: 26.8909, lat: -33.5916 },
  { name: "Makhanda",          lon: 26.5328, lat: -33.3092 },
  { name: "Komani",            lon: 26.8753, lat: -31.8976 },
  { name: "King Williams Town",lon: 27.3963, lat: -32.8845 },
  { name: "Aliwal North",      lon: 26.7079, lat: -30.6929 },
  { name: "Cradock",           lon: 25.6181, lat: -32.1652 }
];

// Metropolitan clusters: each gets N satellite points scattered around the
// center to visually convey "lots of activity within this city". The center
// itself must match a name in HUBS or CITIES (we anchor edges to that node).
const METRO_CLUSTERS = [
  // Major metros
  { name: "Cape Town",        satellites: 30 },
  { name: "Johannesburg",     satellites: 32 },
  { name: "Pretoria",         satellites: 22 },
  { name: "Durban",           satellites: 26 },
  { name: "Bloemfontein",     satellites: 12 },
  { name: "Gqeberha",         satellites: 16 },
  { name: "East London",      satellites: 12 },
  { name: "Polokwane",        satellites: 10 },
  { name: "Mbombela",         satellites: 10 },
  { name: "Pietermaritzburg", satellites: 10 },
  { name: "Mthatha",          satellites: 8 },
  { name: "Kimberley",        satellites: 8 },
  { name: "Welkom",           satellites: 10 },
  { name: "Rustenburg",       satellites: 10 },
  // Smaller cities — secondary clusters
  { name: "Newcastle",        satellites: 7 },
  { name: "Richards Bay",     satellites: 7 },
  { name: "Ladysmith",        satellites: 5 },
  { name: "Klerksdorp",       satellites: 6 },
  { name: "Potchefstroom",    satellites: 6 },
  { name: "Witbank",          satellites: 7 },
  { name: "Vereeniging",      satellites: 7 },
  { name: "George",           satellites: 7 },
  { name: "Upington",         satellites: 6 },
  { name: "Bethlehem",        satellites: 6 },
  { name: "Tzaneen",          satellites: 6 },
  { name: "Mokopane",         satellites: 5 },
  { name: "Phalaborwa",       satellites: 5 },
  { name: "Howick",           satellites: 5 }
];

// Tiny seeded PRNG (mulberry32) so satellite positions are deterministic.
function makeRng(seed) {
  let t = seed >>> 0;
  return function () {
    t = (t + 0x6D2B79F5) >>> 0;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

// Generate satellites and reject any that fall outside the SA polygon —
// retry with a fresh random position until inside, capped at 30 attempts
// per requested satellite (in practice ~1-3 attempts even for coastal metros).
function generateSatellites(za, d3) {
  const rng = makeRng(20260502);
  const allCenters = new Map();
  HUBS.forEach(h => allCenters.set(h.name, { lon: h.lon, lat: h.lat }));
  CITIES.forEach(c => allCenters.set(c.name, { lon: c.lon, lat: c.lat }));
  const sats = [];
  METRO_CLUSTERS.forEach(metro => {
    const center = allCenters.get(metro.name);
    if (!center) return;
    const maxRadius = 0.35; // degrees, ~35km on the ground
    let placed = 0;
    let attempts = 0;
    while (placed < metro.satellites && attempts < metro.satellites * 30) {
      attempts++;
      const angle = rng() * Math.PI * 2;
      const dist = Math.sqrt(rng()) * maxRadius;
      const lon = center.lon + Math.cos(angle) * dist;
      const lat = center.lat + Math.sin(angle) * dist;
      if (!d3.geoContains(za, [lon, lat])) continue;
      sats.push({ lon, lat, cluster: metro.name, satellite: true });
      placed++;
    }
  });
  return sats;
}

const WORLD_TOPOJSON = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json";

async function loadDeps() {
  const [d3, topojson, fdeb] = await Promise.all([
    import("d3"),
    import("topojson-client"),
    import("./vendor/force-edge-bundling.js")
  ]);
  return { d3, topojson, ForceEdgeBundling: fdeb.ForceEdgeBundling };
}

// Filter a GeoJSON feature to keep only polygons within mainland SA bounds.
// Prince Edward Islands (Marion + Prince Edward, lat ~-46°) are excluded so
// fitSize doesn't scale to a bbox that includes them.
function mainlandOnly(feature) {
  const g = feature.geometry;
  if (!g || (g.type !== "MultiPolygon" && g.type !== "Polygon")) return feature;
  const polys = g.type === "MultiPolygon" ? g.coordinates : [g.coordinates];
  const kept = polys.filter(poly => {
    const outer = poly[0]; // outer ring
    // Keep polygons whose northernmost point is above latitude -36
    // (mainland SA's southernmost point, Cape Agulhas, is ~-34.83).
    const maxLat = Math.max.apply(null, outer.map(p => p[1]));
    return maxLat > -36;
  });
  return {
    ...feature,
    geometry: { type: "MultiPolygon", coordinates: kept }
  };
}

function nearestHub(city) {
  let best = HUBS[0];
  let bestDist = Infinity;
  for (const hub of HUBS) {
    const d = Math.hypot(city.lon - hub.lon, city.lat - hub.lat);
    if (d < bestDist) { bestDist = d; best = hub; }
  }
  return best.key;
}

async function render(container, deps) {
  const { d3, topojson, ForceEdgeBundling } = deps;
  if (!d3 || !topojson) return;

  const width = container.clientWidth;
  const height = container.clientHeight;
  if (width === 0 || height === 0) return;

  const svg = d3.select(container)
    .append("svg")
    .attr("viewBox", `0 0 ${width} ${height}`)
    .attr("preserveAspectRatio", "xMidYMid meet");

  // Fetch SA boundary from world-atlas, filter to ZAF
  let world;
  try {
    world = await d3.json(WORLD_TOPOJSON);
  } catch (e) {
    return;
  }
  const features = topojson.feature(world, world.objects.countries).features;
  const zaRaw = features.find(f => f.properties && f.properties.name === "South Africa");
  if (!zaRaw) return;

  // Strip Prince Edward Islands (Marion + Prince Edward, ~46°S in the Indian
  // Ocean) — they're part of the SA "South Africa" feature but ~1300km south
  // of the mainland, which would otherwise inflate the bounding box and shrink
  // the mainland render to half its size.
  const za = mainlandOnly(zaRaw);

  // Mercator projection — SA fills the panel edge-to-edge
  const projection = d3.geoMercator().fitSize([width, height], za);
  const path = d3.geoPath().projection(projection);

  // Draw landmass
  svg.append("path")
    .datum(za)
    .attr("class", "network__land")
    .attr("d", path);

  // Project hubs, cities, and satellites
  const projHubs = HUBS.map(h => {
    const [x, y] = projection([h.lon, h.lat]);
    return { ...h, x, y, isHub: true };
  });
  const projCities = CITIES.map(c => {
    const [x, y] = projection([c.lon, c.lat]);
    return { ...c, x, y, hub: nearestHub(c) };
  });
  // Satellites are generated here (not at module load) so they can be
  // validated against the cleaned SA polygon — no satellites in the sea.
  const satellites = generateSatellites(za, d3);
  const projSatellites = satellites.map(s => {
    const [x, y] = projection([s.lon, s.lat]);
    return { ...s, x, y };
  });

  const allNodes = [...projHubs, ...projCities, ...projSatellites];
  const HUB_COUNT = projHubs.length;
  const CITY_COUNT = projCities.length;

  // Look up a node index by metro-cluster name (matches HUBS or CITIES name).
  const nameToIdx = new Map();
  HUBS.forEach((h, i) => nameToIdx.set(h.name, i));
  CITIES.forEach((c, i) => nameToIdx.set(c.name, HUB_COUNT + i));

  // Build edges with locality tags. `local` edges are within a metro / region
  // (most travel dots ride here). `trunk` edges are long-distance.
  const edgeKeys = new Set();
  const edges = [];
  const edgeMeta = []; // parallel to edges; { local: bool }
  const addEdge = (i, j, local) => {
    if (i === j) return;
    const a = Math.min(i, j), b = Math.max(i, j);
    const key = `${a}-${b}`;
    if (edgeKeys.has(key)) return;
    edgeKeys.add(key);
    edges.push({ source: String(a), target: String(b) });
    edgeMeta.push({ local });
  };

  // (1) Each satellite → its cluster center (LOCAL). Dense intra-metro spokes.
  projSatellites.forEach((sat, si) => {
    const satIdx = HUB_COUNT + CITY_COUNT + si;
    const centerIdx = nameToIdx.get(sat.cluster);
    if (centerIdx !== undefined) addEdge(satIdx, centerIdx, true);
  });

  // (2) Each satellite → its single nearest in-cluster sibling (LOCAL).
  //     Gives FDEB lots of short parallel edges to bundle into local rivers.
  projSatellites.forEach((sat, si) => {
    const satIdx = HUB_COUNT + CITY_COUNT + si;
    let bestIdx = -1, bestD = Infinity;
    projSatellites.forEach((other, oi) => {
      if (oi === si || other.cluster !== sat.cluster) return;
      const d = Math.hypot(sat.x - other.x, sat.y - other.y);
      if (d < bestD) { bestD = d; bestIdx = HUB_COUNT + CITY_COUNT + oi; }
    });
    if (bestIdx >= 0) addEdge(satIdx, bestIdx, true);
  });

  // (3) Intra-region city all-pairs (LOCAL, lighter cap than before since
  //     satellites already provide visual density).
  const regionMembers = HUBS.map((h, hi) => {
    const cityIndices = projCities
      .map((c, ci) => (c.hub === h.key ? HUB_COUNT + ci : -1))
      .filter(idx => idx >= 0);
    return { hubIdx: hi, members: [hi, ...cityIndices] };
  });
  const PER_REGION_CAP = 30;
  regionMembers.forEach(r => {
    let count = 0;
    for (let i = 0; i < r.members.length && count < PER_REGION_CAP; i++) {
      for (let j = i + 1; j < r.members.length && count < PER_REGION_CAP; j++) {
        addEdge(r.members[i], r.members[j], true);
        count++;
      }
    }
  });

  // (4) Cross-region trunk — hub-to-hub (TRUNK). Few but visible long lines.
  for (let i = 0; i < HUB_COUNT; i++) {
    for (let j = i + 1; j < HUB_COUNT; j++) addEdge(i, j, false);
  }

  // (5) Each city → 2nd-nearest hub (TRUNK). Secondary cross-region routes.
  projCities.forEach((c, ci) => {
    const cityIdx = HUB_COUNT + ci;
    const distances = HUBS.map((h, hi) => ({
      idx: hi,
      d: Math.hypot(c.lon - h.lon, c.lat - h.lat)
    })).sort((a, b) => a.d - b.d);
    if (distances.length >= 2) {
      addEdge(cityIdx, distances[1].idx, false);
    }
  });

  // FDEB across the whole network (or straight-line fallback)
  let bundledPaths = null;
  if (ForceEdgeBundling && allNodes.length > 2) {
    const nodeData = {};
    allNodes.forEach((n, i) => { nodeData[String(i)] = { x: n.x, y: n.y }; });
    const fdeb = ForceEdgeBundling()
      .step_size(0.1)
      .compatibility_threshold(0.6)
      .iterations(60)
      .cycles(6)
      .nodes(nodeData)
      .edges(edges);
    bundledPaths = fdeb();
  }

  const networkGroup = svg.append("g")
    .attr("class", "network__layer")
    .attr("opacity", 0);

  // Lines
  const lineGen = d3.line().x(d => d.x).y(d => d.y).curve(d3.curveLinear);
  const linesGroup = networkGroup.append("g").attr("class", "network__lines");
  let pathSelection;
  if (bundledPaths) {
    pathSelection = linesGroup.selectAll("path")
      .data(bundledPaths)
      .join("path")
      .attr("class", "network__line")
      .attr("d", d => lineGen(d));
  } else {
    linesGroup.selectAll("line")
      .data(edges)
      .join("line")
      .attr("class", "network__line")
      .attr("x1", e => allNodes[+e.source].x)
      .attr("y1", e => allNodes[+e.source].y)
      .attr("x2", e => allNodes[+e.target].x)
      .attr("y2", e => allNodes[+e.target].y);
  }

  // Dots — four tiers: hub (5px coral), major city (3px ink),
  // regular city (1.8px ink), satellite (1.1px ink at low opacity).
  const dotsGroup = networkGroup.append("g").attr("class", "network__dots");
  dotsGroup.selectAll("circle")
    .data(allNodes)
    .join("circle")
    .attr("class", d => {
      if (d.isHub) return "network__dot network__dot--hub";
      if (d.major) return "network__dot network__dot--major";
      if (d.satellite) return "network__dot network__dot--satellite";
      return "network__dot";
    })
    .attr("cx", d => d.x)
    .attr("cy", d => d.y)
    .attr("r", d => d.isHub ? 3.5 : (d.major ? 2.1 : (d.satellite ? 0.8 : 1.3)));

  // Traveling pulse dots — biased ~80% on local edges (within metros / regions),
  // ~20% on trunk edges (long-distance), so motion clusters around cities.
  if (pathSelection) {
    const pathNodes = pathSelection.nodes();
    const localIdxs = [];
    const trunkIdxs = [];
    edgeMeta.forEach((m, i) => {
      if (m.local) localIdxs.push(i);
      else trunkIdxs.push(i);
    });

    const TARGET_LOCAL = 1600;
    const TARGET_TRUNK = 400;
    const localStep = Math.max(1, Math.floor(localIdxs.length / TARGET_LOCAL));
    const trunkStep = Math.max(1, Math.floor(trunkIdxs.length / TARGET_TRUNK));

    const animateOnPath = pathEl => {
      const total = pathEl.getTotalLength();
      if (total === 0) return;
      const dot = networkGroup.append("circle")
        .attr("class", "network__travel")
        .attr("r", 1.4);
      const duration = (total / 8) * 1000;
      const animate = () => {
        dot.transition()
          .ease(d3.easeLinear)
          .duration(duration)
          .attrTween("transform", () => t => {
            const p = pathEl.getPointAtLength(t * total);
            return `translate(${p.x},${p.y})`;
          })
          .transition()
          .ease(d3.easeLinear)
          .duration(duration)
          .attrTween("transform", () => t => {
            const p = pathEl.getPointAtLength((1 - t) * total);
            return `translate(${p.x},${p.y})`;
          })
          .on("end", animate);
      };
      setTimeout(animate, Math.random() * 3000);
    };

    localIdxs.forEach((pathIdx, i) => {
      if (i % localStep !== 0) return;
      animateOnPath(pathNodes[pathIdx]);
    });
    trunkIdxs.forEach((pathIdx, i) => {
      if (i % trunkStep !== 0) return;
      animateOnPath(pathNodes[pathIdx]);
    });
  }

  // Single fade-in
  networkGroup.transition()
    .duration(900)
    .attr("opacity", 1);
}

function init() {
  const container = document.getElementById("network-map");
  if (!container) return;

  const start = () => loadDeps().then(deps => render(container, deps)).catch(() => {});

  if (!("IntersectionObserver" in window)) {
    start();
    return;
  }

  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          obs.disconnect();
          start();
        }
      });
    },
    { rootMargin: "200px" }
  );
  io.observe(container);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
