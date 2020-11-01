export interface IOrders {
    id:number,
    status:string,
    created_date:string,
    items:IItem[],
    sub_total:number,
    gst:number,
    discount:number,
    delivery_charges:number,
    customer_details:IUserInfo,
    grand_total:number
}
export interface IItem {
    name:string,
    description:string,
    quantity:number,
    unit_price:number
}
export interface IUserInfo {
    name:string,
    address:string,
    contact_number:string,
    country_code:string
}

