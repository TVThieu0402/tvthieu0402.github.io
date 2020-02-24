<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="https://github.com/TVThieu0402/tvthieu0402.github.io/blob/master/KalturaFullClient.js"></script>

<script>
  var config = new KalturaConfiguration(2162381);
  config.serviceUrl = 'https://www.kaltura.com';
  var client = new KalturaClient(config);
  // Note: this is meant only as a sample.
  // You should NEVER generate sessions on the client,
  // as this exposes your Admin Secret to users.
  // Instead, generate a session on the server and pass the
  // KS to the client.
  KalturaSessionService.start(
        "725b52cab8f2e7cbbe810827cb693cf7",
        "tuyen.thieu@kaltura.com",
        2,
        2162381)
  .execute(client, function(success, ks) {
    if (!success || (ks.code && ks.message)) {
      console.log('Error starting session', success, ks);
    } else {
      client.setKs(ks);
      var filter = {objectType: "KalturaMediaEntryFilter"};
      filter.orderBy = "+createdAt" /* KalturaMediaEntryOrderBy.CREATED_AT_ASC */;
      filter.freeText = "otube";
      var pager = {objectType: "KalturaFilterPager"};

      KalturaMediaService.listAction(filter, pager)
        .execute(client, function(success, results) {
          if (!success || (results && results.code && results.message)) {
            console.log('Kaltura Error', success, results);
          } else {
            console.log('Kaltura Result', results);
          }
        });

    }
  });
</script>
