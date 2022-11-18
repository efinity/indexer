import {MarketplaceListEvent} from "./_marketplaceListEvent"
import {MarketplacePurchaseEvent} from "./_marketplacePurchaseEvent"
import {MarketplaceListingCancelEvent} from "./_marketplaceListingCancelEvent"
import {MarketplaceBidEvent} from "./_marketplaceBidEvent"
import {TransferEvent} from "./_transferEvent"
import {MintEvent} from "./_mintEvent"

export type TokenEventType = MarketplaceListEvent | MarketplacePurchaseEvent | MarketplaceListingCancelEvent | MarketplaceBidEvent | TransferEvent | MintEvent

export function fromJsonTokenEventType(json: any): TokenEventType {
  switch(json?.isTypeOf) {
    case 'MarketplaceListEvent': return new MarketplaceListEvent(undefined, json)
    case 'MarketplacePurchaseEvent': return new MarketplacePurchaseEvent(undefined, json)
    case 'MarketplaceListingCancelEvent': return new MarketplaceListingCancelEvent(undefined, json)
    case 'MarketplaceBidEvent': return new MarketplaceBidEvent(undefined, json)
    case 'TransferEvent': return new TransferEvent(undefined, json)
    case 'MintEvent': return new MintEvent(undefined, json)
    default: throw new TypeError('Unknown json object passed as TokenEventType')
  }
}
