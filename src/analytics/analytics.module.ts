import { AnalyticsConfig } from './interfaces/firebase-analytics';
import { DynamicModule, Global, Module } from '@nestjs/common';
import { AnalyticsAdmin } from './admin/analytics-admin';
import { AnalyticsService } from './services/analytics.service';

@Global()
@Module({})
export class AnalyticsModule {
    public static forRoot(
        config: AnalyticsConfig
    ): DynamicModule {
        const analyticsInstance = AnalyticsAdmin.initializeAnalytics(config);
        const analyticsProvider = {
            provide: AnalyticsService,
            useFactory: () => {
                return new AnalyticsService(analyticsInstance);
            }
        }
        return {
            exports: [analyticsProvider],
            module: AnalyticsModule,
            providers: [analyticsProvider]
        }
    }
}
