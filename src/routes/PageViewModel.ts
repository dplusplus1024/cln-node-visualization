import type { Writable } from 'svelte/store';
import { nodeService } from '../network/NodeService'
import type { NodeService } from '../network/NodeService';

export class PageViewModel {

  connectionStatus: Writable<string>
  nodeService: NodeService

  constructor(nodeService: NodeService) {
    this.nodeService = nodeService
    this.connectionStatus = nodeService.connectionStatus
  }

  connect(address: string, rune: string) {
    this.nodeService.connect(address, rune)
    let graphData = this.nodeService.getGraphData
  }

}

export const pageViewModel = new PageViewModel(nodeService); 