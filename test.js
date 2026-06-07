const fs = require('fs');
const { JSDOM } = require('jsdom');

const html = fs.readFileSync('index.html', 'utf8');
const dataJs = fs.readFileSync('js/data.js', 'utf8');
const memoryJs = fs.readFileSync('js/memory.js', 'utf8');
const agentsJs = fs.readFileSync('js/agents.js', 'utf8');
const graphJs = fs.readFileSync('js/graph.js', 'utf8');
const appJs = fs.readFileSync('js/app.js', 'utf8');

const dom = new JSDOM(html, { runScripts: "dangerously" });
const window = dom.window;
global.window = window;
global.document = window.document;

// Mock d3
window.d3 = {
  select: () => ({ append: () => ({ attr: () => ({ append: () => ({ attr: () => ({ call: () => ({ on: () => ({}) }) }) }) }) }) }),
  zoom: () => ({ scaleExtent: () => ({ on: () => ({}) }) }),
  zoomIdentity: { translate: () => ({ scale: () => ({ translate: () => {} }) }) },
  forceSimulation: () => ({ force: () => ({ force: () => ({ force: () => ({ force: () => ({ on: () => {} }) }) }) }) }),
  forceLink: () => ({ id: () => ({ distance: () => {} }) }),
  forceManyBody: () => ({ strength: () => {} }),
  forceCenter: () => ({}),
  forceCollide: () => ({ radius: () => ({ iterations: () => {} }) }),
  drag: () => ({ on: () => ({ on: () => ({ on: () => {} }) }) })
};

try {
  window.eval(dataJs);
  console.log("Loaded data.js");
  window.eval(memoryJs);
  console.log("Loaded memory.js");
  window.eval(agentsJs);
  console.log("Loaded agents.js");
  window.eval(graphJs);
  console.log("Loaded graph.js");
  window.eval(appJs);
  console.log("Loaded app.js");
  
  // Try to initialize App
  window.App.init();
  console.log("App initialized successfully.");
} catch (err) {
  console.error("Runtime error caught:", err);
}
