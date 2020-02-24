<script type="text/javascript">
var kConfig;
var kClient;
var partnerId = 2339861; // where 123 is your partner ID
var userId = "tuyen.thieu@kaltura.com";
var expiry = 86400; var privileges = ""; // call server side to generate a KS for you so secrets will not be compromised
var ks = djJ8MjMzOTg2MXxXhtYQGJx-bO1eFN88SxsdXOgkRvDF9ro7V1eMpVAobvhCjwPl-A1N5YMiDUOcevr65QE-bn9u9iPluolLQGsa_sLlaagbrnDScbW3Ldnnv2Bz3Oet7gf10yQUikH0fhYunpgeb0MfFpIG7YGs5_Ctp;
var entryId = "0_0h82ekzd"; // a known ID of media entry that you have
function pageLoad()
{
    kConfig = new KalturaConfiguration(partnerId);
    kConfig.serviceUrl = "http://www.kaltura.com"; // if you want to communicate with a Kaltura server which is
    // other than the default http://www.kaltura.com
    kClient = new KalturaClient(kConfig);
    kClient.ks = ks;
    getEntrySample();
    return false;
}
function getEntrySample()
{
    kClient.media.get(getEntryResult, entryId);
}
function getEntryResult(success, data)
{
    if (data.code) {
	alert("Error: "+data.message);
    } else {
	alert("Your entry name: "+data.name);
    }
}
</script>
