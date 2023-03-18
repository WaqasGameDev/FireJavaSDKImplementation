using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.Runtime.InteropServices;
public class FirebaseTest : MonoBehaviour
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

    // Start is called before the first frame update
    void Start()
    {
        SetUserId("TestId103");
        SetUserProperties("{\"prop_1\": \"p1_prop_103\", \"prop_2\": \"p2_prop_103\"}");
        SetAnalyticsCollectionEnabled(true);
        LogEvent("TestEvent103Plain");
        LogEventWithParameter("TestEvent103WithParameter", "{\"param_1\": \"p1_param_103\", \"param_2\": \"p2_param_103\"}");
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
