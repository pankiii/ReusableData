interface DataTable {
    data?:any[],
	url?:string,
	columns:[
        {
            name: "name",
            label: 'Student Name',
            style: {color: "green"}
        }
    ],
	pagination: {
        pageSize:'20',
        currentPage:'1'
        total:''
    },
	actions: [
        
    ]
}