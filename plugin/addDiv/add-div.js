const html = `
<body>
  <style>
    .card {
      background-color: aquamarine;
      padding: 12px;
      margin: 8px;
    }
  </style>
  <script id="jquary" src="https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js">
  </script>
  <script id="microcms" src="https://unpkg.com/microcms-js-sdk@latest/dist/umd/microcms-js-sdk.js"></script>

  <p>add test</p>
  <button class="button" onclick="addNewDiv()">add new card</button>
  <div class="CardList"></div>

  <script>

    let myValue = [];

    function addNewDiv() {
      var $card = $("<div/>").addClass("card").html("<p>new card</p>");
      $(".CardList").append($card);
    }

    function initCardList(value) {
      var html = "";
      $.each(value, function (key, value) {
        html += '<div class="card">';
        html += '<p>' + value.name + '</p>';
        html += '</div>';
      });
      $(".CardList").html(html);
    }

    let microcmsSelector = document.getElementById("microcms");

    microcmsSelector.addEventListener("load", () => {
      const { createClient } = microcms;

      // Initialize Client SDK.
      const client = createClient({
        serviceDomain: "cardlist", // YOUR_DOMAIN is the XXXX part of XXXX.microcms.io
        apiKey: "65a66e3b4b7d4d98ac484e82c5256437c74f",
      });

      client
        .get({
          endpoint: 'card',
        })
        .then((res) => {
          console.log(res);
          myValue = res.contents;

          initCardList(myValue);

        });
    });

  </script>
</body>
`;

reearth.ui.show(html);
reearth.on("update", send);
send();

function send() {
  if (reearth.block?.property?.default) {
    reearth.ui.postMessage(reearth.block.property.default);
  }
}
