import {IOrders} from '../interfaces/orders.interface';

export const orders:IOrders[] = [
	{
		id:1001,
		status:'order_received',
		created_date:'2020-11-19',
		items:[
		 {
		 	name:'Margherita',
		 	description:'A classic delight with 100% Real mozzarella cheese',
		 	quantity:1,
		 	unit_price:300
		 },
		 {
		 	name:'Cheese & corn',
		 	description:'A classic delight with 100% Real cheese & corn',
		 	quantity:1,
		 	unit_price:200
		 },
		 {
		 	name:'Creamy Tomato',
		 	description:'A classic delight with 100% Real Creamy Tomato',
		 	quantity:1,
		 	unit_price:350
		 }
		],
		customer_details:{
			name:'Shailesh',
			address:'No 32/ 172, Vr Pillai Street, Chennai 600005',
			contact_number:'848484848',
			country_code:'+91'
		},
		sub_total:850,
		gst:100,
		discount:30,
		delivery_charges:50,
		grand_total:1030
	},
	{
		id:1002,
		status:'preparing',
		created_date:'2020-11-19',
		items:[
		 {
		 	name:'Margherita',
		 	description:'A classic delight with 100% Real mozzarella cheese',
		 	quantity:1,
		 	unit_price:300
		 },
		 {
		 	name:'Cheese & corn',
		 	description:'A classic delight with 100% Real cheese & corn',
		 	quantity:1,
		 	unit_price:200
		 },
		 {
		 	name:'Creamy Tomato',
		 	description:'A classic delight with 100% Real Creamy Tomato',
		 	quantity:1,
		 	unit_price:350
		 }
		],
		customer_details:{
			name:'Shailesh',
			address:'No 32/ 172, Vr Pillai Street, Chennai 600005',
			contact_number:'848484848',
			country_code:'+91'
		},
		sub_total:850,
		gst:100,
		discount:30,
		delivery_charges:50,
		grand_total:1030
	},
	{
		id:1003,
		status:'order_received',
		created_date:'2020-11-19',
		items:[
		 {
		 	name:'Margherita',
		 	description:'A classic delight with 100% Real mozzarella cheese',
		 	quantity:1,
		 	unit_price:300
		 },
		 {
		 	name:'Creamy Tomato',
		 	description:'A classic delight with 100% Real Creamy Tomato',
		 	quantity:2,
		 	unit_price:350
		 }
		],
		customer_details:{
			name:'Shailesh',
			address:'No 32/ 172, Vr Pillai Street, Chennai 600005',
			contact_number:'848484848',
			country_code:'+91'
		},
		sub_total:1000,
		gst:100,
		discount:20,
		delivery_charges:0,
		grand_total:1120
	},
	{
		id:1004,
		status:'preparing',
		created_date:'2020-11-19',
		items:[
		 {
		 	name:'Creamy Tomato',
		 	description:'A classic delight with 100% Real Creamy Tomato',
		 	quantity:1,
		 	unit_price:350
		 }
		],
		customer_details:{
			name:'Shailesh',
			address:'No 32/ 172, Vr Pillai Street, Chennai 600005',
			contact_number:'848484848',
			country_code:'+91'
		},
		sub_total:350,
		gst:50,
		discount:0,
		delivery_charges:20,
		grand_total:370
	},
	{
		id:1005,
		status:'ready_to_serve',
		created_date:'2020-11-19',
		items:[
		 {
		 	name:'Margherita',
		 	description:'A classic delight with 100% Real mozzarella cheese',
		 	quantity:1,
		 	unit_price:300
		 },
		 {
		 	name:'Cheese & corn',
		 	description:'A classic delight with 100% Real cheese & corn',
		 	quantity:1,
		 	unit_price:200
		 }
		],
		customer_details:{
			name:'Shailesh',
			address:'No 32/ 172, Vr Pillai Street, Chennai 600005',
			contact_number:'848484848',
			country_code:'+91'
		},
		sub_total:500,
		gst:30,
		discount:10,
		delivery_charges:40,
		grand_total:580
	}
]