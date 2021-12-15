const getText = () => reearth.widget.property && reearth.widget.property.default ? reearth.widget.property.default.text || "" : "";
const html = `
<div>
<h1> image loader</h1>
<img id="myImage" src=""></img>
</div>

<script>
  const changeImage = text => {
    document.getElementById("myImage").src = text;
  };
  addEventListener("message", e => {
    if (e.source !== parent) return;
    changeImage(e.data);
  });
  changeImage(${JSON.stringify(getText())});
</script>
`;

reearth.ui.show(html);
reearth.on("update", () => {
  reearth.ui.postMessage(getText());
});
