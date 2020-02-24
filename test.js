<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="/js/kaltura/KalturaFullClient.min.js"></script>

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
      var reportType = "5" /* KalturaReportType.TOP_CONTRIBUTORS */;
      var reportInputFilter = {objectType: "KalturaReportInputFilter"};
      var pager = {objectType: "KalturaFilterPager"};
      var order = "";
      var objectIds = "";
      var responseOptions = {objectType: "KalturaReportResponseOptions"};

      KalturaReportService.getTable(reportType, reportInputFilter, pager, order, objectIds, responseOptions)
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
