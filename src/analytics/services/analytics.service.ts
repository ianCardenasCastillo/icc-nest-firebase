import { Analytics, logEvent, EventNameString, AnalyticsCallOptions } from 'firebase/analytics';
import { Injectable, Scope } from '@nestjs/common';

@Injectable({
    scope: Scope.DEFAULT
})
export class AnalyticsService {
    constructor(private instance: Analytics) {}

    /**
     * Function to register event in google analytics
     * eventName @see [Events](https://developers.google.com/gtagjs/reference/ga4-events)
     * @param {(EventNameString | string)} eventName
     * @param {{[key: string]: any}} [eventParams]
     * @param {AnalyticsCallOptions} [options]
     * @memberof AnalyticsService
     */
    registerEvent(
        eventName: EventNameString | string,
        eventParams?: {[key: string]: any},
        options?: AnalyticsCallOptions 
    ) {
        logEvent(this.instance, eventName, eventParams, options);
    }
}
