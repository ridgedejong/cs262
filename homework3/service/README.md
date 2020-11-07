# CS 262 Homework 3 Webservice

This data service application is based on the [CS 262 sample Monopoly project](https://github.com/calvin-cs262-organization/monopoly-project) 

For this homework, the data service was upgraded to serve up data for a join query of the PlayerGame table. 

The database is relational with the schema specified in `sql/homework3`,
 and is hosted on [ElephantSQL](https://www.elephantsql.com/). The database user, password, and server
 are stored as Heroku configuration variables rather than in this (public) repo.

It is deployed here:
<https://hidden-basin-48937.herokuapp.com/>

The active URLs are as follows:
<https://hidden-basin-48937.herokuapp.com/playergame/>
<https://hidden-basin-48937.herokuapp.com/playergame/1> (keys range from 1 to 8)
<https://hidden-basin-48937.herokuapp.com/playergame/gameid/1> (gameIDs range from 1 to 3)
<https://hidden-basin-48937.herokuapp.com/playergame/playerid/1> (playerIDs range from 1 to 3)

All of these endpoints implement actions that are nullipotent because none of them cause a state change. 
This also means none of them are idempotent because calling them once is no different than calling them multiple times.

This service is RESTful because it:
- is stateless (state kept on server/client)
- uses HTTP to fetch the data
- requests data through structured URLs
- transfers data using JSON
 
There is not impedance mismatch because Heroku takes the SQL data and converts it to JSON which can be easily used by the React Native (JavaScript) client.



 
