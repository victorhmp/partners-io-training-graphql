import type { InstanceOptions, IOContext } from '@vtex/api'
import { AppClient } from '@vtex/api'

interface LiveProductViews {
  slug: string
  liveUsers: number
}

export default class Analytics extends AppClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super('vtex.mocked-analytics@0.x', context, options)
  }

  public liveProductViews(productSlug: string): Promise<LiveProductViews[]> {
    return this.http.get(`_v/live-products/${productSlug}`)
  }
}
