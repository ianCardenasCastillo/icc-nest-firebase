import { FirebaseApp, initializeApp } from "firebase/app";
import { Analytics, getAnalytics } from "firebase/analytics";
import { AnalyticsConfig } from "../interfaces/firebase-analytics"; 

export class AnalyticsAdmin {
    private static app: FirebaseApp;
    private static analytics: Analytics;
    constructor() {}

    static initializeAnalytics(config: AnalyticsConfig): Analytics {
        AnalyticsAdmin.app = initializeApp(config);
        AnalyticsAdmin.analytics = getAnalytics(AnalyticsAdmin.app);
        return AnalyticsAdmin.analytics;
    }
}
