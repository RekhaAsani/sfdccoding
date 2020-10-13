declare module "@salesforce/apex/BeerController.createCartItems" {
  export default function createCartItems(param: {CartId: any, BeerId: any, Amount: any}): Promise<any>;
}
declare module "@salesforce/apex/BeerController.getCartId" {
  export default function getCartId(): Promise<any>;
}
declare module "@salesforce/apex/BeerController.searchBeer" {
  export default function searchBeer(param: {searchParam: any}): Promise<any>;
}
