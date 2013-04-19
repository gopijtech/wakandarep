
guidedModel =// @startlock
{
	Company :
	{
		methods :
		{// @endlock
			returnAlert:function()
			{// @lock
				// Add your code here
				return "Alert Message From Server!";
			}// @startlock
		}
	},
	Employee :
	{
		fullName :
		{
			onGet:function()
			{// @endlock
				// Add your code here
				return this.firstName + '' + this.lastName
			}// @startlock
		}
	}
};// @endlock

