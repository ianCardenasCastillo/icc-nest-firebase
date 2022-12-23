export type { AnalyticsConfig } from './analytics/interfaces/firebase-analytics';
import { AnalyticsModule } from "./analytics/analytics.module";
import { AnalyticsService } from "./analytics/services/analytics.service";
import * as analytics from 'firebase/analytics'
import { SegmentModule } from './segment/segment.module';
import { SegmentService } from './segment/services/segment.service';

module.exports = {
    AnalyticsModule: AnalyticsModule,
    AnalyticsService: AnalyticsService,
    SegmentModule: SegmentModule,
    SegmentService: SegmentService,
    analytics: analytics,
}