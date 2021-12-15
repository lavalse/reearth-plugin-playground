const html = `
<div>
<h1> image loader</h1>
<img id="myImage" src=""></img>
</div>

<script>
  const cb = (widget) => {
    console.log(widget.image);
    document.getElementById("myImage").src=widget.image;
  };
  addEventListener("message", e => {
    if (e.source !== parent) return;
    cb(e.data);
  });
  cb(${JSON.stringify(reearth.widget)});
</script>
`;

reearth.ui.show(html);
reearth.on("update", send);
send();

function send() {
  if (reearth.widget?.property?.default) {
    reearth.ui.postMessage(reearth.widget.property.default);
  }
}
