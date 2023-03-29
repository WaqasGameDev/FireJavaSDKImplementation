using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.Runtime.InteropServices;
using Newtonsoft.Json;

public class FirebaseBridge : MonoBehaviour
{
    [DllImport("__Internal")]
    public static extern void SetUserId(string userId);

    [DllImport("__Internal")]
    public static extern void SetUserProperties(string props);

    [DllImport("__Internal")]
    public static extern void SetAnalyticsCollectionEnabled(bool enabled);

    [DllImport("__Internal")]
    public static extern void LogEvent(string eventName);

    [DllImport("__Internal")]
    public static extern void LogEventWithParameter(string eventName, string parameters);

    [DllImport("__Internal")]
    public static extern void GetToken(string vapid);

    // Start is called before the first frame update
    void Start()
    {

        var serDict = SerializeObject(new Dictionary<string, string> { { "prop114", "prop224" } });
        serDict = SerializeObject(new Dictionary<string, string> { { "prop14", serDict } });
        Debug.Log(serDict);
        List<Dictionary<string, string>> list = new List<Dictionary<string, string>>();
        list.Add(new Dictionary<string, string> { { "KKK111","VVV111"} });
        list.Add(new Dictionary<string, string> { { "KKK222", serDict } });
        var serList = SerializeObject(list);
        Debug.Log(serList);

#if UNITY_WEBGL && !UNITY_EDITOR
        SetUserId("TestId107");
        SetUserProperties(serList);
        SetAnalyticsCollectionEnabled(true);
        LogEvent("TestEvent107Plain");
        LogEventWithParameter("TestEvent107WithParameter", serList);
        GetToken("BM5ucnZ8JwnrpvQwwM80hjU6v163Uy85Mp_1u53A8MhCin53eo0CsY3MRtAcHaxLNBte9LBpv6YugmhFoVZhxDU");
#endif
    }

    private string SerializeObject<T>(T objectToSerialize)
    {
        return JsonConvert.SerializeObject(objectToSerialize);
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
