const getText = () => reearth.widget.property && reearth.widget.property.default ? reearth.widget.property.default.text || "" : "";
const html = `
<div id="wrapper">
<h1 id="text"></h1>
</div>
<style>
  html, body {
  }
  #wrapper {
    background-color: rgba(111, 111, 111, 0.5);
    border: solid red;
  }
</style>
<script>
  const cb = text => {
    document.getElementById("text").textContent = text;
  };
  addEventListener("message", e => {
    if (e.source !== parent) return;
    cb(e.data);
  });
  cb(${JSON.stringify(getText())});
</script>
`;

reearth.ui.show(html);
reearth.on("update", () => {
  reearth.ui.postMessage(getText());
});
