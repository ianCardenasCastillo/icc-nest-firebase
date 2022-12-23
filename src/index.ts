export type { AnalyticsConfig } from './analytics/interfaces/firebase-analytics';
import { AnalyticsModule } from "./analytics/analytics.module";
import { AnalyticsService } from "./analytics/services/analytics.service";
import * as analytics from 'firebase/analytics'

module.exports = {
    AnalyticsModule: AnalyticsModule,
    AnalyticsService: AnalyticsService,
    analytics: analytics,
}