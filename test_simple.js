const fs = require('fs');

global.window = {
  addEventListener: () => {},
  requestAnimationFrame: (cb) => cb(),
  setTimeout: (cb) => cb(),
  setInterval: () => 1,
  clearInterval: () => {}
};
global.document = {
  getElementById: (id) => {
    if (id === 'app') return { appendChild: () => {}, innerHTML: '', classList: { add: () => {}, remove: () => {} } };
    return { 
      innerHTML: '', 
      addEventListener: () => {},
      querySelectorAll: () => [],
      querySelector: () => null,
      classList: { add: () => {}, remove: () => {} }
    };
  },
  createElement: () => ({ classList: { add: () => {}, remove: () => {} }, appendChild: () => {} }),
  querySelectorAll: () => [],
  body: { appendChild: () => {} }
};

global.d3 = {
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
  eval(fs.readFileSync('js/data.js', 'utf8'));
  console.log("Loaded data.js");
  eval(fs.readFileSync('js/memory.js', 'utf8'));
  console.log("Loaded memory.js");
  eval(fs.readFileSync('js/agents.js', 'utf8'));
  console.log("Loaded agents.js");
  eval(fs.readFileSync('js/graph.js', 'utf8'));
  console.log("Loaded graph.js");
  eval(fs.readFileSync('js/app.js', 'utf8'));
  console.log("Loaded app.js");
  
  App.init();
  console.log("App initialized successfully.");
  App.renderShell();
  console.log("App.renderShell completed");
  App.navigateTo('dashboard');
  console.log("App.navigateTo('dashboard') completed");
  App.navigateTo('judge-demo');
  console.log("App.navigateTo('judge-demo') completed");
  App.navigateTo('memory-graph');
  console.log("App.navigateTo('memory-graph') completed");
  App.navigateTo('copilot');
  console.log("App.navigateTo('copilot') completed");
} catch (err) {
  console.error("Runtime error caught:", err);
}
