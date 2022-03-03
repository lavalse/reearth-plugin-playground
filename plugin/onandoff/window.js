const getText = () => reearth.widget.property && reearth.widget.property.default ? reearth.widget.property.default.text || "" : "";
const html = `
<div id="wrapper">
    <p>
        this is a whidow
    </p>
    <button id="close">
        close
    </button>
    <button id="open" onclick="handleOpen()">
        open
    </button>
</div>

<style>
  html, body {
    margin: 0;
  }
  #wrapper{
    width: 400px;
    height: 400px;
    background-color: aquamarine;
    padding: 20px;
    box-sizing: border-box;
    }
    #wrapperClose{
        width: 100px;
        padding: 20px;
        box-sizing: border-box;
        background-color: blue;
    }
</style>

<script>

    const wrapper = document.getElementById("wrapper");

    const buttonClose = document.getElementById("close");
    const buttonOpen = document.getElementById("open");

    buttonClose.addEventListener("click",handleClose);
    buttonOpen.addEventListener("click",handleOpen);

    function handleClose(){
        wrapper.id="wrapperClose";
        parent.postMessage("This is test");
    }

    function handleOpen(){
        wrapper.id="wrapper";
    }
</script>
`;

reearth.ui.show(html);
reearth.on("update", () => {
  reearth.ui.postMessage(getText());
});

reearth.on("message",msg=>{
    console.log(msg);
    reearth.ui.resize(100,100);
})