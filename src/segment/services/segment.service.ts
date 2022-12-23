import { Injectable } from '@nestjs/common';
import Analytics = require('analytics-node');

@Injectable()
export class SegmentService {
    private analytics: Analytics;

    constructor(key: string) {
        this.analytics = new Analytics(key);
    }

    setIdentify(data: {
        userId: string,
        traits: {
            email: string;
        }
    }) {
        this.analytics.identify(data);
    }

    setTrack(data: {
        userId: string;
        event: string;
    }) {
        this.analytics.track(data);
    }
}
