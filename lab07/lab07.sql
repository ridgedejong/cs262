-- Drop previous versions of the tables if they they exist, in reverse order of foreign keys.
DROP TABLE IF EXISTS Ownership;
DROP TABLE IF EXISTS PlayerGame;
DROP TABLE IF EXISTS Property;
DROP TABLE IF EXISTS Building;
DROP TABLE IF EXISTS Game;
DROP TABLE IF EXISTS Player;

-- Create the schema.
CREATE TABLE Game (
	ID integer PRIMARY KEY, 
	time timestamp
	);

CREATE TABLE Player (
	ID integer PRIMARY KEY, 
	emailAddress varchar(50) NOT NULL,
	name varchar(50)
	);

CREATE TABLE Property (
	ID integer PRIMARY KEY, 
	name varchar(50) NOT NULL
	);

CREATE TABLE Building (
	ID integer PRIMARY KEY, 
	name varchar(50) NOT NULL
	);

CREATE TABLE Ownership (
	gameID integer REFERENCES Game(ID), 
        playerID integer REFERENCES Player(ID),
        propertyID integer REFERENCES Property(ID),
        buildingID integer REFERENCES Building(ID),
	quantity integer
	);

CREATE TABLE PlayerGame (
	gameID integer REFERENCES Game(ID), 
	playerID integer REFERENCES Player(ID),
	score integer
	);

-- Allow users to select data from the tables.
GRANT SELECT ON Game TO PUBLIC;
GRANT SELECT ON Player TO PUBLIC;
GRANT SELECT ON Property TO PUBLIC;
GRANT SELECT ON Building TO PUBLIC;
GRANT SELECT ON Ownership TO PUBLIC;
GRANT SELECT ON PlayerGame TO PUBLIC;

-- Add sample records.
INSERT INTO Game VALUES (1, '2006-06-27 08:00:00');
INSERT INTO Game VALUES (2, '2006-06-28 13:20:00');
INSERT INTO Game VALUES (3, '2006-06-29 18:41:00');

INSERT INTO Player(ID, emailAddress) VALUES (1, 'me@calvin.edu');
INSERT INTO Player VALUES (2, 'king@gmail.edu', 'The King');
INSERT INTO Player VALUES (3, 'dog@gmail.edu', 'Dogbreath');

INSERT INTO Property VALUES (3, 'Baltic Avenue');
INSERT INTO Property VALUES (39, 'Boardwalk');

INSERT INTO Building VALUES (1, 'House');
INSERT INTO Building VALUES (2, 'Hotel');

INSERT INTO Ownership VALUES (1, 1, 3, 1, 2);
INSERT INTO Ownership VALUES (1, 2, 39, 2, 1);

INSERT INTO PlayerGame VALUES (1, 1, 0.00);
INSERT INTO PlayerGame VALUES (1, 2, 0.00);
INSERT INTO PlayerGame VALUES (1, 3, 2350.00);
INSERT INTO PlayerGame VALUES (2, 1, 1000.00);
INSERT INTO PlayerGame VALUES (2, 2, 0.00);
INSERT INTO PlayerGame VALUES (2, 3, 500.00);
INSERT INTO PlayerGame VALUES (3, 2, 0.00);
INSERT INTO PlayerGame VALUES (3, 3, 5500.00);