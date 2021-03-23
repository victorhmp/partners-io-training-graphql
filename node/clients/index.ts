import { IOClients } from '@vtex/api'

import Status from './status'
import Analytics from './analytics'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
  public get status() {
    return this.getOrSet('status', Status)
  }

  public get analytics() {
    return this.getOrSet('analytics', Analytics)
  }
}
