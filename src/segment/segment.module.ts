import { DynamicModule, Module } from '@nestjs/common';
import { SegmentService } from './services/segment.service';

@Module({})
export class SegmentModule {
  public static forRoot(
    key: string
  ): DynamicModule {
      const analyticsProvider = {
          provide: SegmentService,
          useFactory: () => {
              return new SegmentService(key);
          }
      }
      return {
          exports: [analyticsProvider],
          module: SegmentModule,
          providers: [analyticsProvider]
      }
  }
}
