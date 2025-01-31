Postman requests-->

1) POST /api/login
	{
    	"username": "admin",
    	"password": "password"
	}
You will receive token as response.

2) GET /api/gadgets(can add status filter)
	provide token in Authorization as Berear.
	for filter add params:
		status = {"Available", "Deployed", "Destroyed", "Decommissioned"}

3) POST /api/gadgets
	{
    	"name": "Alpha"
	}
	provide token in Authorization as Berear.


4) PATCH /api/gadgets/:id
	{
    	"status": "Deployed"
	}
	provide token in Authorization as Berear.

5) DELETE /api/gadgets/:id
	provide token in Authorization as Berear.

6) POST /api/gadgets/:id/self-destruct
	provide token in Authorization as Berear.
